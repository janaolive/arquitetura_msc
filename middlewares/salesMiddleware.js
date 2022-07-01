const validateSalesId = async (req, res, next) => {
  const sales = req.body;
    
  const saleIdFind = sales.every((saleId) => saleId.productId);

    if (!saleIdFind) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    
    next();
};
  
  // const validateProductId = (req, res, next) => {
  //   const { productId } = req.body;
    
  //   if (!productId) {
  //     return res.status(404).json({ message: 'Product not found' });
  //   }
  
  // next();
  // };
  
const validateSalesQuantity = async (req, res, next) => {
  const sales = req.body;
    
  const findLess = sales.every((sale) => sale.quantity < 1);
  const findQuantity = sales.every((sale) => sale.quantity);

    if (findLess) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
      
    if (!findQuantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }

  next();
};

  module.exports = {
    validateSalesId,
    validateSalesQuantity,
    // validateProductId,
  };