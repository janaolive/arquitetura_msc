const mockProducts = [{
	id: 1,
	name: 'Martelo de Thor',
  quantity: 10,
},
{
	id: 2,
	name: 'Traje de encolhimento',
	quantity: 20,
},
{
	id: 3,
	name: 'Escudo do Capitão América',
	quantity: 30,
  }];

const productIdResult = { 
  id: 2,
  name:'Traje de encolhimento',
  quantity: 20,
};

module.exports = {
  mockProducts,
  productIdResult,
};