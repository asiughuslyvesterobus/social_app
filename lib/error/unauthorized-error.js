const { statusCodes } = require("http-status-codes");
const CustomApiError = require("./custom-api-error");

class Unauthorized extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCodes = statusCodes.FORBIDDEN;
  }
}

module.exports = Unauthorized;
