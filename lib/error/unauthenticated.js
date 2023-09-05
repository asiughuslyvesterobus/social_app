const { statusCodes } = require("http-status-codes");
const CustomApiError = require("./custom-api-error");

class unathenticated extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = statusCodes.UNAUTHORIZED;
  }
}
module.exports = unathenticated;
