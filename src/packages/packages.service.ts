import { Injectable, NotFoundException } from "@nestjs/common";
import { Package } from "./packages.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class PackageService {
    constructor(@InjectModel('Package') private readonly packageModel: Model<Package>) {}

    async insertPackage(name: string, desc: string, visibility: boolean, services: []){
        const newPackage = new this.packageModel({
            name: name,
            desc: desc,
            visibility: visibility,
            services: services
        })
        const result = await newPackage.save()
        console.log(result);
        return result.id as string;
    }

    async getAllPackages() {
        const packages = await this.packageModel.find().exec();
        return packages
    }

    async deletePackage(packageId: string) {
        await this.packageModel.deleteOne({_id: packageId}).exec();
    }
}