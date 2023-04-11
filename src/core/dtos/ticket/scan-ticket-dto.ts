import { IsInt, IsNotEmpty } from 'class-validator';

export class scanTicketDto {
  @IsInt()
  id: number;
  @IsNotEmpty()
  scanned: boolean;
}
