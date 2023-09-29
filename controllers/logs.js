const express = require("express");
const router = express.Router();
const Log = require("../models/logs");

router.get("/logs", async (req, res) => {
  try {
    const logs = await Log.find({});
    res.render("Index", { logs });
  } catch (err) {
    console.error(err);
  }
});

router.get("/logs/new", (req, res) => {
  res.render("New");
});

router.post("/logs", async (req, res) => {
  try {
    const savedLog = await Log.create(req.body);
    res.redirect(`/logs/${savedLog._id}`);
  } catch (err) {
    console.error(err);
  }
});

router.get("/logs/:id", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("Show", { log });
  } catch (err) {
    console.error(err);
  }
});

router.get("/logs/:id/edit", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("Edit", { log });
  } catch (err) {
    console.error(err);
  }
});

router.put("/logs/:id", async (req, res) => {
  try {
    await Log.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        entry: req.body.entry,
        shipIsBroken: req.body.shipIsBroken === "true",
      },
      { new: true }
    );
    res.redirect("/logs");
  } catch (err) {
    console.error(err);
  }
});

router.delete("/logs/:id", async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
