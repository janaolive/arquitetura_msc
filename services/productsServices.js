const productsModels = require('../models/productsModels');

const getAllProducts = async () => {
  const products = await productsModels.getAllProducts();
  return products;
 };

const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  return product[0];
};

const registerProduct = async ({ name }) => {
  const productsList = await productsModels.getAllProducts();
    const findProduct = productsList.find((product) => product.name === name);
      if (findProduct) {
        throw new Error('Product already exists');
      }

    const newProduct = await productsModels.registerProduct({ name });
      return newProduct;
};

const editProduct = async (id, { name }) => {
  const productToUpdate = await productsModels.editProduct(id, { name });
    return productToUpdate;
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProduct,
  editProduct,
};