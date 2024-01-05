import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Cart } from '../../carts/schemas/carts.schemas';

export type UserDocument = HydratedDocument<User>;

@Schema() // { timestamps: true }
export class User {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  password: string;

  @Prop({ default: [] })
  carts: Cart[];

  @Prop({ default: 'USER' })
  role: string | 'ADMIN' | 'USER';

  @Prop()
  last_connection: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
