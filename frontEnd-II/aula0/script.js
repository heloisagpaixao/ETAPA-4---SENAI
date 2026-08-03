// ========== PROGRAMAÇÃO ORIENTADA A OBJETOS ========== //
class Prato {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  aplicarDesconto(percentual) {
    this.preco = this.preco * (1 - percentual / 100);
  }
} // FIM da classe Prato{}

const cardapio = [
  new Prato("Feijoada Completa", 42.9, "Prato Principal"),
  new Prato("Moqueca de Peixe", 58.0, "Prato Principal"),
  new Prato("Coxinha Artesanal", 8.5, "Petisco"),
  new Prato("Brigadeiro Gourmet", 6.0, "Sobremesa"),
  new Prato("Suco de Maracujá", 12.0, "Bebidas"),
];

console.log("=== Pratos Criados ===");
cardapio.forEach((p) => {
  console.log(`${p.nome} -> ${p.formatarPreco()}`);
});

// ========== DOCUMENT OBJECT MODEL ========== //
const containerCardapio = document.querySelector("#cardapio");

function criarCardPrato(prato) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <h3> ${prato.nome} </h3>
  <span class="categoria"> ${prato.categoria} </span>
  <div class="preco"> ${prato.formatarPreco()} </div>
  `;

  card.addEventListener("click", () => {
    alert(
      `🍽️ ${prato.nome} \n` +
        `Categoria: ${prato.categoria} \n` +
        `Preço: ${prato.formatarPreco()}`,
    );
  });

  return card;
} // FIM da função criarCardPrato()

function renderizarCardapio() {
  containerCardapio.innerHTML = "";
  cardapio.forEach((prato) => {
    const card = criarCardPrato(prato);
    containerCardapio.appendChild(card);
  });
}

renderizarCardapio();

cardapio[0].aplicarDesconto(20);
renderizarCardapio();

// ================================================== //

class Bebida {
  constructor(nome, preco, volume) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  emLitros() {
    return `${(this.volume / 1000).toFixed(2).replace(".", ",")}L`;
  }

  descricao() {
    return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }
}

const listaBebidas = [
  new Bebida("Coca-Cola", 5.0, 350),
  new Bebida("Suco de Laranja", 8.3, 1000),
  new Bebida("Guaraná", 6.5, 350),
];

console.log("=== Bebidas Criadas ===");
listaBebidas.forEach((b) => {
  console.log(`${b.descricao()} -> ${b.emLitros()}`);
});
