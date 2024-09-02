import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logoma.jpg'
import instagram_imagem from '../Assets/instagram_icon.png'
import facebook_imagem from '../Assets/face.png'
import whatsapp_imagem from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>MARIANA AGUIAR</p>
      </div>
      <ul className="footer-links">
        <li>Empresa</li>
        <li>Produtos</li>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_imagem} alt="" />
        </div>
        <div className="footer-icons-container">
            <img className='face' src={facebook_imagem} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_imagem} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> Luciano Filho. Copyright @ 2024 - Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
