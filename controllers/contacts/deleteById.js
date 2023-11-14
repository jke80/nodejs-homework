const{NotFound} = require("http-errors");
const {removeContact} = require("../../models/contacts");
const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const data = await removeContact(contactId);
    if (!data){
      throw NotFound(`Not found`);
    }
    res.json({
      message: "Contact deleted"
    });
  }

  module.exports = deleteById;