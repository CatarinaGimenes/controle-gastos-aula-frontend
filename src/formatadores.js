// Funções de formatação de valores em reais.

//12.5 → "12,50" (duas casas, vírgula decimal)
export function formatarReal(numero) {
  return numero.toFixed(2).replace('.', ',')
}
