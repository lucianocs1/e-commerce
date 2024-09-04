const User = require("../models/userModel");

const addToCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
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
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Adicionado");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao adicionar ao carrinho", error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (userData.cartData && userData.cartData[req.body.itemId] > 0) {
      userData.cartData[req.body.itemId] -= 1;
      await User.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );
      res.send("Removido");
    } else {
      res
        .status(400)
        .json({
          message: "Item não encontrado no carrinho ou quantidade inválida",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao remover do carrinho", error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(userData.cartData || {});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar o carrinho", error: error.message });
  }
};

module.exports = { addToCart, removeFromCart, getCart };
