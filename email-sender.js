const nodemailer = require('nodemailer');

// Replace with your actual email and password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'name@gmail.com',
        pass: 'password-number'
    }
});

const mailOptions = {
    from: 'name@gmail.com',
    to: 'recipient-name@gmail.com',
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});