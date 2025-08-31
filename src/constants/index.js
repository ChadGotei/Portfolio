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
  cbse,
  dseu,
  threejs,
  pizzaco,
  aestroid,
  nextcare,
  snapgram,
  wildoasis,
  fintracker,
  leetcode,
  linkedin,
  gmail,
  instagram,
  github,
  reactquiz,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    dest: "#about"
  },
  {
    id: "experience",
    title: "Experience",
    dest: "#experience"
  },
  {
    id: "academic",
    title: "Academic",
    dest: "#academic",
  },
  {
    id: "projects",
    title: "Projects",
    dest: "#projects",
    // seperatePage: true
  },
  {
    id: "socials",
    title: "Contact",
    dest: "#socials"
  },
];

const services = [
  {
    title: "ReactJs, NextJs",
    icon: web,
  },
  {
    title: "C++ DSA",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    color: "#151030",
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#151030",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "#151030",
  },
  {
    name: "TypeScript",
    icon: typescript,
    color: "#151030",
  },
  {
    name: "React JS",
    icon: reactjs,
    color: "#151030",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    color: "#151030",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#151030",
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: "#151030",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    color: "#151030",
  },
  {
    name: "Three JS",
    icon: threejs,
    color: "#151030",
  },
  {
    name: "git",
    icon: git,
    color: "#151030",
  },
  {
    name: "figma",
    icon: figma,
    color: "#151030",
  },
  {
    name: "docker",
    icon: docker,
    color: "#151030",
  },
];

const academics = [
  {
    title: "12th",
    Board: "CBSE",
    icon: cbse,
    iconBg: "#E6DEDD",
    date: "May 2022",
    points: [
      "Completed my 12th from CBSE board at SBM Sr. Sec. School",
      "Achieved a percentage of nearly 90%",
      "Had commerce stream subjects: Mathematics, Accountancy, and Business Studies",
    ],
  },
  {
    title: "BCA",
    Board: "DSEU",
    icon: dseu,
    iconBg: "#383E56",
    date: "2022 - 2025",
    points: [
      "Bachelor of Computer Applications (BCA) from DSEU Ambedkar Shakarpur I",
      "Maintaining a CGPA above 8.5 so far",
      "Have studied core low-level languages such as C++ and Java, among others",
    ],
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "The Wild Oasis is a user-friendly cabin booking platform with a smooth UI and secure OAuth authentication, offering a seamless experience for booking your perfect getaway.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wildoasis,
    source_code_link: "https://github.com/ChadGotei/da-wild-oasis",
    website_link: "https://da-wild-oasis.vercel.app/",
  },
  {
    name: "Aestroid",
    description:
      "Aestroid is an anime browsing website built with Vanilla JavaScript, allowing users to explore, bookmark, and manage their favorite anime for easy access and a personalized experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aestroid,
    source_code_link: "https://github.com/ChadGotei/Aestroid",
    website_link: "https://aestroidv1.netlify.app/",
  },
  {
    name: "NextCare",
    description:
      "NextCare is a patient management system where patients can book appointments and create profiles. The admin panel, secured by a passcode (123456), handles appointment scheduling.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: nextcare,
    source_code_link: "https://github.com/ChadGotei/NextCare",
    website_link: "https://next-care.vercel.app/",
  },
  {
    name: "React Quiz",
    description:
      "Made this react quiz using vite + react along with local database using indexedDB. Its a simple project which can also be used as template, one just need to change the questions which is quite simple to do.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "indexedDB",
        color: "pink-text-gradient",
      },
    ],
    image: reactquiz,
    source_code_link: "https://github.com/ChadGotei/react-quiz-2",
    website_link: "https://react-quiz-v1.vercel.app/",
  },
  {
    name: "FinTracker",
    description:
      "It is a personal finance tracking website, it has features such as add transaction, edit and perform all sorts of CRUD operations. It is built using MERN stack. Its a full stack project, backend deployed on render and frontend on vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "black-gradiennt",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: fintracker, // to be edited
    source_code_link: "https://github.com/ChadGotei/finance-tracker",
    website_link: "https://finance-tracker-w7xu.vercel.app/",
  },
  {
    name: "React Pizza Co.",
    description:
      "React Pizza Co. is a pizza ordering website with a simple UI, showcasing the use of Redux for efficient state management in a seamless ordering experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pizzaco,
    source_code_link: "https://github.com/ChadGotei/fast-pizza-react",
  },
  {
    name: "Snapgram",
    description:
      "Snapgram is a social media application built with React and Zustand, offering authentication, posting, and basic social media features like following and commenting for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tanstack",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "black-gradiennt",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/ChadGotei/snapgram",
  },
];

const socials = [
  {
    name: "Github",
    link: "https://github.com/ChadGotei",
    image: github,
    cn: 'h-[3.5rem] w-[3.5rem] md:h-[8rem] md:w-[8rem] sm:h-[4rem] sm:w-[4rem]',
    toCopy: false,
  },

  {
    name: "Leetcode",
    link: "https://leetcode.com/u/gauravsb105/",
    image: leetcode,
    cn: 'h-[2.8rem] w-[2.8rem] md:h-[5rem] md:w-[5rem] sm:h-[3rem] sm:w-[3rem]',
    toCopy: false,
  },

  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/gaurav-sharma-918832165/",
    image: linkedin,
    cn: 'h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem] sm:h-[10rem] sm:w-[10rem]',
    toCopy: false,
  },

  {
    name: "Gmail",
    image: gmail,
    cn: 'h-[3rem] w-[3rem] md:h-[7rem] md:w-[7rem] sm:h-[3rem] sm:w-[3rem]',
    toCopy: "gauravsb105@gmail.com",
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/gauravsharma10211/",
    image: instagram,
    cn: 'h-[4.5rem] w-[4.5rem] md:h-[10rem] md:w-[10rem] sm:h-[10rem] sm:w-[10rem]',
    toCopy: false,
  },
];


const internship = {
  title: "Fullstack Development Intern",
  company: "IT Department, DSEU",
  date: "Mar 2025 – Present",
  location: "Delhi, India (On-site)",
  type: "Internship",
  icon: dseu, 
  iconBg: "#232631",
  stack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "TanStack Query", "Figma", "Git"],
  points: [
    "Contributing to the official website of Delhi Skills and Entrepreneurship University: https://dseu.ac.in",
    "Collaborated closely with a small team to build and enhance the platform.",
    "Owned design and development of the admin dashboard for uploading and managing PDFs across various sections of the website.",
    "Built scalable components using React.js, styled with Tailwind CSS, integrated APIs, and implemented caching with TanStack Query.",
    "Developed and maintained backend functionality using Node.js and MongoDB, including RESTful APIs and reliable database operations.",
    "Assisted designers with Figma prototypes, ensuring accurate implementation and contributing to design iterations.",
    "Used Git for version control to maintain code integrity across updates.",
  ],
  links: [
    { label: "DSEU Website", href: "https://dseu.ac.in" },
  ],
};



export { services, technologies, academics, projects, socials, internship };  