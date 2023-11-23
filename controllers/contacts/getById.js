const { httpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOne({ _id, owner });
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

module.exports = getById;
