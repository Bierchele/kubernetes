import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';
import { TicketService } from './ticket/ticket.service';
import { TicketController } from './ticket/ticket.controller';
import { TicketModule } from './ticket/ticket.module';
import { EventModule } from './event/event.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TicketModule, EventModule],
  controllers: [AppController, EventController, TicketController],
  providers: [AppService, EventService, TicketService, PrismaService],
})
export class AppModule {}
