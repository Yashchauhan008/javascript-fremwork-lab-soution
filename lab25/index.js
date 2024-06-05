// index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
const mongoURI = 'mongodb://localhost:27017/mydatabase';

const studentRouter = require('./student.router');

app.use(cors());
app.use(bodyParser.json());
app.use("/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello from Mongoose!");
});

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
