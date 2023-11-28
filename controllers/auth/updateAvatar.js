const fse = require("fs-extra");
const path = require("path");
const jimp = require("jimp");
const { httpError } = require("../../helpers");
const { User } = require("../../models/user");

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    throw httpError(400, "File not selected for upload. Please choose a file");
  }

  const { path: tmpName, originalname } = req.file;
  const { _id } = req.user;

  const avatarURL = path.join("public", "avatars", `${_id}` + originalname);
  const resultName = path.join(process.cwd(), avatarURL);
  const avatar = await jimp.read(tmpName);
  await avatar.resize(250, 250).quality(60).writeAsync(resultName);
  await fse.remove(tmpName);
  await User.findOneAndUpdate({ _id }, { avatarURL });
  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
