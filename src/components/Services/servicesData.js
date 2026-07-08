// Import Service Image

import serviceImage from "../../assets/services/service-image.png";

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "User Experience (UX)",
    description:
      "A dedicated UI/UX designer passionate about creating engaging digital experiences with a strong focus on usability, accessibility, and user-centered design.",
    features: [
      "User Research",
      "Wireframing",
      "User Persona",
      "Usability Testing",
    ],
    image: serviceImage,
    active: true,
  },

  {
    id: 2,
    number: "02",
    title: "Front-End Development",
    description:
      "Building responsive, modern, and interactive websites using React, HTML5, CSS3, JavaScript, and Tailwind CSS.",
    features: [
      "React.js",
      "Responsive Design",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: serviceImage,
    active: false,
  },

  {
    id: 3,
    number: "03",
    title: "User Interface (UI)",
    description:
      "Designing beautiful and functional interfaces with a focus on consistency, accessibility, and visual appeal.",
    features: [
      "Figma",
      "Adobe XD",
      "Design System",
      "Prototyping",
    ],
    image: serviceImage,
    active: false,
  },

  {
    id: 4,
    number: "04",
    title: "Website Optimization",
    description:
      "Improving website speed, SEO, accessibility, and performance to deliver a better user experience.",
    features: [
      "SEO",
      "Performance",
      "Accessibility",
      "Optimization",
    ],
    image: serviceImage,
    active: false,
  },

  {
    id: 5,
    number: "05",
    title: "User Interface (UI) Design",
    description:
      "Creating modern web and mobile interfaces with clean layouts, attractive visuals, and intuitive user flows.",
    features: [
      "Mobile UI",
      "Web UI",
      "Design System",
      "Prototype",
    ],
    image: serviceImage,
    active: false,
  },
];

export default servicesData;