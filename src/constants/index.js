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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  saffronstays,
  myways,
  madalgos,
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer Intern",
    company_name: "SaffronStays",
    icon: saffronstays,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developed and implemented a hotel search filter with a comprehensive list of add-ons, enabling users to personalize their bookings and increasing average booking value by 25%.",
      "Innovatively designed and implemented a ticketing system module, enhancing issue resolution efficiency and overall customer support capabilities.",
      "Successfully resolved challenges in the invoice API integration, ensuring seamless financial transactions and contributing to enhanced operational efficiency.",
      "Proactively identified and addressed multiple bugs, leveraging a keen eye for detail and enhancing user experience by implementing fresh UI designs from Figma.",
      "Played a pivotal role in developing the Web-Checkin feature, contributing to streamlined hotel check-in processes and improved customer satisfaction.",
      "Demonstrated expertise in backend development by crafting APIs using GoLang, showcasing a commitment to leveraging cutting-edge technologies for optimal system performance.",
      "Development "
    ],
  },
  {
    title: "Freelance FrontEnd Developer Intern",
    company_name: "ProdEven",
    icon: null,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: ["Creating a e-commerce web application from scratch"],
  },
  {
    title: "FrontEnd Developer Intern",
    company_name: "MadAlgos",
    icon: madalgos,
    iconBg: "#383E56",
    date: "September 2023 - October 2023",
    points: [
      "Created fresh new UI for mentor profile page",
      "Created fresh new UI for mentor listing page",
      "Fixed several UI related bugs",
    ],
  },
  {
    title: "Technical Content Write Intern",
    company_name: "MyWays",
    icon: myways,
    iconBg: "#E6DEDD",
    date: "April 2022 - January 2023",
    points: [
      "Written Blogs on variouse technical topics and roadmaps which are in the top 5 Google search.",
    ],
  },
];

const projects = [
  {
    name: "Coinhub",
    description:
      "A React based Web App where we can see the live price of various cryptos and also the previous trend of the price of that specific Crypto built using ReactJs ChakraUI CoinGecko API FramerMotion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakraUI",
        color: "green-text-gradient",
      },
      {
        name: "coinGecko",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AnTIdoTe003/coinhub",
    project_link: "https://coinhub-db.vercel.app/",
  },
  {
    name: "theEngineerGuy",
    description:
      "A Blogging Website where you can post your own blog, edit and delete and view other user's blog. A custom Dashboard(CMS) has been made for all the users. built using NextJs and TypeScript For Database MongoDb has been used for User Authentication Next-Auth has been used with Custom Credentials Provider and with Google Auth as well.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AnTIdoTe003/blogging-website",
    project_link: "https://theengineerguy.vercel.app/",
  },
  {
    name: "Apna Dukan",
    description:
      "A full-stack e-commerce web application made using the MERN Stack The Features it offers are User Registration and Authentication, Filters, Functional Search Bar, Cart, Wishlist, Payment Gateway(RazorPay), User Dashboard, Admin Dashboard, Protected Routes, Hosted on Vercel. Admin can create, update, remove a product or a category. Admin can also update the delivery status User can easily update their profile",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AnTIdoTe003/ApnaDukan-Frontend",
    project_link: "https://apnadukan.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
