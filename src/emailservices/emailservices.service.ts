import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

@Injectable()
export class EmailservicesService {
    async sendContactEmail(name: string, email: string, subject: String, message: string){
        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: "587",
            auth: {
              user: process.env.SMTP_ADDRESS,
              pass: process.env.SMTP_APP_PASS
            }
          }));
          var mailOptions = {
            from: name,
            to: "uzaaaaaair@gmail.com",
            subject: subject,
            text: 'That was easy!',
            html: message
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              return `There has been an error: ${error}`
            } else {
                console.log('Email sent: ' + info.response)
              return 'Email sent: ' + info.response;
            }
          });
    }

    async sendNewsLetter(emails: []){
        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: "587",
            auth: {
              user: process.env.SMTP_ADDRESS,
              pass: process.env.SMTP_APP_PASS
            }
          }));
          var mailOptions = {
            from: "Uxair Abbas",
            to: 'uzaaaaaair@gmail.com',
            subject: "STREAM NEXT",
            text: 'That was easy!',
            html:  `<h1 style="font-size: 42px; color: #d11d53">Stream Next News!</h1>
            <p
            style="font-size: 22px; font-weight: 200;"
            >We are very glad to announce that you are now part of NEXT STREAM family. Now you can watch movies without any
            hurdle or ads. Currently this service is under development and will release first version in coming month. So sit tight and
            watch the magic happen. Thanks</p>
            <a 
            href="http://localhost:3000/" 
            style="background-color: #d11d53; color: white; padding: 0.5rem 1rem; border-radius: 7px; font-weight: 600; text-decoration: none">
            STREAM NEXT
            </a>
            <p>from: Stream next developer</p>`
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              return `There has been an error: ${error}`
            } else {
                console.log('Email sent: ' + info.response)
              return 'Email sent: ' + info.response;
            }
          });
    }
}
