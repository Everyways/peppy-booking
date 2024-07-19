import 'dotenv/config';
import nodemailer from 'nodemailer';

export function sendMail(subject, text) {
// Create a transporter object
const transporter = nodemailer.createTransport({
    host: process.env.OVH_MAIL_HOST,
    port: process.env.OVH_MAIL_PORT,
    secure: process.env.OVH_MAIL_ENCRYPTION, // use SSL
    auth: {
      user: process.env.OVH_MAIL_USERNAME,
      pass: process.env.OVH_MAIL_PASSWORD,
    }
  });
  
  // Configure the mailoptions object
  const mailOptions = {
    from: process.env.OVH_MAIL_USERNAME,
    to: process.env.OVH_MAIL_TO,
    subject: subject, //'Sending Email using Node.js'
    text: text //'That was easy!'
  };
  
  // Send the email
   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}