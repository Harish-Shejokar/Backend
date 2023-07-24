const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("second middleware");
    // res.send('<h1> epxress frame work </h1>');
    res.send({"key":"one"})
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)




