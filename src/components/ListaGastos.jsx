// Lista de gastos: recebe os dados por propriedade (props).
// O App ainda passa exemplos fixos; quando houver estado, muda só a origem.
function ListaGastos({ gastos }) {
  return (
    <section className="cartao">
      <div className="lista-cabecalho">
        <h2>Gastos do mês</h2>
        <span className="lista-dica">exemplos</span>
      </div>

      <ul className="lista">
        {gastos.map((gasto) => (
          <li key={gasto.id} className="item">
            <div className="item-info">
              <span className="item-descricao">{gasto.descricao}</span>
              <span className="item-categoria">{gasto.categoria}</span>
            </div>
            <span className="item-valor">R$ {gasto.valor}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListaGastos
