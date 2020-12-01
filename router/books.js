const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  bookCreate,
  bookList,
  bookUpdate,
  bookDelete,
} = require("../controllers/bookController");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${new Date()} ${file.originalname}`);
  },
});
const upload = multer({
  storage,
});

// DELETE
router.delete("/:bookId", bookDelete);

// Book Create
router.post("/", upload.single("image"), bookCreate);

// UPDATE
router.put("/:bookId", upload.single("image"), bookUpdate);

// List
router.get("/", bookList);

module.exports = router;
