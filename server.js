const express = require("express");
const jsxEngine = require("jsx-view-engine");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const dotenv = require("dotenv");
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const logRouter = require("./controllers/logs.js");
app.use("/", logRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
