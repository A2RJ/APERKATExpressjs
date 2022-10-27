module.exports = (err, req, res, next) => {
  let status = 500;
  let message = "";

  console.log(err.name);

  switch (err.name) {
    case "InvalidToken":
      status = 400;
      message = "Invalid token";
      break;
    case "TokenIsRequired":
      status = 400;
      message = "Token is required";
      break;
    case "ClientIsNotConnected":
      status = 400;
      message = "Client not connected, scan QR Code...";
      break;
    case "UserIsNotRegistered":
      status = 404;
      message = "User is not registered";
      break;
    case "NumberTextRequired":
      status = 400;
      message = "Number and text message is required";
      break;

    default:
      status = 500;
      message = err.message;
      break;
  }

  res.status(status).json({ message });
};
