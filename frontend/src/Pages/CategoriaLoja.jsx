// import React, { useEffect, useState } from "react";
// import "./CSS/ShopCategory.css";
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from "../Components/Item/Item";
// import { Link } from "react-router-dom";

// const ShopCategory = (props) => {

//   const [allproducts, setAllProducts] = useState([]);

//   const fetchInfo = () => { 
//     fetch('http://localhost:4000/allproducts') 
//             .then((res) => res.json()) 
//             .then((data) => setAllProducts(data))
//     }

//     useEffect(() => {
//       fetchInfo();
//     }, [])
    
//   return (
//     <div className="shopcategory">
//       <img src={props.banner} className="shopcategory-banner" alt="" />
//       <div className="shopcategory-indexSort">
//         <p><span>Página 1 - 12</span> [ 54 ] Resultados encontrados</p>
//         <div className="shopcategory-sort">Ordenar por  <img src={dropdown_icon} alt="" /></div>
//       </div>
//       <div className="shopcategory-products">
//         {allproducts.map((item,i) => {
//             if(props.category===item.category)
//             {
//               return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
//             }
//             else
//             {
//               return null;
//             }
//         })}
//       </div>
//       <div className="shopcategory-loadmore">
//       <Link to='/' style={{ textDecoration: 'none' }}>Explore Mais</Link>
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;

// import React, { useEffect, useState, useCallback } from "react";
// import "./CSS/ShopCategory.css";
// import Item from "../Components/Item/Item";
// import { Link } from "react-router-dom";

// const ShopCategory = (props) => {
//   const [allproducts, setAllProducts] = useState([]);
//   const [searchTerm] = useState("");

//   const fetchInfo = useCallback(() => {
//     fetch('http://localhost:4000/allproducts')
//       .then((res) => res.json())
//       .then((data) => setAllProducts(data));
//   }, []);

//   useEffect(() => {
//     fetchInfo();
//   }, [fetchInfo]);

//   const filteredProducts = allproducts.filter(item =>
//     item.category === props.category && item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="shopcategory">
//       <img src={props.banner} className="shopcategory-banner" alt="" />
//       <div className="shopcategory-indexSort">
//         <p><span>Página 1</span> [ {filteredProducts.length} ] Produtos encontrados</p>
//       </div>
//       <div className="shopcategory-products">
//         {filteredProducts.map((item, i) => (
//           <Item 
//             id={item.id} 
//             key={i} 
//             name={item.name} 
//             image={item.image}  
//             new_price={item.new_price} 
//             old_price={item.old_price}
//           />
//         ))}
//       </div>
//       <div className="shopcategory-loadmore">
//         <Link to='/' style={{ textDecoration: 'none' }}>Explore Mais</Link>
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;


import React, { useEffect, useState, useCallback } from "react";
import "./CSS/CategoriaLoja.css";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  // Estado para armazenar todos os produtos
  const [allproducts, setAllProducts] = useState([]);
  // Estado para armazenar o termo de busca (não está sendo utilizado atualmente)
  const [searchTerm] = useState("");

  // Função para buscar todos os produtos
  const fetchInfo = useCallback(() => {
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data)); // Atualiza o estado com os produtos recebidos
  }, []);

  // Efeito que chama a função fetchInfo quando o componente é montado
  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]); // Adiciona fetchInfo como dependência para garantir que o efeito seja atualizado

  // Filtra os produtos com base na categoria e no termo de busca
  const filteredProducts = allproducts.filter(item =>
    item.category === props.category && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shopcategory">
      {/* Imagem/banner da categoria */}
      <img src={props.banner} className="shopcategory-banner" alt="" />

      {/* Informações da página e contagem de produtos encontrados */}
      <div className="shopcategory-indexSort">
        <p><span>Página 1</span> [ {filteredProducts.length} ] Produtos encontrados</p>
      </div>

      {/* Lista de produtos filtrados */}
      <div className="shopcategory-produtos">
        {filteredProducts.map((item, i) => (
          <Item 
            id={item.id} 
            key={i} 
            name={item.name} 
            image={item.image}  
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Link para explorar mais produtos */}
      <div className="shopcategory-loadmore">
        <Link to='/' style={{ textDecoration: 'none' }}>Explore Mais</Link>
      </div>
    </div>
  );
};

export default ShopCategory;








