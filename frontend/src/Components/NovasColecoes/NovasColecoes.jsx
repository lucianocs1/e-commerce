// import React from 'react'
// import './NewCollections.css'
// import Item from '../Item/Item'

// const NewCollections = (props) => {
//   return (
//     <div className='new-collections'>
//       <h1>NOVAS COLEÇÕES</h1>
//       <hr />
//       <div className="collections">
//         {props.data.map((item,index)=>{
//                 return <Item id={item.id} key={index} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
//             })}
//       </div>
//     </div>
//   )
// }

// export default NewCollections


import React from 'react';
import './NovasColecoes.css';
import Item from '../Item/Item';

/**
 * Componente NewCollections exibe uma lista de novos itens de coleção.
 * 
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {Array} props.data - Array de objetos contendo informações dos itens a serem exibidos.
 * 
 * @returns {JSX.Element} - Renderiza a seção de novas coleções com itens.
 */
const NewCollections = (props) => {
  return (
    <div className='new-collections'>
      {/* Título da seção */}
      <h1>NOVAS COLEÇÕES</h1>
      <hr />
      
      {/* Container para a lista de itens */}
      <div className="collections">
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

export default NewCollections;
