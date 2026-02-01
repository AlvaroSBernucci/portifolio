"use client";

import {
  Avatar,
  Box,
  Typography,
  Button,
  Container,
  Fade,
  Grow,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const repoName = "/portifolio";

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#000",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at center, rgba(233, 80, 0, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Fade in={mounted} timeout={1000}>
          <Box sx={{ textAlign: "center" }}>
            <Grow in={mounted} timeout={800}>
              <Typography
                variant="overline"
                sx={{
                  color: "#E95000",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  letterSpacing: 4,
                  mb: 2,
                  display: "block",
                }}
              >
                Desenvolvedor Full Stack
              </Typography>
            </Grow>

            <Grow in={mounted} timeout={1000}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 3, md: 5 },
                  mb: 3,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Avatar
                  src={`${repoName}/profile.jpeg`}
                  alt="Álvaro de Sena Bernucci"
                  sx={{
                    width: { xs: 150, sm: 180, md: 220 },
                    height: { xs: 150, sm: 180, md: 220 },
                    border: "4px solid #E95000",
                    boxShadow: "0 0 30px rgba(233, 80, 0, 0.4)",
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "4.5rem" },
                    lineHeight: 1.1,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Álvaro de Sena
                  <br />
                  <Box component="span" sx={{ color: "#E95000" }}>
                    Bernucci
                  </Box>
                </Typography>
              </Box>
            </Grow>

            <Grow in={mounted} timeout={1200}>
              <Typography
                variant="h6"
                sx={{
                  color: "#a0a0a0",
                  maxWidth: 700,
                  mx: "auto",
                  mb: 4,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                Transformando ideias em soluções digitais escaláveis com React,
                TypeScript, Python e Ruby on Rails. Especializado em criar
                experiências de alta performance.
              </Typography>
            </Grow>

            <Grow in={mounted} timeout={1400}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <Button
                  variant="outlined"
                  href="https://github.com/AlvaroSBernucci"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderColor: "#E95000",
                    color: "#E95000",
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "rgba(233, 80, 0, 0.1)",
                      borderColor: "#ff6a1a",
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  href="https://linkedin.com/in/alvarobernucci"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    borderColor: "#E95000",
                    color: "#E95000",
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "rgba(233, 80, 0, 0.1)",
                      borderColor: "#ff6a1a",
                    },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  href="mailto:alvarosenabernucci@gmail.com"
                  startIcon={<EmailIcon />}
                  sx={{
                    borderColor: "#E95000",
                    color: "#E95000",
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "rgba(233, 80, 0, 0.1)",
                      borderColor: "#ff6a1a",
                    },
                  }}
                >
                  Email
                </Button>
              </Box>
            </Grow>
          </Box>
        </Fade>
      </Container>

      <Box
        onClick={() => scrollToSection("#sobre")}
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": { transform: "translateX(-50%) translateY(-10px)" },
            "60%": { transform: "translateX(-50%) translateY(-5px)" },
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: "#E95000", fontSize: 40 }} />
      </Box>
    </Box>
  );
}
