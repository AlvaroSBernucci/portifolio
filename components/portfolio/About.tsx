"use client";

import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";

export default function About() {
  const highlights = [
    {
      icon: <PersonIcon sx={{ fontSize: 40, color: "#E95000" }} />,
      title: "Full Stack Developer",
      description:
        "Experiência sólida em Frontend e Backend, criando soluções completas e escaláveis.",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "#E95000" }} />,
      title: "Belo Horizonte, MG",
      description:
        "Baseado no coração de Minas Gerais, trabalhando com equipes locais e remotas.",
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40, color: "#E95000" }} />,
      title: "Multilíngue",
      description:
        "Inglês Avançado, Espanhol Intermediário e Português Fluente.",
    },
  ];

  return (
    <Box
      id="sobre"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#000",
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
          Conheça-me
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
          Sobre <span style={{ color: "#E95000" }}>Mim</span>
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Paper
              sx={{
                p: 4,
                bgcolor: "#0a0a0a",
                border: "1px solid rgba(233, 80, 0, 0.3)",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                flex: 1, // 🔥 ocupa toda a altura do Grid
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#E95000", mb: 3, fontWeight: 600 }}
              >
                Resumo Profissional
              </Typography>

              <Typography sx={{ color: "#a0a0a0", lineHeight: 1.8 }}>
                Desenvolvedor Full Stack com sólida experiência em Frontend e
                Backend, atuando principalmente com{" "}
                <strong style={{ color: "#fff" }}>
                  React, TypeScript, JavaScript, Python (Django REST Framework)
                </strong>{" "}
                e <strong style={{ color: "#fff" }}>Ruby on Rails</strong>.
              </Typography>

              <Typography sx={{ color: "#a0a0a0", mt: 2, lineHeight: 1.8 }}>
                Iniciei minha carreira em análise de dados e Business
                Intelligence, evoluindo para o desenvolvimento de software com
                foco em soluções escaláveis e de alto impacto.
              </Typography>

              <Typography sx={{ color: "#a0a0a0", mt: 2, lineHeight: 1.8 }}>
                Tenho experiência prática em modelagem, consumo e integração de
                APIs RESTful, autenticação (JWT/OAuth), testes automatizados,
                bancos de dados relacionais, cloud (GCP) e versionamento com
                Git.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              {highlights.map((item, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 3,
                    bgcolor: "#0a0a0a",
                    border: "1px solid rgba(233, 80, 0, 0.3)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#E95000",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "rgba(233, 80, 0, 0.1)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#fff", fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#a0a0a0", fontSize: "0.9rem" }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
