const express = require("express");

const router = express.Router();

const { auth: ctrl } = require("../controllers");

const { validation } = require("../middlewares");

const { schemas } = require("../models/user");

router.post("/register", validation(schemas.registerSchema), ctrl.register);

router.post("/login", validation(schemas.registerSchema), ctrl.login);

module.exports = router;
