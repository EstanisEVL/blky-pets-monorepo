import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop({ unique: true })
  code: string;

  @Prop()
  purchase_datetime: Date;

  @Prop()
  amount: number;

  @Prop()
  purchaser: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
