//import { Controller, Get, Post, Render } from '@nestjs/common';
//import { AppService } from './app.service';

//Ezt a részt nem teljesen értettem meg, de internetes forrás alapján ezt mondták, és nem dobott rá hibát így ezt használtam az eredetit meg kicommenteltem. És ezt a fajta imporot használtam végig a feladatban
import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookingDto } from 'src/create-booking.dto';

@Controller('booking')
export class BookingController {
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return { message: 'Sikeres foglalás', data: createBookingDto };
  }
}









/*
  @Post(/valami){
    hotelFormPost(@Body() newbook: NewBookDto, @Res() response: Response) {
      const errors: string[] = [];
      let book = new NewBookDto();
      let valami: string[] = ['name', 'email', 'date', 'guests'];
      for (let i = 0; i < valami.length; i++) {
        if (!newbook[valami[i]]) {
          errors.push('Nincs minden mező kitöltve.')
          break;
        }
  
      }
      
  }*/

  


/*Készítsd el egy mozi- vagy szállásfoglalási alkalmazásnak azon oldalát, ahol a felhasználó adhatja meg a foglalás adatait.

Az alábbiakat kell megadni:
Név (kötelező)
E-mail cím (kötelező, a @ jel előtt és után legyen min. 1-1 karakter pl. abc@def.hu)
Dátum és időpont (kötelező, az aktuális dátumnál nem lehet régebbi)
Nézők (mozi esetén) vagy vendégek (szállás esetén) száma (kötelező, minimum 1 és maximum 10 fő)
Az űrlapot formázd meg Bootstrap segítségével.

Hiba esetén jelezd a hibát a felhasználónak és a hibaüzenetekhez egy megfelelő Bootstrap alert komponenst használj.
Hiba esetén minden adatot tölts vissza az űrlapra, hogy ne kelljen újra kitölteni.

Az űrlap sikeres foglalás esetén irányítson át egy "Sikeres foglalás" oldalra.
Ezt nestjs használatával old meg kérlek.*/



