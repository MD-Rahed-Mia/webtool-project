const express = require("express");
const router = express.Router();

router.get("/website-status-checker", (req, res) => {
  res.sendFile("website_status_checker.html", { root: "./public/Tools/" });
});

module.exports = router;
