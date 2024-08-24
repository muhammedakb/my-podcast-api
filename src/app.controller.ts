import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
// INFO: uygulamamızda bir controller yoksa bu uygulama gelen request'leri handle edemez.
// INFO: controller'lar çoğu nest js uygulamasının giriş noktasıdır.
