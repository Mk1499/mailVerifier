const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const htmlTemplate = require('../template/emailHTML') ;
require("dotenv").config();



var transporter =  nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.WEBEMAIL,
      pass: process.env.EMAILPW,
    },
  })
);



let sending = (mail , code) => {
  console.log("Called : ",mail);
  console.log({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.WEBEMAIL,
      pass: process.env.EMAILPW,
    },
  });
  var mailOptions = {
    from: "Booky@gmail.com",
    to: mail,
    subject: "Tailz Verification Code",
    text: "That was easy!",
    html: htmlTemplate(code), 
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      // console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sending;