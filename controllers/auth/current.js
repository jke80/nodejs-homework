const current = (req, res) => {
  const { email, subscription } = req.user;

  res.status(200).json({
    user: {
      email,
      subscription,
    },
  });
};

module.exports = current;
