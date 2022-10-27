const waRouter = require("express").Router();
const waController = require("../controllers/waController");
const middleware = require("../middleware/middleware");
const waMiddleware = require("../middleware/waMiddleware");

waRouter.use(middleware, waMiddleware);
waRouter.get("/qr-code", waController.getQrCode);
waRouter.post("/sendWaNotification", waController.sendMessage);

module.exports = waRouter;
