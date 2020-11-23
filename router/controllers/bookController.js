let books = require("../books");
const slugify = require("slugify");

exports.bookCreate = (req, res) => {
  const id = books[books.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newBook = { id, slug, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.bookList = (req, res) => {
  res.json(cookies);
};

exports.bookUpdate = (req, res) => {
  const { bookId } = req.params;
  const foundBook = books.find((book) => book.id === +bookId);
  if (foundBook) {
    for (const key in req.body) foundBook[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

exports.bookDelete = (req, res) => {
  const { bookId } = req.params;
  const foundedBook = books.find((book) => book.id === +bookId);
  if (foundedBook) {
    books = books.filter((book) => book !== foundedBook);
    res.status(204);
    res.end();
  } else {
    res.status(404).json({ message: "Book not found  " });
  }
};
