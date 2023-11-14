const{NotFound} = require("http-errors");
const {updateContact} = require("../../models/contacts");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    // console.log("------",Object.keys(req.body).length);
    // if(!Object.keys(req.body).length){
    //     res.status(400).json({
    //     message:"missing fields"
    //   })
    // }
    const data = await updateContact(contactId, req.body);
    if(!data){
      throw NotFound(`Not Found`);
    }
    res.json(data);
  }

  module.exports = updateById;