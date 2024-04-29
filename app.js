require("dotenv").config();
const express = require("express");
const app = express();

const PRODUCTS_ROUTES = require("./routes/products");
const connectdb = require("./db/connect");

const port = 3000;

app.get("/", (req, res) => {
  res.send("hyyyyyyyyyyyy");
});
app.use("/api/products", PRODUCTS_ROUTES);

const Start = async function () {
  try {
    await connectdb(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`${port} is connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

Start();
