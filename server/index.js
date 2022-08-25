const express = require("express");
const app = express();

app.use(express.json());

app.use("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

app.listen(3001, () => {
  console.log("Listen on the port 3001...");
});
