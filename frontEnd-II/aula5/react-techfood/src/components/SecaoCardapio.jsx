import CardPrato from "./CardPrato";

function SecaoCardapio({ titulo, pratos, onAdicionar }) {
  return (
    <section className="secao">
      <h2 className="titulo-secao">
        {" "}
        {titulo} ({pratos.length})
      </h2>

      {pratos.length === 0 ? (
        <p className="mensagem-vazia"> Em breve!</p>
      ) : (
        <div className="cardapio">
          {pratos.map((prato) => (
            <CardPrato
              key={prato.id}
              nome={prato.nome}
              preco={prato.preco}
              precoPromocional={prato.precoPromocional}
              categoria={prato.categoria}
              descricao={prato.descricao}
              vegetariano={prato.vegetariano}
              picante={prato.picante}
              destaque={prato.destaque}
              disponivel={prato.disponivel}
              onAdicionar={onAdicionar}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SecaoCardapio;
