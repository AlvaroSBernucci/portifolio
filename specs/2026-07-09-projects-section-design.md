# Seção "Projetos" no portfólio — Design

Data: 2026-07-09
Status: aprovado pelo usuário

## Objetivo

Adicionar uma seção "Projetos" ao portfólio (site único em `app/page.tsx`) com
cards clicáveis — screenshot + descrição — dos projetos que estão no ar, para
que visitantes/recrutadores vejam os trabalhos funcionando em um clique.

## Decisões de produto

- **Curadoria (6 projetos):** Bikcraft, Space Tourism, Product List with Cart,
  Mortgage Repayment Calculator, Clock App e Age Calculator. O Site Imagine foi
  excluído a pedido do usuário (incompleto).
- **Clique:** o card inteiro abre o site no ar em nova aba. Um ícone do GitHub
  no card leva ao repositório sem disparar o link principal.
- **Imagens:** screenshots reais dos sites no ar, capturados com Playwright
  (headless), salvos em `public/projects/<slug>.jpg` e commitados.
- **Posição:** entre as seções Tecnologias e Experiência. Novo item "Projetos"
  na Navbar (`href: "#projetos"`).
- **Idioma:** descrições em português, 1–2 frases por projeto.

## Componente

`components/portfolio/Projects.tsx` (client component), seguindo o padrão das
seções existentes: `Box` com `id="projetos"`, overline laranja + título h2,
`Container maxWidth="lg"`, dados em array tipado no próprio arquivo.

```ts
interface Project {
  title: string;
  description: string;
  image: string;    // /projects/<slug>.jpg
  demoUrl: string;  // site no ar
  repoUrl: string;  // repositório no GitHub
  tags: string[];   // ex.: ["HTML", "CSS", "JavaScript"]
}
```

**Card:** `Paper` fundo `#0a0a0a`, borda `rgba(233,80,0,0.3)`; screenshot no
topo (16:10), título, descrição e chips de tecnologias. Hover: borda/glow
laranja `#E95000` (padrão do site) + leve zoom na imagem.

**Grade:** 1 coluna (xs), 2 (sm), 3 (md+) — 2×3 no desktop.

## Detalhes técnicos

- O site usa `output: "export"` com `basePath: "/portifolio"`; imagens
  referenciadas via `next/image` com `unoptimized` (config global já ativa),
  que aplica o basePath automaticamente.
- Publicação: `next build` → conteúdo de `out/` copiado para `docs/` →
  push na `main` (GitHub Pages serve `docs/`).
- Specs ficam em `specs/` na raiz porque `docs/` é saída de build.

## Verificação

- Build de export sem erros.
- Conferência visual da seção (screenshot local da página renderizada).
- Links dos 6 cards apontando para demo e repositório corretos.
