const productsModels = require('../models/productsModels');

const getAllProducts = async () => {
  const products = await productsModels.getAllProducts();
  return products;
 };

const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  return product[0];
 };

module.exports = {
  getAllProducts,
  getProductById,
};