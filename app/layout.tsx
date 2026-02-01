import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
const repoName = "/portifolio";

export const metadata: Metadata = {
  title: "Álvaro Bernucci | Desenvolvedor Full Stack",
  description:
    "Portfólio de Álvaro de Sena Bernucci - Desenvolvedor Full Stack especializado em React, TypeScript, Python e Ruby on Rails",
  icons: {
    icon: [
      {
        url: `${repoName}/favicon_port.png`,
        media: "(prefers-color-scheme: light)",
      },
      {
        url: `${repoName}/favicon_port.png`,
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: `${repoName}/favicon_port.png`,
        type: "image/svg+xml",
      },
    ],
    apple: `${repoName}/favicon_port.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
