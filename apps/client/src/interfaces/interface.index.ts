export interface Cart {
  _id: string;
  products: Product[] | [];
}

export interface Category {
  id: number;
  title: string;
  href: string;
}

export interface Payment {
  id: number;
  title: string;
  src: string;
}

export interface User {
  age: number;
  carts: Cart[];
  email: string;
  last_connection: Date;
  name: string;
  role: string;
}

export interface Product {
  category: string;
  code: number;
  description: string;
  img: string;
  price: number;
  status: string;
  stock: number;
  title: string;
  _id: string;
  quantity: number;
}

export type CreateProduct = Omit<Product, "_id" | "status">;

export interface Social {
  id: number;
  title: string;
  src: string;
  link: string;
}
