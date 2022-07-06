const salesModels = require('../models/salesModels');

const getAllSales = async () => {
  const sales = await salesModels.getAllSales();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  return sale;
};

// const registerSale = async ({ productId, quantity }) => {
//   const newSale = await salesModels.registerSale({ productId, quantity });
//   return newSale;
// };

// const editSale = async (id, sales) => {
//   const saleEdit = await salesModels.editSale(id, sales);
//   return saleEdit;
// };

// const deleteSale = async (id) => {
//   await salesModels.deleteSale(id);
// };

module.exports = {
  getAllSales,
  getSaleById,
  // registerSale,
  // editSale,
  // deleteSale,
};