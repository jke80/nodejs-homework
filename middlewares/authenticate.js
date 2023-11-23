require("dotenv").config();
const jwt = require("jsonwebtoken");
const { httpError } = require("../helpers");
const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(httpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    req.user = user;
    if (!user || !user.token || token !== user.token) {
      next(httpError(401, "Not authorized"));
    }
  } catch {
    next(httpError(401, "Not authorized"));
  }
  next();
};

module.exports = authenticate;
