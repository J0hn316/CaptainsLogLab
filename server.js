const express = require("express");
const app = express();
const port = 3000;

app.get("/new", (req, res) => {
  res.render("New");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
