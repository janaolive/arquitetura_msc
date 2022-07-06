const salesServices = require('../services/salesServices');

const getAllSales = async (_req, res) => {
  const sales = await salesServices.getAllSales();
  res.status(200).json(sales); 
};
  
const getSaleById = async (req, res) => {
  const { id } = req.params;
 
  const sale = await salesServices.getSaleById(id);
    if (!sale || sale.length < 1) {
      return res.status(404).json({ message: 'Sale not found' });  
    }
 
    res.status(200).json(sale);  
};

// const registerSale = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const newSale = await salesServices.registerSale({ productId, quantity });
//      res.status(201).json(newSale);  
//   } catch (error) {
//     res.status(409).json({ message: 'Product not found' });
//   }
// };

// const editSale = async (req, res) => {
//   const { id } = req.params;
//   const sales = req.body;
  
//   const saleEdit = await salesServices.editSale(id, sales);
//     return res.status(200).json(saleEdit);
// };

// const deleteSale = async (req, res) => {
//   const { id } = req.params;
  
//   const findSale = await salesServices.getSaleById(id);
//     if (!findSale) return res.status(404).json({ message: 'Sale not found' });
  
//   await salesServices.deleteSale(id);
//     return res.status(204).end();
// };

module.exports = {
  getAllSales,
  getSaleById,
  // registerSale,
  // editSale,
  // deleteSale,
};