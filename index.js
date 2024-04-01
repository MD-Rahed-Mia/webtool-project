const express = require("express");
const router = require("./route/tool.route");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(router);

app.use(express.static(__dirname + "/public"));

// Middleware for handling 404 errors
app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + "/public/Tools/Error.html");
});

app.listen(3000, () => {
  console.log("server is running in : " + `localhost:3000`);
});
