const { verifyUserToken } = require("../helper/jwt");

module.exports = async (req, res, next) => {
  try {
    let { authorization: token } = req.headers;
    if (!token) throw { name: "TokenIsRequired" };
    token = token.replace(/^Bearer\s/, "").replaceAll(" ", "");
    if (!verifyUserToken(token)) throw { name: "InvalidToken" };
    next();
  } catch (error) {
    next(error);
  }
};
