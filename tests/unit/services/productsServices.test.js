const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../models/productsModels');
const productsServices = require('../../../services/productsServices');

const mockProducts = require('../mocks/productsMock');

describe('Tabela Products ==> Camada Service', () => {
  describe('productsService', () => {
    describe('#getAllProducts', () => {
      describe('Quando a tabela possuir dados', () => {
        it('retornar dados', async () => {

          sinon.stub(productsModel, 'getAllProducts').resolves([mockProducts]);

          const products = await productsService.getAllProducts();
          expect(products).to.be.eq(products);
          
          productsModel.getAllProducts.restore();
        })
      })
    })

    describe('#getProductById', () => {
      describe('Quando solicitar um produto por id', () => {
        it('retornar informações do id', async () => {
          const idSelected = 2;

          sinon.stub(productsModel, 'getProductById').resolves([mockProducts[idSelected]]);

          const products = await productsService.getProductById(idSelected);
          expect(products).to.be.eq(mockProducts[idSelected]);
          
          productsModel.getProductById.restore();
        })
      })
    });
  });
});