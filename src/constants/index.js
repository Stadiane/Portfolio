import {
  DevMobile,
  Securite,
  DevWeb,
  javascript,
  java,
  html,
  css,
  reactjs,
  c,
  mysql,
  nodejs,
  cisco,
  git,
  figma,
  office,
  logo_Evasion_Location,
  sigeris,
  webdev,
  POO,
  Reseau,
  ReactThreejs,
  GestionProjet,
  PM,
  vscode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos de moi",
  },
  {
    id: "work",
    title: "Mes Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeuse web",
    icon: DevWeb,
  },
  {
    title: "Développeuse mobile",
    icon: DevMobile,
  },
  {
    title: "Analyste junior en Réseau et sécurité",
    icon: Securite,
  },
  {
    title: "Assistante chef de projet",
    icon: PM,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Langage C",
    icon: c,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Cisco Packet Tracer",
    icon: cisco,
  },
  {
    name: "Visual Studio Code",
    icon: vscode,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Pack Office",
    icon: office,
  },
];

const experiences = [
  {
    title: "Développeuse React Native",
    company_name: "SAS Evasion location, Nancy / FRANCE",
    icon: logo_Evasion_Location,
    iconBg: "#383E56",
    date: "Janvier - Août 2025",
    points: [
      "Création d'une application React Native permettant d'afficher et gérer les données hôtelières.",
      "Connexion avec le PMS existant via une API sécurisée.",
      "Gestion de l'authentification avec JWT (JSON Web Token).",
      "Utilisation de Postman pour tester et intégrer l'API",
      "Développement des différentes pages de l'application",
      "Récupération et affichage de la liste des structures hôtelières.",
      "Stockage sécurisé du token JWT avec AsyncStorage.",
    ],
  },
  {
    title: "Développeuse mobile",
    company_name: "SAS Evasion location, Nancy / FRANCE",
    icon: logo_Evasion_Location,
    iconBg: "#E6DEDD",
    date: "Juin - Août 2024",
    points: [
      "Création d’un application sur smartphones à partir du PMS Système de Gestion Hôtelière de l’entreprise.",
      "Identification des fonctionnalités clés nécessaires pour l'application.",
      "Conception de l'Application :  Création des wireframes et des maquettes sur figma pour visualiser l'interface utilisateur et le flux de l'application.",
      "Création des diagrammes de séquences et de cas d'utilisation qui permet de structurer les fonctionnalités et les interactions techniques de l'application.",
      "Ceci à été fait sur diagram.net.",
    ],
  },
  {
    title: "Assistante Développeuse web",
    company_name: "SIGERIS Sarl,  Bafoussam / CAMEROUN",
    icon: sigeris,
    iconBg: "#383E56",
    date: "Mai - Août 2023",
    points: [
      "Apprentissage du framework BOOTSTRAP 5 (modèles de conception basés sur CSS, HTML et Javascript).",
      "Optimisation des pages BOOTSTRAP pour les appareils mobiles.",
      "Utilisation des classes et des fonctionnalités spécifiques pour garantir une expérience utilisateur cohérente sur différentes tailles d'écran.",
      "Documentation du code de manière claire et compréhensible.",
    ],
  },
];

const projects = [
  {
    name: "Développement web",
    description:
      "Créer un site web pour les étudiants d'une école qui sont à la recherche de stage",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: webdev,
    source_code_link: "https://github.com/Stadiane/Dev_Web",
  },
  {
    name: "Programmation Orienté Objet",
    description:
      "Informatique de gestion : Gestion d'un magasin de vente en ligne des composants électroniques",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "pink-text-gradient",
      },
    ],
    image: POO,
    source_code_link: "https://github.com/Stadiane/POO",
  },
  {
    name: "Développement web",
    description: "Développer un portfolio 3D en react.js et three.js",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
    ],
    image: ReactThreejs,
    source_code_link: "https://github.com/Stadiane/Portfolio",
  },
  {
    name: "Gestion de projet",
    description:
      "Gérer le projet de développement d'une application mobile pour les services d'un campus universitaire",
    tags: [
      {
        name: "Méthode Agile/Scrum",
        color: "blue-text-gradient",
      },
      {
        name: "Roadmapping",
        color: "green-text-gradient",
      },
      {
        name: "Diagramme de Gantt",
        color: "pink-text-gradient",
      },
      {
        name: "Collaboration et Communication",
        color: "green-text-gradient",
      },
    ],
    image: GestionProjet,
    source_code_link: "https://github.com/Stadiane",
  },
  {
    name: "Réseaux et système",
    description:
      "Développer le réseau informatique de différentes entreprises dans une ville",
    tags: [
      {
        name: "cisco packet tracer",
        color: "blue-text-gradient",
      },
      {
        name: "wireshark",
        color: "green-text-gradient",
      },
    ],
    image: Reseau,
    source_code_link: "https://github.com/Stadiane",
  },
];

export { services, technologies, experiences, projects };
