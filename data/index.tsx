import {
  IconHome,
  IconLayoutDashboard,
  IconBadges,
  IconUser,
  IconCertificate,
} from "@tabler/icons-react";
export const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <IconLayoutDashboard className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconBadges className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Certificates",
    link: "#certificates",
    icon: (
      <IconCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Introduction ",
    description: `I'm a Talented Front End Web Developer, with 1 Year of
      Experience able to effectively self-manage during
      independent projects, as well as collaborate in a team
      setting,
      I am a Highly Motivated and Results-Oriented Individual with a Strong Work Ethic. I am Always Eager to Learn New Things and take on new challenges.`,
    className: "lg:col-span-2 md:col-span-4 md:row-span-1  flex justify-end",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "I'm very flexible with time zone communications",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-2 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-4 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-2 md:row-span-1",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "lg:col-span-2 md:col-span-4 md:row-span-0 z-50 flex justify-center text-center",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iconLists = {
  "802966801": ["/re.svg"],
};

export const projects = [
  {
    id: 802966801,
    title: "Age Calculator App ",
    des: "The Age Calculator app allows users to easily calculate their age by entering their date of birth. ",
    img: "/Age-Calculator.png",
    iconLists: ["/re.svg"],
    link: "https://age-calculator-rho-coral.vercel.app/",
    repoName: "Age-Calculator",
  },
  {
    id: 687416154,
    title: "Tenzies React Game",
    des: " Tenzies is a fast-paced dice game. The goal of the game is choose the same dice and rool to get all the same dice to be the same.",
    img: "/Tenzies-Game.png",
    iconLists: ["/re.svg"],
    link: "https://tenzies-lac.vercel.app/",
    repoName: "Tenzies-Game",
  },
  {
    id: 779469986,
    title: "Users Angular App",
    des: " This app manages users by fetching data from an external API, enabling search by ID, displaying detailed user info, and navigating between pages. ",
    img: "/Users-Angular-App.png",
    iconLists: ["/ang.png"],
    link: "https://users-psi-woad.vercel.app/",
    repoName: "Users-Angular-App",
  },
  {
    id: 709309001,
    title: "ToDo React App",
    des: "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, it's Interactive, Responsive and User-friendly.",
    img: "/todo-app.png",
    iconLists: ["/re.svg"],
    link: "https://to-do-app-two-umber.vercel.app/",
    repoName: "ToDo-App",
  },
];

export const skills = [
  {
    title: "HTML",
    img: "/html.svg",
  },
  {
    title: "CSS",
    img: "/css.svg",
  },
  {
    title: "JavaScript",
    img: "/javascript.svg",
  },
  {
    title: "Bootstrap",
    img: "/bootstrap.svg",
  },
  {
    title: "Tailwind CSS",
    img: "/tailwind-css.svg",
  },
  {
    title: "React.js",
    img: "/react.svg",
  },
  {
    title: "TypeScript",
    img: "/typescript.svg",
  },
  {
    title: "Next.js",
    img: "/next.svg",
  },
  {
    title: "Acernity UI",

    img: "/ace.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    href: "https://github.com/AhmedSalah8",
    alt: "github",
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/amedsalah76/",
    alt: "linkedin",
  },
  {
    id: 3,
    img: "/wha.svg",
    href: "https://wa.link/cqjg2s",
    alt: "whatsapp",
  },
  {
    id: 4,
    img: "/resume.svg",
    href: "/myCV.pdf",
    alt: "resume",
    download: true,
  },
  {
    id: 5,
    img: "/email.svg",
    href: "mailto:sabaayahmed@gmail.com?subject=job offer",
    alt: "email",
  },
];

export const certificates = [
  {
    index: 1,
    src: "/acad-cert.jpeg",
    title: "Web Design Certificate",
    description:
      "Certificate of completing the 'Website Design Using ASP' course ",
    date: "2022",
    issuer: "Arab Academy for Science, Technology, and Maritime Transport.",
  },
  {
    index: 2,
    src: "/commu-cert.jpeg",
    title: "Communication Skills Certificate",
    description:
      "Certificate for completing the Communication Skills course by Oil & Gas Skills (OGS) at Sheikh Zayed Youth Center, Port Said, Egypt.",
    issuer: "Oil & Gas Skills.",
    date: "2022",
  },
  {
    index: 3,
    src: "/dev-cert.jpeg",
    title: "Web Development Certificate",
    description:
      "Certificate for completing the Web Development course by Oil & Gas Skills (OGS) at Sheikh Zayed Youth Center, Port Said, Egypt.",
    issuer: "Oil & Gas Skills.",
    date: "2022",
  },
  {
    index: 4,
    src: "/teach-cert.jpeg",
    title: "Teaching Web Development ",
    description:
      "Certificate Awarded by Oil & Gas Skills (OGS) in teaching the Web Development track at Sheikh Zayed Youth Center, Port Said, Egypt.",
    issuer: "Oil & Gas Skills.",
    date: "2023",
  },
];
