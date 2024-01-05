import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  code: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  category: string;

  @Prop()
  img: string;

  @Prop()
  quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
