const { httpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");
require("dotenv").config();
const {BASE_URL} = process.env;

const reVerify= async(req,res)=>{
const{email} = req.body;

const result = await User.findOne({email});

if(!result){
    throw httpError(404);
}

const {verify, verificationToken} = result;
if (verify){
throw httpError(400,"Verification has already been passed");
}

sendEmail(email,`
<p>Dear User,<br>Thank you for signing up!<br>To complete the registration process, please verify your email address by clicking the link below:</p>
<br> 
<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click to verify</a>
<br>
<p> Best regards,
   Our team</p>
`);

res.status(200).json({
    message: "Verification email sent"
});


}

module.exports = reVerify;