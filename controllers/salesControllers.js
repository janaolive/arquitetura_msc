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

const registerSale = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const newSale = await salesServices.registerSale({ productId, quantity });
     res.status(201).json(newSale);  
  } catch (error) {
    res.status(409).json({ message: 'Product not found' });
  }
};
module.exports = {
  getAllSales,
  getSaleById,
  registerSale,
};