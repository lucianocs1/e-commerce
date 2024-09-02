const User = require('../models/userModel');

const addToCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });
    
    if (!userData) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Inicializa cartData se não existir
    if (!userData.cartData) {
      userData.cartData = {};
    }

    // Inicializa a quantidade do item se não existir
    if (!userData.cartData[req.body.itemId]) {
      userData.cartData[req.body.itemId] = 0;
    }

    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send('Adicionado');
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar ao carrinho', error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (userData.cartData && userData.cartData[req.body.itemId] > 0) {
      userData.cartData[req.body.itemId] -= 1;
      await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
      res.send('Removido');
    } else {
      res.status(400).json({ message: 'Item não encontrado no carrinho ou quantidade inválida' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover do carrinho', error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json(userData.cartData || {});
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o carrinho', error: error.message });
  }
};

module.exports = { addToCart, removeFromCart, getCart };

// const User = require('../models/userModel'); // Importa o modelo de usuário

// const addToCart = async (req, res) => {
//   try {
//     // Busca os dados do usuário pelo ID presente no token
//     const userData = await User.findOne({ _id: req.user.id });
    
//     // Verifica se o usuário foi encontrado
//     if (!userData) {
//       return res.status(404).json({ message: 'Usuário não encontrado' });
//     }

//     // Inicializa `cartData` como um objeto vazio se ainda não existir
//     if (!userData.cartData) {
//       userData.cartData = {};
//     }

//     // Inicializa a quantidade do item como 0 se ainda não existir no carrinho
//     if (!userData.cartData[req.body.itemId]) {
//       userData.cartData[req.body.itemId] = 0;
//     }

//     // Incrementa a quantidade do item no carrinho
//     userData.cartData[req.body.itemId] += 1;

//     // Atualiza o carrinho de compras do usuário no banco de dados
//     await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });

//     // Responde ao cliente com uma mensagem de sucesso
//     res.send('Adicionado');
//   } catch (error) {
//     // Tratamento de erro em caso de falha na operação
//     res.status(500).json({ message: 'Erro ao adicionar ao carrinho', error: error.message });
//   }
// };

// const removeFromCart = async (req, res) => {
//   try {
//     // Busca os dados do usuário pelo ID presente no token
//     const userData = await User.findOne({ _id: req.user.id });

//     // Verifica se o usuário foi encontrado
//     if (!userData) {
//       return res.status(404).json({ message: 'Usuário não encontrado' });
//     }

//     // Verifica se o carrinho e o item existem e se a quantidade do item é maior que 0
//     if (userData.cartData && userData.cartData[req.body.itemId] > 0) {
//       // Decrementa a quantidade do item no carrinho
//       userData.cartData[req.body.itemId] -= 1;

//       // Atualiza o carrinho de compras do usuário no banco de dados
//       await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });

//       // Responde ao cliente com uma mensagem de sucesso
//       res.send('Removido');
//     } else {
//       // Responde com uma mensagem de erro se o item não for encontrado ou a quantidade for inválida
//       res.status(400).json({ message: 'Item não encontrado no carrinho ou quantidade inválida' });
//     }
//   } catch (error) {
//     // Tratamento de erro em caso de falha na operação
//     res.status(500).json({ message: 'Erro ao remover do carrinho', error: error.message });
//   }
// };

// const getCart = async (req, res) => {
//   try {
//     // Busca os dados do usuário pelo ID presente no token
//     const userData = await User.findOne({ _id: req.user.id });

//     // Verifica se o usuário foi encontrado
//     if (!userData) {
//       return res.status(404).json({ message: 'Usuário não encontrado' });
//     }

//     // Responde com os dados do carrinho ou um objeto vazio se o carrinho estiver vazio
//     res.json(userData.cartData || {});
//   } catch (error) {
//     // Tratamento de erro em caso de falha na operação
//     res.status(500).json({ message: 'Erro ao buscar o carrinho', error: error.message });
//   }
// };

// module.exports = { addToCart, removeFromCart, getCart }; // Exporta as funções para serem usadas em outras partes da aplicação
