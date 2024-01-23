import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schemas/carts.schemas';
import { Model } from 'mongoose';
import { Product } from 'src/products/schemas/products.schemas';
import { ProductInterface } from 'src/interfaces/product.interface';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<Cart>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll() {
    try {
      const carts = await this.cartModel.find();

      return carts;
    } catch (err) {
      return err;
    }
  }

  async findById(id: string) {
    try {
      const cart = await this.cartModel
        .findById({ _id: id })
        .populate('products');
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

  async addProduct(cid: string, pid: string) {
    try {
      const cart = await this.cartModel.findById({ _id: cid });
      const product = await this.productModel.findById({ _id: pid });

      cart.products.push(product);

      await cart.save();

      return cart;
    } catch (err) {
      return err;
    }
  }

  async updateProductFromCart(cid: string, pid: string, operation: string) {
    try {
      const cart = await this.cartModel.findById({ _id: cid });
      const productIndex = cart.products.findIndex(
        (product: ProductInterface) => String(product._id) === String(pid),
      );

      if (operation === 'add') {
        cart.products[productIndex].quantity++;
      }

      if (operation === 'remove') {
        cart.products[productIndex].quantity--;
      }

      cart.markModified('products');

      return await cart.save();
    } catch (err) {
      return err;
    }
  }
}
