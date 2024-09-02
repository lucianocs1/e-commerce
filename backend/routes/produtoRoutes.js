const express = require('express');

const {
  getAllProducts,
  getNewCollections,
  getPopularInWomen,
  getRelatedProducts,
  addProduct,
  removeProduct,
  editProduto,
  getProductById
} = require('../controllers/produtoController');
const router = express.Router();

router.get('/allproducts', getAllProducts);
router.get('/newcollections', getNewCollections);
router.get('/popularinwomen', getPopularInWomen);
router.get('/produto/:id', getProductById);
router.put("/edit/:id", editProduto);
router.post('/relatedproducts', getRelatedProducts);
router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);


module.exports = router;


// const express = require('express'); // Importa o módulo Express para criar e gerenciar rotas
// const {
//   getAllProducts,
//   getNewCollections,
//   getPopularInWomen,
//   getRelatedProducts,
//   addProduct,
//   removeProduct
// } = require('../controllers/productController'); // Importa os controladores de produtos

// const router = express.Router(); // Cria um roteador Express


//  // Rota para obter todos os produtos.
//  // Usa o método GET para retornar uma lista de todos os produtos disponíveis.

// router.get('/allproducts', getAllProducts);


//  // Rota para obter novas coleções de produtos.
//  // Usa o método GET para retornar os últimos produtos adicionados à coleção.

// router.get('/newcollections', getNewCollections);


//  // Rota para obter produtos populares na categoria "roupas".
//  // Usa o método GET para retornar os produtos mais populares dentro da categoria feminina.
 
// router.get('/popularinwomen', getPopularInWomen);


//  // Rota para obter produtos relacionados a uma categoria específica.
//  // Usa o método POST para retornar produtos relacionados à categoria fornecida no corpo da requisição.

// router.post('/relatedproducts', getRelatedProducts);


//  // Rota para adicionar um novo produto.
//  // Usa o método POST para adicionar um novo produto à base de dados.

// router.post('/addproduct', addProduct);


//  // Rota para remover um produto existente.
//  // Usa o método POST para remover um produto com base no ID fornecido no corpo da requisição.
 
// router.post('/removeproduct', removeProduct);

// module.exports = router; // Exporta o roteador para ser usado em outras partes da aplicação
