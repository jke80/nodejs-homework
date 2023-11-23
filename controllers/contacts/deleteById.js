const { httpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const deleteById = async (req, res) => {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;

  const data = await Contact.findOneAndDelete({ _id, owner });

  if (!data) {
    throw httpError(404);
  }
  res.json({
    message: "Contact deleted",
  });
};

module.exports = deleteById;
