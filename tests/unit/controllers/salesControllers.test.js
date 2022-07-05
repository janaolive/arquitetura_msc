const { expect } = require('chai');
const sinon = require('sinon');

const salesServices = require('../../../services/salesServices');
const salesControllers = require('../../../controllers/salesControllers');

const { mockSales, saleId } = require('../mocks/salesMock');

describe('Tabela Sales ==> Camada Controllers', () => {
  describe('salesControllers', () => {
    describe('#getAllSales', () => {
      describe('Quando a tabela possuir dados', () => {
        const req = {};
        const res = {};

        const before = async () => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(salesServices, 'getAllSales').resolves(mockSales);

          await salesControllers.getAllSales(req, res);
        }
        
        const after = () => {
          salesServices.getAllSales.restore();
        }
        
        it('deve chamar res.status = 200 e res.json com seus elementos', async () => {
          await before();

          expect(res.status.calledWith(200)).to.be.true;
          expect(res.json.calledWith(mockSales)).to.be.true;

          after();
        });
      });
    });
        
        
    describe('#getSaleById', () => {
      const req = {};
      const res = {};

      describe('Quando existir o id', () => {
        it('deve chamar res.status = 200 e res.json com dados do id', async () => {
          req.params = { id: 1 };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();
            
          sinon.stub(salesServices, 'getSaleById').resolves(saleId);

          await salesControllers.getSaleById(req, res);
          expect(res.status.calledWith(200)).to.be.true;
          expect(res.json.calledWith(saleId)).to.be.true;
              
          salesServices.getSaleById.restore();
        });
      });
       
      describe('Quando não existir o id', () => {
        it('deve chamar res.status = 404 e mensagem de venda não encontrada', async () => {
          req.params = { id: 12 };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();
            
          sinon.stub(salesServices, 'getSaleById').resolves(undefined);

          await salesControllers.getSaleById(req, res);
          expect(res.status.calledWith(404)).to.be.true;
          expect(res.json.calledWith({ message: 'Sale not found' })).to.be.true;
            
          salesServices.getSaleById.restore();
        
        })
      })
    });
  });
});
