const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("The app is running on localhost:8000 ! ");
});
