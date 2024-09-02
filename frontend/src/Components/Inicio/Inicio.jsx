import React from "react";
import "./Inicio.css";
import ma_imagem from "../Assets/ma_imagem.png";
import ma_imagem1 from "../Assets/ma_imagem1.png";
import sol_imagem from "../Assets/sol.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>VERÃO 2024!</h2>
        <div>
          <div className="hero-hand-icon">
            <p>novas</p>
            <img src={sol_imagem} alt="" />
          </div>
          <p>coleções</p>
          <p>de verão</p>
        </div>
        <div className="hero-latest-btn">
          <a href="/roupas" className="hero-latest-btn-link">
            <div>Veja</div>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={ma_imagem} alt="hero" />
      </div>
      <div className="hero-right">
        <img src={ma_imagem1} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
