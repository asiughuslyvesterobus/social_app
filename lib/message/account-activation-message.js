const sendEmail = require("../helpers.js/sendEmail");

const clientURL = process.env.CLIENT_URL;

async function sendAccountActivation({ email, token }) {
  const activationUrl = `${clientURL}/auth/activate-account?token =${token}`;
  const message = `<div>
  <h1> Hello! </h1>
  <p>
  click the link to activate your account :
  <a href = "${activationUrl}">activate account</a>
  </p>
  <br>
  <p> WELLCOME TO  SMART APP</p>
   </div>`;
  return sendEmail({
    to: email,
    subject: "Account activation",
    html: message
  });
}

module.exports.sendAccountActivation = sendAccountActivation;
