const express = require("express");

const router = express.Router();

const { auth: ctrl } = require("../controllers");

const { validation, authenticate } = require("../middlewares");

const { schemas } = require("../models/user");

router.post("/register", validation(schemas.registerSchema), ctrl.register);

router.post("/login", validation(schemas.registerSchema), ctrl.login);

router.post("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);
module.exports = router;
