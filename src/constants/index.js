import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Github2 } from "../assets/github2.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as Css } from "../assets/css.svg";
import { ReactComponent as Html } from "../assets/html.svg";
import { ReactComponent as Bootstrap } from "../assets/bootstrap.svg";
import { ReactComponent as Rails } from "../assets/rails.svg";
import { ReactComponent as React } from "../assets/react.svg";
import { ReactComponent as Tailwind } from "../assets/tailwind.svg";
import { ReactComponent as Figma } from "../assets/figma.svg";
import { ReactComponent as Django } from "../assets/django.svg";
import { ReactComponent as Postgre } from "../assets/postgre.svg";

import gymMovImg from "../assets/GymMovement.jpg";
import gymSupImg from "../assets/GymSuplement.jpg";
import animaisFantasticosImg from "../assets/AnimaisFantasticos.jpg";
import bikcraftImg from "../assets/Bikcraft.jpg";
import desertImg from "../assets/Desert.jpg";
import spaceImg from "../assets/SpaceTourism.jpg";
import mortgageImg from "../assets/Mortgage.jpg";

const socialMedia = [
  {
    id: 1,
    href: "https://github.com/AlvaroSBernucci",
    Icon: Github,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/alvarobernucci/",
    Icon: Linkedin,
  },
];

const educationOrgs = [
  {
    id: 1,
    eduLvl: "Ensino Superior",
    year: 2021,
    desc: "Sou graduado em Engenharia Civil pela Pontifícia Universidade Católica de Minas Gerais (PUC-MG), considerada a maior e mais prestigiada instituição privada de ensino superior do Brasil.",
  },
  {
    id: 2,
    eduLvl: "Curso HTML, CSS e JavaScript",
    year: 2023,
    desc: "Curso prático de HTML, CSS e Javascript do básico ao avançado, com foco em aplicações web, através de manipulações do DOM e requisições via Fetch API. Ministrado pela empresa Origamid",
  },
  {
    id: 3,
    eduLvl: "Bootcamp de Desenvolvimento Web Full Stack",
    year: 2024,
    desc: "Bootcamp intensivo de 9 semanas na Le Wagon uma instituição de ensino prestigiada internacionalmente. Aperfeiçoei minhas habilidades em HTML, CSS e JavaScript ES6. Aprendi Bootstrap, SQL, Git, GitHub, Heroku e Ruby on Rails.",
  },
  {
    id: 4,
    eduLvl: "Curso de React e Tailwind",
    year: 2025,
    desc: "Curso prático de React e Tailwind do básico ao avançado, focando em desenvolvimento de aplicações web reativas, ministrado pela empresa Origamid",
  },
];

const technologies = [
  {
    id: 1,
    name: "Javascript",
    type: "Linguagem",
    Icon: Javascript,
  },
  {
    id: 2,
    name: "CSS",
    type: "Interface de usuário",
    Icon: Css,
  },
  {
    id: 3,
    name: "HTML",
    type: "Interface de usuário",
    Icon: Html,
  },
  {
    id: 4,
    name: "Bootstrap",
    type: "Interface de usuário",
    Icon: Bootstrap,
  },
  {
    id: 5,
    name: "Ruby on Rails",
    type: "Web Server",
    Icon: Rails,
  },
  {
    id: 6,
    name: "React",
    type: "Framework",
    Icon: React,
  },
  {
    id: 7,
    name: "Tailwind",
    type: "Interface de usuário",
    Icon: Tailwind,
  },
  {
    id: 8,
    name: "Figma",
    type: "Ferramenta de design",
    Icon: Figma,
  },
  {
    id: 9,
    name: "Django",
    type: "Web Server",
    Icon: Django,
  },
  {
    id: 10,
    name: "PostgreSQL",
    type: "Database",
    Icon: Postgre,
  },
  {
    id: 11,
    name: "GitHub",
    type: "Repositório",
    Icon: Github2,
  },
];

const projetos = [
  {
    id: 1,
    name: "Gym Movement",
    techs: ["Rails", "JavaScript", "Bootstrap", "PostgreSQL"],
    img: gymMovImg,
    src: "https://gymmovement-10918930a688.herokuapp.com/",
  },
  {
    id: 2,
    name: "Animais Fantásticos",
    techs: ["JavaScript", "HTML", "CSS", "React"],
    img: animaisFantasticosImg,
    src: "https://alvarosbernucci.github.io/Projeto-Origamid-JS/",
  },
  {
    id: 3,
    name: "Gym Suplement",
    techs: ["Rails", "JavaScript", "Bootstrap", "PostgreSQL"],
    img: gymSupImg,
    src: "https://gymsuplement-af42cc3da84f.herokuapp.com/",
  },
  {
    id: 4,
    name: "Bikcraft",
    techs: ["JavaScript", "HTML", "CSS", "API"],
    img: bikcraftImg,
    src: "https://alvarosbernucci.github.io/Bikcraft-final/index.html",
  },
  {
    id: 5,
    name: "Space Tourism",
    techs: ["JavaScript", "HTML", "CSS", "API"],
    img: spaceImg,
    src: "https://alvarosbernucci.github.io/Space-tourism-multi-page-website/",
  },
  {
    id: 6,
    name: "Mortgage Calculator",
    techs: ["JavaScript", "HTML", "CSS", "API"],
    img: mortgageImg,
    src: "https://alvarosbernucci.github.io/Mortgage-repayment-calculator/",
  },
];

export { socialMedia, educationOrgs, technologies, projetos };
