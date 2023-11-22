const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const filter = { owner };
  if (favorite) {
    filter.favorite = favorite;
  }
  console.log(favorite, filter);
  const skip = (page - 1) * limit;
  const result = await Contact.find(filter, "-createdAt, -updatedAt", {
    skip,
    limit,
  });
  res.json(result);
};

module.exports = getAll;
