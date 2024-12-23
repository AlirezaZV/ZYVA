import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  novinmed,
  danoyad,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  illustrator,
  spline,
  postgres
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
    title: "Creative Designer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend & DB Developer",
    icon: backend,
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
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "spline",
    icon: spline,
  },
];

const experiences = [
  {
    title: "Graphic Designer & Developver",
    company_name: "White Flight Games",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2016 - 2017",
    points: [
        "I collaborated with my university classmates as a GUI designer in White Flight Games, where we developed games using the Unity engine and showcased our work at the Iran Game Developer Cup 2017."
    ],
  },
  {
    title: "Senior Graphic & UI/UX Designer",
    company_name: "Daneshjooyar",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "While pursuing my software engineering degree, I worked as a UI/UX and graphic designer for Daneshjooyar, an online learning platform, enhancing user experience and visual aesthetics.",
    ],
  },
  {
    title: "CEO",
    company_name: "Samino",
    icon: shopify,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "My friend and I developed an online ordering application in Birjand during our studies in Birjand city, growing the business to employ over six staff members successfully",
    ],
  },
  {
    title: "Senior Graphic & UI/UX Designer",
    company_name: "Danoyad",
    icon: danoyad,
    iconBg: "#01b26c",
    date: "2020 - 2022",
    points: [
      "After graduating, I returned to my hometown and began working remotely as a senior graphic designer for Danoyad, a marketing agency specializing in innovative branding and design solutions.",
    ],
  },
  {
    title: "Senior UI/UX Designer & Web Developer",
    company_name: "Novinmed",
    icon: novinmed,
    iconBg: "#E6DEDD",
    date: "2022 - 2025",
    points: [
      "I joined Novinmed, a renowned medical engineering company, as a web developer and UI/UX designer for medical and physiotherapy device applications. During my time there, I gained valuable experience in database (SQL) development while collaborating with an expert software team.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "MAYND",
    description:
      "MAYND, an acronym for Marketing Automation Yielding New Level of Digitalization, represents a cutting-edge approach to marketing automation. I designed the brand identity and developed the official website, www.maynd.ir, reflecting its innovative and digital-forward ethos.",
    tags: [
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://maynd.ir/",
  },
  {
    name: "Activex",
    description:
      "I designed the user interface and user experience for the ActiveX EMS device and developed their website, showcasing the innovative features of their EMS technology.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://activex-ems.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
