import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [EventService, PrismaService],
})
export class EventModule {}
