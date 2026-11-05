import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import './App.css'

function App() {
  // Lista de gastos: começa vazia e cresce a cada "Adicionar gasto".
  const [gastos, setGastos] = useState([])

  // Adiciona o gasto validado pelo formulário no fim da lista.
  function adicionarGasto(novoGasto) {
    setGastos((lista) => [...lista, novoGasto])
  }

  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>Controle de Gastos</h1>
        <p>Descreva, informe o valor e escolha a categoria de cada gasto.</p>
      </header>

      <main className="grade">
        <div className="coluna-formulario">
          <FormularioGasto onAdicionar={adicionarGasto} />
          {/* A soma real dos gastos chega na Missão 2. */}
          <TotalGastos valorTotal="105,40" />
        </div>

        <ListaGastos gastos={gastos} />
      </main>
    </div>
  )
}

export default App
