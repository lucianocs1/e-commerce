
// import React, { useState, useContext } from "react";
// import "./ProductDisplay.css";
// import { ShopContext } from "../../Context/ShopContext";
// import { backend_url, currency } from "../../App";

// const ProductDisplay = ({ product }) => {
//   const { addToCart } = useContext(ShopContext);
//   const [selectedSize, setSelectedSize] = useState(null);

//   const handleSizeClick = (size) => {
//     setSelectedSize(size);
//   };

//   const getSizeOptions = () => {
//     if (product.category.includes("calcados")) {
//       return ['36', '37', '38', '39', '40'];
//     } else if (product.category.includes("roupas")) {
//       return ['P', 'M', 'G', 'GG', 'XG'];
//     } else {
//       return [];
//     }
//   };

//   const sizeOptions = getSizeOptions();

//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           <img src={backend_url + product.image} alt="img" />
//           <img src={backend_url + product.image} alt="img" />
//           <img src={backend_url + product.image} alt="img" />
//           <img src={backend_url + product.image} alt="img" />
//         </div>
//         <div className="productdisplay-img">
//           <img className="productdisplay-main-img" src={backend_url + product.image} alt="img" />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">{currency}{product.old_price}</div>
//           <div className="productdisplay-right-price-new">{currency}{product.new_price}</div>
//         </div>
//         <div className="productdisplay-right-description">
//           {product.description}
//         </div>
//         {sizeOptions.length > 0 && (
//           <div className="productdisplay-right-size">
//             <h1>Selecione o tamanho</h1>
//             <div className="productdisplay-right-sizes">
//               {sizeOptions.map((size) => (
//                 <div
//                   key={size}
//                   className={`size-option ${selectedSize === size ? 'selected' : ''}`}
//                   onClick={() => handleSizeClick(size)}
//                 >
//                   {size}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <button onClick={() => addToCart(product.id)}>Adicionar ao carrinho</button>
//         <p className="productdisplay-right-category"><span>Categoria :</span> {product.category}</p>
//         <p className="productdisplay-right-category"><span>Tags :</span> {product.tags}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;


import React, { useState, useContext } from "react";
import "./AreaProduto.css";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const getSizeOptions = () => {
    if (product.category.includes("calcados")) {
      return ['36', '37', '38', '39', '40'];
    } else if (product.category.includes("roupas")) {
      return ['P', 'M', 'G', 'GG', 'XG'];
    } else {
      return [];
    }
  };

  const sizeOptions = getSizeOptions();

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={backend_url + product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{currency}{product.old_price}</div>
          <div className="productdisplay-right-price-new">{currency}{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        {sizeOptions.length > 0 && (
          <div className="productdisplay-right-size">
            <h1>Selecione o tamanho</h1>
            <div className="productdisplay-right-sizes">
              {sizeOptions.map((size) => (
                <div
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => addToCart(product.id)}>Adicionar ao carrinho</button>
        <p className="productdisplay-right-category"><span>Categoria :</span> {product.category}</p>
        <p className="productdisplay-right-category"><span>Tags :</span> {product.tags}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;

