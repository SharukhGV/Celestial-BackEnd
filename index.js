const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");

app.use(cors());

// app.use(express.urlencoded({ extended: true }));


let starController = require("./controllers/starController");
app.use("/stars", starController);

app.get("/", (req, res) => {
    res.send("This is All the Stars from the Game...");
  });



  
  app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found!" });
  });


module.exports = app
