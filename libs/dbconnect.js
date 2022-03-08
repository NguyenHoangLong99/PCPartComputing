// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");

/// Thông tin Database Collection / Tables
const userName = "username cua ong";
const userPassword = "password cua ong";

const dbName = "ATN_SHOP";

const url = "thay = link mongodb cua ong";

function connectDB(xURL) {
  // kết nối MongoDB bằng LIB Mongoose
  mongoose.connect(
    xURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("\n Error !", err);
      } else {
        console.log("\n DB connected !");
      }
    }
  );
}

module.exports = {
  connectDB: connectDB,
  xURL: url,
};
