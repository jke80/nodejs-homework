const { NotFound } = require("http-errors");
const { Contact } = require("../../models/contact");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw NotFound(`Not Found`);
  }
  res.json(result);
};

module.exports = updateStatusContact;
