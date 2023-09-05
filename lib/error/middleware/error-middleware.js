const { statusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  console.error("Error middleware", err);
  const customError = {
    msg: err.message || "something went wrong try again later",
    statusCode: err.statusCode || statusCodes.INTERNAL_SERVER - ERROR
  };
  if (err.name === "castError") {
    customError.msg = `The id: ${err.value} provided is invalid`;
    customError.statusCode = statusCodes.NOT_FOUND;
  }
  if (err.code && err.code === 11000) {
    console.log(err.keyvalue);
    customError.msg = `The ${Object.keys(
      err.keyvalue
    )} you entered already exists`;
    customError.statusCode = statusCodes.BAD_REQUEST;
  }
  res
    .status(customError.statusCode)
    .json({ success: true, msg: customError.msg });
};

const notFound = (req, res, next) => {
  const error = new Error(`Not found-${req.originalUrl}`);
  res.status(404).json({ message: `path with ${req.url} not found` });
};

module.exports.errorHandler = errorHandler;
module.exports.notFound = notFound;
