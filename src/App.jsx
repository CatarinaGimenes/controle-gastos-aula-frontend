import FormularioGasto from './components/FormularioGasto.jsx'
import ListaGastos from './components/ListaGastos.jsx'
import TotalGastos from './components/TotalGastos.jsx'
import './App.css'

// Exemplos fixos: ainda não existe estado nem persistência.
// As próximas missões trocam esta constante por gastos reais.
const gastosExemplo = [
  { id: 1, descricao: 'Almoço', categoria: 'Alimentação', valor: '32,00' },
  { id: 2, descricao: 'Uber', categoria: 'Transporte', valor: '18,50' },
  { id: 3, descricao: 'Cinema', categoria: 'Lazer', valor: '54,90' },
]

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>Controle de Gastos</h1>
        <p>Descreva, informe o valor e escolha a categoria de cada gasto.</p>
      </header>

      <main className="grade">
        <div className="coluna-formulario">
          <FormularioGasto />
          <TotalGastos valorTotal="105,40" />
        </div>

        <ListaGastos gastos={gastosExemplo} />
      </main>
    </div>
  )
}

export default App
