# Relatório · Controle de Gastos

Nome: Catarina Gimenes Pires
Modelo usado: MiMo-V2.6-Flash Free

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Ele descobriu sozinho que era um projeto de controle de gastos apenas analisando o RELATORIO.md
1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Adicionei a regra de não alterar esse arquivo, pois faz parte da atividade e deve ser respondido manualmente

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta:
ARQUIVOS CRIADOS:
FormularioGasto.jsx
ListaGastos.jsx
TotalGastos.jsx
ARQUIVOS ALTERADOS:
App.jsx
index.css
index.html (apenas para mudar a lang e o título)
2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta:
Ele comentou o código em português, não fez alterações neste arquivo (RELATORIO.md), não importou novas bibliotecas e fez as verificações com os comandos mapeados no Agents

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: 
O valor é salvo no estado como número "12.5", mas o usuário pode inseri-lo em formato de String, como "12,50". O código é responsável por converter a string em número e reconhecer o . como , - Quem tomou essa decisão fui eu, quando o agente me perguntou como eu gostaria de prosseguir no tratamento de vírgulas
M1.2 Quantas tool calls a missão usou?
Resposta: 
Durante o planejamento, foram feitas 13 tool calls, enquanto durante a execução, foram feitas 20. No final, somaram 33 tool calls

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: Deu R$ 0,30
M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Por que existe um erro de ponto flutuante que acontece pelos cálculos terem que ser feitos sendo convertidos para números binários

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Não, ele fez tudo certinho
M3.2 Como o código sabe qual gasto remover?
Resposta: Ele adicionou um ID nos valores salvos, e remove com base nesse ID

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: 
Planeje um filtro por categoria na seção **"Gastos do mês"**, posicionado no canto superior direito, ao lado do contador de gastos.

O filtro deve permitir selecionar uma categoria específica ou visualizar todas as categorias (opção padrão). As opções devem corresponder às categorias já existentes no cadastro de gastos.

Ao selecionar uma categoria:

- Exiba na lista apenas os gastos pertencentes à categoria selecionada.
- Atualize o contador para mostrar a quantidade de gastos filtrados.
- Atualize o card **"TOTAL"** para exibir a soma apenas dos gastos visíveis após a aplicação do filtro.

Ao selecionar "Todas", restaure a exibição de todos os gastos e o valor total original.

Mantenha o padrão visual atual da aplicação, respeitando as cores, fontes, espaçamentos e componentes já utilizados. O filtro deve ser integrado ao layout sem prejudicar a organização da tela.

M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: O prompt B, pois ele estava mais direcionado. Enquanto no prompt A, o agente precisava se decidir entre se o card Total deveria acompanhar o filtro da lista ou não, o segundo se decidia entre a melhor forma de exibir quantos gastos estavam aparecendo na tela (ex: Se apareceria "5 gastos" ou "5 de 10 gastos") - No segundo prompt, a IA conseguiu focar em mais detalhes.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: Ele guarda no perfil do navegador, visível nas DevTools/armazenamento
B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Por que não estão sendo salvos no servidor, só localmente

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: Ele recebe os props dos gastos que são alterados com useState
R.2 Em que momento você aceitou algo sem entender?
Resposta: Principalmente no primeiro prompt, pois decidi que já que era o primeiro, caso desse errado era só recomeçar
R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Minhas decisões foram quando a IA me perguntava de qual forma eu queria que ela agisse, exemplo: Perguntando se deveria criar um novo arquivo para calculos ou manter no mesmo arquivo do formatador
R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: O Código permaneceria o mesmo, a única diferença é que outro agente talvez sugerisse mudanças diferentes ou se comunicaria comigo de outras maneiras