import {
    mobile,
    backend,
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
    meta,
    seidor,
    colmena,
    carrent,
    jobit,
    tripguide,
    threejs,
    felipeph,
    falabella,
    scl,
    desafio
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
      title: "Full-Stack Developer",
      icon:  felipeph,
    }
  ];
  
   const technologies = [
    { name: "HTML 5", icon: html, progress: 80, color: "#5f90d3" },
    { name: "JavaScript", icon: javascript, progress: 70, color: "#5f90d3"},
    { name: "CSS3", icon: css, progress: 70, color: "#5f90d3"},
    { name: "Typescript", icon: typescript, progress: 30, color: "#5f90d3"  },
    { name: "React JS", icon: reactjs, progress: 60, color: "#5f90d3" },
    { name: "Tailwind CSS", icon: tailwind, progress: 50, color: "#5f90d3"},
    { name: "Bootstrap", icon: reactjs, progress: 60, color: "#5f90d3"  },
    { name: "Node JS", icon: nodejs, progress: 80, color: "#5f90d3"  },
    { name: "three JS", icon: threejs, progress: 50, color: "#5f90d3"},
    { name: "Git", icon: git, progress: 60, color: "#5f90d3" },
    
    // otras tecnologías...
  ];

  const tecnologias = [

    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      title: "Trainee ABAP Consultant ",
      company_name: "Seidor Chile",
      icon: seidor,
      iconBg: "#E6DEDD",
      date: "June 2013 - June 2015",
      points: [
        "Consultant and trainee developer at companys ballerina, molymet and colmena golden cross.",
        "Develope Forms, label printing, reports, incidents, custom programs, batch input, among others.",
        "Improvements and incidents",
      ],
    },
    {
      title: "ABAP Development",
      company_name: "Colmena Golden Cross",
      icon: colmena,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Aug 2019",
      points: [
        "Developing and maintaining SAP applications using ABAP languaje in system SAP R/3",
        "Collaborating with cross-functional to create high-quality products.",
        "Development of customs programs in the financial module, Incidents and improvements. Check printing, electronic invoicing, web service, among others.",
      ],
    },
    {
      title: "ABAP Consultant",
      company_name: "SCL Consultores",
      icon: scl,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - May 2021",
      points: [
        "Developing and maintaining SAP applications using ABAP languaje in system SAP R/3.",
        "Provided services to clients such as mall plaza norte in real estate and financial modules, support in the development of the CCU CONECTA project.",
      ],
    },
    {
      title: "ABAP Developer",
      company_name: "Falabella",
      icon: falabella,
      iconBg: "#E6DEDD",
      date: "Agu 2021 - Feb 2023",
      points: [
        "Z developments in FI module, incidents, improvements,web service, Worfklow implementation, massive load,sending emails, Fiori elements List reports, cds.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full-stack Javascript Bootcamp ",
      company_name: "Desafio Latam & Talento Digital",
      icon: desafio,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
 
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit,
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
          color: "yellow-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };