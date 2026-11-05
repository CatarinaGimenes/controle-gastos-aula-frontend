import { useRef, useState } from 'react'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import { somarGastos } from './calculos.js'
import './App.css'

function App() {
  // Lista de gastos: começa vazia e cresce a cada "Adicionar gasto".
  const [gastos, setGastos] = useState([])

  // Filtro por categoria: '' significa "Todas as categorias".
  const [filtro, setFiltro] = useState('')

  // Contador de ids: o App é quem identifica cada gasto, garantindo
  // que dois gastos nunca fiquem com o mesmo id.
  const proximoId = useRef(1)

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
