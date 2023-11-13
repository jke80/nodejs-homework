const{NotFound} = require("http-errors");
const {removeContact} = require("../../models/contacts");
const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const data = await removeContact(contactId);
    if (!data){
      throw NotFound(`Contacts with id=${contactId} not found`);
    }
    res.status(200).json({
      status:"success",
      code:200,
      message: "Contact deleted",
      data
    });
  }

  module.exports = deleteById;