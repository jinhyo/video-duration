import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getVideoDurationInSeconds } from 'get-video-duration';

@Controller()
export class AppController {
  @Get('video-duration')
  async getVideoDuration(url: string): Promise<number> {
    const duration = await getVideoDurationInSeconds(
      'https://a.seoltab.com/00132fe257e64fe690b668a39feb33ec/63e3baeafaa241ec85bd9474ef938919.mp4',
    );
    console.log(duration);

    return duration;
  }
}
