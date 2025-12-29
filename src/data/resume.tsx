import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rubén Soler",
  initials: "RS",
  url: "https://rubensolerweb.com",
  location: "Valencia, Spain",
  locationLink: "https://www.google.com/maps/place/valencia",
  description:
    "Product Engineer. I help Indie Hackers and Startups to build their products!",
  summary:
    "At the end of 2025, I quit my job as a software engineer to go fulltime into become Freelance Engineer and building my own businesses. In the past, [I pursued a double degree in computer science](/#education), I worked at Scale-Ups, Banks and FinTech companies in Europe.",
  avatarUrl: "/me-1.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "LangChain",
    "LangGraph",
    "AI",
    "Postgres",
    "Docker",
    "Nest.JS",
    "Javascript",
    "Linux",
    "MongoDB",
    "Mastra AI",
    "MySQL",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "r.solerginer@gmail.com",
    tel: "+34 600200862",
    social: {
      Email: {
        name: "Email",
        url: "mailto:r.solerginer@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RSginer",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rusoler/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rubensolerweb",
        icon: Icons.x,

        navbar: true,
      },
      //      Youtube: {
      //        name: "Youtube",
      //        url: "https://dub.sh/dillion-youtube",
      //        icon: Icons.youtube,
      //        navbar: true,
      //      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "QuickLaunch",
      href: "https://quicklaunchyoursaas.com",
      badges: ["AI", "SaaS", "Starter-Kit"],
      location: "Remote",
      title: "Founder",
      logoUrl: "/quicklaunch.jpeg",
      start: "Dec 2025",
      end: "Present",
      description:
        "Build a AI SaaS starter kit to help Startups and Indie Hackers to launch their MVPs 10x faster!",
    },
    {
      company: "Mercadona Tech",
      badges: ["eXtreme Programming", "TDD"],
      href: "https://mercadona.es",
      location: "Valencia, Spain",
      title: "Product Engineer",
      logoUrl: "/mercadonatech.jpeg",
      start: "Sep 2025",
      end: "Dec 2025",
      description:
        "Develop ACMOfy product, a custom Zendesk application builded in React for Customer Support in Mercadona Online.",
    },
    {
      company: "Mimacom",
      href: "https://mimacom.com/",
      badges: ["AI", "DevOps"],
      location: "Valencia, Spain",
      title: "Product Engineer",
      logoUrl: "/mimacom.jpg",
      start: "January 2020",
      end: "Sep 2025",
      description: `Designed and implemented modern frontend architectures, improving
UX, responsiveness, and performance. Built scalable, reusable UI
components using React, Next.js, Vue.js, React Native, and
microfrontend architectures across e-banking, fleet management,
digital banking, AR supermarket apps, and media management tools. \n
Developed microservices, integrated event-driven and cloud-based
architectures, generated APIs with OpenAPI, deployed services, and
conducted technical debt audits to enhance system architecture,
scalability, and performance..
`,
    },
    {
      company: "EXP360",
      href: "https://exp360.com/",
      badges: ["VR", "AI", "SaaS"],
      location: "Berlin, Germany",
      title: "Product Engineer",
      logoUrl: "/exp360.jpg",
      start: "Nov 2018",
      end: "Jan 2020",
      description:
        "Develop a software product to manage Virtual Reality contents in multiple environments.",
    },
    {
      company: "Finametrix (adquired by Allfunds)",
      href: "https://allfunds.com/en/",
      badges: [],
      location: "Valencia, Spain",
      title: "Product Engineer",
      logoUrl: "/allfunds.jpg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Design architecture and develop new product after merge the company with Allfunds Bank.",
    },
    {
      company: "Gnommo Studios",
      href: "",
      badges: [],
      location: "Valencia, Spain",
      title: "Product Engineer",
      logoUrl: "/gnome.jpg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Develop software for startups with new technologies and frameworks.",
    },
  ],
  education: [
    {
      school: "CIPFP Mislata",
      href: "https://www.fpmislata.com/wordpress/",
      degree: "Higher Technician in Development of Web Applications ",
      logoUrl: "/logo-cipfp.jpg",
      start: "2015",
      end: "2017",
    },
    {
      school: "CIPFP Mislata",
      href: "https://www.fpmislata.com/wordpress/",
      degree: "Technician in Microcomputer Systems and Networks",
      logoUrl: "/logo-cipfp.jpg",
      start: "2013",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "QuickLaunch",
      href: "https://quicklaunchyoursaas.com",
      dates: "Dec 2025 - Present",
      active: true,
      description: `You have a great product idea. Maybe it's an AI tool, a B2B SaaS, or a new take on an existing problem. With our solution, you only pay for the features that really matter for your business.`,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleORM",
        "Replicate.com",
        "COG",
        "Hero UI",
        "Better-Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://quicklaunchyoursaas.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/quicklaunch-screenshot.png",
    },
    {
      title: "Kaisu",
      dates: "June 2022 - Sep 2025",
      active: true,
      description:
        "Kaisu is an AI-powered platform designed to transform professional education in fields such as medicine, psychology, and nutrition. It enables educators to turn their case studies into realistic, voice-based simulations that students can solve independently, from anywhere",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "DrizzleORM",
        "TailwindCSS",
        "Better-Auth",
      ],
      image: "/kaisu.png",
    },
  ],
  hackathons: [
    {
      title: "Wrapito",
      location: "React, Javascript",
      description:
        "Testing library on top of Vitest. Wrap you tests so that you can test both behaviour and components with less effort.",
      image: "/mercadonatech.jpeg",
      links: [
        {
          type: "Source",
          href: "https://github.com/mercadona/wrapito",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "PrimeReact",
      location: "React, Javascript",
      description:
        "PrimeReact is a rich set of open source UI Components for React.",
      image: "/primetek.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/primefaces/primereact",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
