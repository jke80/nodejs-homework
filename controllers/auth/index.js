const { ctrlWrapper } = require("../../helpers");
const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const reVerify = require("./reVerify");



module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verify:ctrlWrapper(verify),
  reVerify:ctrlWrapper(reVerify),
};
