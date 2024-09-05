import React, { useState, useContext } from "react";
import "./AreaProduto.css";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, moeda } from "../../App";

const ProdutoDisplay = ({ product }) => {
  const { addCarrinho } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const getSizeOptions = () => {
    if (product.category.includes("calcados")) {
      return ["36", "37", "38", "39", "40"];
    } else if (product.category.includes("roupas")) {
      return ["P", "M", "G", "GG", "XG"];
    } else {
      return [];
    }
  };

  const sizeOptions = getSizeOptions();

  return (
    <div className="exibicao-produto">
      <div className="exibicao-produto-esquerda">
        <div className="exibicao-produto-lista-imagens">
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
          <img src={backend_url + product.image} alt="img" />
        </div>
        <div className="exibicao-produto-imagem">
          <img
            className="exibicao-produto-imagem-principal"
            src={backend_url + product.image}
            alt="img"
          />
        </div>
      </div>
      <div className="exibicao-produto-direita">
        <h1>{product.name}</h1>
        <div className="exibicao-produto-direita-precos">
          <div className="exibicao-produto-preco-antigo">
            {moeda}
            {product.old_price}
          </div>
          <div className="exibicao-produto-preco-novo">
            {moeda}
            {product.new_price}
          </div>
        </div>
        <div className="exibicao-produto-direita-descricao">
          {product.description}
        </div>
        {sizeOptions.length > 0 && (
          <div className="exibicao-produto-direita-tamanho">
            <h1>Selecione o tamanho</h1>
            <div className="exibicao-produto-direita-tamanhos">
              {sizeOptions.map((size) => (
                <div
                  key={size}
                  className={`opcao-tamanho ${
                    selectedSize === size ? "selecionado" : ""
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => addCarrinho(product.id)}>
          Adicionar ao carrinho
        </button>
        <p className="exibicao-produto-direita-categoria">
          <span>Categoria :</span> {product.category}
        </p>
        <p className="exibicao-produto-direita-tags">
          <span>Tags :</span> {product.tags}
        </p>
      </div>
    </div>
  );
};

export default ProdutoDisplay;
