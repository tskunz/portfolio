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
  huggingFaceUrl?: string;
  imageUrl?: string;
  category: 'AI/ML' | 'Data Science' | 'Web Development' | 'Research';
}

export interface Publication {
  id: string;
  title: string;
  type: 'Medium Article' | 'Research Paper' | 'Technical Report' | 'Preprint';
  date: string;
  description: string;
  url?: string;
  coAuthors?: string[];
  status: 'Published' | 'In Review' | 'Forthcoming';
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
    huggingface?: string;
    youtube?: string;
  };
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Trevor Kunz",
  title: "Data Scientist | AI Developer | Supply Chain",
  location: "Phoenix, Arizona",
  currentRole: "Spares Escalations at Lam Research",
  education: [
    {
      degree: "MS Data Science",
      school: "Southern Methodist University",
      status: "Graduated December 2025"
    },
    {
      degree: "BS Global Supply Chain Management",
      school: "Brigham Young University",
      status: "Graduated December 2018"
    }
  ],
  interests: [
    "Large Language Models",
    "Generative AI",
    "Supply Chain Analytics",
    "BBQ & Cooking Science",
    "Running, Soccer, & Ultimate Frisbee",
		"Traveling with my wife"
  ],
  bio: "Built production ML systems including custom RAG embeddings and transformers from scratch. Former TA in statistics and experimental design at SMU. 6+ years operational experience in Fortune 500 manufacturing. Passionate about applying rigorous data science to real-world problems—whether optimizing energy grids or perfecting char siu through physics-informed modeling.",
  email: "trevors.kunz@gmail.com",
  social: {
    github: "https://github.com/tskunz",
    linkedin: "https://linkedin.com/in/trevor-kunz",
    huggingface: "https://huggingface.co/Tskunz",
    //youtube: "https://youtube.com/@Tjdatakitchen"
  }
};

