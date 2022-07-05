const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../services/productsServices');
const productsControllers = require('../../../controllers/productsControllers');

const { mockProducts, productIdResult } = require('../mocks/productsMock');

describe('Tabela Products ==> Camada Controllers', () => {
  describe('productsControllers', () => {
    describe('#getAllProducts', () => {
      describe('Quando a tabela possuir dados', () => {
        const req = {};
        const res = {};

        const before = async () => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(productsServices, 'getAllProducts').resolves(mockProducts);

          await productsControllers.getAllProducts(req, res);
        }

        const after = () => {
          productsServices.getAllProducts.restore();
        }

        it('deve chamar res.status = 200 e res.json com seus elementos', async () => {
          await before();

          expect(res.status.calledWith(200)).to.be.true;
          expect(res.json.calledWith(mockProducts)).to.be.true;

          after();
        });
      });
    });

    describe('#getProductById', () => {
      const req = {};
      const res = {};

      describe('Quando existir o id', () => {
        it('deve chamar res.status = 200 e res.json com dados do id', async () => {
          req.params = { id: 1 };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(productsServices, 'getProductById').resolves(productIdResult);

          await productsControllers.getProductById(req, res);
          expect(res.status.calledWith(200)).to.be.true;
          expect(res.json.calledWith(productIdResult)).to.be.true;

          productsServices.getProductById.restore();

        })
      })

      describe('Quando não existir o id', () => {
        it('deve chamar res.status = 404 e mensagem de produto não encontrado', async () => {
          req.params = { id: 12 };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(productsServices, 'getProductById').resolves(undefined);

          await productsControllers.getProductById(req, res);
          expect(res.status.calledWith(404)).to.be.true;
          expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;

          productsServices.getProductById.restore();

        })
      })
    })
  });
});