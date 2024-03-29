import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  InternalServerErrorException,
  Body,
  Param,
  NotFoundException,
  HttpCode,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartsService } from './carts.service';
import { Cart } from './schemas/carts.schemas';
import { CreateCartDto } from './dto/create-cart.dto';
import { ProductsService } from 'src/products/products.service';
import { ProductInterface } from 'src/interfaces/product.interface';
import { Product } from 'src/products/schemas/products.schemas';
import { CreateTicketDto } from 'src/tickets/dto/create-ticket.dto';
import { TicketsService } from 'src/tickets/tickets.service';
import { TicketInterface } from 'src/interfaces/ticket.interface';
import { MailerService } from '@nestjs-modules/mailer';

@ApiTags('Carts')
@Controller('carts')
export class CartsController {
  constructor(
    private readonly cartsService: CartsService,
    private readonly productsService: ProductsService,
    private readonly ticketsService: TicketsService,
    private readonly mailerService: MailerService,
  ) {}

  @Get() // GET /api/carts
  async getCarts(): Promise<Cart[]> {
    try {
      const data = await this.cartsService.findAll();

      return data;
    } catch (err) {
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Post() // POST /api/carts
  async createCart(@Body() createCartDto: CreateCartDto) {
    try {
      const data = await this.cartsService.create(createCartDto);

      return data;
    } catch (err) {
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Get(':id') // GET /api/carts/:id
  async getCart(@Param('id') id: string) {
    try {
      const cart = await this.cartsService.findById(id);

      if (!cart)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Cart not found.',
          },
          HttpStatus.NOT_FOUND,
        );

      return cart;
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Delete(':id') // DELETE /api/carts/:id
  @HttpCode(204)
  async deleteCartById(@Param('id') id: string) {
    try {
      const cart = await this.cartsService.findById(id);

      if (!cart)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Cart not found.',
          },
          HttpStatus.NOT_FOUND,
        );

      const deletedCart = await this.cartsService.delete(id);

      return deletedCart;
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Post('/:cid/purchase') // POST /api/carts/:cid/purchase
  async purchaseProducts(@Param('cid') cid: string, @Body() userEmail) {
    try {
      const cart = await this.cartsService.findById(cid);

      if (!cart)
        throw new HttpException(
          { status: HttpStatus.NOT_FOUND, error: 'Error - Cart not found.' },
          HttpStatus.NOT_FOUND,
        );

      if (cart.products.length === 0)
        throw new HttpException(
          { status: HttpStatus.BAD_REQUEST, error: 'Error - Cart is empty.' },
          HttpStatus.BAD_REQUEST,
        );

      const productsToPurchase = cart.products;
      const productToUpdate = [];
      let fullPrice: number = 0;

      for (const product of productsToPurchase) {
        const pid = String(product._id);
        const productQuantity = Number(product.quantity);
        const productInStock = await this.productsService.findById(pid);

        if (!productInStock)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `Error - ${productInStock.title} out of stock`,
            },
            HttpStatus.NOT_FOUND,
          );

        if (productQuantity > productInStock.stock)
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: `Not enough ${productInStock.title} stock available `,
            },
            HttpStatus.BAD_REQUEST,
          );

        fullPrice += productQuantity * productInStock.price;

        productToUpdate.push({
          pid: productInStock._id,
          quantity: productQuantity,
        });
      }

      const ticketData: TicketInterface = new CreateTicketDto({
        code: `${Math.random().toString(20).substring(2, 10).toUpperCase()}`,
        purchase_datetime: new Date(),
        amount: fullPrice,
        purchaser: userEmail.email,
      });

      const newTicket = await this.ticketsService.create(ticketData);

      productToUpdate.map(async (product) => {
        const pid = String(product.pid);
        const productQuantity = Number(product.quantity);

        const productInStock = await this.productsService.findById(pid);
        const newStock = Number(productInStock.stock) - Number(productQuantity);

        await this.productsService.updateById(pid, { stock: newStock });
      });

      this.mailerService
        .sendMail({
          to: newTicket.purchaser,
          from: 'noreply@blky-pets.com',
          subject: 'BLKY Pets - Purchase confirmation',
          html: `
          <h1>BLKY PETS</h1>
          <h2>We hope you enjoy your purchase!</h2>
          <p>Order full price: ${newTicket.amount}</p>
          <p>Your purchase was made on ${newTicket.purchase_datetime}</p>
        `,
        })
        .then(() => {})
        .catch(() => {});

      const updatedCart = await this.cartsService.emptyCart(cid);

      return { message: 'Purchase succesfully completed.', updatedCart };
    } catch (err) {
      if (err.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException(err.response.error);

      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Post('/:cid/products/:pid') // POST /api/carts/:cid/products/:pid
  async addProductToCart(@Param('cid') cid: string, @Param('pid') pid: string) {
    try {
      const product = await this.productsService.findById(pid);

      if (!product)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Product not found.',
          },
          HttpStatus.NOT_FOUND,
        );

      const cart = await this.cartsService.findById(cid);

      if (!cart)
        throw new HttpException(
          { status: HttpStatus.NOT_FOUND, error: 'Error - Cart not found.' },
          HttpStatus.NOT_FOUND,
        );

      const productInCart = cart.products.find(
        (product: ProductInterface) => String(product._id) === String(pid),
      );

      if (productInCart) {
        const updatedCart = await this.cartsService.updateProductFromCart(
          cid,
          pid,
          'add',
        );

        return {
          message: 'Product quantity updated.',
          updatedCart,
        };
      } else {
        const updatedCart = await this.cartsService.addProduct(cid, pid);
        return { message: 'Product added to cart.', updatedCart };
      }
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Delete('/:cid/products/:pid') // DELETE /api/carts/:cid/products/:pid
  async removeProductFromCart(
    @Param('cid') cid: string,
    @Param('pid') pid: string,
  ) {
    try {
      const cart = await this.cartsService.findById(cid);

      if (!cart)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Cart not found.',
          },
          HttpStatus.NOT_FOUND,
        );

      const productIndex = cart.products.findIndex(
        (product: ProductInterface) => String(product._id) === String(pid),
      );

      if (productIndex === -1)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Product not in cart.',
          },
          HttpStatus.NOT_FOUND,
        );

      const productInCart = cart.products.find(
        (product: ProductInterface) => String(product._id) === String(pid),
      );

      if (productInCart && productInCart.quantity > 1) {
        const updatedCart = await this.cartsService.updateProductFromCart(
          cid,
          pid,
          'remove',
        );

        return { message: 'Product quantity updated.', updatedCart };
      } else {
        const updatedCart = await this.cartsService.deleteProductFromCart(
          cid,
          productIndex,
        );

        return { message: 'Product deleted from cart.', updatedCart };
      }
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Delete('/:cid/products/:pid/delete') // DELETE /api/carts/:cid/products/:pid
  async deleteProductFromCart(
    @Param('cid') cid: string,
    @Param('pid') pid: string,
  ) {
    try {
      const cart = await this.cartsService.findById(cid);

      if (!cart)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Cart not found.',
          },
          HttpStatus.NOT_FOUND,
        );

      const productIndex = cart.products.findIndex(
        (product: ProductInterface) => String(product._id) === String(pid),
      );

      if (productIndex === -1)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Product not in cart.',
          },
          HttpStatus.NOT_FOUND,
        );

      const updatedCart = await this.cartsService.deleteProductFromCart(
        cid,
        productIndex,
      );

      return { message: 'Product deleted from cart.', updatedCart };
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }
}
