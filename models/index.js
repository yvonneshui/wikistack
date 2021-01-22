const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false, // stop terminal to show SQL commands while creating table
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "title",
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
});

module.exports = {
  db,
  Page,
  User,
};
