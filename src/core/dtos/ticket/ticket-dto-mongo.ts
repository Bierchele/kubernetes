import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class ticketMongoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  eventId: string;
}
// hatte das für die zwei fälle aber kann raus
// oki
