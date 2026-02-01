"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 24, color: "#E95000" }} />,
    label: "Email",
    value: "alvarosenabernucci@gmail.com",
    href: "mailto:alvarosenabernucci@gmail.com",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 24, color: "#E95000" }} />,
    label: "Localização",
    value: "Belo Horizonte, MG",
    href: null,
  },
];

export default function Contact() {
  return (
    <Box
      id="contato"
      sx={{
        py: { xs: 6, md: 8 },
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
          Vamos Conversar
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            mb: 1.5,
            fontSize: { xs: "2rem", md: "2.6rem" },
          }}
        >
          Entre em <span style={{ color: "#E95000" }}>Contato</span>
        </Typography>

        <Typography
          sx={{
            color: "#a0a0a0",
            textAlign: "center",
            mb: 4,
            maxWidth: 520,
            mx: "auto",
            fontSize: "0.95rem",
          }}
        >
          Estou aberto a novas oportunidades e desafios. Vamos conversar?
        </Typography>

        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                bgcolor: "#0a0a0a",
                border: "1px solid rgba(255, 109, 31, 0.3)",
                borderRadius: 2,
              }}
            >
              <Grid container spacing={2}>
                {contactInfo.map((info, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={info.href ? "a" : "div"}
                      href={info.href || undefined}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        textDecoration: "none",
                        p: 2,
                        borderRadius: 2,
                        transition: "all 0.25s ease",
                        cursor: info.href ? "pointer" : "default",
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "50%",
                          bgcolor: "rgba(233, 80, 0, 0.1)",
                          mb: 1.5,
                        }}
                      >
                        {info.icon}
                      </Box>

                      <Typography
                        sx={{ color: "#E95000", fontWeight: 600, mb: 0.25 }}
                      >
                        {info.label}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "0.85rem",
                          wordBreak: "break-word",
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  mt: 3,
                  pt: 3,
                  borderTop: "1px solid rgba(233, 80, 0, 0.2)",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    textAlign: "center",
                    mb: 2,
                    fontSize: "0.95rem",
                  }}
                >
                  Conecte-se comigo
                </Typography>
              </Box>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  href="mailto:alvarosenabernucci@gmail.com"
                  startIcon={<EmailIcon />}
                  sx={{
                    bgcolor: "#E95000",
                    color: "#fff",
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    "&:hover": {
                      bgcolor: "#ff6a1a",
                    },
                  }}
                >
                  Enviar Email
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
