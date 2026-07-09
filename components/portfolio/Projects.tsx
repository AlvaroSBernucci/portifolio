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

// next/image com `unoptimized` não aplica o basePath no export estático
const BASE_PATH = "/portifolio";

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
    title: "Animais Fantásticos",
    description:
      "Site interativo com galeria de animais, navegação por abas, FAQ em acordeão e animações ao rolar — tudo construído em JavaScript puro e modular.",
    image: "/projects/animais-fantasticos.jpg",
    demoUrl: "https://alvarosbernucci.github.io/Projeto-Origamid-JS/",
    repoUrl: "https://github.com/AlvaroSBernucci/Projeto-Origamid-JS",
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
                <Box
                  component="img"
                  src={`${BASE_PATH}${project.image}`}
                  alt={`Screenshot do projeto ${project.title}`}
                  className="project-image"
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: 700 }}
                  >
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
