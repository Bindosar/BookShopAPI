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

// router.param("maktabaId", async (req, res, next, maktabaId) => {
//   const maktaba = await fetchMaktaba(maktabaId, next);
//   if (maktaba) {
//     req.maktaba = maktaba;
//     next();
//   } else {
//     const err = new Error("Maktaba Not Found");
//     err.status = 404;
//     next(err);
//   }
// });

// Maktaba Create
router.post("/", upload.single("image"), maktabaCreate);

// List
router.get("/", maktabaList);

module.exports = router;
