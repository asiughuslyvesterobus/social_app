const { statusCodes } = require("http-status-codes");
const CustomApiError = require("./custom-api-error");

class Unauthorized extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = statusCodes.FORBIDDEN;
  }
}

module.exports = Unauthorized;
