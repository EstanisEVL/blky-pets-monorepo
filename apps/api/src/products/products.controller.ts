import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { Product } from './schemas/products.schemas';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get() // Get /api/products
  async getProducts(): Promise<Product[]> {
    try {
      const products = await this.productsService.findAll();

      return products;
    } catch (err) {
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Post() // POST /api/products
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      const checkProduct = await this.productsService.findByCode(
        createProductDto.code,
      );

      if (!checkProduct) {
        const newProduct = await this.productsService.create(createProductDto);

        return newProduct;
      } else {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Error - Product already exists.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (err) {
      if (err.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException(err.response.error);
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Get(':id') // GET /api/products/:id
  async getProductById(@Param('id') id: string) {
    try {
      const product = await this.productsService.findById(id);

      if (!product)
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Product not found.',
          },
          HttpStatus.NOT_FOUND,
        );

      return product;
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);

      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Put(':id') // PUT /api/products/:id
  async updateProductById(
    @Param('id') @Body() id: string,
    updateProductDto: UpdateProductDto,
  ) {
    try {
      const updatedProduct = await this.productsService.updateById(
        id,
        updateProductDto,
      );

      if (!updatedProduct) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Product not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        return updatedProduct;
      }
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);
      throw new InternalServerErrorException(`${err}`);
    }
  }

  @Delete(':id') // DELETE /api/products/:id
  @HttpCode(204)
  async deleteProductById(@Param('id') id: string) {
    try {
      const deletedProduct = await this.productsService.deleteById(+id);

      if (!deletedProduct) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Error - Product not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        return deletedProduct;
      }
    } catch (err) {
      if (err.status === HttpStatus.NOT_FOUND)
        throw new NotFoundException(err.response.error);
      throw new InternalServerErrorException(`${err}`);
    }
  }
}
