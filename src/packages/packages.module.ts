import { Module } from "@nestjs/common";
import { PackagesController } from "./packages.controller";
import { PackageService } from "./packages.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PackageSchema } from "./packages.model";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Package', schema: PackageSchema}])],
    controllers: [PackagesController],
    providers: [PackageService]
})
export class PackagesModule {}