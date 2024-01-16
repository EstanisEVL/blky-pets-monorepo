import { Product } from "./product.interface";

export interface User {
  age: number;
  carts: Product[];
  email: string;
  last_connection: Date;
  name: string;
  role: string;
}
