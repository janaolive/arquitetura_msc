const mockSales = [{
	saleId: 1,
	date: '2022-04-21T14:45:54.000Z',
  productId: 1,
  quantity: 5,
},
{
  saleId: 1,
	date: '2022-04-21T14:45:54.000Z',
	productId: 2,
	quantity: 10,
},
{
	saleId: 2,
	date: '2022-04-21T14:45:54.000Z',
	productId: 3,
	quantity: 15,
}];

const saleId = [
  {
    date: '2022-04-21T14:45:54.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2022-04-21T14:45:54.000Z',
    productId: 2,
    quantity: 10,
  },
];

const saleResult = {
  id: 1,
  itemSold: [{
    productId: 1,
    quantity: 3,
  }]
};

const registerSale = [{
  productId: 1,
  quantity: 3,
}]

const alteredSale = [
  {
    saleId: 1,
    itemUpdated: [{
      productId: 1,
      quantity: 6,
    }]
  },
  {
    saleId: 2,
    itemUpdated: [{
      productId: 2,
      quantity: 6,
    }]
  },
];

const editSale = [
  {
    saleId: 1,
    products: [{
      productId: 1,
      quantity: 6,
    }]
  },
  {
    saleId: 2,
    products: [{
      productId: 2,
      quantity: 6,
    }]
  },
];

module.exports = {
  mockSales,
  saleId,
   saleResult,
  registerSale,
  alteredSale,
  editSale,
};