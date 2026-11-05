import { formatarReal } from '../formatadores.js'
import { categorias } from '../categorias.js'

// Lista de gastos: recebe a lista completa (para o contador), a lista
// já filtrada, o filtro atual e os callbacks do App.
function ListaGastos({ gastos, gastosVisiveis, filtro, onTrocarFiltro, onRemover }) {
  // Contador: com filtro ativo mostra "2 de 5 gastos".
  const totalGastos = gastos.length
  const textoContador =
    filtro === ''
      ? `${totalGastos} ${totalGastos === 1 ? 'gasto' : 'gastos'}`
      : `${gastosVisiveis.length} de ${totalGastos} ${
          totalGastos === 1 ? 'gasto' : 'gastos'
        }`

  return (
    <section className="cartao">
      <div className="lista-cabecalho">
        <h2>Gastos do mês</h2>

        <div className="lista-cabecalho-acoes">
          <span className="lista-dica">{textoContador}</span>

          <select
            className="lista-filtro"
            value={filtro}
            aria-label="Filtrar por categoria"
            onChange={(evento) => onTrocarFiltro(evento.target.value)}
          >
            <option value="">Todas as categorias</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>

      {gastos.length === 0 ? (
        <p className="lista-vazia">Nenhum gasto adicionado ainda.</p>
      ) : gastosVisiveis.length === 0 ? (
        <p className="lista-vazia">Nenhum gasto nessa categoria.</p>
      ) : (
        <ul className="lista">
          {gastosVisiveis.map((gasto) => (
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
