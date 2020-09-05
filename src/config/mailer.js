import nodeMailer from "nodemailer";

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAIL_PASSWORD;
let mailHOST = process.env.MAIL_HOST;
let mailPORT = process.env.MAIL_PORT;

let sendMail = (to , subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: mailHOST,
    port: mailPORT,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })
  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent,
  }
  return transporter.sendMail(options); // this default is promise
};
module.exports = sendMail;
