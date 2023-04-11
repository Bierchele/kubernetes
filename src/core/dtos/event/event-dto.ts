import {
  IsDateString,
  IsNotEmpty,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class eventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  date: Date;

  @IsString()
  @IsNotEmpty()
  streetName: string;

  @IsNotEmpty()
  streetNumber: string;

  @IsNotEmpty()
  @IsPostalCode('DE')
  postalcode: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  country?: string;
}
