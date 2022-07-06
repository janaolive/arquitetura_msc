const connection = require('./connection');

const getAllSales = async () => {
   const query = `SELECT sale_id AS saleId, product_id AS productId, quantity, date
                  FROM StoreManager.sales_products AS sProducts
                  INNER JOIN StoreManager.sales AS sales
                  ON sProducts.sale_id = sales.id
                  ORDER BY sale_id, product_id`;

  const [sales] = await connection.execute(query);
  return sales;
};

const getSaleById = async (id) => {
  const query = `SELECT product_id AS productId, quantity, date
                 FROM StoreManager.sales_products AS sProducts
                 INNER JOIN StoreManager.sales AS sales
                 ON sProducts.sale_id = sales.id
                 WHERE sProducts.sale_id = ?`;  

  const [sale] = await connection.execute(query, [id]);
  return sale;
};

// const registerSale = async (sales) => {
//   const [{ insertId }] = await connection.execute(
//     'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
//   );
  
//   const newSale = sales.map(({ productId, quantity }) => 
//     connection.execute(
//       `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
//         VALUES (?, ?, ?)`,
//         [insertId, productId, quantity],
//   ));
  
//   await Promise.all(newSale);

//     return {
//       id: insertId,
//       itemSold: { sales },
//     };
// };

// const editSale = async (id, sales) => {
//   const saleEdit = sales.map(({ productId, quantity }) => 
//     connection.execute(
//       `UPDATE StoreManager.sales_products SET quantity=? 
//         WHERE sale_id=? AND product_id=?`,
//         [quantity, id, productId],
//   ));
  
//   await Promise.all(saleEdit);

//     return {
//       saleId: id,
//       itemUpdate: sales,
//     };
// };

// const deleteSale = async (id) => {
//   const query = 'DELETE FROM StoreManager.sales WHERE id=?';
//   await connection.execute(query, [id]);
// };

module.exports = {
  getAllSales,
  getSaleById,
  // registerSale,
  // editSale,
//   deleteSale,
};