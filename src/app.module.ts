import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { PackagesModule } from './packages/packages.module';
import { UsersModule } from './users/users.module';
import { EmailservicesModule } from './emailservices/emailservices.module';
import { EmailserivcesController } from './emailserivces/emailserivces.controller';

@Module({
  imports: [
    ServicesModule,
    PackagesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestService', { dbName: 'nestServices' }),
    UsersModule,
    EmailservicesModule
  ],
  controllers: [AppController, EmailserivcesController],
  providers: [AppService],
})
export class AppModule { }
