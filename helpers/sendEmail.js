const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "marta.prokopiv@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
// const emailOptions = {
//   from: "marta.prokopiv@meta.ua",
//   to: "marta.batih@gmail.com",
//   subject: "Nodemailer test",
//   text: "Привіт. Ми тестуємо надсилання листів!",
// };

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "marta.prokopiv@meta.ua",
  };
  await transporter.sendMail(email);
  return true;
};

// transporter
//   .sendMail(emailOptions)
//   .then(() => console.log("Email send success"))
//   .catch((err) => console.log(err));

module.exports = sendEmail;
