import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getVideoDurationInSeconds } from 'get-video-duration';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('video-duration')
  async getVideoDuration(url: string): Promise<number> {
    const duration = await getVideoDurationInSeconds(url);
    console.log(duration);

    return duration;
  }
}
