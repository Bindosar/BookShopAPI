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
    const maktabas = await Maktaba.findAll();
    res.json(maktabas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.maktabaUpdate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `https://${req.get("host")}/media/${req.file.name}`;
    }
    await req.maktaba.update(req.body);
    res.status(204).end;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.maktabaDelete = async (req, res) => {
  const { maktabaId } = req.params;
  try {
    const foundMaktaba = await Maktaba.findByPk(maktabaId);
    if (foundMaktaba) {
      await foundMaktaba.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Maktaba not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
