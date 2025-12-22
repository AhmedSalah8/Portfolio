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
    icon: <IconHome className=" text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className=" text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconLayoutDashboard className=" text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconBadges className=" text-neutral-500 dark:text-white" />,
  },
  {
    name: "Certificates",
    link: "#certificates",
    icon: <IconCertificate className=" text-neutral-500 dark:text-white" />,
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Introduction ",
    description: `I'm a Talented Front End Web Developer, able to effectively self-manage during
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
    id: 1115445211,
    title: "Banking Dashboard ",
    des: "Banking dashboard UI built using Next.js, TypeScript, and reusable components for a scalable and maintainable frontend.",
    img: "/bank.jpeg",
    iconLists: ["/re.svg"],
    link: "https://banking-dashboard-tau.vercel.app/",
    repoName: "Banking-Dashboard",
  },
  {
    id: 1088183640,
    title: "Landing Page",
    des: " A clean, responsive landing page UI built with Next.js and pure CSS, focused on modern design and user engagement.",
    img: "/landing-page.jpeg",
    iconLists: ["/re.svg"],
    link: "https://landing-page-omega-two-15.vercel.app/",
    repoName: "Landing-Page",
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
    title: "JavaScript",
    img: "/javascript.svg",
  },
  {
    title: "HTML",
    img: "/html.svg",
  },
  {
    title: "CSS",
    img: "/css.svg",
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
    title: "Git",
    img: "/git-logo.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    href: "https://github.com/AhmedSalah8",
    alt: "github",
    img: "/github.svg",
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
