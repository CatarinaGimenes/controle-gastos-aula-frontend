// Cálculos dos gastos do mês.

// Soma os gastos convertendo para centavos antes de somar.
// Em ponto flutuante, 0.1 + 0.2 dá 0.30000000000000004;
// em centavos: 10 + 20 = 30 → 0.3 (0,30).
export function somarGastos(gastos) {
  const totalCentavos = gastos.reduce(
    (total, gasto) => total + Math.round(gasto.valor * 100),
    0,
  )
  return totalCentavos / 100
}
