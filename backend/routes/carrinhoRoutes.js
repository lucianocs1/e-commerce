const express = require("express");
const {
  addToCart,
  removeFromCart,
  getCart,
} = require("../controllers/carrinhoController");
const fetchUser = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/addtocart", fetchUser, addToCart);
router.post("/removefromcart", fetchUser, removeFromCart);
router.post("/getcart", fetchUser, getCart);

module.exports = router;

// const express = require("express"); // Importa o módulo Express para criar e gerenciar rotas
// const {
//   addToCart,
//   removeFromCart,
//   getCart,
// } = require("../controllers/cartController"); // Importa os controladores de carrinho
// const fetchUser = require("../middleware/authMiddleware"); // Importa o middleware de autenticação
// const router = express.Router(); // Cria um roteador Express


//  // Rota para adicionar um item ao carrinho.
//  // Usa o método POST e requer autenticação para adicionar um item ao carrinho do usuário.

// router.post("/addtocart", fetchUser, addToCart);


//  // Rota para remover um item do carrinho.
//  // Usa o método POST e requer autenticação para remover um item do carrinho do usuário.

// router.post("/removefromcart", fetchUser, removeFromCart);


//  // Rota para obter os itens do carrinho.
//  // Usa o método POST e requer autenticação para retornar os itens do carrinho do usuário.
 
// router.post("/getcart", fetchUser, getCart);

// module.exports = router; // Exporta o roteador para ser usado em outras partes da aplicação
