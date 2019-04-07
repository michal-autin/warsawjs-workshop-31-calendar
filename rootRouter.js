const { Router } = require("express");

const router = Router();
const apiRouter = require("./routers/apiRouter");

router.use(apiRouter);

module.exports = router;
