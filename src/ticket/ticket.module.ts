import { PrismaService } from './../prisma/prisma.service';
import { TicketController } from './ticket.controller';
import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Module({
  imports: [],
  controllers: [TicketController],
  providers: [TicketService, PrismaService],
})
export class TicketModule {}
