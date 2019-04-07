const { Router } = require("express");

apiRouter = Router();

const CALENDAR_RESPONSE_MOCK = require("./calendar.json");
const DAY_RESPONSE_MOCK = require("./day.json");

const calendarURL = "/api/calendar";
const dayURL = "/api/day";
const eventURL = "/api/event";

apiRouter.get(calendarURL, (req, res) => {
  console.log([calendarURL]);

  res.status(200);
  res.send(CALENDAR_RESPONSE_MOCK);
});

apiRouter.get(dayURL, (req, res) => {
  console.log([dayURL]);

  res.status(200);
  res.send(DAY_RESPONSE_MOCK);
});

apiRouter.post(eventURL, (req, res) => {
  console.log([eventURL]);

  res.send({ id: 1 });
});

apiRouter.put(eventURL + "/:id", (req, res) => {
  console.log([eventURL], req.body, req.params);

  res.send({ id: req.params.id });
});

apiRouter.delete(eventURL + "/:id", (req, res) => {
  console.log([eventURL], req.params);

  res.send({ id: req.params.id });
});

module.exports = apiRouter;
