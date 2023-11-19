const { NotFound } = require("http-errors");
const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw NotFound(`Not found`);
  }
  res.json(result);
};

module.exports = getById;
