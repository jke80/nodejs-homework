const express = require("express");

const router = express.Router();

const { auth: ctrl } = require("../controllers");

const { validation, authenticate } = require("../middlewares");

const { schemas } = require("../models/user");

router.post(
  "/register",
  validation(schemas.registerAndLoginSchema),
  ctrl.register
);

router.post("/login", validation(schemas.registerAndLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validation(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);
module.exports = router;
