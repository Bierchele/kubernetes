import { deleteEventDto } from './../core/dtos/event/delete-event-dto';
import { EventService } from './event.service';
import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { eventDto } from 'src/core/dtos/event/event-dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventsService: EventService) {}

  @Get()
  async findAllEvents(): Promise<eventDto[]> {
    return await this.eventsService.findAllEvents();
  }

  @Post()
  async createEvent(@Body() eventDto: eventDto) {
    return this.eventsService.createEvent({
      ...eventDto,
      deleted: false,
    });
  }

  @Post('delete')
  async deleteEvent(@Body() deleteEventDto: deleteEventDto) {
    const { uuid } = deleteEventDto;
    const eventExists = await this.eventsService.findEventByUuid(uuid);
    if (!eventExists) {
      return NotFoundException;
    }
    return await this.eventsService.deleteEvent(uuid);
  }
}
