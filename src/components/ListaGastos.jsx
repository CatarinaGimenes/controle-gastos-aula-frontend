import { formatarReal } from '../formatadores.js'

// Lista de gastos: recebe os dados por propriedade (props),
// que agora vêm do estado do App e crescem a cada gasto adicionado.
function ListaGastos({ gastos, onRemover }) {
  return (
    <section className="cartao">
      <div className="lista-cabecalho">
        <h2>Gastos do mês</h2>
        <span className="lista-dica">
          {gastos.length} {gastos.length === 1 ? 'gasto' : 'gastos'}
        </span>
      </div>

      {gastos.length === 0 ? (
        <p className="lista-vazia">Nenhum gasto adicionado ainda.</p>
      ) : (
        <ul className="lista">
          {gastos.map((gasto) => (
            <li key={gasto.id} className="item">
              <div className="item-info">
                <span className="item-descricao">{gasto.descricao}</span>
                <span className="item-categoria">{gasto.categoria}</span>
              </div>
              <div className="item-acoes">
                <span className="item-valor">R$ {formatarReal(gasto.valor)}</span>
                <button
                  type="button"
                  className="item-remover"
                  onClick={() => onRemover(gasto.id)}
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
