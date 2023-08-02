const express = require("express");
const router = express.Router();






router.get("/add-product", (req, res, next) => {
  // console.log("first middleware");
  res.send(`<h1>add product page</h1>
        <form action='/admin/product' method='post'>
        <input type='text' name='title'>
        <input type='number' name='quantity'>
        <button type='submit'>add-product</button>
        </form>  
    `);
});




router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
