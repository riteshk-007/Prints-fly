import nodemailer from "nodemailer";

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const transporter = nodemailer.createTransport(smtpConfig);

export const mailOptions = {
  from: process.env.SMTP_FROM_EMAIL,
  to: process.env.SMTP_TO_EMAIL,
};
