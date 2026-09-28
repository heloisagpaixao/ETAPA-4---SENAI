import { useState } from "react";
import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import Footer from "./components/Footer";
import { cardapio } from "./data/cardapio";
import "./App.css";

function App() {
  const [totalItens, setTotalItens] = useState(0);
  const [totalValor, setTotalValor] = useState(0);

  function adicionarAoPedido(quantidade, preco) {
    setTotalItens(totalItens + quantidade);
    setTotalValor(totalValor + quantidade * preco);
  }

  function limparPedido() {
    setTotalItens(0);
    setTotalValor(0);
  }

  const totalFormatado = totalValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <main className="app">
      <Header totalItens={totalItens} />
      <p> Cardápio com {cardapio.length} itens. </p>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
      <p> Total do Pedido: {totalFormatado} </p>
      <button className="btn-limpar" type="button" onClick={limparPedido}>
        Limpar pedido
      </button>
      <Footer />
    </main>
  );
}

export default App;
