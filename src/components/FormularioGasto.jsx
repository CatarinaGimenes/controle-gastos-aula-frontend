// Categorias disponíveis no select (fixas, definidas pela aula).
const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros']

// Formulário de cadastro — por enquanto só o layout: nenhum campo usa
// useState e o botão não faz nada (a lógica de salvar vem na Missão 1).
function FormularioGasto() {
  return (
    <section className="cartao">
      <h2>Novo gasto</h2>

      <form className="formulario">
        <label className="campo">
          <span className="campo-rotulo">Descrição</span>
          <input type="text" placeholder="Ex.: Almoço" />
        </label>

        <div className="campo-linha">
          <label className="campo">
            <span className="campo-rotulo">Valor (R$)</span>
            <input type="text" inputMode="decimal" placeholder="0,00" />
          </label>

          <label className="campo">
            <span className="campo-rotulo">Categoria</span>
            <select defaultValue="">
              <option value="" disabled>
                Selecione...
              </option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* type="button" para a página não recarregar no clique */}
        <button type="button" className="botao">
          Adicionar gasto
        </button>
      </form>
    </section>
  )
}

export default FormularioGasto
