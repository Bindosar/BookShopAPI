const express = require("express");
const cors = require("cors");
const app = express();
let books = require("./books");
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hello ! ");
  res.json({ message: "Hello World ! " });
});

app.delete("/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const foundedBook = books.find((book) => book.id === +bookId);
  if (foundedBook) {
    books = books.filter((book) => book !== foundedBook);
    res.status(204);
    res.end();
  } else {
  }
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(8000, () => {
  console.log("The app is running on localhost:8000 ! ");
});
