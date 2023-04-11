import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ticketDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  eventId: string;
}
