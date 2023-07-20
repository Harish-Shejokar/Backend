const http = require("http");
const temp = require('./routes.js');

const server = http.createServer(temp);

server.listen(3000);
