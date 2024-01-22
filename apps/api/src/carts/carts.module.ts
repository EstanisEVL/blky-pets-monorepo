import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schemas/carts.schemas';
import { ProductsService } from 'src/products/products.service';
import { Product, ProductSchema } from 'src/products/schemas/products.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [CartsController],
  providers: [CartsService, ProductsService],
})
export class CartsModule {}
