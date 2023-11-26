const path = require("path");
const jimp = require("jimp");
const avatarDir = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tmpName, originalname } = req.file;
  const { _id: id } = req.user;
  const resultName = path.join(avatarDir, `${id}` + originalname);

  try {
    const avatar = await jimp.read(tmpName);
    await avatar.resize(250, 250).quality(60).writeAsync(resultName);
  } catch (e) {
    return next(e);
  }

  res.status(200).json({
    avatarUrl: resultName,
  });
};

module.exports = updateAvatar;
