const express = require("express");



const router = express.Router();


router.get(`/login`, (req, res, next) => {
  
  res.send(`<h1>Details</h1>
        <form onsubmit="(document.getElementById('username').value=localStorage.setItem('username',document.getElementById('username').value))" action='/storing-data' method='POST'>
        <label>Enter Name</label>
        <input id='username' type='text' name='name'>
        <button type='submit'>Add-Name</button>
        </form>`);
});

router.post("/storing-data", (req, res, next) => {
  
  console.log("________________", req.body.message);
  res.redirect("/",);
});

router.get("/", (req, res, next) => {
  // console.log("second middleware");

  res.send(`<h1></h1>
        <form action='/storing-data' method='post'>
        <label>Enter msg</label>
        <input type='text' name='message'>
        <input type='hidden' name='message' id="userName">
        <button type='submit'>Add-message</button>
        </form>`);
  // res.send({"key":"one"})
});

module.exports = router;
