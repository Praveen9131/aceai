import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaTimes, FaPaperPlane, FaGraduationCap, FaHome, FaDollarSign, FaPhone, FaWrench, FaFileAlt } from "react-icons/fa";

// Predefined questions and answers
const predefinedQA = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive AI solutions including AI Development, Training Programs, Web Development, UX/UI Design, AI Chatbots & GenAI Applications, AI Agents Development, and Social Media Management."
  },
  {
    question: "Do you provide training programs?",
    answer: "Yes! We offer professional technical training in Python, Java, AI, Machine Learning, and Generative AI. Our programs include hands-on projects, industry certifications, and job placement assistance."
  },
  {
    question: "What is Campus Connect?",
    answer: "Campus Connect is our institutional partnership program that transforms educational institutions with cutting-edge AI and technical training. We provide custom curriculum, faculty development, LMS integration, and student placement assistance."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us at:\n📧 Email: director@aceai.in\n📱 Phone: 9962264760\n💬 WhatsApp: 9962264760\n📍 Address: Office No 09, Third Floor, Akshaya HQ, Old Mahabalipuram Road, Tamilnadu, Pin code: 603103"
  },
  {
    question: "Do you offer web development services?",
    answer: "Yes! We provide end-to-end website development including frontend (React, Vue), backend architecture, database design, cloud deployment, performance optimization, and ongoing maintenance."
  },
  {
    question: "What is AI Agents Development?",
    answer: "AI Agents Development involves building autonomous AI agents that execute complex tasks, automate workflows, and make intelligent decisions. We develop custom agents with tool integration, workflow automation, and enterprise deployment."
  },
  {
    question: "Do you provide AI chatbot solutions?",
    answer: "Absolutely! We develop custom AI chatbots and GenAI applications with LLM integration, natural language processing, context-aware conversations, and multi-platform deployment."
  },
  {
    question: "What are your business hours?",
    answer: "Our business hours are Monday to Friday, 10 AM to 6 PM IST. You can also reach us via email or WhatsApp anytime, and we'll respond as soon as possible."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! You can:\n1. Contact us via phone, email, or WhatsApp\n2. Visit our Services page to learn more\n3. Schedule a consultation to discuss your needs\n4. We'll provide a customized solution for your business"
  },
  {
    question: "Do you offer social media management?",
    answer: "Yes! Our social media management services include content strategy, professional content creation, community management, analytics tracking, paid campaigns, and 24/7 social presence across all major platforms."
  },
  {
    question: "What technologies do you use?",
    answer: "We use cutting-edge technologies including React, Vue, Python, Java, Node.js, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and modern development tools. We stay updated with the latest industry standards."
  },
  {
    question: "Do you provide custom AI solutions?",
    answer: "Yes! We specialize in custom AI solutions tailored to your business needs. This includes AI chatbots, GenAI applications, AI agents, machine learning models, and intelligent automation systems."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on scope and complexity. Simple websites may take 2-4 weeks, while complex AI solutions can take 2-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing is customized based on project requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services. Contact us for a detailed quote."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes! We provide ongoing maintenance and support services. This includes bug fixes, updates, performance optimization, and technical support. We offer various support packages to suit your needs."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely! We specialize in integrating our solutions with your existing systems, APIs, databases, and third-party services. We ensure seamless integration without disrupting your current operations."
  },
  {
    question: "Do you provide UX/UI design services?",
    answer: "Yes! Our UX/UI design services include user research, wireframing, prototyping, visual design, branding, interaction design, usability testing, and responsive design implementation."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve various industries including education, healthcare, finance, e-commerce, technology, manufacturing, and more. Our solutions are adaptable to any industry's specific needs."
  },
  {
    question: "Do you offer remote services?",
    answer: "Yes! We provide remote services and can work with clients globally. We use modern collaboration tools and maintain regular communication throughout the project lifecycle."
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a quote by:\n1. Filling out our contact form\n2. Calling us at 9962264760\n3. Emailing director@aceai.in\n4. Messaging us on WhatsApp\nWe'll respond within 24 hours with a detailed proposal."
  },
  {
    question: "Do you have a portfolio?",
    answer: "Yes! We have completed numerous successful projects. You can view our portfolio on our website or contact us to see case studies and client testimonials."
  }
];

function Chatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize messages with welcome message
  const getInitialMessages = () => [{
    text: "Hello! 👋 I'm Aceai Assistant, here to help you. Ask me anything about our services, training programs, or contact information!",
    sender: "bot",
    timestamp: new Date()
  }];
  
  const [messages, setMessages] = useState(getInitialMessages());
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showContactRedirect, setShowContactRedirect] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [conversationContext, setConversationContext] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasOpenedRef = useRef(false); // Track if chatbot has been opened in this session

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset chatbot state on component mount (page refresh)
  useEffect(() => {
    // Clear any cached state and reset to initial state
    setMessages(getInitialMessages());
    setInputValue("");
    setShowSuggestions(true);
    setShowContactRedirect(false);
    setShowTopics(false);
    setConversationContext([]);
    hasOpenedRef.current = false;
  }, []); // Run only on mount

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    
    // Always reset to initial state when opening chatbot (fresh start every time)
    if (isOpen) {
      setMessages(getInitialMessages());
      setShowSuggestions(true);
      setShowContactRedirect(false);
      setShowTopics(false);
      setConversationContext([]);
      setInputValue("");
    }
  }, [isOpen]);

  // Intelligent keyword mapping with synonyms and context
  const keywordMap = {
    services: {
      keywords: ["service", "offer", "provide", "do", "what can you", "what do you", "capabilities", "solutions", "help with"],
      index: 0,
      synonyms: ["work", "deliver", "build", "create", "develop"]
    },
    training: {
      keywords: ["training", "course", "learn", "program", "education", "teach", "certification", "bootcamp", "workshop"],
      index: 1,
      synonyms: ["learn", "study", "skill", "tutorial", "class"]
    },
    campus: {
      keywords: ["campus", "institution", "university", "college", "school", "educational", "academic", "partnership"],
      index: 2,
      synonyms: ["education", "students", "faculty", "curriculum"]
    },
    contact: {
      keywords: ["contact", "phone", "email", "address", "reach", "call", "message", "speak", "talk", "connect"],
      index: 3,
      synonyms: ["communication", "get in touch", "reach out", "call", "whatsapp"]
    },
    webdev: {
      keywords: ["web", "website", "development", "frontend", "backend", "full stack", "react", "vue", "node"],
      index: 4,
      synonyms: ["site", "application", "app", "programming", "coding"]
    },
    agents: {
      keywords: ["agent", "autonomous", "ai agent", "automation", "workflow", "intelligent agent"],
      index: 5,
      synonyms: ["bot", "automated", "smart system"]
    },
    chatbot: {
      keywords: ["chatbot", "genai", "llm", "generative ai", "gpt", "language model", "conversational ai"],
      index: 6,
      synonyms: ["chat", "ai assistant", "conversation", "nlp"]
    },
    hours: {
      keywords: ["hour", "time", "when", "available", "open", "business hours", "working hours"],
      index: 7,
      synonyms: ["schedule", "timing", "operating"]
    },
    started: {
      keywords: ["start", "begin", "how to", "get started", "beginning", "first step", "onboard"],
      index: 8,
      synonyms: ["commence", "initiate", "launch", "setup"]
    },
    social: {
      keywords: ["social media", "social", "smm", "marketing", "instagram", "facebook", "linkedin"],
      index: 9,
      synonyms: ["social network", "content", "posting"]
    },
    tech: {
      keywords: ["technology", "tech", "stack", "framework", "tools", "platform", "software"],
      index: 10,
      synonyms: ["technologies", "tech stack", "tools", "libraries"]
    },
    custom: {
      keywords: ["custom", "tailored", "specific", "personalized", "bespoke", "unique"],
      index: 11,
      synonyms: ["individual", "specialized", "dedicated"]
    },
    timeline: {
      keywords: ["timeline", "duration", "how long", "timeframe", "deadline", "delivery time", "completion"],
      index: 12,
      synonyms: ["duration", "period", "schedule", "when ready"]
    },
    pricing: {
      keywords: ["price", "cost", "pricing", "fee", "charge", "budget", "affordable", "expensive", "cheap"],
      index: 13,
      synonyms: ["cost", "rate", "payment", "investment", "expense"]
    },
    support: {
      keywords: ["support", "maintenance", "after", "ongoing", "help", "assistance", "service"],
      index: 14,
      synonyms: ["help", "maintain", "assist", "service", "care"]
    },
    integration: {
      keywords: ["integrate", "integration", "existing", "connect", "api", "system integration"],
      index: 15,
      synonyms: ["connect", "link", "merge", "combine"]
    },
    design: {
      keywords: ["ux", "ui", "design", "interface", "user experience", "user interface", "visual"],
      index: 16,
      synonyms: ["designing", "styling", "look", "appearance"]
    },
    industry: {
      keywords: ["industry", "sector", "domain", "field", "business type", "vertical"],
      index: 17,
      synonyms: ["sector", "field", "market", "business"]
    },
    remote: {
      keywords: ["remote", "online", "virtual", "distance", "offsite"],
      index: 18,
      synonyms: ["virtual", "online", "digital", "telecommute"]
    },
    quote: {
      keywords: ["quote", "estimate", "proposal", "budget", "pricing", "cost estimate"],
      index: 19,
      synonyms: ["estimate", "proposal", "bid", "pricing"]
    },
    portfolio: {
      keywords: ["portfolio", "projects", "work", "examples", "case study", "previous work"],
      index: 20,
      synonyms: ["projects", "work", "examples", "showcase"]
    }
  };

  // Calculate similarity score between two strings
  const calculateSimilarity = (str1, str2) => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    if (longer.length === 0) return 1.0;
    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  };

  // Levenshtein distance for fuzzy matching
  const levenshteinDistance = (str1, str2) => {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  // Regex patterns for semantic question matching
  const questionPatterns = {
    // Service-related patterns (lower priority - check last)
    services: [
      /\b(what\s+(services|solutions|offerings|do\s+you\s+provide|can\s+you\s+do|are\s+your\s+capabilities))\b/i,
      /\b(services|offerings|solutions|what\s+do\s+you\s+offer|what\s+can\s+you\s+help\s+with)\b/i,
      /\b(tell\s+me\s+about\s+your\s+services|list\s+your\s+services|show\s+me\s+services)\b/i,
      // Exclude contact-related terms from services
      /^(?!.*(contact|phone|email|address|reach|call)).*(services|offerings|solutions|what\s+do\s+you\s+offer)\b/i,
    ],
    // Training patterns
    training: [
      /\b(training|course|learn|program|education|teach|certification|bootcamp|workshop|skill)\b/i,
      /\b(do\s+you\s+(offer|provide|have)\s+training|training\s+programs?|courses?)\b/i,
      /\b(how\s+can\s+I\s+learn|where\s+can\s+I\s+learn|what\s+courses?)\b/i,
    ],
    // Campus Connect patterns
    campus: [
      /\b(campus|institution|university|college|school|educational|academic|partnership)\b/i,
      /\b(campus\s+connect|institutional\s+partnership|university\s+program)\b/i,
      /\b(do\s+you\s+work\s+with\s+(schools|universities|colleges|institutions))\b/i,
    ],
    // Contact patterns (high priority - check first)
    contact: [
      /\b(contact|phone|email|address|reach|call|message|speak|talk|connect|get\s+in\s+touch|whatsapp)\b/i,
      /\b(how\s+(to\s+)?contact|where\s+(are\s+you|can\s+I\s+find\s+you)|what\s+is\s+your\s+(phone|email|address|contact))\b/i,
      /\b(can\s+I\s+(call|email|contact|reach|speak)|contact\s+information|reach\s+out|get\s+in\s+touch)\b/i,
      /\b(what\s+(is\s+)?(your\s+)?(phone|email|address|contact\s+(info|details|number)))\b/i,
      /\b(where\s+(are\s+you\s+located|is\s+your\s+office|can\s+I\s+reach\s+you))\b/i,
      /\b(phone\s+number|email\s+address|office\s+address|contact\s+details?)\b/i,
    ],
    // Web development patterns
    webdev: [
      /\b(web|website|development|frontend|backend|full\s+stack|react|vue|node)\b/i,
      /\b(do\s+you\s+(build|develop|create)\s+websites?|web\s+development|website\s+services)\b/i,
      /\b(need\s+a\s+website|want\s+a\s+website|build\s+me\s+a\s+website)\b/i,
    ],
    // AI Agents patterns
    agents: [
      /\b(agent|autonomous|ai\s+agent|automation|workflow|intelligent\s+agent)\b/i,
      /\b(do\s+you\s+develop\s+agents?|ai\s+agents?|autonomous\s+systems?)\b/i,
      /\b(agent\s+development|build\s+agents?|create\s+agents?)\b/i,
    ],
    // Chatbot/GenAI patterns
    chatbot: [
      /\b(chatbot|genai|llm|generative\s+ai|gpt|language\s+model|conversational\s+ai)\b/i,
      /\b(do\s+you\s+(build|develop|create)\s+chatbots?|ai\s+chatbot|chatbot\s+solutions?)\b/i,
      /\b(need\s+a\s+chatbot|want\s+a\s+chatbot|build\s+me\s+a\s+chatbot)\b/i,
    ],
    // Pricing patterns
    pricing: [
      /\b(price|cost|pricing|fee|charge|budget|affordable|expensive|cheap|how\s+much)\b/i,
      /\b(what\s+(is\s+the\s+)?(price|cost|pricing|fee)|how\s+much\s+(does\s+it\s+)?cost)\b/i,
      /\b(quote|estimate|proposal|budget|pricing\s+model|payment)\b/i,
    ],
    // Timeline patterns
    timeline: [
      /\b(timeline|duration|how\s+long|timeframe|deadline|delivery\s+time|completion|when)\b/i,
      /\b(how\s+long\s+(does\s+it\s+)?(take|will\s+it\s+take)|time\s+to\s+complete)\b/i,
      /\b(project\s+duration|delivery\s+time|completion\s+time)\b/i,
    ],
    // Support patterns
    support: [
      /\b(support|maintenance|after|ongoing|help|assistance|service)\b/i,
      /\b(do\s+you\s+provide\s+support|ongoing\s+support|maintenance\s+services?)\b/i,
      /\b(what\s+happens\s+after|post\s+launch|after\s+completion)\b/i,
    ],
    // Integration patterns
    integration: [
      /\b(integrate|integration|existing|connect|api|system\s+integration)\b/i,
      /\b(can\s+you\s+integrate|work\s+with\s+existing|connect\s+to\s+existing)\b/i,
      /\b(integration\s+services?|system\s+integration|api\s+integration)\b/i,
    ],
    // Design patterns
    design: [
      /\b(ux|ui|design|interface|user\s+experience|user\s+interface|visual)\b/i,
      /\b(do\s+you\s+(do|offer|provide)\s+design|design\s+services?|ui\/ux)\b/i,
      /\b(need\s+design|want\s+design|design\s+work)\b/i,
    ],
    // Technology patterns
    tech: [
      /\b(technology|tech|stack|framework|tools|platform|software|what\s+technologies?)\b/i,
      /\b(what\s+(tech|technology|stack|tools?|frameworks?)\s+do\s+you\s+use)\b/i,
      /\b(tech\s+stack|technologies?\s+used|programming\s+languages?)\b/i,
    ],
  };

  // Semantic similarity scoring with regex patterns
  const scoreQuestionMatch = (question, patterns, baseIndex) => {
    let score = 0;
    let matchCount = 0;
    
    for (const pattern of patterns) {
      const matches = question.match(pattern);
      if (matches) {
        score += matches.length * 2; // Higher weight for regex matches
        matchCount += matches.length;
      }
    }
    
    // Also check keyword matching for additional context
    const keywordConfig = keywordMap[Object.keys(keywordMap)[baseIndex]];
    if (keywordConfig) {
      for (const keyword of keywordConfig.keywords) {
        if (question.includes(keyword.toLowerCase())) {
          score += 1;
          matchCount++;
        }
      }
    }
    
    return { score, matchCount };
  };

  // Intelligent answer finding with regex and semantic search
  const findAnswer = (userQuestion, context = []) => {
    const question = userQuestion.toLowerCase().trim();
    
    // Use conversation context to improve understanding
    const fullContext = [...context, question].join(" ");
    const fullQuestion = fullContext.toLowerCase();
    
    // Check for greetings and respond appropriately
    if (question.match(/\b(hi|hello|hey|greetings|good\s+(morning|afternoon|evening)|howdy)\b/i)) {
      return { 
        answer: "Hello! 👋 I'm Aceai Assistant. How can I help you today? You can ask me about our services, training programs, pricing, or anything else!",
        showRedirect: false 
      };
    }

    // Check for thanks/gratitude
    if (question.match(/\b(thanks?|thank\s+you|appreciate|grateful|much\s+obliged)\b/i)) {
      return { 
        answer: "You're welcome! 😊 Is there anything else I can help you with? Feel free to ask more questions or contact our team directly!",
        showRedirect: true 
      };
    }

    // Check for goodbye
    if (question.match(/\b(bye|goodbye|see\s+you|farewell|exit|close|later|cya)\b/i)) {
      return { 
        answer: "Goodbye! 👋 Feel free to come back anytime if you have more questions. Have a great day!",
        showRedirect: false 
      };
    }

    // Score-based matching with regex and semantic search
    let bestMatch = { score: 0, index: -1, category: null, method: null };
    
    // Step 1: Check exact matches first (using both current question and context)
    for (let i = 0; i < predefinedQA.length; i++) {
      const qaQuestion = predefinedQA[i].question.toLowerCase();
      const similarity = calculateSimilarity(question, qaQuestion);
      const contextSimilarity = calculateSimilarity(fullContext, qaQuestion);
      const combinedSimilarity = Math.max(similarity, contextSimilarity * 0.8);
      
      if (combinedSimilarity > 0.7 && combinedSimilarity > bestMatch.score) {
        bestMatch = { score: combinedSimilarity, index: i, category: null, method: 'exact' };
      }
    }

    // Step 2: Use regex pattern matching (more intelligent) - Check contact first for priority
    if (bestMatch.score < 0.8) {
      const patternMap = {
        // Priority order: contact first, then others
        contact: { patterns: questionPatterns.contact, index: 3, priority: 10 },
        pricing: { patterns: questionPatterns.pricing, index: 13, priority: 9 },
        timeline: { patterns: questionPatterns.timeline, index: 12, priority: 8 },
        training: { patterns: questionPatterns.training, index: 1, priority: 7 },
        campus: { patterns: questionPatterns.campus, index: 2, priority: 6 },
        webdev: { patterns: questionPatterns.webdev, index: 4, priority: 5 },
        agents: { patterns: questionPatterns.agents, index: 5, priority: 4 },
        chatbot: { patterns: questionPatterns.chatbot, index: 6, priority: 3 },
        support: { patterns: questionPatterns.support, index: 14, priority: 2 },
        integration: { patterns: questionPatterns.integration, index: 15, priority: 1 },
        design: { patterns: questionPatterns.design, index: 16, priority: 1 },
        tech: { patterns: questionPatterns.tech, index: 10, priority: 1 },
        services: { patterns: questionPatterns.services, index: 0, priority: 0 }, // Lowest priority
      };

      // Sort by priority (highest first)
      const sortedCategories = Object.entries(patternMap).sort((a, b) => b[1].priority - a[1].priority);

      for (const [category, config] of sortedCategories) {
        const result = scoreQuestionMatch(fullQuestion, config.patterns, config.index);
        // Boost score for higher priority categories
        const priorityBoost = config.priority * 0.5;
        const normalizedScore = (result.score / (result.matchCount || 1)) + priorityBoost;
        
        if (normalizedScore > bestMatch.score) {
          bestMatch = { 
            score: normalizedScore, 
            index: config.index, 
            category, 
            method: 'regex' 
          };
        }
      }
    }

    // Step 3: Fallback to keyword matching with scoring (including context)
    if (bestMatch.score < 0.3) {
      for (const [category, config] of Object.entries(keywordMap)) {
        let categoryScore = 0;
        let matchCount = 0;
        
        // Check main keywords in both question and context
        for (const keyword of config.keywords) {
          if (question.includes(keyword)) {
            categoryScore += 1;
            matchCount++;
          } else if (fullContext.includes(keyword)) {
            categoryScore += 0.7; // Context matches are weighted less
            matchCount++;
          }
        }
        
        // Check synonyms
        for (const synonym of config.synonyms) {
          if (question.includes(synonym)) {
            categoryScore += 0.5;
            matchCount++;
          } else if (fullContext.includes(synonym)) {
            categoryScore += 0.3;
            matchCount++;
          }
        }
        
        // Calculate weighted score
        const finalScore = categoryScore / (config.keywords.length + config.synonyms.length) * matchCount;
        
        if (finalScore > bestMatch.score) {
          bestMatch = { score: finalScore, index: config.index, category, method: 'keyword' };
        }
      }
    }

    // Return best match if score is good enough
    if (bestMatch.score > 0.15 && bestMatch.index >= 0) {
      const showRedirect = bestMatch.index !== 7; // Don't show redirect for business hours
      return { 
        answer: predefinedQA[bestMatch.index].answer, 
        showRedirect,
        method: bestMatch.method || 'semantic'
      };
    }

    // Context-aware fallback responses
    const questionWords = question.split(/\s+/);
    const hasQuestionWord = question.match(/\b(what|how|when|where|why|who|which|can|do|does|is|are|will|would)\b/);
    
    if (hasQuestionWord && questionWords.length > 2) {
      return { 
        answer: "That's an interesting question! While I don't have a specific answer for that, I can help you with:\n\n• Our services and solutions\n• Training programs and courses\n• Pricing and timelines\n• Contact information\n• Technical capabilities\n\nWould you like to know more about any of these, or would you prefer to speak directly with our team?",
        showRedirect: true 
      };
    }

    // Default intelligent response with interactive topics
    return { 
      answer: "I want to make sure I understand your question correctly. Could you rephrase it or be more specific? Here are some topics I can help with:",
      showRedirect: true,
      showTopics: true // Flag to show interactive topic buttons
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Update conversation context (keep last 3 user messages for context)
    setConversationContext(prev => {
      const newContext = [...prev, inputValue.toLowerCase()];
      return newContext.slice(-3); // Keep only last 3 messages
    });
    
    setInputValue("");
    setShowSuggestions(false);

    // Simulate bot thinking with typing indicator
    setTimeout(() => {
      const result = findAnswer(inputValue, conversationContext);
      const botMessage = {
        text: result.answer,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Show contact redirect after a delay
      if (result.showRedirect) {
        setTimeout(() => {
          setShowContactRedirect(true);
        }, 1000);
      }
      
      // Show topic buttons if needed
      if (result.showTopics) {
        setTimeout(() => {
          setShowTopics(true);
        }, 500);
      } else {
        setShowTopics(false);
      }
    }, 500);
  };

  const handleTopicClick = (question) => {
    setInputValue(question);
    setShowTopics(false);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleContactRedirect = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  const handleSuggestionClick = (question) => {
    setInputValue(question);
    setShowSuggestions(false);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "Do you provide training programs?",
    "How can I contact you?",
    "What is Campus Connect?",
    "What is your pricing?",
    "How long does a project take?"
  ];

  const topicButtons = [
    { icon: <FaFileAlt />, label: "Services & Solutions", question: "What services do you offer?" },
    { icon: <FaGraduationCap />, label: "Training Programs", question: "Do you provide training programs?" },
    { icon: <FaHome />, label: "Campus Connect", question: "What is Campus Connect?" },
    { icon: <FaDollarSign />, label: "Pricing & Timelines", question: "What is your pricing?" },
    { icon: <FaPhone />, label: "Contact Information", question: "How can I contact you?" },
    { icon: <FaWrench />, label: "Technical Capabilities", question: "What technologies do you use?" }
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => {
          const willOpen = !isOpen;
          setIsOpen(willOpen);
          
          // Always reset to fresh state when opening chatbot
          if (willOpen) {
            setMessages(getInitialMessages());
            setShowSuggestions(true);
            setShowContactRedirect(false);
            setShowTopics(false);
            setConversationContext([]);
            setInputValue("");
          }
        }}
        className="chatbot-toggle"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6C0C, #F59E0B)",
          border: "3px solid #ffffff",
          color: "#ffffff",
          fontSize: "28px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(255, 108, 12, 0.4), 0 0 0 4px rgba(255, 108, 12, 0.1)",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(255, 108, 12, 0.5), 0 0 0 6px rgba(255, 108, 12, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(255, 108, 12, 0.4), 0 0 0 4px rgba(255, 108, 12, 0.1)";
        }}
        aria-label="Open chatbot"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <>
          {/* Backdrop overlay (optional - can be removed if not needed) */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.1)",
              zIndex: 9998,
              display: "none", // Hidden by default, can enable if needed
            }}
          />
          
          {/* Chatbot Window */}
          <div
            className="chatbot-window"
            style={{
              position: "fixed",
              bottom: "100px",
              right: "24px",
              width: "380px",
              maxWidth: "calc(100vw - 48px)",
              height: "600px",
              maxHeight: "calc(100vh - 140px)",
              background: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              visibility: "visible",
              opacity: 1,
            }}
          >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #FF6C0C, #F59E0B)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>Aceai Assistant</h3>
              <p style={{ margin: "4px 0 0 0", fontSize: "12px", opacity: 0.9 }}>We're here to help!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "20px",
                cursor: "pointer",
                padding: "4px",
              }}
              aria-label="Close chatbot"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              background: "#F9FAFB",
              minHeight: 0, // Important for flex scrolling
            }}
          >
            {messages && messages.length > 0 && messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    padding: "12px 16px",
                    borderRadius: message.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background: message.sender === "user" 
                      ? "linear-gradient(135deg, #FF6C0C, #F59E0B)" 
                      : "#ffffff",
                    color: message.sender === "user" ? "#ffffff" : "#1E293B",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    boxShadow: message.sender === "user" 
                      ? "0 2px 8px rgba(255, 108, 12, 0.2)" 
                      : "0 2px 8px rgba(0, 0, 0, 0.1)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Suggestions */}
            {showSuggestions && messages.length === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: "8px 0 4px 0" }}>Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(question)}
                    style={{
                      padding: "10px 14px",
                      background: "#ffffff",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      fontSize: "13px",
                      color: "#1E293B",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F3F4F6";
                      e.currentTarget.style.borderColor = "#FF6C0C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.borderColor = "#E5E7EB";
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Interactive Topic Buttons */}
            {showTopics && (
              <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {topicButtons.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleTopicClick(topic.question)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "#ffffff",
                      border: "1px solid #E5E7EB",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#1E293B",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "all 0.2s ease",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F9FAFB";
                      e.currentTarget.style.borderColor = "#FF6C0C";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ color: "#FF6C0C", fontSize: "16px" }}>{topic.icon}</span>
                    <span>{topic.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Contact Redirect Button */}
            {showContactRedirect && (
              <div style={{ marginTop: "12px" }}>
                <button
                  onClick={handleContactRedirect}
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    background: "linear-gradient(135deg, #FF6C0C, #F59E0B)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 12px rgba(255, 108, 12, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 108, 12, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 108, 12, 0.3)";
                  }}
                >
                  <span>💬</span>
                  <span>Contact Our Team</span>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: "16px",
              background: "#ffffff",
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "24px",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#FF6C0C";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: inputValue.trim() 
                    ? "linear-gradient(135deg, #FF6C0C, #F59E0B)" 
                    : "#E5E7EB",
                  border: "none",
                  color: "#ffffff",
                  cursor: inputValue.trim() ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (inputValue.trim()) {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="Send message"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default Chatbot;

