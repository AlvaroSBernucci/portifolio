"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: "#000", height: "100%" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.href)}>
              <ListItemText
                primary={item.label}
                sx={{ color: "#fff", "&:hover": { color: "#E95000" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #E95000",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CodeIcon sx={{ color: "#E95000", fontSize: 32 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              ÁLVARO<span style={{ color: "#E95000" }}>.</span>DEV
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "#E95000" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 0,
                    px: 2,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#E95000",
                      transform: "translateX(-100%)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover": {
                      color: "#E95000",
                      bgcolor: "transparent",
                      "&::after": {
                        transform: "translateX(0)",
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            bgcolor: "#000",
            borderRight: "1px solid #E95000",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
