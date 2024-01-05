import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schemas/carts.schemas';
import { Model } from 'mongoose';

@Injectable()
export class CartsService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async findAll() {
    try {
      const carts = await this.cartModel.find();

      return carts;
    } catch (err) {
      return err;
    }
  }

  // Agregar populate al método y al schema:
  async findById(id: string) {
    try {
      const cart = await this.cartModel.findById({ _id: id });

      return cart;
    } catch (err) {
      return err;
    }
  }

  async create(cart: Cart) {
    try {
      const newCart = await this.cartModel.create(cart);

      return newCart;
    } catch (err) {
      return err;
    }
  }

  async delete(id: string) {
    try {
      const deletedCart = await this.cartModel.deleteOne({ _id: id });

      return deletedCart;
    } catch (err) {
      return err;
    }
  }
}
