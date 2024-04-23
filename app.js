const http = require("http");
const express = require("express");
const app = express();
app.use((request, response, next) => {
  console.log("First Middleware");
  next();
});
app.use((request, response, next) => {
  console.log("Second Middleware");
});
const server = http.createServer(app);
app.listen(3300);
