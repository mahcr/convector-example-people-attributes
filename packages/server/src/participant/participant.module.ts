import { Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';

@Module({
  controllers: [ParticipantController]
})
export class ParticipantModule {}
