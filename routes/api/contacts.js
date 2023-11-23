const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { validation, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validation(schemas.contactSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validation(schemas.contactSchema),
  ctrl.updateById
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validation(schemas.updateFavoritSchema),
  ctrl.updateStatusContact
);
module.exports = router;
