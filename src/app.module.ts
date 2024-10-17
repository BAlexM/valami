/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';*/

import { Module } from '@nestjs/common';
import { BookingController } from 'src/booking/booking.controller';

@Module({
  imports: [],
  controllers: [BookingController],
  providers: [],
})
export class AppModule {}



