const router = require("express").Router();
const { createToken, verifyUserToken } = require("../helper/jwt");
const middleware = require("../middleware/middleware");
const controller = require("./../controllers/controller");
const waRouter = require("./waRouter");

router.get("/", controller.index);
router.use("/wa", waRouter);

module.exports = router;
