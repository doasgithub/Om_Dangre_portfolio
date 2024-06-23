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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    food,
    bhp,
    movie,
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
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "Machine Learning",
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "the section is just for practice ",
      name: "Random 1",
      designation: "_",
      company: "__",
      image: food,
    },
    {
      testimonial:
        "the section is just for practice ",
      name: "Random 2",
      designation: "_",
      company: "__",
      image: food,
    },
    {
      testimonial:
        "the section is just for practice ",
      name: "Random 3",
      designation: "_",
      company: "__",
      image: food,
    },
  ];
  
  const projects = [
    {
      name: "Food Ordering App",
      description:
        "Web-based platform that allows users to browse, order, and manage food deliveries from various restaurants, offering a seamless and efficient solution for satisfying food cravings.",
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
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/doasgithub/Food-Ordering-Website-Frontend",
    },
    {
      name: "House Price Estimator",
      description:
        "A web-based platform that allows users to estimate the market value of homes in Bengaluru, offering an accurate and efficient solution for real estate decisions using advanced data analytics and current market trends.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "datascience",
          color: "green-text-gradient",
        },
        {
          name: "ml",
          color: "pink-text-gradient",
        },
      ],
      image: bhp,
      source_code_link: "https://github.com/doasgithub/Bengaluru-home-price-Estimator",
    },
    {
      name: "Movie Recommender",
      description:
        "It is an intuitive web tool that suggests personalized films based on your viewing history and preferences, ensuring you discover movies perfectly suited to your tastes and mood.",
      tags: [
        {
          name: "data",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ml",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/doasgithub/Movie-Recommender",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };