# Seção "Projetos" — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar a seção "Projetos" ao portfólio com 6 cards clicáveis (screenshot + descrição) dos projetos no ar, e publicar no GitHub Pages.

**Architecture:** Um novo client component `Projects.tsx` seguindo o padrão das seções existentes (dados em array tipado no próprio arquivo, MUI `sx` com tema escuro/laranja). Card usa o padrão "stretched link" (overlay `<a>` absoluto) porque aninhar `<a>` dentro de `<a>` é HTML inválido — o ícone do GitHub fica com `zIndex` maior. Screenshots são capturados dos sites no ar com Playwright e commitados em `public/projects/`.

**Tech Stack:** Next.js 15 (App Router, `output: "export"`, `basePath: "/portifolio"`), MUI v7, next/image (`unoptimized` global), Playwright CLI para screenshots.

## Global Constraints

- Cores do tema: fundo seção `#000`, card `#0a0a0a`, destaque `#E95000`, borda `rgba(233, 80, 0, 0.3)`, texto secundário `#a0a0a0`.
- Todo texto visível em português.
- `docs/` é saída de build servida pelo GitHub Pages — nunca editar à mão; preservar `.nojekyll`/`CNAME` se existirem.
- Repo **não tem infra de testes** (e `ignoreBuildErrors: true`); verificação = build de export sem erro + grep dos links no HTML exportado + verificação visual com screenshot local. Não introduzir framework de teste (YAGNI).
- Branch de trabalho: `feat/projects-section` (já criada, spec commitada).

---

### Task 1: Capturar screenshots dos 6 projetos no ar

**Files:**
- Create: `public/projects/bikcraft.jpg`
- Create: `public/projects/space-tourism.jpg`
- Create: `public/projects/product-list.jpg`
- Create: `public/projects/mortgage-calculator.jpg`
- Create: `public/projects/clock-app.jpg`
- Create: `public/projects/age-calculator.jpg`

**Interfaces:**
- Produces: os 6 arquivos `.jpg` acima, 1280×800 (16:10), consumidos pela Task 2 nos paths `/projects/<slug>.jpg`.

- [ ] **Step 1: Instalar Playwright + Chromium**

```bash
cd /home/alvaro/code/portifolio
npm install  # instala dependências do projeto (package-lock.json presente)
npx playwright install chromium
```

Expected: download do Chromium sem erro. Se a captura no Step 2 falhar com erro de bibliotecas do sistema (`error while loading shared libraries`), pedir ao usuário para rodar `! sudo npx playwright install-deps chromium` e repetir.

- [ ] **Step 2: Capturar os 6 screenshots (viewport 1280×800, espera de 3s para JS renderizar)**

```bash
mkdir -p public/projects
for pair in \
  "bikcraft|https://alvarosbernucci.github.io/Bikcraft-final/" \
  "space-tourism|https://alvarosbernucci.github.io/Space-tourism-multi-page-website/" \
  "product-list|https://alvarosbernucci.github.io/Product-list-with-cart/" \
  "mortgage-calculator|https://alvarosbernucci.github.io/Mortgage-repayment-calculator/" \
  "clock-app|https://alvarosbernucci.github.io/Clock-app/" \
  "age-calculator|https://alvarosbernucci.github.io/Age-calculator-app/"; do
  slug="${pair%%|*}"; url="${pair##*|}"
  npx playwright screenshot --browser=chromium --viewport-size=1280,800 \
    --wait-for-timeout=3000 "$url" "public/projects/${slug}.jpg"
done
ls -la public/projects/
```

Expected: 6 arquivos `.jpg`, cada um > 20 KB.

- [ ] **Step 3: Inspecionar visualmente cada screenshot** (abrir cada `.jpg` com a ferramenta de leitura de imagem). Cada um deve mostrar o site renderizado — não página em branco, 404 ou tela de erro. Se algum estiver quebrado, investigar a URL antes de seguir. Se o conteúdo real contradisser a descrição prevista na Task 2 (ex.: Clock App sem citações), ajustar a descrição na Task 2 para o que a tela mostra.

- [ ] **Step 4: Commit**

