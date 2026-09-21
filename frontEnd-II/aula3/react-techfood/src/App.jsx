import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import Footer from "./components/Footer";

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.9,
    categoria: "Prato Principal",
    descricao: "Uma deliciosa feijoada para alegrar o dia.",
  },
  {
    id: 2,
    nome: "Moqueca",
    preco: 49.9,
    categoria: "Prato Principal",
    descricao: "Moqueca de qualidade para encher o estômago.",
  },
  {
    id: 3,
    nome: "Pudim",
    preco: 15.0,
    categoria: "Sobremesa",
    descricao: "Com calda de caramelo para adoçar o dia.",
  },
  {
    id: 4,
    nome: "Brownie",
    preco: 7.5,
    categoria: "Sobremesa",
    descricao: "Brownie quentinho com sorvete de creme.",
  },
  {
    id: 5,
    nome: "Coxinha",
    preco: 9.0,
    categoria: "Aperitivo",
    descricao: "Deliciosamente recheada com frango e catupiry de primeira.",
  },
];

function App() {
  return (
    <main className="app">
      <Header />
      <p> Cardápio com {cardapio.length} itens. </p>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default App;
