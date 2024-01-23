import { Product } from '../schemas/products.schemas';

export class CreateProductDto {
  constructor(product: Product, cid: number | null = null) {
    this.cid = cid;
    this.title = product.title;
    this.description = product.description;
    this.code = product.code;
    this.price = product.price;
    this.status = product.status;
    this.stock = product.stock;
    this.category = product.category;
    this.img = product.img;
  }

  cid: number | null;
  id: number;
  product: Product;
  title: string;
  description: string;
  code: number;
  price: number;
  status: string;
  stock: number;
  category: string;
  img: string;
}
