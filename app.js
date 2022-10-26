const express = require("express");
const app = express();
const { setWaCache } = require("./helper/cache");
const { wa } = require("./helper/wa");
const errorHandler = require("./middleware/errorHandler");
const router = require("./router/router");

setWaCache(false);
wa.initialize();

app.use(router);
app.use(errorHandler);

module.exports = app;
