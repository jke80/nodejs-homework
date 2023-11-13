const{NotFound} = require("http-errors");
const {updateContact} = require("../../models/contacts");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const data = await updateContact(contactId, req.body);
    if(!data){
      throw NotFound(`Contact with id=${contactId} not found`);
    }
    res.status(200).json({
      status:"success",
      code:200,
      data
    });
  }

  module.exports = updateById;