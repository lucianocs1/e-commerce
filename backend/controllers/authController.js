const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && req.body.password === user.password) {
    const token = jwt.sign(
      { user: { id: user.id, name: user.name } },
      "secret_ecom"
    );
    res.json({ success: true, token, username: user.name });
  } else {
    res
      .status(400)
      .json({
        success: false,
        errors: "E-mail ou senha está incorreto",
      });
  }
};

const signup = async (req, res) => {
  const check = await User.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Este e-mail já está em uso" });
  }

  const cart = Array.from({ length: 300 }, () => 0);
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const token = jwt.sign(
    { user: { id: user.id, name: user.name } },
    "secret_ecom"
  );
  res.json({ success: true, token, username: user.name });
};

module.exports = { login, signup };
