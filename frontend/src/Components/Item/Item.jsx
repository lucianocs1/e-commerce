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

/**
 * Componente que exibe um item de produto.
 * 
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {string} props.id - ID do produto.
 * @param {string} props.image - URL da imagem do produto.
 * @param {string} props.name - Nome do produto.
 * @param {number} props.new_price - Preço atual do produto.
 * @param {number} props.old_price - Preço antigo do produto.
 * 
 * @returns {JSX.Element} - Renderiza o componente de item.
 */
const Item = (props) => {
  return (
    <div className='item'>
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
      <div className="item-prices">
        {/* Preço atual do produto */}
        <div className="item-price-new">
          {currency}{props.new_price}
        </div>
        
        {/* Preço antigo do produto */}
        <div className="item-price-old">
          {currency}{props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
