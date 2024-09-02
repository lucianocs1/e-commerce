const express = require('express');
const { login, signup } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;

// const express = require('express'); // Importa o módulo Express para criar e gerenciar rotas
// const { login, signup } = require('../controllers/authController'); // Importa os controladores de autenticação
// const router = express.Router(); // Cria um roteador Express


//  // Rota para o login do usuário.
//  // Usa o método POST para enviar as credenciais de login e autenticar o usuário.

// router.post('/login', login);


//  // Rota para o cadastro de um novo usuário.
//  // Usa o método POST para enviar os dados de cadastro e criar um novo usuário.

// router.post('/signup', signup);

// module.exports = router; // Exporta o roteador para ser usado em outras partes da aplicação
