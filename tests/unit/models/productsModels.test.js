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

describe('Tabela Products ==> Camada Model', () => {
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

    // describe('#registerProduct', () => {
    //   describe('Quando criar um produto', () => {
    //     it('retorna as informações registradas', async () => {

    //       sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    //       const products = await productsModels.registerProduct(insertNewProduct);
    //       expect(products).to.deep.eq(resultNewProduct);
          
    //       connection.execute.restore();
    //     })
    //   })
    // });   
    
    // describe('#editProduct', () => {
    //   describe('Quando um produto é atualizado', () => {
    //     it('retorna as informações atualizadas', async () => {

    //       sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    //       const products = await productsModels.editProduct(alteredProduct);
    //       expect(products).to.deep.eq(alteredProduct);
          
    //       connection.execute.restore();
    //     })
    //   })
    // }); 

    // describe('#deleteProduct', () => {
    //   describe('Quando um produto é excluído', () => {
    //     it('não retorna informação', async () => {
    //       const idDeleted = 1;

    //       sinon.stub(connection, 'execute').resolves();

    //       const products = await productsModels.deleteProduct(idDeleted);
    //       expect(products).to.deep.eq(undefined);
          
    //       connection.execute.restore();
    //     })
    //   })
    // });
  });
});