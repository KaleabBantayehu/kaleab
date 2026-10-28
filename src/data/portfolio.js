export const portfolio = {
  name: "Kaleab Bantayehu",
  role: "Software Engineering Student | Frontend & Mobile Developer",
  location: "Addis Ababa, Ethiopia",
  email: "kaleabbantayehu@gmail.com",
  github: "https://github.com/KaleabBantayehu",
  linkedin: "https://www.linkedin.com/in/kaleabbantayehu",
  cv: "/documents/Kaleab_Bantayehu_CV.pdf",
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// CV-backed details shared by the About cards.
export const profileDetails = [
  { id: "location", label: "Location", value: "Addis Ababa, Ethiopia", detail: "UTC+3 (EAT)" },
  { id: "university", label: "University", value: "Addis Ababa University", detail: "Software Engineering" },
  { id: "degree", label: "Degree", value: "B.Sc. Software Engineering", detail: "2022\u20132028 (expected)" },
  { id: "training", label: "Training", value: "IBT College", detail: "With Qiyas / 2026\u2013Present" },
  { id: "focus", label: "Primary focus", value: "Frontend & Mobile", detail: "React, Nextjs, Flutter & Dart" },
  { id: "certifications", label: "Certifications", value: ["ALX Prof. Foundations (Dec 2025)", "ALX Cybersecurity (Mar 2026)"] },
];

// Proficiency descriptions follow the finalized CV.
export const skills = [
  {
    "id": "frontend",
    "title": "Frontend Development",
    "description": "Building web interfaces and exploring browser-based graphics.",
    "groups": [
      {
        "label": "Web development",
        "items": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind CSS",
          "Nextjs",
        ]
      },
      {
        "label": "Graphics exploration",
        "items": [
          "Three.js"
        ]
      }
    ]
  },
  {
    "id": "mobile",
    "title": "Mobile Development",
    "description": "Building cross-platform applications with Flutter and Firebase.",
    "groups": [
      {
        "label": "Mobile stack",
        "items": [
          "Flutter",
          "Dart"
        ]
      },
      {
        "label": "Application services",
        "items": [
          "Firebase Authentication",
          "Cloud Firestore"
        ]
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend & Databases",
    "description": "Developing backend knowledge through coursework and team projects.",
    "groups": [
      {
        "label": "Language",
        "items": [
          "Python",
          "Javascript",
          "TypeScript",
        ]
      },
      {
        "label": "Familiar",
        "items": [
          "Node.js",
          "Express",
          "Nestjs",
        ]
      },
      {
        "label": "AI-assisted team work",
        "items": [
          "FastAPI",
          "PostgreSQL/PostGIS"
        ]
      }
    ]
  },
  {
    "id": "tools",
    "title": "Development Tools",
    "description": "Tools for version control and everyday development.",
    "groups": [
      {
        "label": "Development environment",
        "items": [
          "Git",
          "GitHub",
          "Linux",
          "VS Code"
        ]
      },
      {
        "label": "Additional programming language",
        "items": [
          "C++",
          "Java",
        ]
      }
    ]
  }
];

// Descriptions follow the finalized CV; verified asset sources are in docs/project-assets.md.
export const projects = [
  {
    id: "shegger-wheels",
    title: "Shegger Wheels",
    category: "Full-Stack / Web Application",
    status: "Deployed Project",
    description: "A transportation and urban mobility platform tailored for Addis Ababa, streamlining vehicle services, booking, and management.",
    contribution: "Designed and developed the user interface and core application features, integrating responsive layouts, state management, and reliable backend services.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js"
    ],
    repository: "https://github.com/KaleabBantayehu/Shegger-Wheels",
    preview: {
      kind: "screenshot",
      title: "Shegger Wheels Preview",
      src: "/images/projects/shegger-wheels.jpeg",
      alt: "Shegger Wheels application interface showing urban transport management features.",
      width: 1280,
      height: 800,
      caption: "Actual screenshot of the deployed Shegger Wheels application."
    },
    liveUrl: "https://kaleabbantayehu.github.io/Shegger-Wheels/"
  },
  {
    id: "meetmap",
    title: "MeetMap Addis",
    category: "Mobile Application",
    status: "MVP in development",
    description: "A mobile discovery app for places, events, and hangouts around Addis Ababa, with search, category filters, favorites, reviews, and user accounts.",
    contribution: "Developing the Flutter app and integrating Firebase Authentication, Firestore, Cloudinary uploads, and Gebeta Maps for location search, routes, distance, and ETA.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloudinary",
      "Gebeta Maps"
    ],
    repository: "https://github.com/KaleabBantayehu/meetmap-addis",
    preview: {
      kind: "mobile",
      title: "MeetMap Addis",
      labels: [
        "Places",
        "Events",
        "Hangouts"
      ],
      caption: "Temporary UI illustration - not an application screenshot."
    }
  },
  {
    id: "aquarium",
    title: "Three.js Virtual Aquarium",
    category: "WebGL / Creative Development",
    status: "Interactive 3D graphics",
    description: "A browser-based interactive 3D aquarium exploring scene composition, materials, lighting, and animation.",
    contribution: "Built the scene with animated fish, lighting, materials, camera controls, and click-based object interaction using JavaScript and Three.js.",
    technologies: [
      "JavaScript",
      "Three.js"
    ],
    repository: "https://github.com/KaleabBantayehu/threejs-virtual-aquarium",
    preview: {
      kind: "screenshot",
      title: "Virtual Aquarium",
      src: "/images/projects/virtual-aquarium.png",
      alt: "Live Three.js aquarium showing animated fish, bubbles, rocks, and seaweed inside a blue tank.",
      width: 1280,
      height: 800,
      caption: "Actual screenshot of the deployed Virtual Aquarium."
    },
    liveUrl: "https://kaleabbantayehu.github.io/threejs-virtual-aquarium/"
  }
];


// Education, certification, and duties transcribed from the finalized CV.
export const background = [
  {
    "id": "education",
    "title": "Academic & Training",
    "entries": [
      {
        "title": "Addis Ababa University",
        "subtitle": "Bachelor of Science in Software Engineering",
        "period": "2022\u20132028 (expected)"
      },
      {
        "title": "IBT College, in collaboration with Qiyas",
        "subtitle": "Advanced Full-Stack Development",
        "period": "2026\u2013Present"
      },
      {
        "title": "ALX Professional Foundations",
        "subtitle": "Certificate of Completion",
        "period": "Completed December 2025"
      }
    ]
  },
  {
    "id": "employment",
    "title": "Professional Experience",
    "entries": [
      {
        "title": "Office Assistant",
        "subtitle": "Samuel Kibret Printing & Advertising",
        "period": "November 2023 \u2013 June 2025",
        "description": "Prepared project documents and reports, organized physical and digital records, and coordinated daily office activities."
      },
      {
        "title": "Sales & Marketing Representative",
        "subtitle": "MA Garment",
        "period": "2022\u20132023",
        "description": "Supported retail customers, product promotion, market research, and ongoing customer follow-ups."
      },
      {
        "title": "Real Estate Agent",
        "subtitle": "Landmark",
        "period": "2021\u20132022",
        "description": "Promoted properties, maintained client relationships, supported price negotiations, and prepared documentation."
      }
    ]
  }
];
