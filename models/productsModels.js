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

const editProduct = async (id, { name }) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name=? WHERE id = ?', [name, id],
  );
  return {
    id,
    name,
  };
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id=?', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProduct,
  editProduct,
  deleteProduct,
};