import { Product } from "./product.interface";

export interface Cart {
  _id: string;
  products: Product[] | [];
}
