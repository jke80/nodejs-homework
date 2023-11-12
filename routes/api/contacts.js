const express = require("express");

const router = express.Router();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  const data = await listContacts();
  res.json(data);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const data = await getContactById(contactId);
  res.json(data);
});

router.post("/", async (req, res, next) => {
  const data = await addContact(req.body);
  res.json(data);
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const data = await removeContact(contactId);
  res.json(data);
});

router.put("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const data = await updateContact(contactId, req.body);
  res.json(data);
});

module.exports = router;
