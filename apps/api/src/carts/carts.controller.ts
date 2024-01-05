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

@ApiTags('Carts')
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  // ROL DE ADMIN:
  @Get() // GET /carts
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
  @Post() // POST /carts
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
  @Get(':id') // GET /carts/:id
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
  @Delete(':id') // DELETE /carts/:id
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

    // PARA USER
    // - purchaseProducts / POST /:cid/purchase

    // - addProductToCart / POST /:cid/products/:pid

    // - updateProductFromCart / PUT /:cid/products/:pid

    // - removeProductFromCart / DELETE /:cid/products/:pid
  }
}
