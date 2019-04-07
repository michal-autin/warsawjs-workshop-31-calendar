const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./constants");
const bodyParser = require("body-parser");
const rootRouter = require("./rootRouter");
const apiRouter = require("./routers/apiRouter");

const app = express();

app.use(morgan("combined"));
app.use(express.static("public"));
app.use(bodyParser);
app.use(rootRouter);

app.set("port", PORT);

app.listen(app.get("port"), () => {
  console.info(`express app running on port: ${app.get("port")}`);
});
