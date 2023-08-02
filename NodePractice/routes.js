const fs = require("fs");

const requestHandler = (request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
        if (err) console.log(err);

         response.write("<html>");
         response.write("<head><title>Message Page</title></head>");
           response.write(`<body><h1>${data}</h1></body>`);
         response.write(`<body><h1>Message Page</h1>
          <form action = "/" method = "POST" > <input placeholder="message" name="message" type="text" id="msg"><button type="submit">submit</button></form>
          </body >`);
         response.write("</html>");
         response.end();
    });
      
      
     
  }

  if (request.url === "/message" && method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    console.log(body);

    return request.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      fs.writeFile("message.txt", message, (err) => {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return res.end();
      });
    });

    response.write("<html>");
    response.write("<head><title>msg</title></head>");
    response.write(`<body><h1>Message Page</h1></body>`);
    response.write("</html>");
    response.end();
  }

  return response.end();
};

module.exports = requestHandler;
