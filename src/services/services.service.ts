import { Injectable, NotFoundException } from "@nestjs/common";
import { Service } from './services.model'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ServicesService {
    private services: Service[] = [];

    constructor(@InjectModel('Service') private readonly serviceModel: Model<Service>) { }

    async insertService(name: string, desc: string, visibility: boolean, price: number) {
        const serviceId = Math.random().toString()
        const newService = new this.serviceModel({
            name: name,
            desc: desc,
            visibility: visibility,
            price: price,
        })
        const result = await newService.save()
        console.log(result);
        return result.id as string;
    }

    async getServices() {
        const services = await this.serviceModel.find().exec();
        // console.log(services)
        return services.map((val) => ({
            id: val.id,
            name: val.name,
            desc: val.desc,
            visibility: val.visibility,
            price: val.price
        }));
    }

    async getOneService(serviceId: string) {
        const service = await this.findService(serviceId);
        return service
    }

    async updateService(serviceId: string, name: string, desc: string, visibility: boolean, price: number) {
        const updatedService = await this.findService(serviceId);
        if(name) {
            updatedService.name = name;
        }
        if(desc) {
            updatedService.desc = desc;
        }
        if(price) {
            updatedService.price = price;
        }
        if(visibility) {
            updatedService.visibility = visibility;
        }
        updatedService.save()
    }

    deleteService(servideId: string) {
        const index = this.findService(servideId)[1];
        this.services.splice(index, 1);
    }

    private async findService(id: string): Promise<Service> {
        let service
        try {
            service = await this.serviceModel.findById(id)
        } catch (e) {
            throw new NotFoundException('Could not find product');
        }
        if (!service) {
            throw new NotFoundException('Could not find product');
        }
        return service;
    }
}