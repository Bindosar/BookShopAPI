const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  maktabaCreate,
  maktabaList,
} = require("../controllers/maktabaController");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${new Date()} ${file.originalname}`);
  },
});
const upload = multer({
  storage,
});

// Maktaba Create
router.post("/", upload.single("image"), maktabaCreate);

// List
router.get("/", maktabaList);

module.exports = router;
