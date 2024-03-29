const express = require("express");
const router = require("./route/tool.route");

const app = express();

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/index.html");
});

app.use("/tool", router);

app.use(express.static(__dirname + "/public"));

app.listen(8080, () => {
  console.log("server is running in : " + `localhost:8080`);
});
