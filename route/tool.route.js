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
});

router.get("/userip", (req, res) => {
  res.sendFile("userIp.html", { root: "./public/Tools/" });
});

router.get("/user-agent", (req, res) => {
  res.sendFile("user_agent.html", { root: "./public/Tools/" });
});

// router.get("/api/user-agent", (req, res) => {
//   res.send(navigator.userAgent);

//   console.log(navigator.userAgent);
// });

router.get("/hex-to-rgb", (req, res) => {
  res.sendFile("hex_to_rgb.html", { root: "./public/Tools/" });
});
router.get("/text-to-binary", (req, res) => {
  res.sendFile("text_binary.html", { root: "./public/Tools/" });
});
router.get("/rgb-to-hex", (req, res) => {
  res.sendFile("rgb_to_hex.html", { root: "./public/Tools/" });
});
router.get("/base64", function (req, res) {
  res.sendFile("text_to_base64.html", { root: "./public/Tools/" });
});
module.exports = router;
