const {addContact} = require("../../models/contacts")
const add = async (req, res) => {
    const data = await addContact(req.body);
    res.status(201).json(data);
  }

  module.exports = add;