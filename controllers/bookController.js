let books = require("../router/books");
const slugify = require("slugify");


const books = await Book.findAll({
  attributes: { exclude: ["createdAt", "updatedAt"] },
});

exports.bookCreate = async (req, res, next) => {
  try {
    const newBook = await Book.create(req, body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};

exports.bookList = (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.bookUpdate = (req, res) => {
  const {bookId} = req.params;
  try{
    const foundBook = await Book.findByPk(bookId);
    if(foundBook){
      await foundBook.update(req.body);
      res.status(204).end();
    }else{
      res.status(404).json({message : "Book not found "})
    }
  }catch(error){
    res.status(500).json({message : error.message});
  }
}
exports.bookDelete = async (req, res) => {
  const { bookId } = req.params;
  try{
    const foundBook = await Book.findByPk(bookId)
    if(foundBook){
      await foundBook.destroy()
      res.status(204).end();
    }else{
      res.status(404).json({message : "Book not found"})
    }
  }catch(err){
    res.status(500).json({message : error.message})
  }
};
