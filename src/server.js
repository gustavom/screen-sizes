// server
const express = require("express");
const server = express();

// static files
server.use(express.static("./public"));

// template engine
server.set("view engine", "njk");
const nunjucks = require("nunjucks");
nunjucks.configure("./src/views", {
  autoescape: true,
  express: server,
  noCache: true
});

// Routes
server.get("/", function(res, res) {
  return res.render("pages/home");
});

// Server port listen
server.listen(3000);
