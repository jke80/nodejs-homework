const {addContact} = require("../../models/contacts")
const add = async (req, res) => {
    const data = await addContact(req.body);
    res.status(201).json({
      status:"success",
      code:201,
      data
    });
  }

  module.exports = add;