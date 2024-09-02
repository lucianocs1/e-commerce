const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: 'Please authenticate using a valid token' });
  }

  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: 'Please authenticate using a valid token' });
  }
};

module.exports = fetchUser;

// const jwt = require('jsonwebtoken'); // Importa o módulo para manipulação de tokens JWT

// /**
//  * Middleware para verificar a autenticação do usuário.
//  * Verifica se um token JWT válido está presente no cabeçalho da requisição.
//  * Se o token for válido, adiciona os dados do usuário à requisição e chama o próximo middleware.
//  * Caso contrário, responde com um erro de autenticação.
//  */
// const fetchUser = (req, res, next) => {
//   // Obtém o token do cabeçalho 'auth-token'
//   const token = req.header('auth-token');

//   // Verifica se o token está presente
//   if (!token) {
//     // Responde com erro se o token não for fornecido
//     return res.status(401).send({ errors: 'Por favor, autentique-se usando um token válido' });
//   }

//   try {
//     // Verifica e decodifica o token JWT
//     const data = jwt.verify(token, 'secret_ecom');
    
//     // Adiciona os dados do usuário à requisição
//     req.user = data.user;

//     // Chama o próximo middleware
//     next();
//   } catch (error) {
//     // Responde com erro se o token for inválido
//     res.status(401).send({ errors: 'Por favor, autentique-se usando um token válido' });
//   }
// };

// module.exports = fetchUser; // Exporta o middleware para ser usado em outras partes da aplicação
