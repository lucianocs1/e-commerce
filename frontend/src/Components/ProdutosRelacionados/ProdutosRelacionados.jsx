// import React, { useEffect, useState } from 'react';
// import './RelatedProducts.css';
// import Item from '../Item/Item';
// import { backend_url } from '../../App';

// const RelatedProducts = ({ category, id }) => {
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     fetch(`${backend_url}/relatedproducts`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ category: category }),
//     })
//       .then((res) => res.json())
//       .then((data) => setRelated(data));
//   }, [category, id]); // Adicione 'category' e 'id' como dependências aqui.

//   return (
//     <div className='relatedproducts'>
//       <h1>Produtos Relacionados</h1>
//       <hr />
//       <div className="relatedproducts-item">
//         {related.map((item, index) => {
//           if (id !== item.id) {
//             return (
//               <Item
//                 key={index}
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 new_price={item.new_price}
//                 old_price={item.old_price}
//               />
//             );
//           } else {
//             return null; // Certifique-se de retornar null se a condição não for atendida
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;


import React, { useEffect, useState } from 'react';
import './ProdutosRelacionados.css';
import Item from '../Item/Item';
import { backend_url } from '../../App';

/**
 * Componente RelatedProducts exibe uma lista de produtos relacionados com base na categoria do produto atual.
 * 
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {string} props.category - Categoria do produto atual para filtrar produtos relacionados.
 * @param {string} props.id - ID do produto atual para garantir que ele não seja exibido na lista de produtos relacionados.
 * 
 * @returns {JSX.Element} - Renderiza uma lista de produtos relacionados.
 */
const RelatedProducts = ({ category, id }) => {
  const [related, setRelated] = useState([]); // Estado para armazenar produtos relacionados

  useEffect(() => {
    /**
     * Função para buscar produtos relacionados com base na categoria.
     */
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`${backend_url}/relatedproducts`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category: category }),
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar produtos relacionados');
        }

        const data = await response.json();
        setRelated(data);
      } catch (error) {
        console.error('Erro ao buscar produtos relacionados:', error);
      }
    };

    fetchRelatedProducts();
  }, [category, id]); // Atualiza quando a categoria ou o ID mudam

  return (
    <div className='relatedproducts'>
      <h1>Produtos Relacionados</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item) => {
          // Filtra o produto atual da lista de produtos relacionados
          if (id !== item.id) {
            return (
              <Item
                key={item.id} // Usa 'item.id' como chave única para garantir a estabilidade da lista
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null; // Retorna null se o produto for o atual
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
