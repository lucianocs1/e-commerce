//Ofertas exclusivas
import React from 'react'
import './OfertasCadastro.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receba ofertas exclusivas em seu e-mail!</h1>
      <p>Cadastre-se e fique por dentro de tudo!</p>
      <div>
        <a href="/login" className="newsletter-signup-link">
          <button>Cadastre-se</button>
        </a>
      </div>
    </div>
  )
}

export default NewsLetter
