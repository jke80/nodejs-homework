const errorMessageList = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const httpError = (code, message = errorMessageList[code]) => {
  const error = new Error(message);
  error.code = code;
  return error;
};

module.exports = httpError;
