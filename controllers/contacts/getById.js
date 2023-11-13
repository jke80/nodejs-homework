const {NotFound} = require("http-errors");
const { getContactById } = require("../../models/contacts");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const data = await getContactById(contactId);
    if(!data){
      throw NotFound(`Contact with id= ${contactId} not found`);
    }
    res.status(200).json({
      status: "success",
      code:200,
      data
    });
  };

  module.exports = getById;