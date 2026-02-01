"use client";

import React from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import { keyframes } from "@mui/system";

const allTechnologies = [
  // Frontend
  "JavaScript (ES6)",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Figma",
  "Axios",
  // Backend
  "Python",
  "Django",
  "Django REST Framework",
  "Ruby",
  "Ruby on Rails",
  "RESTful APIs",
  "Celery",
  "RabbitMQ",
  // Database
  "SQL Server",
  "Google Cloud Platform",
  "MySQL",
  "PostgreSQL",
  // Tools
  "Git",
  "GitHub",
  "GitLab",
  "CI/CD",
  "Testes Unitários",
  "Power BI",
  "DAX",
  "Salesforce",
  "SQLDbx",
  "Scrum",
  "Kanban",
  "Docker",
];

const row1 = allTechnologies.slice(0, 14);
const row2 = allTechnologies.slice(14, 26);
const row3 = allTechnologies.slice(26);

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

interface MarqueeRowProps {
  technologies: string[];
  direction: "left" | "right";
  duration: number;
}

function MarqueeRow({ technologies, direction, duration }: MarqueeRowProps) {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        py: 1.5,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100px",
          zIndex: 2,
          pointerEvents: "none",
        },
        "&::before": {
          left: 0,
          background: "linear-gradient(to right, #0a0a0a, transparent)",
        },
        "&::after": {
          right: 0,
          background: "linear-gradient(to left, #0a0a0a, transparent)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          animation: `${direction === "left" ? scrollLeft : scrollRight} ${duration}s linear infinite`,
          width: "fit-content",
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <Chip
            key={`${tech}-${index}`}
            label={tech}
            sx={{
              bgcolor: "rgba(233, 80, 0, 0.1)",
              color: "#fff",
              border: "1px solid rgba(233, 80, 0, 0.5)",
              fontWeight: 500,
              fontSize: "0.9rem",
              px: 1,
              py: 2.5,
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(233, 80, 0, 0.3)",
                borderColor: "#E95000",
                transform: "scale(1.05)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function Technologies() {
  return (
    <Box
      id="tecnologias"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 6 }}>
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
          Stack Técnica
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Tecnologias
        </Typography>
      </Container>

      <Box
        sx={{ width: "100vw", position: "relative", left: "50%", ml: "-50vw" }}
      >
        <MarqueeRow technologies={row1} direction="left" duration={30} />
        <MarqueeRow technologies={row2} direction="right" duration={35} />
        <MarqueeRow technologies={row3} direction="left" duration={25} />
      </Box>
    </Box>
  );
}
