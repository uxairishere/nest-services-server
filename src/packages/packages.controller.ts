import { Body, Controller , Delete, Get, Param, Post} from "@nestjs/common";
import { PackageService } from "./packages.service";

@Controller('packages')
export class PackagesController {
    constructor(private readonly packagesService: PackageService) {}

    @Post()
    async addPackage(
        @Body('name') packageName: string,
        @Body('desc') packageDesc: string,
        @Body('visibility') packageVisibility: boolean,
        @Body('services') packageServices: [],
        @Body('quantity') servicesQuantity: object

    ) {
        const generateId = await this.packagesService.insertPackage(packageName, packageDesc, packageVisibility,packageServices,servicesQuantity)
        return {id: generateId}
    }

    @Get()
    async getPackages() {
        const packages = await this.packagesService.getAllPackages();
        return packages
    }

    @Delete(':id')
    async deletePackage(
        @Param('id') packageId: string
    ) {
        await this.packagesService.deletePackage(packageId)
        return null;
    }
}