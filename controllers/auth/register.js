const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");
const { User } = require("../../models/user");
const { httpError,sendEmail } = require("../../helpers");

require("dotenv").config();
const {BASE_URL} = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw httpError(409, "Email in use");
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  sendEmail(email,`
  <p>Dear User,<br>Thank you for signing up!<br>To complete the registration process, please verify your email address by clicking the link below:</p>
 <br> 
  <a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click to verify</a>
  <br>
 <p> Best regards,
     Our team</p>
  `);
res.status(201).json({
    user: {
      email: newUser.email,
      subscription: "starter",
    },
  });
};

module.exports = register;
