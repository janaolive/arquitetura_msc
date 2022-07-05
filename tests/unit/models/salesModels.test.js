const { expect } = require('chai');
const sinon = require('sinon');

const salesModels = require('../../../models/salesModels');
const connection = require('../../../models/connection');

const { mockSales, saleId } = require('../mocks/salesMock');

describe('Tabela Sales ==> Camada Models', () => {
  describe('salesModels', () => {
    describe('#getAllSales', () => {
      describe('Quando a tabela possuir dados', () => {
        it('retornar dados', async () => {

          sinon.stub(connection, 'execute').resolves([mockSales]);

          const result = await salesModels.getAllSales();
          expect(result).to.deep.eq(mockSales);
          
          connection.execute.restore();
          
        })
      })
    });

    describe('#getSaleById', () => {
      describe('Quando solicitar uma venda por id', () => {
        it('retornar informações do id', async () => {
          const idSelected = 2;

          sinon.stub(connection, 'execute').resolves([saleId[idSelected]]);

          const sale = await salesModels.getSaleById(idSelected);
          expect(sale).to.be.eq(saleId[idSelected]);
          
          connection.execute.restore();

        })
      })
    });

    // describe('#registerSale', () => {
    //   describe('Quando uma venda é registrada', () => {
    //     it('retorna as informações registradas', async () => {

    //       sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    //       const products = await salesModels.registerSale(registerSale);
    //       expect(products).to.deep.eq(saleResult);
          
    //       connection.execute.restore();
    //     })
    //   })
    // });   

    // describe('#deleteSale', () => {
    //   describe('Quando um produto é excluído', () => {
    //     it('não retorna informação', async () => {
    //       const idDeleted = 1;

    //       sinon.stub(connection, 'execute').resolves();

    //       const products = await salesModels.deleteSale(idDeleted);
    //       expect(products).to.deep.eq(undefined);
          
    //       connection.execute.restore();
          
    //     })
    //   })
    // });
  });
});