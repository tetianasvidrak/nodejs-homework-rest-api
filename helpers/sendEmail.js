const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_EMAIL, META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (email) => {
  return await transport
    .sendMail({ ...email, from: META_EMAIL })
    .then(() => console.log('Email send success'))
    .catch((error) => console.log(error.message));
};

module.exports = sendEmail;
