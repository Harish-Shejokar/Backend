const http = require("http");
const router = require('./routes');

const Server = http.createServer(router);

Server.listen("4000");
