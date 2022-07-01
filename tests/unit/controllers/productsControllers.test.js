const { expect } = require('chai');
const sinon = require('sinon');

const productsServices = require('../../../services/productsServices');
const productsControllers = require('../../../productsControllers');

const {
  mockProducts,
  productIdResult,
  resultNewProduct,
  insertNewProduct,
  // alteredProduct,
}  = require('../mocks/productsMock');

describe('Tabela Products ==> Camada Controller', () => {
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

    describe('#registerProduct', () => {
      const req = {};
      const res = {};
  
      describe('Quando registrar um produto', () => {
        it('deve chamar res.status = 201 e res.json com os dados cadastrados', async () => {
        req.body = insertNewProduct;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
          
        sinon.stub(productsServices, 'registerProduct').resolves(resultNewProduct);

        await productsControllers.registerProduct(req, res);
        expect(res.status.calledWith(201)).to.be.true;
        expect(res.json.calledWith(resultNewProduct)).to.be.true;
          
        productsServices.registerProduct.restore();
    
      })
    })
  })

    describe('#editProduct', () => {
      const req = {};
      const res = {};

      describe('Quando um produto for editado', () => {
        it('deve chamar res.status = 200 e res.json com os dados alterados', async () => {
        req.params = { id: 1 };
        req.body = insertNewProduct;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        
        sinon.stub(productsService, 'getProductById').resolves(true);
        sinon.stub(productsService, 'editProduct').resolves(resultNewProduct);

        await productsControllers.editProduct(req, res);
        expect(res.status.calledWith(200)).to.be.true;
        expect(res.json.calledWith(resultNewProduct)).to.be.true;
        
        productsServices.editProduct.restore();
        productsServices.getProductById.restore();
  
      })
    })
  
      describe('Quando o id do produto não existir', () => {
        it('deve chamar res.status = 404 e res.json com a mensagem de produto não encontrado', async () => {
        req.params = { id: 12 };
        req.body = insertNewProduct;
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        
        sinon.stub(productsServices, 'getProductById').resolves(false);
        sinon.stub(productsServices, 'editProduct').resolves({ message: 'Product not found' });

        await productsControllers.editProduct(req, res);
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
        
        productsServices.getProductById.restore();

      })
    })
  })

    describe('#deleteProduct', () => {
      const req = {};
      const res = {};

      describe('Quando o produto não for deletado', () => {
        it('deve chamar res.status = 404 e res.json com a mensagem de produto não encontrado', async () => {
        req.params = { id: 25 };
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
      
        sinon.stub(productsServices, 'getProductById').resolves(false);
        sinon.stub(productsServices, 'deleteProduct').resolves();

        await productsControllers.deleteProduct(req, res);
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
      
        productsServices.deleteProduct.restore();
        productsServices.getProductById.restore();

      })
    })

      describe('Quando o produto for deletado', () => {
        it('deve chamar res.status = 204', async () => {
          req.params = { id: 1 };
          res.status = sinon.stub().returns(res);
          res.end = sinon.stub();
          
          sinon.stub(productsServices, 'getProductById').resolves(true);
          sinon.stub(productsServices, 'deleteProduct').resolves();

          await productsControllers.deleteProduct(req, res);
          expect(res.status.calledWith(204)).to.be.true;
          expect(res.end.called).to.be.true;
          
          productsServices.deleteProduct.restore();
          productsServices.getProductById.restore();
      })
    })
  })

  });
});