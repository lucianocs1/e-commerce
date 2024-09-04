// import React from 'react'
// import './Item.css'
// import { Link } from 'react-router-dom'
// import { backend_url, currency } from '../../App'

// const Item = (props) => {
//   return (
//     <div className='item'>
//       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={backend_url+props.image} alt="products" /></Link>
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">{currency}{props.new_price}</div>
//         <div className="item-price-old">{currency}{props.old_price}</div>
//       </div>
//     </div>
//   )
// }

// export default Item


import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

const Item = (props) => {
  return (
    <div className="item-produto">
  {/* Link para a página do produto */}
  <Link to={`/product/${props.id}`}>
    {/* Imagem do produto com rolagem para o topo ao ser clicada */}
    <img
      onClick={() => window.scrollTo(0, 0)}
      src={`${backend_url}${props.image}`}
      alt={`Imagem do produto ${props.name}`}
    />
  </Link>
  
  {/* Nome do produto */}
  <p>{props.name}</p>
  
  {/* Seção de preços */}
  <div className="item-produto-precos">
    {/* Preço atual do produto */}
    <div className="item-produto-preco-novo">
      {currency}{props.new_price}
    </div>
    
    {/* Preço antigo do produto */}
    <div className="item-produto-preco-antigo">
      {currency}{props.old_price}
    </div>
  </div>
</div>

  );
}

export default Item;
