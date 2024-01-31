import { TicketInterface } from 'src/interfaces/ticket.interface';

export class CreateTicketDto {
  constructor(ticket: TicketInterface) {
    this.code = ticket.code;
    this.purchase_datetime = ticket.purchase_datetime;
    this.amount = ticket.amount;
    this.purchaser = ticket.purchaser;
  }

  code: string;
  purchase_datetime: Date;
  amount: number;
  purchaser: string;
}
