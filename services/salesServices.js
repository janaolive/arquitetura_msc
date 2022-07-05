const salesModels = require('../models/salesModels');

const getAllSales = async () => {
  const sales = await salesModels.getAllSales();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  return sale;
};

module.exports = {
  getAllSales,
  getSaleById,
};