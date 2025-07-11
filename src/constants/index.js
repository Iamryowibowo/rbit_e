const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Animated Storytelling", imgPath: "/images/idea.svg" }, // storytelling via animasi
  { text: "Design with Purpose", imgPath: "/images/design.svg" }, // desain sesuai brand
  { text: "Alive & Interactive", imgPath: "/images/dynamic.svg" }, // interaktif dan hidup
  { text: "Fast & Optimized", imgPath: "/images/fast.svg" }, // kecepatan dan UX
  { text: "Animated Storytelling", imgPath: "/images/animation.svg" },
  { text: "Design with Purpose", imgPath: "/images/design.svg" },
  { text: "Alive & Interactive", imgPath: "/images/dynamic.svg" },
  { text: "Fast & Optimized", imgPath: "/images/fast.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 9, suffix: "+", label: "Satisfied Clients" },
  { value: 9, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "I developed the main interface of Hostinger’s website with a focus on speed, responsiveness, and user experience. Every component was built to be lightweight, smooth, and optimized across various devices.",
    imgPath: "/images/reactLogo.png",
    logoPath: "/images/react1.png",
    title: "Frontend Web Developer",
    date: "January 2023 – Present",
    responsibilities: [
      "Built and maintained core UI features using React and Tailwind CSS.",
      "Collaborated with the design team to deliver consistent and user-friendly interfaces.",
      "Enhanced user experience with GSAP-based animations and performance optimizations.",
    ],
  },
  {
    review:
      "I handled backend development using Laravel and Inertia.js as the core stack, while also integrating Firebase and MongoDB in projects that required real-time updates and scalable data storage. My role focused on building APIs, authentication systems, and optimizing data flow between frontend and backend.",
    imgPath: "/images/backend.png",
    logoPath: "/images/laravel.png",
    title: "Backend Web Developer",
    date: "September 2021 - Present",
    responsibilities: [
      "Built RESTful APIs using Laravel with Eloquent ORM and connected them to Inertia.js-based frontends (Vue/React).",
      "Designed scalable relational schemas using MySQL for Laravel applications.",
      "Integrated Firebase Authentication and Firestore for real-time features and lightweight serverless projects.",
      "Used MongoDB in high-volume data scenarios that required flexible and fast querying.",
      "Managed secure login systems using Laravel Sanctum and Firebase Auth.",
      "Performed backend debugging, data validation, and response optimization using Laravel Debugbar and Postman.",
    ],
  },

  {
    review:
      "I built cross-platform mobile apps using React Native, balancing performance and user-centric design. This project sharpened my mobile development skills and introduced me to real-world mobile UI/UX challenges.",
    imgPath: "/images/reactNative2.png",
    logoPath: "/images/nativeWind.png",
    title: "React Native Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed mobile apps with React Native and connected them to Firebase backend services.",
      "Conducted performance profiling and refined UI/UX based on user feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
