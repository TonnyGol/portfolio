// Project data - Tonny Golubitsky's portfolio
export const projects = [
  {
    id: 1,
    title: "Escape Room Booking System",
    description: "Built a backend server room booking system with a JavaFX admin interface, Spring Boot backend, and MySQL database. Developed a React + Vite client to display and interact with the booking calendar in real time via RESTful integration.",
    image: null,
    technologies: ["Java", "Spring Boot", "JavaFX", "React", "Vite", "MySQL", "REST APIs"],
    category: "Full Stack",
    githubUrl: "https://github.com/TonnyGol/EscapeCenter-Demo",
    liveUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "Telegram Poll Bot",
    description: "Created a Telegram bot integrated with the Telegram API, enabling users to create and distribute polls to all connected users. The bot leverages backend communication for dynamic interaction and user engagement.",
    image: null,
    technologies: ["Python", "Telegram API", "APIs", "Chatbot Integration"],
    category: "Backend",
    githubUrl: "https://github.com/TonnyGol/TelegramPoll-AAC",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "2D Game Development",
    description: "Developed a 2D game incorporating creative design, logical systems, and threading management to deliver a smooth, engaging user experience. Continuously improving the project by enhancing multithreading and game mechanics.",
    image: null,
    technologies: ["Java", "Java Swing", "Multithreading", "OOP"],
    category: "Desktop",
    githubUrl: "https://github.com/TonnyGol/GameProject-AAC",
    liveUrl: null,
    featured: true
  },
  {
    id: 4,
    title: "Israeli License Plate Scanner (ANPR)",
    description: "Developed with TensorFlow and OpenCV to recognize Israeli license plates from video, converting them to strings. Implemented a client-server architecture using sockets (UDP), with a web-based client and SQL database. Flask-based interface with JSON communication.",
    image: null,
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "SQL", "UDP Sockets"],
    category: "Machine Learning",
    githubUrl: "https://github.com/TonnyGol/LicensePlate-Scanner",
    liveUrl: null,
    featured: true
  }
];

export const skills = {
  languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "SQL", level: 75 }
  ],
  backend: [
    { name: "Spring Boot", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "Node.js", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "Flask", level: 70 }
  ],
  frontend: [
    { name: "React", level: 80 },
    { name: "Vite", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "JavaFX", level: 80 }
  ],
  devops: [
    { name: "Docker", level: 75 },
    { name: "Git/GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "VSCode", level: 90 },
    { name: "IntelliJ", level: 85 }
  ],
  other: [
    { name: "Machine Learning", level: 70 },
    { name: "Computer Vision", level: 70 },
    { name: "OOP Design", level: 85 },
    { name: "Problem Solving", level: 90 }
  ]
};

export const socialLinks = {
  github: "https://github.com/TonnyGol",
  linkedin: "https://www.linkedin.com/in/Tonny-Golubitsky",
  email: "tonnygol101@gmail.com",
  twitter: null
};

export const personalInfo = {
  name: "Tonny Golubitsky",
  title: "Software Developer",
  phone: "+972-527808321",
  location: "Israel",
  summary: "Third-year Computer Science student with strong programming skills and a solid foundation in software engineering principles. Proficient in Java, Python, with practical experience in object-oriented design, data structures, and database systems. Skilled in working with Git, MySQL, REST APIs. Eager to contribute to development teams and grow in areas such as backend engineering, system design, and scalable application development.",
  education: [
    {
      institution: "Ashkelon Academic College",
      degree: "Bachelor's degree in Computer Science",
      period: "October 2023 - Present"
    },
    {
      institution: "Cyber Education Center",
      program: "Magshimim Program",
      period: "2017 - 2020"
    }
  ],
  military: {
    unit: "Field Intelligence Corps, IDF",
    role: "Squad Commander",
    rank: "Staff Sergeant",
    period: "December 2020 - August 2023"
  },
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Russian", level: "Professional Proficiency" }
  ]
};
