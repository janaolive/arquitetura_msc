const productsServices = require('../services/productsServices');

const getAllProducts = async (req, res) => {
  const products = await productsServices.getAllProducts();
  res.status(200).json(products);
};
 
const getProductById = async (req, res) => {
  const { id } = req.params;
  
  const product = await productsServices.getProductById(id);
    if (!product || product.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }   

    res.status(200).json(product);  
};

module.exports = {
  getAllProducts,
  getProductById,
};