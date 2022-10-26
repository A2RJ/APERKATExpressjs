const waRouter = require("express").Router();
const waController = require("../controllers/waController");
const waMiddleware = require("../middleware/waMiddleware");

waRouter.get("/qr-code", waController.getQrCode);
waRouter.get("/sendWaNotification", waMiddleware, waController.sendMessage);

module.exports = waRouter;
