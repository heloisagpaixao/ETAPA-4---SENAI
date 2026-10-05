import { useState } from "react";
import Selo from "./Selo";

function CardPrato({
  nome,
  preco,
  descricao,
  categoria,
  vegetariano = false,
  picante = false,
  destaque = false,
  disponivel = false,
  onAdicionar,
}) {
  const [quantidade, setQuantidade] = useState(1);
  const [curtidas, setCurtidas] = useState(0);
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    if (quantidade < 10) {
      setQuantidade(quantidade + 1);
    }
  }

  function adicionar() {
    onAdicionar(quantidade, preco);
    setQuantidade(1);
  }

  function curtir() {
    setCurtidas(curtidas + 1);
  }

  function alternarDescricao() {
    setMostrarDescricao(!mostrarDescricao);
  }

  return (
    <article className={destaque ? "card-prato destaque" : "card-prato"}>
      <span className="categoria"> {categoria} </span>
      <h2>
        {" "}
        {categoria === "Sobremesa" ? "🍰" : ""}
        {nome}{" "}
      </h2>

      {/*SELOS*/}
      <div className="selos">
        {destaque && <Selo texto="Destaque" tipo="destaque" />}
        {vegetariano && <Selo texto="Vegetariano" tipo="vegetariano" />}
        {picante && <Selo texto="Picante" tipo="picante" />}
        {disponivel && <Selo texto="Esgotado" tipo="esgotado" />}
      </div>

      <button
        className="btn-esconder"
        type="button"
        onClick={alternarDescricao}
      >
        {" "}
        {mostrarDescricao ? "Esconder descrição" : "Ver descrição"}
      </button>
      {mostrarDescricao && <p className="descricao"> {descricao} </p>}

      <p className="preco"> {precoFormatado}</p>

      {disponivel ? (
        <>
          <div className="quantidade">
            <button
              type="button"
              onClick={diminuir}
              aria-label={`Diminuir quantidade de ${nome}.`}
            >
              {" "}
              -{" "}
            </button>
            <span> {quantidade} </span>
            <button
              type="button"
              onClick={aumentar}
              aria-label={`Aumentar quantidade de ${nome}.`}
            >
              {" "}
              +{" "}
            </button>
          </div>

          <button type="button" className="btn-adicionar" onClick={adicionar}>
            {" "}
            Adicionar ao pedido{" "}
          </button>
        </>
      ) : (
        <button type="button" className="btn-indisponivel" disabled>
          Indisponível.{" "}
        </button>
      )}

      <button type="button" className="btn-curtir" onClick={curtir}>
        {" "}
        ❤︎ {curtidas}{" "}
      </button>
    </article>
  );
}

export default CardPrato;
