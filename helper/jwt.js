const { verify, sign } = require("jsonwebtoken");
const axios = require("axios");

const createToken = (params) => {
  return sign(
    {
      name: params,
    },
    process.env.JWT_SECRET
  );
};

const verifyToken = (token) => {
  return verify(token, process.env.JWT_SECRET);
};

const verifyUserToken = async (token) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:8000/api/verifyToken", {
      token,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  createToken,
  verifyToken,
  verifyUserToken,
};
