const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../models/productsModels');
const productsServices = require('../../../services/productsServices');

const { mockProducts } = require('../mocks/productsMock');

describe('Tabela Products ==> Camada Service', () => {
  describe('productsServices', () => {
    describe('#getAllProducts', () => {
      describe('Quando a tabela possuir dados', () => {
        it('retornar dados', async () => {

          sinon.stub(productsModels, 'getAllProducts').resolves([mockProducts]);

          const products = await productsServices.getAllProducts();
          expect(products).to.be.eq(products);
          
          productsModels.getAllProducts.restore();
        })
      })
    })

    describe('#getProductById', () => {
      describe('Quando solicitar um produto por id', () => {
        it('retornar informações do id', async () => {
          const idSelected = 2;

          sinon.stub(productsModels, 'getProductById').resolves([mockProducts[idSelected]]);

          const products = await productsServices.getProductById(idSelected);
          expect(products).to.be.eq(mockProducts[idSelected]);
          
          productsModels.getProductById.restore();
        })
      })
    });
  });
});