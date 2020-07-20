// NODE WAY OF MAKING SERVER AND HANDLING REQUESTS AND RESPONSES
// const http = require("http");

// const routes = require("./routes");

// console.log(routes.someText);
// // event driven code i.e executing the callback whenever a req comes into the server or someone make a hit on the server.
// const server = http.createServer(routes.handler);

// const port = process.env.port || 3000;
// server.listen(port);

// EXPRESS WAY OF MAKING SERVER AND HANDLING REQUEST AND RESPONSES
const express = require("express");
const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h1>add-product</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in the middleware 1");
  res.send("<h1>root</h1>");
});

const port = process.env.port || 3000;
app.listen(port);
