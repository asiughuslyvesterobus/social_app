const sendEmail = require("../helpers.js/sendEmail");

const clientURL = process.env.CLIENT_URL;

async function sendPasswordRest({ email, token }) {
  const resetURL = `${clientURL}/auth/reset-password?token=${token}`;
  const message = `<div>
  <h1> hello! </h1>
  <p>
   Click the link to activate your account: 
  <a href ="${resetURL}"> Activate account</a>
  </p>
  <br>
  <br>
  <p> SMART APP </p>
  </div>`;

  return sendEmail({
    to: email,
    subject: "Password reset",
    html: message
  });
}

module.exports.sendPasswordRest = sendPasswordRest;
