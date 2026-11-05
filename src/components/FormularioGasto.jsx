import { useState } from 'react'

// Categorias disponíveis no select (fixas, definidas pela aula).
const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros']

// Formulário de cadastro: valida os campos e devolve o gasto pronto
// para o App adicionar na lista (Missão 1).
function FormularioGasto({ onAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valorTexto, setValorTexto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [erros, setErros] = useState({})

  // Converte o texto digitado em número aceitando vírgula ou ponto:
  // "12,50" e "12.50" viram 12.5. Texto vazio ou "abc" viram NaN.
  function interpretarValor(texto) {
    const normalizado = texto.trim().replace(/\s/g, '').replace(',', '.')
    return Number(normalizado)
  }

  // Remove o erro de um campo assim que o usuário volta a digitar nele.
  function limparErro(campo) {
    setErros((atual) => {
      const copia = { ...atual }
      delete copia[campo]
      return copia
    })
  }

  function lidarComAdicao() {
    const novosErros = {}

    if (descricao.trim() === '') {
      novosErros.descricao = 'Informe a descrição do gasto.'
    }

    const valor = interpretarValor(valorTexto)
    if (!Number.isFinite(valor) || valor <= 0) {
      novosErros.valor = 'Informe um valor maior que zero.'
    }

    setErros(novosErros)

    // Algo inválido: só mostra o erro, nada é adicionado.
    if (Object.keys(novosErros).length > 0) return

    onAdicionar({
      id: Date.now(),
      descricao: descricao.trim(),
      categoria: categoria === '' ? 'Outros' : categoria,
      valor,
    })

    // Limpa o formulário para o próximo gasto.
    setDescricao('')
    setValorTexto('')
    setCategoria('')
  }

  return (
    <section className="cartao">
      <h2>Novo gasto</h2>

      <form
        className="formulario"
        // type="button" no botão evita o recarregamento da página;
        // aqui garantimos isso também se alguém der Enter nos campos.
        onSubmit={(evento) => {
          evento.preventDefault()
          lidarComAdicao()
        }}
      >
        <label className="campo">
          <span className="campo-rotulo">Descrição</span>
          <input
            type="text"
            placeholder="Ex.: Almoço"
            value={descricao}
            aria-invalid={erros.descricao ? 'true' : undefined}
            onChange={(evento) => {
              setDescricao(evento.target.value)
              if (erros.descricao) limparErro('descricao')
            }}
          />
          {erros.descricao && (
            <span className="campo-erro" role="alert">
              {erros.descricao}
            </span>
          )}
        </label>

        <div className="campo-linha">
          <label className="campo">
            <span className="campo-rotulo">Valor (R$)</span>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              value={valorTexto}
              aria-invalid={erros.valor ? 'true' : undefined}
              onChange={(evento) => {
                setValorTexto(evento.target.value)
                if (erros.valor) limparErro('valor')
              }}
            />
            {erros.valor && (
              <span className="campo-erro" role="alert">
                {erros.valor}
              </span>
            )}
          </label>

          <label className="campo">
            <span className="campo-rotulo">Categoria</span>
            <select
              value={categoria}
              onChange={(evento) => setCategoria(evento.target.value)}
            >
              <option value="">Selecione...</option>
              {categorias.map((categoriaOpcao) => (
                <option key={categoriaOpcao} value={categoriaOpcao}>
                  {categoriaOpcao}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* type="button" para a página não recarregar no clique */}
        <button type="button" className="botao" onClick={lidarComAdicao}>
          Adicionar gasto
        </button>
      </form>
    </section>
  )
}

export default FormularioGasto
