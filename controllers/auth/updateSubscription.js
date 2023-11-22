const { httpError } = require("../../helpers");
const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id: userId } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(
    userId,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw httpError(404);
  }
  res.json(result);
};

module.exports = updateSubscription;
