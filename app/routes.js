const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(`
    <html>
      <head><title>CI/CD Status</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>🚀 CI/CD PIPELINE IS WORKING</h1>
        <p>Deployed via Jenkins</p>
      </body>
    </html>
  `);
});

router.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

module.exports = router;
