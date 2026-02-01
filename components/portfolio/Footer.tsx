"use client";

import { Box, Typography, Container, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "#0a0a0a",
        borderTop: "1px solid rgba(233, 80, 0, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#a0a0a0",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: "0.9rem",
            }}
          >
            Feito por{" "}
            <Box component="span" sx={{ color: "#fff", fontWeight: 600 }}>
              Álvaro Bernucci
            </Box>
          </Typography>

          <Typography sx={{ color: "#a0a0a0", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Todos os direitos reservados.
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://github.com/AlvaroSBernucci"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: "#a0a0a0",
                "&:hover": { color: "#E95000" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/alvarobernucci"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: "#a0a0a0",
                "&:hover": { color: "#E95000" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
