import { useState } from "react";
import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import Footer from "./components/Footer";
import { cardapio } from "./data/cardapio";
import "./App.css";


function App() {
  const [totalItens, setTotalItens] = useState(0);

  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade);
  }

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
      <Footer />
    </main>
  );
}

export default App;
