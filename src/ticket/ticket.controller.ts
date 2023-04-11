import { ticketDto } from '../core/dtos/ticket/ticket-dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { v4 as uuidv4 } from 'uuid';
import { ok } from 'assert';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async createTicket(@Body() data: ticketDto) {
    const { eventId, name } = data;
    // gar nicht die sind doch schon im event
    // was ist das für event?
    // meinst du Sibbi Party?
    // geht die ab?
    // ja bro dwagioehagae+
    // erstell mal jetzt 1000000 events
    // und dann erstell mal 1000000 tickets
    // ja warte chill ma deine eier warum sehe ich die erstellen tickets nicht
    // bruuuh man muss reloaden wie gay ist das denn
    // macl mal ein neues terminal und gib mir da rechte
    // bruh du hast die prisma funktionen nicht exposed wie suchst du nach Tickets?
    let uuid: string;
    do {
      uuid = uuidv4();
    } while (
      Boolean(
        await this.ticketService.Ticket({
          eventId_barcode: { eventId, barcode: uuid },
        }),
      )
    );
    return this.ticketService.createTicket({
      name: name,
      barcode: uuid,
      Event: {
        connect: {
          id: eventId,
        },
      },
    });
  }
}
