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
      const { number, text } = req.body;
      if (!number || !text) throw { name: "NumberTextRequired" };

      for (let chatId in number) {
        chatId = number[chatId].substring(1) + "@c.us";
        const isRegistered = await wa.isRegisteredUser(chatId);
        // if (!isRegistered) throw { name: "UserIsNotRegistered" };
        if (isRegistered) wa.sendMessage(chatId, text);
      }

      res.json({
        message: "Chat has been sent",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = waController;
