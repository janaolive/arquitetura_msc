const mockProducts = [{
	id: 1,
	name: 'Martelo de Thor',
},
{
	id: 2,
	name: 'Traje de encolhimento',
},
{
	id: 3,
	name: 'Escudo do Capitão América',
}];

const productIdResult = { 
  id: 2,
  name:'Traje de encolhimento',
};

const insertNewProduct = {
  name: 'Capa da Mulher Maravilha',
};

const resultNewProduct = {
  id: 1,
  name: 'Martelo de Thor',
};


const alteredProduct = {
  id: 1,
  name: 'Capa da Mulher Maravilha',
};

module.exports = {
  mockProducts,
  productIdResult,
  resultNewProduct,
  insertNewProduct,
  alteredProduct,
};