const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://brunolebrao:Enrico-2017@cluster0-qghav.mongodb.net/registerDev?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
