import { Controller, Get, Param, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { ParticipantControllerBackEnd } from '../convector';

@Controller('/participant')
export class ParticipantController {

  @Get(':id')
  public async getHello(@Param('id') id: string) {
    try {
      return await ParticipantControllerBackEnd.get(id);
    } catch (err) {
      Logger.log(JSON.stringify(err));
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
  }

}
