const { log } = require("console");
const express = require("express");
const router = express.Router();
const http = require("http");

const IP = require("ip");

router.get("/website-status-checker", (req, res) => {
  res.sendFile("website_status_checker.html", { root: "./public/Tools/" });
});

router.get("/websiteResponseCheck", (req, res) => {});

router.get("/getip", (req, res) => {
  const ipAddress = IP.address();

  res.send(ipAddress);

  console.log(ipAddress);
});


router.get("/userip", (req, res) => {
  res.sendFile("userIp.html", {root: "./public/Tools/"});
})

module.exports = router;
