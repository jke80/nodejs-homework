const { httpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const updateById = async (req, res) => {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndUpdate({ _id, owner }, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

module.exports = updateById;
