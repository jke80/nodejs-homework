const { NotFound } = require("http-errors");
const { Contact } = require("../../models/contact");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndDelete(contactId);
  if (!data) {
    throw NotFound(`Not found`);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = deleteById;
