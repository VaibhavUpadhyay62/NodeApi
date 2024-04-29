const mongoose = require("mongoose");

const connectdb = (url) => {
  console.log("inside db");
  mongoose.connect(url);
};

module.exports = connectdb;
