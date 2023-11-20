const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { validation, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validation(schemas.contactSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validation(schemas.contactSchema),
  ctrl.updateById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schemas.updateFavoritSchema),
  ctrl.updateStatusContact
);
module.exports = router;
