const db = require("./db/db");
const BookModel = require("./models/bookModels");
const mongoose = require("mongoose");

db(
  () => {
    BookModel.find((err, data) => {
      if (err) {
        console.log("err", err);
        return;
      } else {
        console.log("data", data);
        mongoose.disconnect();
      }
    });
  }
);
