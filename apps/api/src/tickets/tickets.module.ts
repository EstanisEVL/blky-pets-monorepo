import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './schemas/tickets.schemas';
import { TicketsService } from './tickets.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Ticket.name,
        useFactory: () => {
          const schema = TicketSchema;
          schema.pre('save', async function () {
            if (!this.code) {
              let code = `${Math.random()
                .toString(20)
                .substring(2, 10)
                .toUpperCase()}`;

              this.code = code;
            }
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TicketsService],
})
export class TicketsModule {}

// schema.pre("save", async function (next) {
//   if(!this.code) {
//     let code = `${Math.random().toString(20).substring(2,10).toUpperCase()}`;
//     this.code = code;
//   }
//   next();
// });
