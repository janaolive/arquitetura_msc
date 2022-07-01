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

const registerProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productsServices.registerProduct({ name });
     res.status(201).json(newProduct);  
  } catch (error) {
    res.status(409).json({ message: 'Product already exists' });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const productToUpdate = await productsServices.editProduct(id, { name });
  const findProduct = await productsServices.getProductById(id);
    if (!findProduct) return res.status(404).json({ message: 'Product not found' });
      return res.status(200).json(productToUpdate);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  const findProduct = await productsServices.getProductById(id);
    if (!findProduct) return res.status(404).json({ message: 'Product not found' });
  
  await productsServices.deleteProduct(id);
    return res.status(204).end();
};
module.exports = {
  getAllProducts,
  getProductById,
  registerProduct,
  editProduct,
  deleteProduct,
};