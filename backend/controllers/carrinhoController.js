const User = require("../models/userModel");

const addCarrinho = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Inicializa dadosCarrinho se não existir
    if (!userData.dadosCarrinho) {
      userData.dadosCarrinho = {};
    }

    // Inicializa a quantidade do item se não existir
    if (!userData.dadosCarrinho[req.body.itemId]) {
      userData.dadosCarrinho[req.body.itemId] = 0;
    }

    userData.dadosCarrinho[req.body.itemId] += 1;
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { dadosCarrinho: userData.dadosCarrinho }
    );
    res.send("Adicionado");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao adicionar ao carrinho", error: error.message });
  }
};

const removeDoCarrinho = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    if (userData.dadosCarrinho && userData.dadosCarrinho[req.body.itemId] > 0) {
      userData.dadosCarrinho[req.body.itemId] -= 1;
      await User.findOneAndUpdate(
        { _id: req.user.id },
        { dadosCarrinho: userData.dadosCarrinho }
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

const getCarrinho = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(userData.dadosCarrinho || {});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar o carrinho", error: error.message });
  }
};

module.exports = { addCarrinho, removeDoCarrinho, getCarrinho };
