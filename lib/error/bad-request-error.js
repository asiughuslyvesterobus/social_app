const { statusCodes } = require("http-status-codes");
const CustomApiError = require("./custom-api-error");

class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCodes = statusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
