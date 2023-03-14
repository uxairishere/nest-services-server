import { Body, Controller, Post, Get, Param, Patch, Delete } from "@nestjs/common";
import { ServicesService } from "./services.service";

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Post()
    async addService(
        @Body('name') serviceName: string,
        @Body('desc') serviceDesc: string,
        @Body('visibility') serviceVisibility: boolean,
        @Body('price') servicePrice: number,

    ) {
        const generateId = await this.servicesService.insertService(serviceName, serviceDesc, serviceVisibility,servicePrice)
        return {id: generateId}
    }

    @Get()
    async getAllServices() {
        const services = await this.servicesService.getServices();
        return services;
    }

    @Get(':id')
    getOneService(@Param('id') serviceId: string) {
        return this.servicesService.getOneService(serviceId);
    }

    @Patch(':id')
    async updateService(
        @Param('id') serviceID: string,
        @Body('name') serviceName: string,
        @Body('desc') serviceDesc: string,
        @Body('visibility') serviceVisibility: boolean,
        @Body('price') servicePrice: number,
        ) {
            await this.servicesService.updateService(serviceID, serviceName, serviceDesc, serviceVisibility, servicePrice)
            return null;
        }

    @Delete(':id')
    deleteService(
        @Param('id') serviceId: string
    ) {
        this.servicesService.deleteService(serviceId);
        return null;
    }
}