```bash
git add public/projects/
git commit -m "feat: screenshots dos projetos no ar para a seção Projetos

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Componente Projects + integração na página e Navbar

**Files:**
- Create: `components/portfolio/Projects.tsx`
- Modify: `app/page.tsx` (import + JSX entre `<Technologies />` e `<Experience />`)
- Modify: `components/portfolio/Navbar.tsx` (array `menuItems`, ~linha 23)

**Interfaces:**
- Consumes: `public/projects/<slug>.jpg` da Task 1.
- Produces: componente `Projects` (default export, sem props), seção com `id="projetos"`.

- [ ] **Step 1: Criar `components/portfolio/Projects.tsx`**

```tsx
"use client";

import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Bikcraft",
    description:
      "Site completo para uma marca de bicicletas elétricas, com páginas de produtos, orçamento, seguros e contato. Construído do zero com foco em design system e responsividade.",
    image: "/projects/bikcraft.jpg",
    demoUrl: "https://alvarosbernucci.github.io/Bikcraft-final/",
    repoUrl: "https://github.com/AlvaroSBernucci/Bikcraft-final",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Space Tourism",
    description:
      "Site multi-página de turismo espacial com navegação entre destinos, tripulação e tecnologia. Desafio do Frontend Mentor com layout totalmente responsivo.",
    image: "/projects/space-tourism.jpg",
    demoUrl:
      "https://alvarosbernucci.github.io/Space-tourism-multi-page-website/",
    repoUrl:
      "https://github.com/AlvaroSBernucci/Space-tourism-multi-page-website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Product List with Cart",
    description:
      "Lista de produtos com carrinho de compras funcional: adição e remoção de itens, resumo e confirmação do pedido, com estado gerenciado em JavaScript puro.",
    image: "/projects/product-list.jpg",
    demoUrl: "https://alvarosbernucci.github.io/Product-list-with-cart/",
    repoUrl: "https://github.com/AlvaroSBernucci/Product-list-with-cart",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mortgage Calculator",
    description:
      "Calculadora de financiamento imobiliário com validação de formulário e cálculo de parcelas mensais e juros em tempo real.",
    image: "/projects/mortgage-calculator.jpg",
    demoUrl:
      "https://alvarosbernucci.github.io/Mortgage-repayment-calculator/",
    repoUrl:
      "https://github.com/AlvaroSBernucci/Mortgage-repayment-calculator",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Clock App",
    description:
      "Relógio com saudação dinâmica de acordo com o horário do dia e painel expansível com informações adicionais de data e fuso horário.",
    image: "/projects/clock-app.jpg",
    demoUrl: "https://alvarosbernucci.github.io/Clock-app/",
    repoUrl: "https://github.com/AlvaroSBernucci/Clock-app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Age Calculator",
    description:
      "Calculadora de idade que valida datas de nascimento e exibe o resultado em anos, meses e dias.",
    image: "/projects/age-calculator.jpg",
    demoUrl: "https://alvarosbernucci.github.io/Age-calculator-app/",
    repoUrl: "https://github.com/AlvaroSBernucci/Age-calculator-app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <Box
      id="projetos"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#000",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: "#E95000",
            letterSpacing: 4,
            display: "block",
            textAlign: "center",
            mb: 1,
          }}
        >
          Trabalhos no Ar
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Projetos
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Paper
              key={project.title}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                bgcolor: "#0a0a0a",
                border: "1px solid rgba(233, 80, 0, 0.3)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#E95000",
                  boxShadow: "0 0 30px rgba(233, 80, 0, 0.15)",
                  transform: "translateY(-4px)",
                },
                "&:hover .project-image": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${project.title} em nova aba`}
                sx={{ position: "absolute", inset: 0, zIndex: 1 }}
              />
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  borderBottom: "1px solid rgba(233, 80, 0, 0.2)",
                }}
              >
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  fill
                  className="project-image"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
              <Box
                sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
                    {project.title}
                  </Typography>
                  <OpenInNewIcon sx={{ color: "#E95000", fontSize: 18 }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#a0a0a0", lineHeight: 1.7, mb: 2, flexGrow: 1 }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "transparent",
                          border: "1px solid rgba(233, 80, 0, 0.4)",
                          color: "#a0a0a0",
                        }}
                      />
                    ))}
                  </Box>
                  <IconButton
                    component="a"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Código do ${project.title} no GitHub`}
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      color: "#a0a0a0",
                      "&:hover": { color: "#E95000" },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
```

- [ ] **Step 2: Integrar em `app/page.tsx`** — adicionar o import e o JSX entre Tecnologias e Experiência:

```tsx
import Projects from "@/components/portfolio/Projects";
```

```tsx
          <Technologies />
          <Projects />
          <Experience />
