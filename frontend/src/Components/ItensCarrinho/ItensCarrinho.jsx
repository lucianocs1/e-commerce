// import React, { useContext } from "react";
// import "./CartItems.css";
// import cross_icon from "../Assets/cart_cross_icon.png";
// import { ShopContext } from "../../Context/ShopContext";
// import { backend_url, currency } from "../../App";

// const CartItems = () => {
//   const { products, cartItems, removeFromCart, updateCartItemQuantity, getTotalCartAmount } = useContext(ShopContext);

//   const handleRemoveClick = (id) => {
//     const confirmRemove = window.confirm("Você tem certeza que deseja remover este item do carrinho?");
//     if (confirmRemove) {
//       removeFromCart(id);
//     }
//   };

//   const handleIncreaseQuantity = (id) => {
//     updateCartItemQuantity(id, cartItems[id] + 1);
//   };

//   const handleDecreaseQuantity = (id) => {
//     if (cartItems[id] > 1) {
//       updateCartItemQuantity(id, cartItems[id] - 1);
//     }
//   };

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Produto</p>
//         <p>Nome</p>
//         <p>Preço</p>
//         <p>Quantidade</p>
//         <p>Total</p>
//         <p>Remover</p>
//       </div>
//       <hr />
//       {products.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format-main cartitems-format">
//                 <img className="cartitems-product-icon" src={backend_url + e.image} alt="" />
//                 <p className="cartitems-product-title">{e.name}</p>
//                 <p>{currency}{e.new_price}</p>
//                 <div className="cartitems-quantity-controls">
//                   <button onClick={() => handleDecreaseQuantity(e.id)}>-</button>
//                   <span> {cartItems[e.id]} </span>
//                   <button onClick={() => handleIncreaseQuantity(e.id)}>+</button>
//                 </div>
//                 <p>{currency}{e.new_price * cartItems[e.id]}</p>
//                 <img
//                   onClick={() => handleRemoveClick(e.id)}
//                   className="cartitems-remove-icon"
//                   src={cross_icon}
//                   alt=""
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}
      
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Total do Carrinho</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>{currency}{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Taxa de Envio</p>
//               <p>Grátis</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>{currency}{getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>COMPRAR</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

import React, { useContext } from "react"; // Importa React e o hook useContext para acessar o contexto
import "./ItensCarrinho.css"; // Importa o arquivo de estilos CSS específico para o componente
import cross_icon from "../Assets/cart_cross_icon.png"; // Importa o ícone de remoção do carrinho
import { ShopContext } from "../../Context/ShopContext"; // Importa o contexto da loja
import { backend_url, currency } from "../../App"; // Importa a URL do backend e a moeda para formatação

const CartItems = () => {
  // Desestrutura as funções e dados do contexto ShopContext
  const { products, cartItems, removeFromCart, updateCartItemQuantity, getTotalCartAmount } = useContext(ShopContext);

  // Função para confirmar e remover um item do carrinho
  const handleRemoveClick = (id) => {
    const confirmRemove = window.confirm("Você tem certeza que deseja remover este item do carrinho?");
    if (confirmRemove) {
      removeFromCart(id); // Chama a função de remoção do contexto
    }
  };

  // Função para aumentar a quantidade de um item no carrinho
  const handleIncreaseQuantity = (id) => {
    updateCartItemQuantity(id, cartItems[id] + 1); // Atualiza a quantidade no contexto
  };

  // Função para diminuir a quantidade de um item no carrinho
  const handleDecreaseQuantity = (id) => {
    if (cartItems[id] > 1) {
      updateCartItemQuantity(id, cartItems[id] - 1); // Atualiza a quantidade no contexto se for maior que 1
    }
  };

  return (
    <div className="itens-carrinho">
  {/* Container principal para o carrinho de compras */}
  <div className="itens-carrinho-format-principal">
    {/* Cabeçalhos da tabela */}
    <p>Produto</p>
    <p>Nome</p>
    <p>Preço</p>
    <p>Quantidade</p>
    <p>Total</p>
    <p>Remover</p>
  </div>
  <hr />
  {products.map((e) => {
    if (cartItems[e.id] > 0) {
      // Verifica se o item está no carrinho
      return (
        <div key={e.id}>
          <div className="itens-carrinho-format-principal itens-carrinho-format">
            {/* Linha do item do carrinho */}
            <img
              className="itens-carrinho-produto-icon"
              src={backend_url + e.image}
              alt={`Imagem do produto ${e.name}`}
            />
            {/* Imagem do produto */}
            <p className="itens-carrinho-produto-titulo">{e.name}</p>
            {/* Nome do produto */}
            <p>{currency}{e.new_price}</p>
            {/* Preço do produto */}
            <div className="itens-carrinho-quantidade-controles">
              {/* Controles de quantidade */}
              <button onClick={() => handleDecreaseQuantity(e.id)}>-</button>
              {/* Botão para diminuir a quantidade */}
              <span> {cartItems[e.id]} </span> {/* Quantidade atual */}
              <button onClick={() => handleIncreaseQuantity(e.id)}>+</button>
              {/* Botão para aumentar a quantidade */}
            </div>
            <p>{currency}{e.new_price * cartItems[e.id]}</p>
            {/* Total por item */}
            <img
              onClick={() => handleRemoveClick(e.id)}
              className="itens-carrinho-remover-icon"
              src={cross_icon}
              alt="Remover item"
            />
            {/* Ícone para remover o item do carrinho */}
          </div>
          <hr />
        </div>
      );
    }
    return null; // Retorna null se o item não estiver no carrinho
  })}

  <div className="itens-carrinho-baixo">
    {/* Seção para o total do carrinho */}
    <div className="itens-carrinho-total">
      <h1>Total do Carrinho</h1>
      <div>
        <div className="itens-carrinho-total-item">
          {/* Item subtotal */}
          <p>Subtotal</p>
          <p>{currency}{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="itens-carrinho-total-item">
          {/* Item taxa de envio */}
          <p>Taxa de Envio</p>
          <p>Grátis</p>
        </div>
        <hr />
        <div className="itens-carrinho-total-item">
          {/* Item total */}
          <h3>Total</h3>
          <h3>{currency}{getTotalCartAmount()}</h3>
        </div>
      </div>
      <button>COMPRAR</button>
      {/* Botão para finalizar a compra */}
    </div>
  </div>
</div>

  );
};

export default CartItems; // Exporta o componente para ser usado em outras partes da aplicação
