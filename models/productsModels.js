const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC;',
  );
  return products;
 };

const getProductById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=? ORDER BY id ASC;', [id],
  );
  return product;
 };

const registerProduct = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
    return {
      id: insertId,
      name, 
    };
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProduct,
};