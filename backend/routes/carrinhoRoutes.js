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
