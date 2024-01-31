import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './schemas/tickets.schemas';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<Ticket>) {}

  async create(ticketData) {
    try {
      const newTicket = new CreateTicketDto(ticketData);
      const ticket = await this.ticketModel.create(newTicket);

      return ticket;
    } catch (err) {
      return err;
    }
  }
}
