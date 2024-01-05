import { Product } from 'src/products/schemas/products.schemas';

export class CreateCartDto {
  constructor(products: Product[]) {
    this.products = products;
  }

  products: Product[];
}
