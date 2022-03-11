let addBob = (req, res, next) => {
  req.bob = "bob";
  next();
};

module.exports = addBob;
