const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });
  res.sendStatus(204);
};
module.exports = logout;
