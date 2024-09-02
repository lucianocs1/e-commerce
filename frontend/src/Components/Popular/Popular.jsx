// import React from 'react'
// import './Popular.css'
// import Item from '../Item/Item'

// const Popular = (props) => {
//   return (
//     <div className='popular'>
//       <h1>ROUPAS POPULARES</h1>
//       <hr />
//       <div className="popular-item">
//         {props.data.map((item,index)=>{
//             return <Item id={item.id} key={index} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Popular


import React from 'react';
import './Popular.css';
import Item from '../Item/Item';

/**
 * Componente Popular exibe uma lista de roupas populares.
 * 
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {Array} props.data - Array de objetos contendo informações dos itens a serem exibidos.
 * 
 * @returns {JSX.Element} - Renderiza a seção de roupas populares com itens.
 */
const Popular = (props) => {
  return (
    <div className='popular'>
      {/* Título da seção */}
      <h1>ROUPAS POPULARES</h1>
      <hr />
      
      {/* Container para a lista de itens populares */}
      <div className="popular-item">
        {/* Mapeia os itens da propriedade 'data' para renderizar o componente Item */}
        {props.data.map((item, index) => (
          <Item 
            id={item.id} 
            key={index} 
            name={item.name} 
            image={item.image}  
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
