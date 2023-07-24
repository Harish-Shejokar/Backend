const express = require("express");
const router = express.Router();

router.get("/shop", (req, res, next) => {
  // console.log("second middleware");
  res.send("<h1> HOme Page </h1>");
  // res.send({"key":"one"})
});

module.exports = router;