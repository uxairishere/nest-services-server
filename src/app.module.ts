import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [
    ServicesModule, 
    PackagesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestService')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
