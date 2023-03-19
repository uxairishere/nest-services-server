import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { PackagesModule } from './packages/packages.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { EmailservicesModule } from './emailservices/emailservices.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServicesModule,
    PackagesModule,
    EmailservicesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017',  {dbName: 'nestServices'}),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
