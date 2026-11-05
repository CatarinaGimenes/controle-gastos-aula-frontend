# AGENTS.md

## Projeto
- Controle de gastos pessoais em React + Vite (Vite 8 + React 19), escrito em **JSX puro — não há TypeScript**.
  Não adicione TS, ESLint, Prettier nem etapa de typecheck: a ferramenta é propositalmente mínima (Vite + oxlint).
- Componentes em `src/components`, um por arquivo. Esse diretório ainda não existe — crie na primeira tela
  (hoje `src/App.jsx` ainda tem o contador de exemplo do template do Vite).
- Tarefa de aula: `RELATORIO.md` é o modelo do relatório (pt-BR) com as missões. **Não crie nem edite esse arquivo.**

## Regras
- Responda e comente o código em português.
- Use apenas React: não instale bibliotecas novas (nem router, nem estado global).
- Use componentes de função e `useState` para o estado.
- Use nomes de variáveis e componentes em português.
- Mostre valores em reais, com duas casas: `R$ 12,50`.
- Não crie nem edite o `RELATORIO.md`.

## Comandos
- `npm run dev` — servidor de desenvolvimento com HMR
- `npm run lint` — oxlint no repositório (passa limpo); verificação pontual: `npx oxlint src/App.jsx`
- `npm run build` — build de produção; `npm run preview` — serve o build
- **Não existe** test runner, formatter nem CI — não invente scripts `npm test` / `npm run typecheck`.
- Confirme as mudanças com `npm run lint` e depois `npm run build`.

## Estrutura
- Cadeia de entrada: `index.html` → `src/main.jsx` (StrictMode, monta `<App/>` no `#root`) → `src/App.jsx`.
- Estilos: `src/index.css` (global) + `src/App.css`. Assets estáticos em `public/`
  (`/icons.svg` é um sprite, usado como `/icons.svg#algum-icone`).
- Sem router, sem biblioteca de estado, sem backend, sem arquivo de env. Mantenha assim, salvo pedido.

## Convenções (pt-BR)
- Valores digitados usam **vírgula como separador decimal** ("12,50") — interprete e formate de acordo.
- Persista os gastos no **`localStorage`**: os dados são por navegador (não sincronizam entre eles).
- Cuidado com erro de ponto flutuante ao somar totais (`0.1 + 0.2` não é exatamente `0.3`) — arredonde/mostre com 2 casas.
