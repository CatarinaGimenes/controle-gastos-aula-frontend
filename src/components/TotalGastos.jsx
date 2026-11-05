// Card do total — valor fixo por enquanto.
// A soma real (com o cuidado do ponto flutuante) chega na Missão 2.
function TotalGastos({ valorTotal }) {
  return (
    <section className="cartao cartao-total">
      <span className="total-rotulo">Total</span>
      <strong className="total-valor">R$ {valorTotal}</strong>
      <span className="total-nota">Soma dos gastos da lista</span>
    </section>
  )
}

export default TotalGastos
