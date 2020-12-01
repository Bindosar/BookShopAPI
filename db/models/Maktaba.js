const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Maktaba = sequelize.define("Maktaba", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  SequelizeSlugify.slugifyModel(Maktaba, {
    source: ["name"],
  });
  return Maktaba;
};
