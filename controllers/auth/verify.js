const httpError = require("../../helpers/httpError");
const { User } = require("../../models/user");

const verify = async(req, res)=>{
const {verificationToken} = req.params;
const result = await User.findOne({verificationToken});

if(!result) {
throw httpError(404);
}

await User.findOneAndUpdate({verificationToken},{verificationToken:null, verify:true })

res.status(200).json({
    message: 'Verification successful',
  })
}

module.exports = verify;