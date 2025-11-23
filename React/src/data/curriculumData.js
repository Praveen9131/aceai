// Curriculum data for all courses
export const curriculumData = [
  {
    courseName: "Frontend with React",
    duration: "10 weeks",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to React & Modern Web Development", icon: "play" },
          { type: "VIDEO LESSON", title: "Setting Up Development Environment", icon: "play" },
        ]
      },
      {
        week: "WEEK 1",
        title: "REACT FUNDAMENTALS",
        description: "Components, JSX & Props",
        liveSessions: 3,
        videoLessons: 5,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "React Basics: Components & JSX", icon: "doc" },
          { type: "LIVE LESSON", title: "Props & State Management", icon: "gear" },
          { type: "VIDEO LESSON", title: "Event Handling & Conditional Rendering", icon: "play" },
          { type: "ASSIGNMENT", title: "Build Your First React App", icon: "grad" },
          { type: "LIVE LESSON", title: "Lists, Keys & Forms", icon: "chat" },
        ]
      },
      {
        week: "WEEK 2",
        title: "HOOKS & STATE MANAGEMENT",
        description: "useState, useEffect & More",
        liveSessions: 2,
        videoLessons: 6,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "useState & useEffect Hooks", icon: "doc" },
          { type: "VIDEO LESSON", title: "Custom Hooks & Context API", icon: "play" },
          { type: "VIDEO LESSON", title: "useReducer & useMemo", icon: "play" },
          { type: "ASSIGNMENT", title: "State Management Practice", icon: "grad" },
          { type: "LIVE LESSON", title: "Advanced Hooks Patterns", icon: "chat" },
        ]
      },
      {
        week: "WEEK 3",
        title: "ROUTING & NAVIGATION",
        description: "React Router",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "React Router Setup & Navigation", icon: "doc" },
          { type: "VIDEO LESSON", title: "Route Parameters & Query Strings", icon: "play" },
          { type: "VIDEO LESSON", title: "Protected Routes & Authentication", icon: "play" },
          { type: "ASSIGNMENT", title: "Multi-page React Application", icon: "grad" },
        ]
      },
      {
        week: "WEEK 4",
        title: "STATE MANAGEMENT LIBRARIES",
        description: "Redux & Zustand",
        liveSessions: 3,
        videoLessons: 5,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Redux Fundamentals", icon: "doc" },
          { type: "VIDEO LESSON", title: "Redux Toolkit & RTK Query", icon: "play" },
          { type: "LIVE LESSON", title: "Zustand for Simple State", icon: "gear" },
          { type: "ASSIGNMENT", title: "E-commerce Cart with Redux", icon: "grad" },
          { type: "LIVE LESSON", title: "State Management Best Practices", icon: "chat" },
        ]
      },
      {
        week: "WEEK 5",
        title: "STYLING & UI COMPONENTS",
        description: "CSS Modules, Styled Components",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "CSS Modules & Styled Components", icon: "doc" },
          { type: "VIDEO LESSON", title: "Material-UI & Ant Design", icon: "play" },
          { type: "VIDEO LESSON", title: "Responsive Design Patterns", icon: "play" },
          { type: "ASSIGNMENT", title: "Build UI Component Library", icon: "grad" },
        ]
      },
      {
        week: "WEEK 6-7",
        title: "ADVANCED REACT PATTERNS",
        description: "Performance & Optimization",
        liveSessions: 3,
        videoLessons: 6,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "React Performance Optimization", icon: "doc" },
          { type: "VIDEO LESSON", title: "Code Splitting & Lazy Loading", icon: "play" },
          { type: "VIDEO LESSON", title: "Memoization & useMemo/useCallback", icon: "play" },
          { type: "LIVE LESSON", title: "Error Boundaries & Testing", icon: "gear" },
          { type: "ASSIGNMENT", title: "Optimize React Application", icon: "grad" },
          { type: "LIVE LESSON", title: "React Best Practices", icon: "chat" },
        ]
      },
      {
        week: "WEEK 8-9",
        title: "FULL-STACK INTEGRATION",
        description: "API Integration & Authentication",
        liveSessions: 3,
        videoLessons: 5,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Fetch API & Axios", icon: "doc" },
          { type: "VIDEO LESSON", title: "RESTful API Integration", icon: "play" },
          { type: "LIVE LESSON", title: "Authentication & JWT", icon: "gear" },
          { type: "VIDEO LESSON", title: "GraphQL with Apollo Client", icon: "play" },
          { type: "ASSIGNMENT", title: "Build Full-Stack Application", icon: "grad" },
        ]
      },
      {
        week: "WEEK 10",
        title: "CAPSTONE PROJECT",
        description: "Build Complete React Application",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "Complete React Portfolio/Application", icon: "briefcase" },
        ]
      },
    ]
  },
  {
    courseName: "Backend Development",
    duration: "12 weeks",
    subtitle: "Flask, FastAPI, Django, MySQL, Databases & Git",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to Backend Development", icon: "play" },
          { type: "VIDEO LESSON", title: "Python for Backend & API Development", icon: "play" },
        ]
      },
      {
        week: "WEEK 1-2",
        title: "FLASK FUNDAMENTALS",
        description: "RESTful APIs with Flask",
        liveSessions: 4,
        videoLessons: 8,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Flask Setup & Basic Routing", icon: "doc" },
          { type: "VIDEO LESSON", title: "Request/Response & Templates", icon: "play" },
          { type: "LIVE LESSON", title: "Flask RESTful APIs", icon: "gear" },
          { type: "VIDEO LESSON", title: "Error Handling & Validation", icon: "play" },
          { type: "ASSIGNMENT", title: "Build REST API with Flask", icon: "grad" },
          { type: "LIVE LESSON", title: "Flask Extensions & Blueprints", icon: "chat" },
        ]
      },
      {
        week: "WEEK 3-4",
        title: "FASTAPI & ASYNC",
        description: "Modern Python Web Framework",
        liveSessions: 4,
        videoLessons: 8,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "FastAPI Basics & Async/Await", icon: "doc" },
          { type: "VIDEO LESSON", title: "Path & Query Parameters", icon: "play" },
          { type: "LIVE LESSON", title: "Request Body & Pydantic Models", icon: "gear" },
          { type: "VIDEO LESSON", title: "Dependency Injection & Background Tasks", icon: "play" },
          { type: "ASSIGNMENT", title: "Async API with FastAPI", icon: "grad" },
          { type: "LIVE LESSON", title: "FastAPI Best Practices", icon: "chat" },
        ]
      },
      {
        week: "WEEK 5-6",
        title: "DJANGO FRAMEWORK",
        description: "Full-Stack Web Framework",
        liveSessions: 5,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Django Setup & MVT Architecture", icon: "doc" },
          { type: "VIDEO LESSON", title: "Models & Database Migrations", icon: "play" },
          { type: "LIVE LESSON", title: "Views, Templates & URLs", icon: "gear" },
          { type: "VIDEO LESSON", title: "Django Admin & Forms", icon: "play" },
          { type: "ASSIGNMENT", title: "Build Django Web Application", icon: "grad" },
          { type: "LIVE LESSON", title: "Django REST Framework", icon: "chat" },
        ]
      },
      {
        week: "WEEK 7-8",
        title: "DATABASES & ORM",
        description: "MySQL, PostgreSQL & Database Design",
        liveSessions: 4,
        videoLessons: 8,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Database Design & Normalization", icon: "doc" },
          { type: "VIDEO LESSON", title: "MySQL Setup & SQL Basics", icon: "play" },
          { type: "LIVE LESSON", title: "SQLAlchemy ORM", icon: "gear" },
          { type: "VIDEO LESSON", title: "Database Relationships & Queries", icon: "play" },
          { type: "ASSIGNMENT", title: "Design & Build Database Schema", icon: "grad" },
          { type: "LIVE LESSON", title: "Database Optimization & Indexing", icon: "chat" },
        ]
      },
      {
        week: "WEEK 9",
        title: "VERSION CONTROL WITH GIT",
        description: "Git & GitHub Workflow",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Git Fundamentals & Commands", icon: "doc" },
          { type: "VIDEO LESSON", title: "Branching & Merging Strategies", icon: "play" },
          { type: "VIDEO LESSON", title: "GitHub Workflow & Collaboration", icon: "play" },
          { type: "ASSIGNMENT", title: "Git Collaboration Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 10-11",
        title: "AUTHENTICATION & SECURITY",
        description: "JWT, OAuth & Security Best Practices",
        liveSessions: 3,
        videoLessons: 6,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "JWT Authentication", icon: "doc" },
          { type: "VIDEO LESSON", title: "OAuth 2.0 & Social Login", icon: "play" },
          { type: "VIDEO LESSON", title: "Security Best Practices", icon: "play" },
          { type: "LIVE LESSON", title: "API Security & Rate Limiting", icon: "gear" },
          { type: "ASSIGNMENT", title: "Secure API Implementation", icon: "grad" },
        ]
      },
      {
        week: "WEEK 12",
        title: "CAPSTONE PROJECT",
        description: "Full-Stack Backend Application",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "Complete Backend API with Database", icon: "briefcase" },
        ]
      },
    ]
  },
  {
    courseName: "Data Science",
    duration: "12 weeks",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to Data Science", icon: "play" },
          { type: "VIDEO LESSON", title: "Python for Data Science", icon: "play" },
        ]
      },
      {
        week: "WEEK 1-2",
        title: "DATA ANALYSIS FOUNDATIONS",
        description: "Pandas, NumPy & Data Wrangling",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "NumPy Fundamentals", icon: "doc" },
          { type: "VIDEO LESSON", title: "Pandas DataFrames & Series", icon: "play" },
          { type: "LIVE LESSON", title: "Data Cleaning & Preprocessing", icon: "gear" },
          { type: "VIDEO LESSON", title: "Data Wrangling & Transformation", icon: "play" },
          { type: "ASSIGNMENT", title: "Data Analysis Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 3-4",
        title: "DATA VISUALIZATION",
        description: "Matplotlib, Seaborn & Plotly",
        liveSessions: 3,
        videoLessons: 6,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Matplotlib & Seaborn", icon: "doc" },
          { type: "VIDEO LESSON", title: "Interactive Visualizations with Plotly", icon: "play" },
          { type: "LIVE LESSON", title: "Data Storytelling & Dashboards", icon: "gear" },
          { type: "ASSIGNMENT", title: "Create Data Visualization Dashboard", icon: "grad" },
        ]
      },
      {
        week: "WEEK 5-6",
        title: "STATISTICS & PROBABILITY",
        description: "Statistical Analysis",
        liveSessions: 4,
        videoLessons: 8,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Descriptive Statistics", icon: "doc" },
          { type: "VIDEO LESSON", title: "Probability Distributions", icon: "play" },
          { type: "LIVE LESSON", title: "Hypothesis Testing", icon: "gear" },
          { type: "VIDEO LESSON", title: "Statistical Inference", icon: "play" },
          { type: "ASSIGNMENT", title: "Statistical Analysis Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 7-8",
        title: "MACHINE LEARNING BASICS",
        description: "Supervised & Unsupervised Learning",
        liveSessions: 5,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Introduction to Machine Learning", icon: "doc" },
          { type: "VIDEO LESSON", title: "Linear & Logistic Regression", icon: "play" },
          { type: "LIVE LESSON", title: "Decision Trees & Random Forest", icon: "gear" },
          { type: "VIDEO LESSON", title: "Clustering & K-Means", icon: "play" },
          { type: "ASSIGNMENT", title: "ML Model Development Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 9-10",
        title: "ADVANCED ML TECHNIQUES",
        description: "Feature Engineering & Model Evaluation",
        liveSessions: 4,
        videoLessons: 8,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Feature Engineering", icon: "doc" },
          { type: "VIDEO LESSON", title: "Model Evaluation & Validation", icon: "play" },
          { type: "LIVE LESSON", title: "Hyperparameter Tuning", icon: "gear" },
          { type: "VIDEO LESSON", title: "Cross-Validation & Ensemble Methods", icon: "play" },
          { type: "ASSIGNMENT", title: "Advanced ML Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 11",
        title: "TIME SERIES & PREDICTIVE ANALYTICS",
        description: "Time Series Analysis",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Time Series Analysis", icon: "doc" },
          { type: "VIDEO LESSON", title: "Forecasting Techniques", icon: "play" },
          { type: "ASSIGNMENT", title: "Time Series Prediction Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 12",
        title: "CAPSTONE PROJECT",
        description: "End-to-End Data Science Project",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "Complete Data Science Project", icon: "briefcase" },
        ]
      },
    ]
  },
  {
    courseName: "AI & Machine Learning",
    duration: "14 weeks",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to AI & ML", icon: "play" },
          { type: "VIDEO LESSON", title: "ML Fundamentals Overview", icon: "play" },
        ]
      },
      {
        week: "WEEK 1-2",
        title: "MACHINE LEARNING FUNDAMENTALS",
        description: "Supervised & Unsupervised Learning",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 3,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "ML Algorithms Overview", icon: "doc" },
          { type: "VIDEO LESSON", title: "Linear & Polynomial Regression", icon: "play" },
          { type: "LIVE LESSON", title: "Classification Algorithms", icon: "gear" },
          { type: "VIDEO LESSON", title: "Clustering & Dimensionality Reduction", icon: "play" },
          { type: "ASSIGNMENT", title: "ML Project 1", icon: "grad" },
        ]
      },
      {
        week: "WEEK 3-5",
        title: "DEEP LEARNING WITH TENSORFLOW",
        description: "Neural Networks & TensorFlow",
        liveSessions: 6,
        videoLessons: 15,
        assignments: 3,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Neural Networks Basics", icon: "doc" },
          { type: "VIDEO LESSON", title: "TensorFlow & Keras Setup", icon: "play" },
          { type: "LIVE LESSON", title: "Building Neural Networks", icon: "gear" },
          { type: "VIDEO LESSON", title: "Training & Optimization", icon: "play" },
          { type: "ASSIGNMENT", title: "Deep Learning Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 6-7",
        title: "PYTORCH & ADVANCED DL",
        description: "PyTorch Framework",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "PyTorch Fundamentals", icon: "doc" },
          { type: "VIDEO LESSON", title: "Autograd & Neural Networks", icon: "play" },
          { type: "LIVE LESSON", title: "CNN Architectures", icon: "gear" },
          { type: "VIDEO LESSON", title: "RNN & LSTM Networks", icon: "play" },
          { type: "ASSIGNMENT", title: "Advanced DL Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 8-9",
        title: "COMPUTER VISION",
        description: "Image Processing & CNN",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Image Processing Basics", icon: "doc" },
          { type: "VIDEO LESSON", title: "CNN for Image Classification", icon: "play" },
          { type: "LIVE LESSON", title: "Object Detection & YOLO", icon: "gear" },
          { type: "ASSIGNMENT", title: "Computer Vision Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 10-11",
        title: "NATURAL LANGUAGE PROCESSING",
        description: "NLP & Text Processing",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Text Preprocessing & Tokenization", icon: "doc" },
          { type: "VIDEO LESSON", title: "Word Embeddings & Transformers", icon: "play" },
          { type: "LIVE LESSON", title: "Sentiment Analysis & Text Classification", icon: "gear" },
          { type: "ASSIGNMENT", title: "NLP Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 12-13",
        title: "MODEL DEPLOYMENT & MLOPS",
        description: "Production ML Systems",
        liveSessions: 3,
        videoLessons: 6,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Model Deployment Strategies", icon: "doc" },
          { type: "VIDEO LESSON", title: "MLOps & Model Monitoring", icon: "play" },
          { type: "ASSIGNMENT", title: "Deploy ML Model", icon: "grad" },
        ]
      },
      {
        week: "WEEK 14",
        title: "CAPSTONE PROJECT",
        description: "End-to-End AI/ML Project",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "Complete AI/ML Application", icon: "briefcase" },
        ]
      },
    ]
  },
  {
    courseName: "Prompt Engineering",
    duration: "6 weeks",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to Prompt Engineering", icon: "play" },
          { type: "VIDEO LESSON", title: "Understanding LLMs & ChatGPT", icon: "play" },
        ]
      },
      {
        week: "WEEK 1",
        title: "PROMPT FUNDAMENTALS",
        description: "Basics of Prompting",
        liveSessions: 3,
        videoLessons: 5,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "What is Prompt Engineering?", icon: "doc" },
          { type: "VIDEO LESSON", title: "Basic Prompt Structures", icon: "play" },
          { type: "LIVE LESSON", title: "Prompt Patterns & Templates", icon: "gear" },
          { type: "ASSIGNMENT", title: "Practice Prompting Exercises", icon: "grad" },
        ]
      },
      {
        week: "WEEK 2",
        title: "ADVANCED PROMPTING TECHNIQUES",
        description: "Chain-of-Thought & Reasoning",
        liveSessions: 3,
        videoLessons: 6,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Chain-of-Thought Prompting", icon: "doc" },
          { type: "VIDEO LESSON", title: "Few-Shot Learning & Examples", icon: "play" },
          { type: "LIVE LESSON", title: "Prompt Engineering Best Practices", icon: "gear" },
          { type: "ASSIGNMENT", title: "Advanced Prompting Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 3",
        title: "ROLE-BASED & CONTEXTUAL PROMPTS",
        description: "Setting Context & Roles",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Role-Based Prompting", icon: "doc" },
          { type: "VIDEO LESSON", title: "Context Setting & Memory", icon: "play" },
          { type: "ASSIGNMENT", title: "Contextual Prompt Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 4",
        title: "PROMPT OPTIMIZATION",
        description: "Fine-tuning Prompts for Better Results",
        liveSessions: 3,
        videoLessons: 5,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Prompt Evaluation & Testing", icon: "doc" },
          { type: "VIDEO LESSON", title: "Iterative Prompt Improvement", icon: "play" },
          { type: "LIVE LESSON", title: "A/B Testing Prompts", icon: "gear" },
          { type: "ASSIGNMENT", title: "Prompt Optimization Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 5",
        title: "SPECIALIZED APPLICATIONS",
        description: "Domain-Specific Prompting",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Code Generation Prompts", icon: "doc" },
          { type: "VIDEO LESSON", title: "Content Creation & Marketing", icon: "play" },
          { type: "ASSIGNMENT", title: "Domain-Specific Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 6",
        title: "CAPSTONE PROJECT",
        description: "Master Prompt Engineering Portfolio",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "Complete Prompt Engineering Portfolio", icon: "briefcase" },
        ]
      },
    ]
  },
  {
    courseName: "Generative AI Engineer",
    duration: "16 weeks",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to Generative AI", icon: "play" },
          { type: "VIDEO LESSON", title: "LLMs & Foundation Models", icon: "play" },
        ]
      },
      {
        week: "WEEK 1-2",
        title: "LARGE LANGUAGE MODELS",
        description: "OpenAI, GPT & LLM Architecture",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "LLM Architecture & Transformer Models", icon: "doc" },
          { type: "VIDEO LESSON", title: "OpenAI API & GPT Models", icon: "play" },
          { type: "LIVE LESSON", title: "Claude, Gemini & Other LLMs", icon: "gear" },
          { type: "ASSIGNMENT", title: "LLM Integration Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 3-4",
        title: "PROMPT ENGINEERING MASTERY",
        description: "Advanced Prompting Techniques",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Advanced Prompt Engineering", icon: "doc" },
          { type: "VIDEO LESSON", title: "Chain-of-Thought & Reasoning", icon: "play" },
          { type: "LIVE LESSON", title: "Prompt Optimization Strategies", icon: "gear" },
          { type: "ASSIGNMENT", title: "Prompt Engineering Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 5-6",
        title: "RAG SYSTEMS",
        description: "Retrieval-Augmented Generation",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "RAG Architecture & Components", icon: "doc" },
          { type: "VIDEO LESSON", title: "Vector Databases & Embeddings", icon: "play" },
          { type: "LIVE LESSON", title: "LangChain & RAG Implementation", icon: "gear" },
          { type: "VIDEO LESSON", title: "Chroma, Pinecone & Weaviate", icon: "play" },
          { type: "ASSIGNMENT", title: "Build RAG System", icon: "grad" },
        ]
      },
      {
        week: "WEEK 7-8",
        title: "FINE-TUNING & CUSTOMIZATION",
        description: "Fine-tune LLMs for Specific Tasks",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "LLM Fine-tuning Strategies", icon: "doc" },
          { type: "VIDEO LESSON", title: "LoRA & Parameter-Efficient Tuning", icon: "play" },
          { type: "LIVE LESSON", title: "Dataset Preparation & Training", icon: "gear" },
          { type: "ASSIGNMENT", title: "Fine-tune Custom LLM", icon: "grad" },
        ]
      },
      {
        week: "WEEK 9-10",
        title: "GENERATIVE AI FRAMEWORKS",
        description: "LangChain, LlamaIndex & More",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "LangChain Framework", icon: "doc" },
          { type: "VIDEO LESSON", title: "LlamaIndex for Data Indexing", icon: "play" },
          { type: "LIVE LESSON", title: "LangGraph & Agent Workflows", icon: "gear" },
          { type: "VIDEO LESSON", title: "Dify, Flowise & Other Tools", icon: "play" },
          { type: "ASSIGNMENT", title: "Build GenAI Application", icon: "grad" },
        ]
      },
      {
        week: "WEEK 11-12",
        title: "IMAGE GENERATION & MULTIMODAL AI",
        description: "DALL·E, Stable Diffusion & Image AI",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "DALL·E & Image Generation APIs", icon: "doc" },
          { type: "VIDEO LESSON", title: "Stable Diffusion & Midjourney", icon: "play" },
          { type: "LIVE LESSON", title: "Multimodal AI Applications", icon: "gear" },
          { type: "ASSIGNMENT", title: "Image Generation Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 13-14",
        title: "GENAI APPLICATIONS & DEPLOYMENT",
        description: "Build Production GenAI Systems",
        liveSessions: 4,
        videoLessons: 8,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Building GenAI Chatbots", icon: "doc" },
          { type: "VIDEO LESSON", title: "API Development & Integration", icon: "play" },
          { type: "LIVE LESSON", title: "Deployment & Scaling GenAI Apps", icon: "gear" },
          { type: "ASSIGNMENT", title: "Deploy GenAI Application", icon: "grad" },
        ]
      },
      {
        week: "WEEK 15",
        title: "ETHICS & BEST PRACTICES",
        description: "Responsible AI Development",
        liveSessions: 2,
        videoLessons: 4,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "AI Ethics & Bias", icon: "doc" },
          { type: "VIDEO LESSON", title: "Best Practices & Security", icon: "play" },
        ]
      },
      {
        week: "WEEK 16",
        title: "CAPSTONE PROJECT",
        description: "Complete Generative AI Application",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "End-to-End GenAI Production System", icon: "briefcase" },
        ]
      },
    ]
  },
  {
    courseName: "Agentic AI",
    duration: "14 weeks",
    modules: [
      {
        week: "WEEK 0",
        title: "FREE PREVIEW",
        description: "Essential Prerequisites",
        liveSessions: 0,
        videoLessons: 2,
        assignments: 0,
        capstone: false,
        lessons: [
          { type: "VIDEO LESSON", title: "Introduction to AI Agents", icon: "play" },
          { type: "VIDEO LESSON", title: "Agent Architectures Overview", icon: "play" },
        ]
      },
      {
        week: "WEEK 1-2",
        title: "AI AGENT FUNDAMENTALS",
        description: "Understanding Agent Systems",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "What are AI Agents?", icon: "doc" },
          { type: "VIDEO LESSON", title: "Agent Architecture & Components", icon: "play" },
          { type: "LIVE LESSON", title: "Planning, Action & Reflection", icon: "gear" },
          { type: "ASSIGNMENT", title: "Build Simple Agent", icon: "grad" },
        ]
      },
      {
        week: "WEEK 3-4",
        title: "LANGCHAIN AGENTS",
        description: "Building Agents with LangChain",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "LangChain Agent Framework", icon: "doc" },
          { type: "VIDEO LESSON", title: "Tools & Tool Calling", icon: "play" },
          { type: "LIVE LESSON", title: "Agent Types & Executors", icon: "gear" },
          { type: "VIDEO LESSON", title: "Memory & Conversation Management", icon: "play" },
          { type: "ASSIGNMENT", title: "LangChain Agent Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 5-6",
        title: "CREWAI & MULTI-AGENT SYSTEMS",
        description: "Collaborative Agent Teams",
        liveSessions: 5,
        videoLessons: 12,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "CrewAI Framework", icon: "doc" },
          { type: "VIDEO LESSON", title: "Multi-Agent Collaboration", icon: "play" },
          { type: "LIVE LESSON", title: "Agent Roles & Task Delegation", icon: "gear" },
          { type: "VIDEO LESSON", title: "Crew Orchestration & Workflows", icon: "play" },
          { type: "ASSIGNMENT", title: "Multi-Agent System Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 7-8",
        title: "AUTOGEN & AGENT ORCHESTRATION",
        description: "Microsoft AutoGen Framework",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "AutoGen Framework Basics", icon: "doc" },
          { type: "VIDEO LESSON", title: "Multi-Agent Conversations", icon: "play" },
          { type: "LIVE LESSON", title: "Agent Patterns & Best Practices", icon: "gear" },
          { type: "ASSIGNMENT", title: "AutoGen Agent Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 9-10",
        title: "REACT & PLANNING AGENTS",
        description: "Reasoning & Acting Agents",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "ReAct Pattern (Reasoning + Acting)", icon: "doc" },
          { type: "VIDEO LESSON", title: "Plan & Execute Agents", icon: "play" },
          { type: "LIVE LESSON", title: "BabyAGI & AutoGPT Concepts", icon: "gear" },
          { type: "VIDEO LESSON", title: "Long-term Memory & Planning", icon: "play" },
          { type: "ASSIGNMENT", title: "Planning Agent Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 11-12",
        title: "TOOLS & FUNCTION CALLING",
        description: "Agent Tools & External Integration",
        liveSessions: 4,
        videoLessons: 10,
        assignments: 2,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Building Custom Tools", icon: "doc" },
          { type: "VIDEO LESSON", title: "Web Search & API Integration", icon: "play" },
          { type: "LIVE LESSON", title: "Database & File System Tools", icon: "gear" },
          { type: "VIDEO LESSON", title: "Tool Chaining & Workflows", icon: "play" },
          { type: "ASSIGNMENT", title: "Tool-Enabled Agent Project", icon: "grad" },
        ]
      },
      {
        week: "WEEK 13",
        title: "AGENT DEPLOYMENT & MONITORING",
        description: "Production Agent Systems",
        liveSessions: 3,
        videoLessons: 6,
        assignments: 1,
        capstone: false,
        lessons: [
          { type: "LIVE LESSON", title: "Agent Deployment Strategies", icon: "doc" },
          { type: "VIDEO LESSON", title: "Monitoring & Observability", icon: "play" },
          { type: "ASSIGNMENT", title: "Deploy Production Agent", icon: "grad" },
        ]
      },
      {
        week: "WEEK 14",
        title: "CAPSTONE PROJECT",
        description: "Complete Agentic AI System",
        liveSessions: 1,
        videoLessons: 0,
        assignments: 0,
        capstone: true,
        lessons: [
          { type: "CAPSTONE PROJECT", title: "End-to-End Agentic AI Application", icon: "briefcase" },
        ]
      },
    ]
  },
];






