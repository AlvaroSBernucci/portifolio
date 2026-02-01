"use client";

import { Box, Typography, Container, Grid, Paper, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import VerifiedIcon from "@mui/icons-material/Verified";

interface EducationItem {
  institution: string;
  course: string;
  period: string;
  description?: string;
  projects?: string[];
}

interface Certificate {
  name: string;
  institution: string;
}

const education: EducationItem[] = [
  {
    institution:
      "Pontifícia Universidade Católica de Minas Gerais - (PUC Minas)",
    course: "Engenharia Civil",
    period: "Jul 2017 – Jul 2021",
  },
  {
    institution: "Le Wagon",
    course: "Bootcamp Desenvolvimento Full Stack Web",
    period: "Out 2024 – Dez 2024",
    description:
      "Treinamento intensivo de 9 semanas em HTML, CSS, JavaScript, Ruby on Rails e SQL, totalizando 400 horas.",
    projects: [
      "E-commerce mobile de suplementos",
      "Aplicativo de monitoramento de academias com IA",
    ],
  },
];

const certificates: Certificate[] = [
  { name: "HTML & CSS", institution: "Origamid" },
  { name: "JavaScript", institution: "Origamid" },
  { name: "React", institution: "Origamid" },
  { name: "TypeScript", institution: "Origamid" },
  { name: "React + TypeScript", institution: "Origamid" },
  { name: "Bootcamp Web Fullstack", institution: "Le Wagon" },
];

export default function Education() {
  return (
    <Box
      id="formacao"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0a0a0a",
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
          Educação
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
          Formação Acadêmica
        </Typography>

        <Grid container spacing={4}>
          {/* Education Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {education.map((edu, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 4,
                    bgcolor: "#000",
                    border: "1px solid rgba(233, 80, 0, 0.3)",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#E95000",
                      boxShadow: "0 0 30px rgba(233, 80, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "rgba(233, 80, 0, 0.1)",
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 32, color: "#E95000" }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ color: "#fff", fontWeight: 600 }}
                      >
                        {edu.institution}
                      </Typography>
                      <Typography sx={{ color: "#a0a0a0", fontSize: "0.9rem" }}>
                        {edu.period}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography sx={{ color: "#E95000", fontWeight: 500, mb: 1 }}>
                    {edu.course}
                  </Typography>

                  {edu.description && (
                    <Typography
                      sx={{ color: "#a0a0a0", mb: 2, lineHeight: 1.7 }}
                    >
                      {edu.description}
                    </Typography>
                  )}

                  {edu.projects && (
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 500,
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <CodeIcon sx={{ fontSize: 18, color: "#E95000" }} />
                        Projetos:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {edu.projects.map((project, i) => (
                          <Chip
                            key={i}
                            label={project}
                            size="small"
                            sx={{
                              bgcolor: "rgba(233, 80, 0, 0.1)",
                              color: "#fff",
                              border: "1px solid rgba(233, 80, 0, 0.5)",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Certificates */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 4,
                bgcolor: "#000",
                border: "1px solid rgba(233, 80, 0, 0.3)",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "rgba(233, 80, 0, 0.1)",
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 32, color: "#E95000" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", fontWeight: 600 }}
                >
                  Certificados
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {certificates.map((cert, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: "rgba(233, 80, 0, 0.05)",
                        border: "1px solid rgba(233, 80, 0, 0.2)",
                        borderRadius: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "#E95000",
                          bgcolor: "rgba(233, 80, 0, 0.1)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 500,
                          fontSize: "0.95rem",
                        }}
                      >
                        {cert.name}
                      </Typography>
                      <Typography sx={{ color: "#a0a0a0", fontSize: "0.8rem" }}>
                        {cert.institution}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
