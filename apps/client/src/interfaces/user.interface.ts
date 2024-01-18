import { Cart } from "./cart.interface";

export interface User {
  age: number;
  carts: Cart[];
  email: string;
  last_connection: Date;
  name: string;
  role: string;
}
