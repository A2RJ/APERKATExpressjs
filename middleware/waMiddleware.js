const { getWaCache } = require("../helper/cache");

module.exports = async (req, res, next) => {
  try {
    if (!getWaCache()) throw { name: "ClientIsNotConnected" };
    next();
  } catch (error) {
    next(error);
  }
};
