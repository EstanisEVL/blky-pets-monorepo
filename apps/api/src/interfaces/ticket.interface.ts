export interface TicketInterface {
  _id?: string;
  code?: string;
  purchase_datetime: Date;
  amount: number;
  purchaser: string;
}
