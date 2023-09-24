const {
  sendAccountActivation
} = require("../../message/account-activation-message");

const bcryptjs = require("bcryptjs");

function updateChangeAuthProperties(user, data) {
  if (data.firstName !== undefined) {
    user.firstName = data.firstName;
  }
  if (data.lastName !== undefined) {
    user.lastName = data.lastName;
  }
  if (data.phone !== undefined) {
    user.phone = data.phone;
  }
  return user;
}

async function checkValidation(user, email) {
  // check if account activation token has expired
  if (user.AccountTokenExpires < Date.now()) {
    // if account token has expired create new token
    const token = await bcryptjs.hash(email.toString(), 10);
    const thirtyMinutes = 30 * 60 * 1000;

    user.AccountactivationToken = token;
    user.AccountTokenExpires = new Date(Date.now() + thirtyMinutes);

    await user.save();
    // resend new activation token
    await sendAccountActivation({ email, token });
    return {
      msg: "Account not activated. Click the link in your email to activate your account"
    };
  }
  return {
    msg: "Account not activated.click the link in your email  to activate your account"
  };
}

module.exports.updateChangeAuthProperties = updateChangeAuthProperties;
module.exports.checkValidation = checkValidation;
