const ApiError = require("../error/ApiError");
const AuthError = require("../error/AuthError");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  } else if (err instanceof AuthError) {
    res.status(err.status).json({ message: err.message });
  } else
    return res.status(500).json({ message: "The error was not foreseen!!!" });
};
