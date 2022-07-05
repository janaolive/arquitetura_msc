const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModels = require('../../../models/productsModels');
const {
  mockProducts,
  resultNewProduct,
  insertNewProduct,
  alteredProduct,
} = require('../mocks/productsMock');

describe('Tabela Products ==> Camada Models', () => {
  describe('productsModels', () => {
    describe('#getAllProducts', () => {
      describe('Quando a tabela possuir dados', () => {
        it('retornar dados', async () => {

          sinon.stub(connection, 'execute').resolves([mockProducts]);

          const products = await productsModels.getAllProducts();
          expect(products).to.be.equal(products);

          connection.execute.restore();
        })
      })
    });

    describe('#getProductById', () => {
      describe('Quando solicitar um produto por id', () => {
        it('retornar informações do id', async () => {
          const idSelected = 2;

          sinon.stub(connection, 'execute').resolves([mockProducts[idSelected]]);

          const products = await productsModels.getProductById(idSelected);
          expect(products).to.be.eq(mockProducts[idSelected]);

          connection.execute.restore();
        })
      })
    });

  });
});