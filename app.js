const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRouters = require("./router/books");
const path = require("path");
const db = require("./db/models");
const maktabaRouters = require("./router/maktabas");
app.use(cors());

app.use(bodyParser.json());

app.use("/maktabas", maktabaRouters);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use((err, req, res, next) => {
  console.log("Handiling middleware error ", err);
});

app.use((err, req, res, next) => {
  res
    .status(err.status)
    .json({ message: err.message || "Interal Server Error" });
});
const run = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("Connection to the database successful ! ");
    await app.listen(8000, () => {
      console.log("The app is running on localhost:8000 ! ");
    });
  } catch (error) {
    console.log("Error connecting tp the database : ", error);
  }
};
run();
