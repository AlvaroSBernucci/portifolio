"use client";

import { Box, Typography, Container, Paper, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "EduCat",
    role: "Desenvolvedor Full Stack",
    period: "Jan 2025 – Atual",
    isCurrent: true,
    highlights: [
      "Atuei no desenvolvimento de soluções end-to-end, integrando sistemas desde a modelagem de dados e construção de APIs REST até a entrega de interfaces modernas no frontend. Trabalhei com Django REST Framework, Python e React/TypeScript, incluindo manipulação e automação de documentos em PDF e a implementação de webhooks para orquestrar fluxos entre sistemas de forma segura e escalável.",
      "Desenvolvi um sistema de funil de vendas baseado em inteligência artificial, integrando as APIs do Grok e do ChatGPT com prompts otimizados, o que resultou em um aumento de 25% na qualificação de leads, impactando diretamente os resultados do negócio.",
      "Fui responsável pela criação de interfaces React responsivas e performáticas, além da manutenção e refatoração de sistemas legados baseados em class components, elevando significativamente a legibilidade, manutenibilidade e evolução do código.",
      "Também gerenciei a integração e processamento de webhooks e PDFs via Django REST Framework, garantindo integridade dos dados, automação de processos e maior confiabilidade no fluxo de documentos.",
    ],
  },
  {
    company: "Localiza&CO",
    role: "Analista de Inteligência de Mercado",
    period: "Ago 2020 – Ago 2024",
    highlights: [
      "Atuei na liderança da implementação do Salesforce como CRM, estruturando e padronizando o fluxo de vendas da Localiza Seminovos, promovendo maior previsibilidade, organização e eficiência comercial.",
      "Fui responsável pelo desenvolvimento de dashboards e relatórios estratégicos em Power BI, utilizando DAX para construção de KPIs com atualização em tempo real, oferecendo maior visibilidade do desempenho operacional e apoiando diretamente a tomada de decisão gerencial e estratégica.",
      "Contribuí para a otimização das entregas de projetos por meio da adoção e consolidação de metodologias ágeis (Scrum), reduzindo o ciclo de feedback, aumentando a cadência de entregas e promovendo maior alinhamento entre áreas técnicas e de negócio.",
      "Também conduzi treinamentos internos sobre Salesforce e novas ferramentas, capacitando os times e elevando o nível de autonomia, proficiência técnica e eficiência operacional da equipe.",
    ],
  },
];

export default function Experience() {
  return (
    <Box
      id="experiencia"
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
          Trajetória Profissional
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
          Experiência
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: 40 },
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: "rgba(233, 80, 0, 0.3)",
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                pl: { xs: 6, md: 10 },
                pb: 6,
                "&:last-child": { pb: 0 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 12, md: 32 },
                  top: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: exp.isCurrent ? "#E95000" : "#0a0a0a",
                  border: "3px solid #E95000",
                  boxShadow: exp.isCurrent
                    ? "0 0 20px rgba(233, 80, 0, 0.5)"
                    : "none",
                }}
              />

              <Paper
                sx={{
                  p: 4,
                  bgcolor: "#0a0a0a",
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
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <WorkIcon sx={{ color: "#E95000" }} />
                    <Typography
                      variant="h5"
                      sx={{ color: "#fff", fontWeight: 700 }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>
                  {exp.isCurrent && (
                    <Chip
                      label="Atual"
                      size="small"
                      sx={{
                        bgcolor: "#E95000",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    />
                  )}
                </Box>

                <Typography
                  variant="h6"
                  sx={{ color: "#E95000", fontWeight: 500, mb: 1 }}
                >
                  {exp.role}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 3,
                    color: "#a0a0a0",
                  }}
                >
                  <CalendarTodayIcon sx={{ fontSize: 18 }} />
                  <Typography variant="body2">{exp.period}</Typography>
                </Box>

                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {exp.highlights.map((highlight, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        color: "#a0a0a0",
                        mb: 1.5,
                        lineHeight: 1.7,
                        "&::marker": { color: "#E95000" },
                      }}
                    >
                      {highlight}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
