export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications and remote work",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development, automation, and user experience.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a components storage platform",
    description: "Bend will enable developers to store their own components and reuse in other projects.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export  const stack = [
    {
      icon: "re",
      title: "React JS"
    }, 
    {
      icon: "next",
      title: "Next JS"
    },
    {
      icon: "nestjs",
      title: "Nest JS"
    },
    {
      icon: "tail",
      title: "Tailwind CSS"
    },
    {
      icon: "fm",
      title: "Framer Motion"
    },
    {
      icon: "ts",
      title: "Typescript"
    },
    {
      icon: "gql",
      title: "Apollo GraphQL"
    },
    {
      icon: "kafka",
      title: "Kafka"
    },
    {
      icon: "as",
      title: "Android Studio"
    },
    {
      icon: "firebase",
      title: "Firebase"
    },
    {
      icon: "mdb",
      title: "Mongo DB"
    },
    {
      icon: "pgs",
      title: "PostgresQL"
    },
    {
      icon: "docker",
      title: "Docker"
    }
  ]

export const projects = [
  {
    id: 1,
    title: "Ekoh Online",
    des: "A full-stack & Mobile event and music management app, with tickets sells (buy and manage), ticket scanning, event marketing.",
    img: "/p1.svg",
    link: "https://ekoh.online",
  },
  {
    id: 2,
    title: "Hypercut Media Showcase",
    des: "Digital Marketing agency showcasing their work and services to clients.",
    img: "/p2.svg",
    link: "https://hypercutmedia.pro",
  },
  {
    id: 3,
    title: "Revenge Buy",
    des: "A mobile web app for buying and selling digital goods in bulk.",
    img: "/p3.svg",
    link: "https://revengebuy.vercel.app",
  },
  // {
  //   id: 4,
  //   title: "XXL Profil Immo",
  //   des: "Real Estate website for the XXL Group.",
  //   img: "/p4.svg",
  //   link: "https://web.xxl-lockimmo.net/",
  // },
];

export const testimonials = [
  {
    quote:
      "I've never met someone like Durin. At the very begining, he was not the best technically, but very fast, he proved that he could, and ended up carrying more and more weight for the company.",
    name: "Touko Yves",
    title: "Director of Dyvix It Solutions",
  },
  {
    quote:
      "Collaborating with Durin was an absolute pleasure. He is litteraly a brother now.",
    name: "Ronald Kammeni",
    title: "Director of Inter IT",
  },
  {
    quote:
      "Durin is someone we don't want to play with, because he who is engaged in every aspect of a project, and really value overall succes, rather than just personnal accomplishment. Remarkabel coder, but also very business oriented.",
    name: "Emmanuel Arrah",
    title: "Manager and Co-Founder at Arrah Solutions",
  },
  {
    quote:
      "If every collaborator is as hardworker as Durin, i'm sure there will be no limit to what we can achieve. Let's build a dream team !",
    name: "Hervé Kenfack",
    title: "Founder of Klapeers",
  },
];

export const companies = [
  {
    id: 1,
    name: "Vercel",
    nameImg: "/vercel.svg",
  },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Product Director - Hypercut Media",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Fullstack & Mobile Developer - Arrah Solutions",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance Junior Server Administrator Projects",
    desc: "Helped resolved DNS issues in klapeers' servers",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Project Analyst & Frontend Developer - Dyvix It Solutions",
    desc: "Use Domain Driven Design and UML in various projects in various areas.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/the-prince237"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/durin-tasondock"
  },
];
