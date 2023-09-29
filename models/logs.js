const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  entry: {
    type: String,
  },
  shipIsBroken: {
    type: Boolean,
  },
});

const Log = mongoose.model("Ship", logsSchema);

module.exports = Log;
