const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method,req.headers,);
  // process.exit();

  const url = req.url;
  const method = req.method;

  // console.log(url);

  if (url === "/") {

    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) console.log(err);

      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(`<body><h1>${data}</h1></body>`);
      res.write(
        `<body><h1>Form page</h1><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });

    //  res.write("<html>");
    //  res.write("<head><title>Enter Message</title></head>");
    //  res.write(
    //    `<body><h1>Form page</h1><h2>${data}</h2><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>`
    //  );
    //  res.write("</html>");
    //  return res.end();
  }

  if (url === "/message" && method === "POST") {
    console.log("message block");
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    res.write("<html>");
    res.write("<head><title>Message Page</title></head>");

    // res.write("<body><h1>Message Page</h1></body>");
    // res.write("</html>");
  }

  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>Message Page</title></head>");

    res.write("<body><h1>about us  Page</h1></body>");
    res.write("</html>");

    return res.end();
  }

  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>My first page</title></head>");

  // res.write(
  //   "<body><h1>hellow this is my first node js server!!!!!</h1></body>"
  // );
  // res.write("</html>");
  // res.end();
});

server.listen(3000);

// console.log("hey");
