const sendEmail = require("../helpers.js/sendEmail");

const clientURL = process.env.CLIENT_URL;

async function sendPasswordRest(email, token) {
  const restURL = `${clientURL}/auth/reset-password ?token =${token}`;
  const message = `<div>
  <h1> hello! </h1>
  <p>
  click the link to activate your account :
  <a href ="${restURL}"> Activate account</a>
  </p>
  <br>
  <p> SMART APP </p>
  </div>`;
  return sendEmail({
    to: email,
    sublect: "password reset",
    html: message,
  });
}

module.exports = sendPasswordRest;
