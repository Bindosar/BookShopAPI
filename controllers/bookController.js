const { Book } = require("../db/models");

exports.bookCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `https://${req.get("host")}/media/${req.file.filename}`;
    }
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bookList = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bookUpdate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `https://${req.get("host")}/media/${req.file.name}`;
    }
    await req.book.update(req.body);
    res.status(204).end;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.bookDelete = async (req, res) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findByPk(bookId);
    if (foundBook) {
      await foundBook.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
