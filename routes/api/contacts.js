const express = require("express");

const router = express.Router();

const { contacts:ctrl } = require("../../controllers");

const {validation, ctrlWrapper} = require("../../middlewares");

const {contactSchema} = require("../../schemas");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/",validation(contactSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.deleteById));

router.put("/:contactId",validation(contactSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;
