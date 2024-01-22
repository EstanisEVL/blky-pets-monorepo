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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartsService } from './carts.service';
import { Cart } from './schemas/carts.schemas';
import { CreateCartDto } from './dto/create-cart.dto';
import { ProductsService } from 'src/products/products.service';

@ApiTags('Carts')
@Controller('carts')
export class CartsController {
  constructor(
    private readonly cartsService: CartsService,
    private readonly productsService: ProductsService,
  ) {}

  // ROL DE ADMIN:
  @Get() // GET /api/carts
  async getCarts(): Promise<Cart[]> {
    try {
      const data = await this.cartsService.findAll();

      return data;
    } catch (err) {
      // agregar logger

      throw new InternalServerErrorException(`${err}`);
    }
  }

  // PARA ADMIN Y USER
  @Post() // POST /api/carts
  async createCart(@Body() createCartDto: CreateCartDto) {
    try {
      const data = await this.cartsService.create(createCartDto);

      return data;
    } catch (err) {
      // agregar logger

      throw new InternalServerErrorException(`${err}`);
    }
  }

  // PARA ADMIN Y USER (SÓLO EL PROPIO)
  // Agregar validador de mongoId:
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
      // agregar logger
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  // ROL DE ADMIN
  // Agregar validador de mongoId:
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
      // agregar logger
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  // PARA USER
  // - purchaseProducts / POST /:cid/purchase

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
        (product) => String(product._id) === String(pid),
      );

      if (productInCart) {
        // Llamar al product service y actualizar la cantidad del producto en el carrito:
        productInCart.quantity++;

        // Se guarda el modelo desde el servicio, acá no:
        await cart.save();
        // console.log(productInCart.quantity);

        return {
          message: 'Product quantity updated.',
          cart,
        };
      } else {
        const updatedCart = await this.cartsService.addProduct(cid, pid);
        return { message: 'Product added to cart.' };
      }
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  // - updateProductFromCart / PUT /:cid/products/:pid

  // - removeProductFromCart / DELETE /:cid/products/:pid
  @Delete('/:cid/products/:pid')
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
        (product) => String(product._id) === String(pid),
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
        (product) => String(product._id) === String(pid),
      );

      if (productInCart && productInCart.quantity > 1) {
        // Llamar al servicio para actualizar la cantidad del producto
        // productInCart.quantity--;

        // await cart.save();

        return { message: 'Product quantity updated.' };
      } else {
        cart.products.splice(productIndex, 1);

        await cart.save();

        return { message: 'Product deleted from cart.' };
      }
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }
}
