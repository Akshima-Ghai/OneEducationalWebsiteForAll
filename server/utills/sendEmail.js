const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = (receiver, subject, content) => {
  try {
    const data = {
      to: receiver,
      from: process.env.SENDGRID_VERIFIED_MAIL,
      subject,
      html: content,
    };
    return sgMail.send(data);
  } catch (error) {
    console.log(error);
  }
};



