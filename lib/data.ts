// Personal and project data for the portfolio

export interface Project {
  id: string;
  title: string;
  status: 'In Development' | 'Planning' | 'Research' | 'Complete';
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  category: 'AI/ML' | 'Data Science' | 'Web Development' | 'Research';
}

export interface Skill {
  category: string;
  technologies: string[];
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  currentRole: string;
  education: {
    degree: string;
    school: string;
    status: string;
  }[];
  interests: string[];
  bio: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Trevor S. Kunz",
  title: "AI/Data Science Graduate Student",
  location: "Phoenix, Arizona",
  currentRole: "Spares Planner & Expeditor at Lam Research Corporation",
  education: [
    {
      degree: "MS Data Science",
      school: "Southern Methodist University",
      status: "Current"
    },
    {
      degree: "BS Global Supply Chain Management",
      school: "Brigham Young University",
      status: "Completed"
    }
  ],
  interests: ["Travel", "Cooking", "Running", "Soccer", "Ultimate Frisbee"],
  bio: "Passionate about leveraging AI and data science to solve complex problems. Currently pursuing my Master's in Data Science while working in supply chain operations, bringing a unique perspective that combines practical business experience with cutting-edge AI technologies.",
  email: "tkunz@smu.edu",
  social: {
    github: "https://github.com/tskunz",
    linkedin: "https://linkedin.com/in/trevor-kunz"
  }
};

// Featured Projects
export const projects: Project[] = [
  {
    id: "rag-cooking-assistant",
    title: "RAG Cooking Assistant",
    status: "In Development",
    description: "Intelligent recipe recommendations using retrieval-augmented generation with dietary restrictions and ingredient substitutions.",
    longDescription: "A sophisticated cooking assistant that leverages RAG (Retrieval-Augmented Generation) to provide personalized recipe recommendations. The system understands dietary restrictions, suggests ingredient substitutions, and learns from user preferences to improve recommendations over time.",
    techStack: ["Python", "LangChain", "ChromaDB", "OpenAI API", "Streamlit", "FastAPI"],
    features: [
      "Natural language recipe search",
      "Dietary restriction filtering",
      "Intelligent ingredient substitutions",
      "Nutritional information integration",
      "Personalized recommendations"
    ],
    category: "AI/ML",
    imageUrl: "/projects/rag-cooking.jpg"
  },
  {
    id: "multimodal-food-classifier",
    title: "Multi-Modal Food Classifier",
    status: "Planning",
    description: "Upload food images to get recipes and nutritional information using computer vision and multi-modal AI.",
    longDescription: "An advanced computer vision system that can identify food items from images and provide detailed recipes, nutritional information, and cooking instructions. Uses state-of-the-art multi-modal models to understand both visual and textual context.",
    techStack: ["PyTorch", "CLIP", "FastAPI", "React", "OpenCV", "Hugging Face"],
    features: [
      "Image-based food recognition",
      "Multi-modal understanding",
      "Recipe generation from images",
      "Nutritional analysis",
      "Ingredient identification"
    ],
    category: "AI/ML",
    imageUrl: "/projects/food-classifier.jpg"
  },
  {
    id: "supply-chain-llm-optimizer",
    title: "Supply Chain LLM Optimizer",
    status: "Research",
    description: "Leveraging Large Language Models for intelligent supply chain decision making and optimization.",
    longDescription: "Research project exploring how LLMs can be applied to complex supply chain optimization problems. Focuses on inventory management, demand forecasting, and supplier relationship optimization using natural language processing and reasoning capabilities.",
    techStack: ["GPT-4", "Pandas", "Plotly", "Docker", "PostgreSQL", "Apache Airflow"],
    features: [
      "Natural language supply chain queries",
      "Intelligent demand forecasting",
      "Supplier performance analysis",
      "Risk assessment automation",
      "Decision support system"
    ],
    category: "Research",
    imageUrl: "/projects/supply-chain.jpg"
  },
  {
    id: "webscraping-tutorial",
    title: "Web Scraping Educational Demo",
    status: "Complete",
    description: "Comprehensive web scraping tutorial demonstrating ethical scraping practices on educational websites.",
    longDescription: "A complete educational resource for learning web scraping with Python. Includes examples for multiple practice websites, demonstrates best practices for ethical scraping, and covers various data extraction patterns.",
    techStack: ["Python", "BeautifulSoup", "Requests", "Pandas", "JSON"],
    features: [
      "Multi-site scraping examples",
      "Ethical scraping practices",
      "Data cleaning and storage",
      "Error handling patterns",
      "Comprehensive documentation"
    ],
    demoUrl: "https://github.com/tskunz/Webscraping-Demo",
    githubUrl: "https://github.com/tskunz/Webscraping-Demo",
    category: "Web Development",
    imageUrl: "/projects/webscraping.jpg"
  }
];

// Skills and Technologies
export const skills: Skill[] = [
  {
    category: "Generative AI",
    technologies: [
      "LangChain",
      "OpenAI API",
      "Anthropic Claude",
      "Prompt Engineering",
      "RAG Systems",
      "Vector Databases"
    ],
    icon: "brain"
  },
  {
    category: "Machine Learning & Deep Learning",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Computer Vision",
      "NLP"
    ],
    icon: "cpu"
  },
  {
    category: "Data Engineering",
    technologies: [
      "Python",
      "SQL",
      "Docker",
      "FastAPI",
      "Apache Airflow",
      "PostgreSQL"
    ],
    icon: "database"
  },
  {
    category: "Web Development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs"
    ],
    icon: "code"
  },
  {
    category: "Data Analysis & Visualization",
    technologies: [
      "Pandas",
      "NumPy",
      "Plotly",
      "Matplotlib",
      "Jupyter",
      "Streamlit"
    ],
    icon: "bar-chart"
  },
  {
    category: "Deployment & Cloud",
    technologies: [
      "Streamlit",
      "Gradio",
      "Vercel",
      "AWS",
      "Docker",
      "Git/GitHub"
    ],
    icon: "cloud"
  }
];

// Navigation items
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

// Status color mapping
export const statusColors = {
  "Complete": "bg-green-500/10 text-green-400 border-green-500/20",
  "In Development": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Planning": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Research": "bg-purple-500/10 text-purple-400 border-purple-500/20"
};

// Category color mapping
export const categoryColors = {
  "AI/ML": "bg-gradient-to-r from-blue-500 to-cyan-500",
  "Data Science": "bg-gradient-to-r from-green-500 to-teal-500",
  "Web Development": "bg-gradient-to-r from-purple-500 to-pink-500",
  "Research": "bg-gradient-to-r from-orange-500 to-red-500"
};