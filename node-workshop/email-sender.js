import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chkramine2003@gmail.com",
    pass: process.env.PASS,
  },
});

var mailOptions = {
  from: "chkramine@gmail.com",
  to: "w@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
