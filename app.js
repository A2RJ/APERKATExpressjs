const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const router = require("./router/router");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://aperkat.uts.ac.id"],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

module.exports = app;
