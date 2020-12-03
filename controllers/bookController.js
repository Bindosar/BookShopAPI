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
    const books = await Book.findAll({
      attributes: { exclude: ["maktabaId", "createdAt", "updatedAt"] },
      include: {
        model: Maktaba,
        as: "maktaba",
        attributes: ["name"],
      },
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bookUpdate = async (req, res, next) => {
  try {
    await req.book.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.fetchBook = async (bookId, next) => {
  try {
    const book = await Book.findByPk(bookId);
    return book;
  } catch (error) {
    next(error);
  }
};
exports.bookDelete = async (req, res, next) => {
  try {
    await req.book.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
