import { IsEmail, IsInt, IsNotEmpty, IsString, IsDateString, Min, Max } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsInt()
  @Min(1)
  @Max(10)
  numberOfGuests: number;
}


