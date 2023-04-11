import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { Event as EventModel } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { eventDto } from 'src/core/dtos/event/event-dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async findAllEvents(): Promise<eventDto[]> {
    return this.prisma.event.findMany({
      where: {
        deleted: false,
      },
      include: {
        Ticket: true,
      },
    });
  }
  async createEvent(data: Prisma.EventCreateInput): Promise<EventModel> {
    return this.prisma.event.create({ data });
  }

  async deleteEvent(uuid): Promise<EventModel> {
    return this.prisma.event.update({
      where: { id: uuid },
      data: {
        deleted: true,
      },
    });
  }

  async findEventByUuid(uuid: string): Promise<EventModel> {
    return this.prisma.event.findUnique({
      where: {
        id: uuid,
      },
    });
  }
}
