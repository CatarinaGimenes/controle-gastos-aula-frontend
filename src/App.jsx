import { useEffect, useRef, useState } from 'react'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import { somarGastos } from './calculos.js'
import './App.css'

// Chave usada no localStorage para guardar a lista de gastos.
const CHAVE_GASTOS = 'controle-gastos:lista'

// Lê a lista salva; se não houver nada ou estiver corrompida, começa vazia.
function carregarGastos() {
  try {
    const guardado = localStorage.getItem(CHAVE_GASTOS)
    if (guardado === null) return []

    const lista = JSON.parse(guardado)
    if (!Array.isArray(lista)) return []

    // Só aceita o que tem cara de gasto nosso (evita quebrar a tela).
    return lista.filter(
      (gasto) =>
        gasto &&
        typeof gasto.id === 'number' &&
        typeof gasto.valor === 'number' &&
        typeof gasto.descricao === 'string',
    )
  } catch {
    return [] // JSON inválido ou localStorage indisponível
  }
}

// Grava a lista sempre que ela muda.
function salvarGastos(lista) {
  try {
    localStorage.setItem(CHAVE_GASTOS, JSON.stringify(lista))
  } catch {
    // Modo privado ou cota cheia: seguimos sem persistir.
  }
}

// Maior id carregado + 1: nunca repete id (id repetido faria o remover
// apagar dois gastos de uma vez).
function proximoIdInicial(lista) {
  return lista.reduce((maior, gasto) => Math.max(maior, gasto.id), 0) + 1
}

function App() {
  // Lista de gastos: nasce com o que estava salvo no localStorage.
  // O React chama carregarGastos() uma vez, antes do primeiro render.
  const [gastos, setGastos] = useState(carregarGastos)

  // Filtro por categoria: '' significa "Todas as categorias".
  const [filtro, setFiltro] = useState('')

  // Contador de ids: começa depois do maior id já carregado.
  const proximoId = useRef(proximoIdInicial(gastos))

  // Adiciona o gasto validado pelo formulário no fim da lista.
  function adicionarGasto(dadosGasto) {
    const id = proximoId.current
    proximoId.current += 1
    setGastos((lista) => [...lista, { id, ...dadosGasto }])
    // Limpa o filtro para o gasto novo sempre aparecer na lista.
    setFiltro('')
  }

  // Remove o gasto que tem o id passado; os demais ficam na lista.
  function removerGasto(id) {
    setGastos((lista) => lista.filter((gasto) => gasto.id !== id))
  }

  // Efeito colateral: grava a lista no localStorage sempre que ela muda
  // (adicionar ou remover), para sobreviver ao recarregamento da página.
  useEffect(() => {
    salvarGastos(gastos)
  }, [gastos])

  // Lista derivada do estado: só os gastos da categoria selecionada.
  const gastosVisiveis =
    filtro === '' ? gastos : gastos.filter((gasto) => gasto.categoria === filtro)

  // Total derivado do estado: soma o que está visível na lista.
  const total = somarGastos(gastosVisiveis)

  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>Controle de Gastos</h1>
        <p>Descreva, informe o valor e escolha a categoria de cada gasto.</p>
      </header>

      <main className="grade">
        <div className="coluna-formulario">
          <FormularioGasto onAdicionar={adicionarGasto} />
          <TotalGastos valorTotal={total} />
        </div>

        <ListaGastos
          gastos={gastos}
          gastosVisiveis={gastosVisiveis}
          filtro={filtro}
          onTrocarFiltro={setFiltro}
          onRemover={removerGasto}
        />
      </main>
    </div>
  )
}

export default App
