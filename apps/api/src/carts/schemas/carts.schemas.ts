import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from 'src/products/schemas/products.schemas';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductDocument',
      },
    ],
  })
  products: Product[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
