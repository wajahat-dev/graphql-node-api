

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  console.log(authHeader);
  next();
};
