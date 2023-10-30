const sendEmail = require("../helpers.js/sendEmail");

const clientURL = process.env.CLIENT_URL;

async function sendSuccessfulPasswordReset({ email, firstName }) {
  const loginURL = `${clientURL}/auth/login`;
  const message = `
  <div>
  <p> dear ${firstName},</p>
  <p>
  you have successfully reset your password
  <a href ="${loginURL}">login in to your account.</a>
  </p>
  <br>
  <p> SOCIAL APP team </p>
  </div>
  `;

  return sendEmail({
    to: email,
    subject: "password reset successful",
    html: message
  });
}

module.exports.sendSuccessfulPasswordReset = sendSuccessfulPasswordReset;
