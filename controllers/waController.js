const { wa } = require("../helper/wa");

class waController {
  static async getQrCode(req, res, next) {
    try {
      require("fs").readFile("assets/QRCode.png", (err, data) => {
        if (err) throw err;
        // res.json(data);
        res.json(Buffer.from(data).toString("base64"));
      });
    } catch (error) {
      next(error);
    }
  }

  static async sendMessage(req, res, next) {
    try {
      const number = "+62812345678910";
      const text = "Hey john";
      const chatId = number.substring(1) + "@c.us";
      const isRegistered = await wa.isRegisteredUser(chatId);
      if (!isRegistered) throw { name: "UserIsNotRegistered" };
      wa.sendMessage(chatId, text);
      res.json({
        message: "Chat has been sent",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = waController;
