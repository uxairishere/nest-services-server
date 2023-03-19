import { Module } from '@nestjs/common';
import { EmailservicesService } from './emailservices.service';

@Module({
  providers: [EmailservicesService]
})
export class EmailservicesModule {}
