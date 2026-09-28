function Header({ totalItens }) {
  return (
    <header className="header">
      <h1 style={{ fontStyle: "italic", color: "#ff0000", fontSize: "2rem" }}>
        TechFood - Sabor & Saber
      </h1>
      <p> O sabor que ensina! :D </p>
      <p className="carrinho">Itens no pedido: {totalItens}</p>
    </header>
  );
}

export default Header;
