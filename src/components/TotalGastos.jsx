import { formatarReal } from '../formatadores.js'

// Card do total: recebe a soma (número) e formata em reais.
function TotalGastos({ valorTotal }) {
  return (
    <section className="cartao cartao-total">
      <span className="total-rotulo">Total</span>
      <strong className="total-valor">R$ {formatarReal(valorTotal)}</strong>
      <span className="total-nota">Soma dos gastos da lista</span>
    </section>
  )
}

export default TotalGastos
