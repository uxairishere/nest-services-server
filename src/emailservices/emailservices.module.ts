import { Module } from '@nestjs/common';
import { EmailservicesService } from './emailservices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailservicesController } from './emailservices.controller';

@Module({
  controllers: [EmailservicesController],
  providers: [EmailservicesService]
})
export class EmailservicesModule {}
