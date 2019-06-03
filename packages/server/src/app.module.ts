import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantModule } from './participant/participant.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [ParticipantModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
