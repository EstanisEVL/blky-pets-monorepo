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
}

export type CreateProduct = Omit<Product, "_id" | "status">;
