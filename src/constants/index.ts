// Constants for the portfolio website
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Kubernetes", "Docker", "CI/CD", "Terraform"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Backend",
    items: ["Node.js", "FastAPI", "Django", "Flask"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI API", "Prompt Engineering", "LLM Optimization"],
  },
];

export const projects = [
  {
    name: "Network Intrusion Detection",
    description: "A machine learning-based system for detecting network intrusions using advanced algorithms. Features real-time monitoring and anomaly detection capabilities for enhanced network security.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/omdixit-2709/Netword-Intrusion_Detection",
  },
  {
    name: "Credit Card Fraud Detection",
    description: "An interactive dashboard for detecting credit card fraud using machine learning algorithms. Features data visualization and real-time fraud detection capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "dashboard",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/omdixit-2709/CreditCard_fraud-detection-dashboard",
  },
  {
    name: "Event Organiser",
    description: "A full-stack web application for organizing and managing events. Built with modern JavaScript technologies and features user authentication, event creation, and management capabilities.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/omdixit-2709/EventOrganiser",
  },
  {
    name: "Sentiment Analysis MLOps",
    description: "A complete MLOps pipeline for sentiment analysis with FastAPI service, Docker containerization, CI/CD with GitHub Actions, and deployment to Heroku. Includes monitoring and automated testing.",
    tags: [
      {
        name: "mlops",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "cicd",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/omdixit-2709/CICD_MLOP",
  },
];

export const aiPrompts = [
  {
    title: "AI-Powered Resume Optimizer",
    description: "Given a job description, refine my resume to highlight the most relevant skills and experiences for this role while maintaining a natural, professional tone.",
    category: "Content Generation",
  },
  {
    title: "Code Review Assistant",
    description: "Analyze this code for potential bugs, security vulnerabilities, and performance issues. Suggest improvements following best practices and design patterns.",
    category: "Software Development",
  },
  {
    title: "Technical Documentation Generator",
    description: "Generate comprehensive API documentation from this code base, including endpoints, parameters, response formats, and example usage.",
    category: "Documentation",
  },
];

export const contact = {
  email: "omdxit.008@gmail.com",
  linkedin: "linkedin.com/in/om-dixit-47b681251",
  github: "github.com/omdixit-2709",
};

export const aboutMe = {
  intro: "Hi, I'm Om Dixit",
  description: "A passionate Software Developer with expertise in AI-powered applications, cloud computing, and full-stack development. I specialize in building scalable, high-performance applications using modern frameworks like React, Node.js, and Python. My experience with AWS, Azure, Docker, and Kubernetes allows me to create efficient cloud-native solutions. I also have a strong interest in AI automation, prompt engineering, and leveraging machine learning for real-world applications.",
}; 