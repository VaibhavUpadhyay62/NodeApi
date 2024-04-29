const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);
  const myData = await apiData;
  console.log(req.query);
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "i am getAllProductsTesting" });
};
module.exports = { getAllProducts, getAllProductsTesting };
