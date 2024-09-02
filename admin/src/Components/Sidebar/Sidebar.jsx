import React from 'react'
import './Sidebar.css'
import produtos_imagem from '../Assets/produtos_imagem.png'
import lista_produtos_imagem from '../Assets/lista_produto_imagem.png'
import docs_imagem from '../Assets/docs_imagem.jpg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={produtos_imagem} alt="" />
          <p>Adicionar Produto</p>
        </div>
      </Link>
      <Link to='/listaprodutos' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={lista_produtos_imagem} alt="" />
          <p>Lista de Produtos</p>
        </div>
      </Link>
      <Link to='/docs' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={docs_imagem} alt="" />
          <p>Documentação</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
