const { httpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndDelete(contactId);
  if (!data) {
    throw httpError(404);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = deleteById;
