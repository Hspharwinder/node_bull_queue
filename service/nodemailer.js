const nodemailer = require('nodemailer');
const config = require("../config/environment");

const _sendMail = (message) =>{
    // create reusable transporter object using the default SMTP transport
    console.log("config.mailCredential ========> ", config.mailCredential);
    let transporter = nodemailer.createTransport({
        service:  config.mailCredential.service,
        auth: {
            user: config.mailCredential.user,
            pass: config.mailCredential.pass || ''
        },
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Harwinder" noreply@hsp.com', // sender address
        to: 'hspharwinder@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log("Mail Error ===============> ", error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}

module.exports =_sendMail;