// Featured Projects
export const projects: Project[] = [
  {
    id: "tj-data-kitchen",
    title: "TJ's Data Kitchen - Founder & Data Scientist",
    status: "In Development",
    description: "Data science education platform combining ML, physics modeling, and culinary science. Building audience for technical concepts through accessible cooking content.",
    longDescription: "Founded educational media venture exploring the intersection of data science and cooking. First project: Project Pitmaster - physics-informed machine learning for BBQ temperature prediction combining thermal dynamics modeling with XGBoost and Monte Carlo simulation. Incorporates domain expertise from line cooking background with rigorous data science methodology. Create educational content explaining complex data science concepts through accessible culinary applications. Responsible for end-to-end pipeline: research, modeling, content strategy, video production, and audience growth. Launching with Chinese New Year char siu series. Draft Medium article documenting methodology and results.",
    techStack: ["Python", "XGBoost", "Monte Carlo Simulation", "Physics-Informed Modeling", "Thermal Dynamics", "Data Visualization", "Content Strategy", "Video Production"],
    features: [
      "Founder & lead data scientist of education platform",
      "Project Pitmaster: Physics-informed BBQ temperature modeling",
      "Combines thermal dynamics with XGBoost for predictive cook time optimization",
      "Monte Carlo simulation for uncertainty quantification",
      "Recipe experimentation with A/B testing methodology",
      "Heritage recipe preservation through data analysis",
      "Educational content for non-technical audiences",
      "End-to-end content pipeline: research → model → production → distribution"
    ],
    category: "Data Science",
    demoUrl: "https://youtube.com/@Tjdatakitchen",
    githubUrl: "https://github.com/tskunz/Project-Pitmaster" //,
    //imageUrl: "/projects/data-kitchen.jpg"
  },
  {
    id: "ercot-availability-model",
    title: "ERCOT Availability Model",
    status: "Complete",
    description: "Probabilistic framework evaluating hyperscale AI data center impact on Texas grid reliability and compliance with Senate Bill 6.",
    longDescription: "Developed a comprehensive framework to assess how AI hyperscale data centers with flexible loads and battery storage can support grid stability. Built hybrid forecasting model (Linear Regression + XGBoost) achieving 88% R² on 96,000+ hourly ERCOT samples. Implemented Monte Carlo simulation to quantify probabilistic availability under various operational scenarios. Methodology recognized by biostatistics faculty for superior interpretability compared to differential equations approaches.",
    techStack: ["Python", "XGBoost", "Pandas", "NumPy", "Monte Carlo Simulation", "Time Series CV", "Scikit-learn"],
    features: [
      "Hybrid forecasting combining interpretable regression with gradient boosting",
      "5-fold time series cross-validation preventing data leakage",
      "Monte Carlo probabilistic modeling for reliability assessment",
      "Quantified blackout probability (LOLP) and magnitude (EENS) reduction",
      "Texas Senate Bill 6 compliance framework",
      "Advanced residual diagnostics (autocorrelation, heteroskedasticity)"
    ],
    category: "Research",
    githubUrl: "https://github.com/tskunz/ERCOT-Availability-Model" //,
    // imageUrl: "/projects/ercot-grid.jpg"
  },
  {
    id: "paul-graham-rag",
    title: "Custom Embedding Models & RAG System",
    status: "Complete",
    description: "Domain-specific RAG system with custom BERT-based embedding models trained from scratch, achieving superior retrieval performance.",
    longDescription: "Built production-ready RAG system for Paul Graham essays with custom embedding models. Trained THREE distinct bi-encoder architectures: MNR Loss (supervised), SimCSE (unsupervised), and LoRA fine-tuned Gemma-1b adapter. Comparative analysis across supervised, unsupervised, and adapter-based approaches. Engineered synthetic data pipeline using Groq API (Llama 3, Qwen 3) to generate 2,200+ high-quality Q&A pairs. Deployed multiple models to Hugging Face achieving superior MRR and nDCG metrics compared to baseline pre-trained embeddings.",
    techStack: ["Python", "PyTorch", "Hugging Face Transformers", "BERT", "Gemma", "LoRA", "Groq API", "LangChain", "ChromaDB", "Sentence-Transformers"],
    features: [
      "Trained THREE embedding models: MNR Loss, SimCSE, and LoRA fine-tuned Gemma-1b",
      "Deployed models to Hugging Face: pg-mnr-bert, pg-simcse-bert, gemma-1b-pg-adapter",
      "Comparative analysis across supervised, unsupervised, and adapter-based approaches",
      "Multiple Negatives Ranking Loss for supervised learning",
      "SimCSE architecture for unsupervised learning",
      "LoRA fine-tuning on Gemma-1b for adapter-based embeddings",
      "Automated synthetic Q&A generation pipeline (2,200+ pairs)",
      "Superior retrieval metrics (MRR, nDCG) vs. baseline models",
      "End-to-end RAG pipeline with vector database integration"
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/tskunz/Pre-train-post-train-and-RAG",
    huggingFaceUrl: "https://huggingface.co/Tskunz/pg-mnr-bert",
    // Additional models on HuggingFace:
    // https://huggingface.co/Tskunz/pg-simcse-bert
    // https://huggingface.co/Tskunz/gemma-1b-pg-adapter
    imageUrl: "/projects/rag-embeddings.jpg"
  },
  {
    id: "tiny-stories-qwen3",
    title: "Qwen3-Style LLM from Scratch",
    status: "Complete",
    description: "Transformer architecture implementation from first principles, featuring modern LLM innovations like Grouped Query Attention and RoPE.",
    longDescription: "Engineered a complete Qwen3-style language model in PyTorch to master modern transformer architecture. Implemented Grouped Query Attention (GQA) for efficient inference, Rotary Positional Embeddings (RoPE) for better length generalization, RMSNorm for training stability, and SwiGLU feed-forward networks. Added custom embedding hooks for classification tasks and optimized training efficiency. Trained on TinyStories dataset demonstrating deep understanding of LLM internals beyond using pre-trained models.",
    techStack: ["PyTorch", "Transformers", "Hugging Face", "Python", "CUDA", "Google Colab"],
    features: [
      "Grouped Query Attention (GQA) implementation",
      "Rotary Positional Embeddings (RoPE)",
      "RMSNorm layer normalization",
      "SwiGLU activation functions",
      "Custom embedding hooks for downstream tasks",
      "Training optimization with mixed precision",
      "Trained from scratch on TinyStories dataset",
      "Complete transformer architecture understanding"
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/tskunz/GenAI_Midterm_Qwen3_Small",
    // huggingFaceUrl: "https://huggingface.co/Tskunz/tiny-stories-qwen3", // Deploy when ready
    imageUrl: "/projects/transformer-architecture.jpg"
  },
  {
    id: "mortgage-refinance-calculator",
    title: "Mortgage Refinance Calculator",
    status: "Complete",
    description: "Interactive financial calculator for mortgage refinancing analysis with amortization schedules and break-even calculations.",
    longDescription: "A comprehensive mortgage refinance calculator built with React that helps homeowners analyze potential savings from refinancing. Features detailed amortization schedules, break-even analysis, and interactive charts for comparing loan scenarios.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Vercel"],
    features: [
      "Monthly payment calculations",
      "Amortization schedule generation",
      "Break-even analysis",
      "Interactive comparison charts",
      "Responsive mobile design",
      "Real-time calculations"
    ],
    // demoUrl: "https://mortgage-refinance-calculator.vercel.app",
    githubUrl: "https://github.com/tskunz/Mortgage-Refinance-Calculator",
    category: "Web Development",
    imageUrl: "/projects/mortgage-calculator.jpg"
  }
];

// Publications and Articles
export const publications: Publication[] = [
  {
    id: "ercot-capstone-paper",
    title: "Probabilistic Framework for Evaluating AI Data Center Grid Reliability Contributions",
    type: "Research Paper",
    date: "2025",
    description: "Capstone research paper developing methodology to quantify how hyperscale AI data centers with flexible loads and battery storage can support Texas grid stability under Senate Bill 6 requirements.",
    coAuthors: ["Troy McSimov", "Jeff Billo"],
    status: "Published",
    url: "https://scholar.smu.edu/datasciencereview/vol9/iss3/3/"
  },
];

// Skills and Technologies
export const skills: Skill[] = [
  {
    category: "Machine Learning & Deep Learning",
    technologies: [
      "PyTorch",
      "Hugging Face Transformers",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "LLM Training & Fine-tuning",
      "Computer Vision"
    ],
    icon: "cpu"
  },
  {
    category: "Generative AI & NLP",
    technologies: [
      "LangChain",
      "RAG Systems",
      "Custom Embedding Models",
      "Prompt Engineering",
      "Vector Databases (ChromaDB)",
      "Sentence Transformers"
    ],
    icon: "brain"
  },
  {
    category: "Data Science & Statistics",
    technologies: [
      "Python",
      "R",
      "Pandas",
      "NumPy",
      "Statistical Modeling",
      "Experimental Design",
      "A/B Testing",
      "Time Series Analysis"
    ],
    icon: "bar-chart"
  },
  {
    category: "Data Engineering & Cloud",
    technologies: [
      "SQL",
      "Azure (exposure)",
      "Google Colab (GPU/TPU)",
      "Git/GitHub",
      "Docker",
      "PostgreSQL"
    ],
    icon: "database"
  },
  {
    category: "Business Intelligence",
    technologies: [
      "PowerBI",
      "Tableau",
      "Excel Automation (VBA)",
      "SAP Integration",
      "Dashboard Design",
      "Data Visualization"
    ],
    icon: "chart-line"
  },
  {
    category: "Web Development",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Streamlit",
      "FastAPI"
    ],
    icon: "code"
  }
];

// Navigation items
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
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

// Publication status colors
export const publicationStatusColors = {
  "Published": "bg-green-500/10 text-green-400 border-green-500/20",
  "In Review": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Forthcoming": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
};

// Publication type colors
export const publicationTypeColors = {
  "Research Paper": "bg-blue-500",
  "Medium Article": "bg-green-500",
  "Technical Report": "bg-purple-500",
  "Preprint": "bg-orange-500"
};

// Category color mapping
export const categoryColors = {
  "AI/ML": "bg-gradient-to-r from-blue-500 to-cyan-500",
  "Data Science": "bg-gradient-to-r from-green-500 to-teal-500",
  "Web Development": "bg-gradient-to-r from-purple-500 to-pink-500",
  "Research": "bg-gradient-to-r from-orange-500 to-red-500"
};
