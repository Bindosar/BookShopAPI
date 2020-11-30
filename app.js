const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRouters = require("./router/books");
app.use(cors());

app.use(bodyParser.json());

app.use("/books", bookRouters);

app.use((err, req, res, next) => {
  console.log("Handiling middleware error ", err);
});

app.use((req, res, next) => {
  res
    .status(err.status)
    .json({ message: err.message || "Interal Server Error" });
});
const run = async () => {
  try {
    await debug.sequelize.sync();
    console.log("Connection to the database successful ! ");
    await app.listen(8000, () => {
      console.log("The app is running on localhost:8000 ! ");
    });
  } catch (error) {
    console.log("Error connecting tp the database : ", error);
  }
};
run();
