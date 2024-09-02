const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && req.body.password === user.password) {
    const token = jwt.sign({ user: { id: user.id, name: user.name } }, 'secret_ecom');
    res.json({ success: true, token, username: user.name });
  } else {
    res.status(400).json({ success: false, errors: 'Por favor, tente com e-mail/senha corretos' });
  }
};

const signup = async (req, res) => {
  const check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: 'Usuário existente' });
  }

  const cart = Array.from({ length: 300 }, () => 0);
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const token = jwt.sign({ user: { id: user.id, name: user.name } }, 'secret_ecom');
  res.json({ success: true, token, username: user.name });
};

module.exports = { login, signup };

// const User = require('../models/userModel'); // Importa o modelo de usuário
// const jwt = require('jsonwebtoken'); // Importa o módulo para geração de tokens JWT

// const login = async (req, res) => {
//   try {
//     // Busca o usuário pelo e-mail fornecido
//     const user = await User.findOne({ email: req.body.email });

//     // Verifica se o usuário existe e se a senha corresponde
//     if (user && req.body.password === user.password) {
//       // Gera um token JWT com o ID e nome do usuário
//       const token = jwt.sign({ user: { id: user.id, name: user.name } }, 'secret_ecom', { expiresIn: '1h' });

//       // Retorna o token e o nome de usuário
//       res.json({ success: true, token, username: user.name });
//     } else {
//       // Retorna uma mensagem de erro se as credenciais forem inválidas
//       res.status(400).json({ success: false, errors: 'Email ou senha incorretos' });
//     }
//   } catch (error) {
//     // Tratamento de erros gerais
//     res.status(500).json({ success: false, errors: 'Erro no servidor' });
//   }
// };

// const signup = async (req, res) => {
//   try {
//     // Verifica se já existe um usuário com o e-mail fornecido
//     const existingUser = await User.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, errors: 'E-mail já cadastrado' });
//     }

//     // Inicializa o carrinho com um array de 300 itens, todos com quantidade zero
//     const cart = Array.from({ length: 300 }, () => 0);

//     // Cria um novo usuário com os dados fornecidos
//     const user = new User({
//       name: req.body.username,
//       email: req.body.email,
//       password: req.body.password, // Em um sistema real, você deve hash a senha antes de salvar
//       cartData: cart,
//     });

//     // Salva o novo usuário no banco de dados
//     await user.save();

//     // Gera um token JWT para o novo usuário
//     const token = jwt.sign({ user: { id: user.id, name: user.name } }, 'secret_ecom', { expiresIn: '1h' });

//     // Retorna o token e o nome de usuário
//     res.json({ success: true, token, username: user.name });
//   } catch (error) {
//     // Tratamento de erros gerais
//     res.status(500).json({ success: false, errors: 'Erro no servidor' });
//   }
// };

// module.exports = { login, signup }; // Exporta as funções para serem usadas em outras partes da aplicação
