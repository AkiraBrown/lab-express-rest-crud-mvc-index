const express = require("express");

//Controllers

const locationController = require("./controllers/locations.controller");
const machineController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller");
const planController = require("./controllers/plans.controller");
const specialEventController = require("./controllers/special-events.controller");

//Config
const app = express();
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/locations", locationController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/machines", machineController);
app.use("/special-events", specialEventController);

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

//Export
module.exports = app;
