import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { getVideoDurationInSeconds } from 'get-video-duration';

@Controller()
export class AppController {
  @Post('video-duration')
  async getVideoDuration(@Body('url') url: string): Promise<number> {
    console.log(
      '🚀 ~ file: app.controller.ts ~ line 8 ~ AppController ~ getVideoDuration ~ url',
      url,
    );

    const example =
      'https://a.seoltab.com/00132fe257e64fe690b668a39feb33ec/63e3baeafaa241ec85bd9474ef938919.mp4';
    const example2 =
      'https://video-convert-test.s3.ap-northeast-2.amazonaws.com/3fa281f2b0f344efb1c25ac7c05ac66f/ff134dde0be54a25af1f58a8f7f48c73.mp4';
    const duration = await getVideoDurationInSeconds(url);
    console.log(duration);

    return duration;
  }
}
