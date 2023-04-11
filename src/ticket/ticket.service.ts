import { Ticket } from './../core/entities/Ticket';
import { eventDto } from 'src/core/dtos/event/event-dto';
import { Prisma, Ticket as TicketModel } from '@prisma/client';
import { Event as EventModel } from '@prisma/client';
import { ticketDto } from '../core/dtos/ticket/ticket-dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async Ticket(
    TicketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({
      where: TicketWhereUniqueInput,
    });
  }

  async Tickets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TicketWhereUniqueInput;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput;
  }): Promise<Ticket[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ticket.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTicket(data: Prisma.TicketCreateInput): Promise<TicketModel> {
    return this.prisma.ticket.create({ data });
  }
}
