const fs = require("fs");

const requestHandler = (req, res) => {
  // // playing with reqest.
  //console.log(req.url, req.method, req.headers);
  //process.exit();

  // // playing with response.
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>server</title></head>");
  // res.write("<body>");
  // res.write(
  //   "<h1>Hello world, this is my first server in nodejs from scratch.</h1>"
  // );
  // res.write("</body>");
  // res.write("</html>");
  // res.end();

  //routing request - nodejs way
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      '<body><form action = "/message" method = "POST"><input type = "text" name = "myMessage"/><button type = "submit">submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  // // redirecting request - with writing into demo file
  // if (url === "/message" && method == "POST") {
  //   const info = "hit me!";
  //   fs.writeFileSync("formInfo.txt", info);
  //   res.statusCode = 302; // 302 code - for redirection
  //   res.setHeader("Location", "/");
  //   return res.end();
  // }

  //writing the input form info into the file with redirection to the form page or "/" route again.
  if (url === "/message" && method === "POST") {
    const body = [];
    // if data chunk is ready to be read then execute the callback function
    req.on("data", (chunk) => {
      // this is one of the event driven code pattern where whenever a data chunk comes in ready to be read state the folloeing callback gets executed.
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Buffer.concat give Buffer type object and toString() converts this into string type.
      console.log(parsedBody);
      const info = parsedBody.split("=")[1];
      fs.writeFileSync("formInfo.txt", info);
    });
    res.statusCode = 302; // 302 code - for redirection
    res.setHeader("Location", "/");
    return res.end();
  }
};

// ways to export this module -

// module.exports = requestHandler;

// // if you want to export some data with the function
// module.exports = {
//   handler: requestHandler,
//   someText: "hello",
// };

// // another way for doing the above thing
// module.exports.handler = requestHandler;
// module.exports.someText = "Whastsup";

// yet another shotcut
exports.handler = requestHandler;
exports.someText = "Whastsup";
