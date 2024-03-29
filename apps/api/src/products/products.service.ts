import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/products.schemas';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll() {
    try {
      return await this.productModel.find();
    } catch (err) {
      return err;
    }
  }

  async findById(id: string) {
    try {
      const data = await this.productModel.findById({ _id: id });

      return data;
    } catch (err) {
      return err;
    }
  }

  async findByCode(code: number) {
    try {
      const data = await this.productModel.findOne({ code: code });

      return data;
    } catch (err) {
      return err;
    }
  }

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.productModel.create(createProductDto);

      return product;
    } catch (err) {
      return err;
    }
  }

  async updateById(id: string, updatedProductDto: UpdateProductDto) {
    try {
      const updatedProduct = await this.productModel.findByIdAndUpdate(
        id,
        updatedProductDto,
        { new: true },
      );

      return updatedProduct;
    } catch (err) {
      return err;
    }
  }

  async deleteById(id: number) {
    try {
      const deletedProduct = await this.productModel.findByIdAndDelete({
        _id: id,
      });

      return deletedProduct;
    } catch (err) {
      return err;
    }
  }
}
