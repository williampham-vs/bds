require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectionDatabase } = require("./configs/db-connect");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "DELETE", "GET"],
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

connectionDatabase()

const port = process.env.PORT || 8888;

const listener = app.listen(port, () => {
  console.log(`::: Server on ${listener.address().port}`);
});
