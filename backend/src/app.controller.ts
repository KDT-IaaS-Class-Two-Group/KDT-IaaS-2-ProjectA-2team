import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Post()
  // postCalc(@Body() body: { inputValue : string })  {
  //   console.log('Received data:', body);

  //   return { message: 'Data received successfully', receivedData: body};
  // }
  @Post()
  postCalc(@Body() body: any)  {
    console.log('Received data:', body);

    return body
  }
}
