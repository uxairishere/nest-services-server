import { Controller, Body, Post } from '@nestjs/common';
import { EmailservicesService } from './emailservices.service';

@Controller('emailservices')
export class EmailservicesController {
    constructor(private readonly emailService: EmailservicesService) {}

    @Post()
    async sendContactEmail(
        @Body('name') userName: string,
        @Body('email') userEmail: string,
        @Body('subject') userSubject: string,
        @Body('message') userMessage: string,
    ) {
        const emailresponse = await this.emailService.sendContactEmail(userName, userEmail, userSubject, userMessage)
        return {response: emailresponse}
    }

    @Post('news-letter')
    async sendNewsLetter(
        @Body('emails') usersEmail: [],
    ) {
        return await this.emailService.sendNewsLetter(usersEmail)  
    }
}
