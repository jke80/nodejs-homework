const {NotFound} = require("http-errors");
const { getContactById } = require("../../models/contacts");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const data = await getContactById(contactId);
    if(!data){
      throw NotFound(`Not found`);
    }
    res.json(data);
  };

  module.exports = getById;