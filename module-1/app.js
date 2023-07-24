
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/add-product',(req, res, next) => {
    // console.log("first middleware");
    res.send(`<h1>add product page</h1>
        <form action='/product' method='post'>
        <input type='text' name='title'>
        <input type='number' name='quantity'>
        <button type='submit'>add-product</button>
        </form>  
    `);
    
});

app.use('/',(req, res, next) => {
    // console.log("second middleware");
    res.send('<h1> HOme Page </h1>');
    // res.send({"key":"one"})
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)




