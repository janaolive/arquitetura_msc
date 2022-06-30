const salesModels = require('../models/salesModels');

const getAllSales = async () => {
  const sales = await salesModels.getAllSales();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  return sale;
};

const registerSale = async (sales) => {
  const newSale = await salesModels.registerSale(sales);
  return newSale;
};

module.exports = {
  getAllSales,
  getSaleById,
  registerSale,
};