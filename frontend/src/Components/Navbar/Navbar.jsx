// import React, { useContext, useRef, useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import logo from '../Assets/logoma.jpg';
// import cart_icon from '../Assets/carrinho_imagem.png';
// import { ShopContext } from '../../Context/ShopContext';
// import nav_dropdown from '../Assets/nav_dropdown.png';
// import bola from '../Assets/bola.png'

// const Navbar = () => {
//   let [menu, setMenu] = useState("shop");
//   const { getTotalCartItems } = useContext(ShopContext);
//   const [userName, setUserName] = useState('');

//   const menuRef = useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   };

//   useEffect(() => {
//     const storedUserName = localStorage.getItem('user-name'); // Recupera o nome do usuário do localStorage
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   return (
//     <div className='nav'>
//       <Link to='/' onClick={() => setMenu("shop")} style={{ textDecoration: 'none' }} className="nav-logo">
//         <img src={logo} alt="logo" />
//         <p>MARIANA AGUIAR</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={() => setMenu("shop")}><Link to='/' style={{ textDecoration: 'none' }}>Novidades</Link>{menu === "shop" && <hr />}</li>
//         <li onClick={() => setMenu("roupas")}><Link to='/roupas' style={{ textDecoration: 'none' }}>Roupas</Link>{menu === "roupas" && <hr />}</li>
//         <li onClick={() => setMenu("calcados")}><Link to='/calcados' style={{ textDecoration: 'none' }}>Calçados</Link>{menu === "calcados" && <hr />}</li>
//         <li onClick={() => setMenu("bolsas")}><Link to='/bolsas' style={{ textDecoration: 'none' }}>Bolsas</Link>{menu === "bolsas" && <hr />}</li>
//       </ul>
//       <div className="nav-login-cart">
//         {userName && <img src={bola} alt="" />}
//         {localStorage.getItem('auth-token')
//           ? <button onClick={() => { 
//               localStorage.removeItem('auth-token'); 
//               localStorage.removeItem('user-name'); 
//               window.location.replace("/"); 
//             }}>Sair</button>
//           : <Link to='/login' style={{ textDecoration: 'none' }}><button>Entrar</button></Link>}
//         <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useRef, useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logoma.jpg';
import cart_icon from '../Assets/carrinho_imagem.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import bola from '../Assets/bola.png';

/**
 * Componente Navbar que exibe a barra de navegação com links para diferentes páginas,
 * ícones de carrinho e login, e o nome do usuário se disponível.
 * 
 * @returns {JSX.Element} - Renderiza o componente Navbar.
 */
const Navbar = () => {
  // Estado para controlar o menu ativo
  const [menu, setMenu] = useState("shop");

  // Contexto para obter a quantidade total de itens no carrinho
  const { getTotalCartItems } = useContext(ShopContext);

  // Estado para armazenar o nome do usuário
  const [userName, setUserName] = useState('');

  // Referência para o menu dropdown
  const menuRef = useRef();

  /**
   * Alterna a visibilidade do menu dropdown e o estado do ícone do dropdown.
   * 
   * @param {Object} e - Evento de clique.
   */
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Recupera o nome do usuário do localStorage quando o componente é montado
  useEffect(() => {
    const storedUserName = localStorage.getItem('user-name');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className='nav'>
      {/* Logo e link para a página inicial */}
      <Link to='/' onClick={() => setMenu("shop")} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>MARIANA AGUIAR</p>
      </Link>

      {/* Ícone do dropdown para abrir/fechar o menu */}
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Menu" />

      {/* Menu de navegação */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none' }}>Novidades</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("roupas")}>
          <Link to='/roupas' style={{ textDecoration: 'none' }}>Roupas</Link>
          {menu === "roupas" && <hr />}
        </li>
        <li onClick={() => setMenu("calcados")}>
          <Link to='/calcados' style={{ textDecoration: 'none' }}>Calçados</Link>
          {menu === "calcados" && <hr />}
        </li>
        <li onClick={() => setMenu("bolsas")}>
          <Link to='/bolsas' style={{ textDecoration: 'none' }}>Bolsas</Link>
          {menu === "bolsas" && <hr />}
        </li>
      </ul>

      {/* Seção de login e carrinho */}
      <div className="nav-login-cart">
        {userName && <img src={bola} alt="User Icon" />}
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => { 
            localStorage.removeItem('auth-token'); 
            localStorage.removeItem('user-name'); 
            window.location.replace("/"); 
          }}>
            Sair
          </button>
        ) : (
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <button>Entrar</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
