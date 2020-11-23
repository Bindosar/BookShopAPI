const express = require("express");
const router = express.Router();
const {
  bookCreate,
  bookList,
  bookUpdate,
  bookDelete,
} = require("../controllers/bookController");

// DELETE
router.delete("/:bookId", bookDelete);

// Book Create
router.post("/", bookCreate);

// UPDATE
router.put("/:bookId", bookUpdate);
// List
router.get("/", bookList);
