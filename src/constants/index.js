import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  spotifywebapp,
  edurang,
  jobit,
  tripguide,
  threejs,
  yabb,
  transfree,
  rsk,
  portofolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Engineer Apprenticeship",
    company_name: "Yayasan Anak Bangsa Bisa (Generasi Gigih) By GoTo Group",
    icon: yabb,
    iconBg: "#FFFFFF",
    date: "February 2022 - July 2022",
    points: [
      "I was selected as one of the participants for the frontend engineer apprenticeship in Yayasan Anak Bangsa Bisa. Yayasan Anak Bangsa Bisa (YABB) is the impact-driven non-profit organization of the GoTo Group.",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company_name: "Transfree",
    icon: transfree,
    iconBg: "#FFFFFF",
    date: "June 2022 - September 2022",
    points: [
      "Revamping, optimizing user experience, and fixing bugs for Transfree and Blink websites.",
      "Build user interfaces for Blink(One Click Checkout Page) from scratch design."
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Rumah Siap Kerja",
    icon: rsk,
    iconBg: "#FFFFFF",
    date: "November 2022 - February 2023",
    points: [
      "Revamping, optimizing user experience, fixing some bugs and upgrading some features for the Rumah Siap Kerja website especially on Siap Usaha.",
      "Helping QA for testing tasks based on TestRail.",
      "Learn some insights and experience from Mentor on Internship Session."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spotify Web App",
    description:
      "This application is called Spotify Web App where this application has several features, especially in terms of searching for songs and creating playlists according to the selected song. The application utilizes the API from the Spotify Developer, especially the Search, User, Playlist and Track APIs. The scope user used is private-modify-playlist.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotifywebapp,
    source_code_link: "https://github.com/ridhodaffasyah/Frontend-Final-Project-Assignment/",
  },
  {
    name: "Edurang",
    description:
      "Platform where students can apply for loan and reimburse when they graduate college. Loan interest will depend on student performance (GPA). Payment bill will be divided into several billing phases according to the number of semesters taken. In each phase, students can choose a payment period to complete the payment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: edurang,
    source_code_link: "https://github.com/ridhodaffasyah/hackbiz-metagross",
  },
  {
    name: "Web Portofolio",
    description:
      "This is my personal web portofolio. A professional online presence that highlights my unique skills, expertise, and experiences. I made this web portofolio using React.js, Tailwind CSS, and Framer Motion. I use React.js as my frontend framework. I use Tailwind CSS as my CSS framework. I use Framer Motion as my animation library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portofolio,
    source_code_link: "https://github.com/ridhodaffasyah/web-portofolio",
  },
];

export { services, technologies, experiences, testimonials, projects };