```

- [ ] **Step 3: Adicionar item na Navbar** — em `components/portfolio/Navbar.tsx`, no array de itens (~linha 23), inserir depois de Tecnologias:

```tsx
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
```

- [ ] **Step 4: Build de export e verificação dos links**

```bash
cd /home/alvaro/code/portifolio
npm run build
grep -c 'id="projetos"' out/index.html
grep -o 'https://alvarosbernucci\.github\.io/[A-Za-z-]*/' out/index.html | sort -u
grep -o 'https://github\.com/AlvaroSBernucci/[A-Za-z-]*' out/index.html | sort -u
grep -o '/portifolio/projects/[a-z-]*\.jpg' out/index.html | sort -u
```

Expected: build sem erro; `id="projetos"` presente; as 6 URLs de demo e os 6 repos listados; as 6 imagens com prefixo `/portifolio/` (basePath aplicado pelo next/image). Se as imagens saírem SEM o prefixo `/portifolio/`, trocar `next/image` por `<img>` com constante `const BASE = "/portifolio"` e `src={`${BASE}${project.image}`}`, e rebuildar.

- [ ] **Step 5: Commit**

```bash
git add components/portfolio/Projects.tsx app/page.tsx components/portfolio/Navbar.tsx
git commit -m "feat: seção Projetos com cards dos projetos no ar

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Verificação visual e publicação no GitHub Pages

**Files:**
- Modify: `docs/` (substituído pelo conteúdo de `out/`)

**Interfaces:**
- Consumes: `out/` gerado na Task 2.

- [ ] **Step 1: Servir o export localmente e capturar a seção renderizada**

```bash
cd /home/alvaro/code/portifolio
mkdir -p /tmp/claude-1000/-home-alvaro-code/ec9b1e9e-49bd-4a7b-9f1d-00a687467432/scratchpad/serve/portifolio
cp -r out/* /tmp/claude-1000/-home-alvaro-code/ec9b1e9e-49bd-4a7b-9f1d-00a687467432/scratchpad/serve/portifolio/
(cd /tmp/claude-1000/-home-alvaro-code/ec9b1e9e-49bd-4a7b-9f1d-00a687467432/scratchpad/serve && python3 -m http.server 8377 &) 
sleep 1
npx playwright screenshot --browser=chromium --viewport-size=1440,2400 \
  --wait-for-timeout=4000 "http://localhost:8377/portifolio/#projetos" \
  /tmp/claude-1000/-home-alvaro-code/ec9b1e9e-49bd-4a7b-9f1d-00a687467432/scratchpad/projetos-section.png
```

(O servidor serve o diretório pai para que o basePath `/portifolio/` resolva igual ao GitHub Pages.)

- [ ] **Step 2: Inspecionar o screenshot** — a seção deve mostrar a grade de cards com imagens carregadas (não ícones de imagem quebrada), títulos, descrições, chips e ícones. Corrigir e rebuildar se algo estiver errado. Matar o servidor ao final (`kill %1` ou pelo PID).

- [ ] **Step 3: Atualizar `docs/` preservando arquivos de infraestrutura do Pages**

```bash
cd /home/alvaro/code/portifolio
ls -la docs/ | grep -iE 'nojekyll|CNAME' || echo "sem arquivos especiais"
# preservar se existirem:
cp docs/.nojekyll /tmp/claude-1000/-home-alvaro-code/ec9b1e9e-49bd-4a7b-9f1d-00a687467432/scratchpad/ 2>/dev/null || true
rm -rf docs && cp -r out docs
cp /tmp/claude-1000/-home-alvaro-code/ec9b1e9e-49bd-4a7b-9f1d-00a687467432/scratchpad/.nojekyll docs/ 2>/dev/null || true
git add -A docs/
git commit -m "build: atualiza export estático com a seção Projetos

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

- [ ] **Step 4: Merge na main e push (publica no GitHub Pages — autorizado no design aprovado)**

```bash
git checkout main && git merge --no-ff feat/projects-section -m "feat: seção Projetos no portfólio

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>" && git push origin main
```

- [ ] **Step 5: Verificar o site no ar** — aguardar ~2 min o deploy do Pages e conferir:

```bash
sleep 120 && curl -s https://alvarosbernucci.github.io/portifolio/ | grep -c 'id="projetos"'
```

Expected: `1` (ou mais). Se `0` após alguns minutos, checar `gh api repos/AlvaroSBernucci/portifolio/pages/builds/latest`.
