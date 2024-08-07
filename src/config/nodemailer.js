/* Dependencia instalada en el .json */
require('dotenv').config();

const nodemailer = require("nodemailer");

const MI_MAIL = process.env.MI_MAIL;
const MI_MAIL_PASSWORD = process.env.MI_MAIL_PASSWORD;

if (!MI_MAIL || !MI_MAIL_PASSWORD) {
  throw new Error("Missing email or password environment variables");
}

/* Con crate transport le paso a nodemalier mis credenciales */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MI_MAIL,
    pass: MI_MAIL_PASSWORD,
  },
});


module.exports = { transporter, MI_MAIL };