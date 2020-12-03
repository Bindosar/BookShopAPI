const { Maktaba } = require("../db/models");

exports.maktabaCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `https://${req.get("host")}/media/${req.file.filename}`;
    }
    const newMaktaba = await Maktaba.create(req.body);
    res.status(201).json(newMaktaba);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.maktabaList = async (req, res) => {
  try {
    const maktabas = await Maktaba.findAll({
      attributes: ["createdAt", "updatedAt"],
      include: [
        {
          model: Book,
          as: bookies,
          attributes: ["id"],
        },
      ],
    });
    res.json(maktabas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
