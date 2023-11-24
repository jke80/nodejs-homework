const fs = require("fs").promises;
const path = require("path");
const avatarDir = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tmpName, originalname } = req.file;
  const { _id: id } = req.user;
  const resultName = path.join(avatarDir, `${id}` + originalname);

  try {
    await fs.rename(tmpName, resultName);
  } catch (e) {
    await fs.unlink(tmpName);
    return next(e);
  }

  res.status(200).json({
    avatarUrl: resultName,
  });
};

module.exports = updateAvatar;
