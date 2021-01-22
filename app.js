const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout");
const { db, Page, User } = require("./models");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
  console.log("hello world");
});

const init = async () => {
  try {
    await db.sync();
    app.listen(3000, () => {
      console.log("listening to port 3000");
    });
  } catch (error) {
    console.log("error");
  }
};

//await db.sync({force: true})  drop all tables and then recreate them

init(); //what is running when loading localhost
//app.listen would not run if database goes wrong
