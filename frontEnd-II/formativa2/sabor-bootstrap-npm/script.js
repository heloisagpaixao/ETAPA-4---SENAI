class Prato {
  constructor(nome, preco, categoria, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }
}

const cardapio = [
  new Prato(
    "Morango Cravejado",
    14.9,
    "Sobremesa",
    "Morango, brigadeiro de ninho e cobertura de chocolate branco com caramelo.",
  ),
  new Prato(
    "Bicho de Pé",
    8.5,
    "Sobremesa",
    "Brigadeiro de morango artesanal empanado no açúcar.",
  ),
  new Prato(
    "Brigadeiro Gourmet",
    6.0,
    "Sobremesa",
    "Brigadeiro com cobertura especial.",
  ),
];

const containerCardapio = document.querySelector("#cardapio");
const modalElement = document.querySelector("#modalPrato");
const modalBootstrap = new bootstrap.Modal(modalElement);

function criarCardPrato(prato) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  col.innerHTML = `
    <article class="card h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <h2 class="card-title h5 fw-bold">${prato.nome}</h2>
        <p class="card-text text-muted small">${prato.categoria}</p>
        <p class="card-text text-success fw-bold fs-5">${prato.formatarPreco()}</p>
      </div>
      <div class="card-footer bg-transparent border-top-0 pb-3">
        <button class="btn btn-danger w-100 mt-auto btn-detalhes">
          Ver detalhes
        </button>
      </div>
    </article>
  `;

  const btn = col.querySelector(".btn-detalhes");
  btn.addEventListener("click", () => abrirModal(prato));

  return col;
}

function abrirModal(prato) {
  document.getElementById("modalNome").textContent = prato.nome;
  document.getElementById("modalCategoria").textContent = prato.categoria;
  document.getElementById("modalPreco").textContent = prato.formatarPreco();
  document.getElementById("modalDescricao").textContent = prato.descricao;

  modalBootstrap.show();
}

function renderizarCardapio() {
  containerCardapio.innerHTML = "";
  cardapio.forEach((prato) => {
    containerCardapio.appendChild(criarCardPrato(prato));
  });
}

renderizarCardapio();
