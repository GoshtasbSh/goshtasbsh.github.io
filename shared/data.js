// Single source of truth for all mockups.
// Use plain ASCII punctuation throughout (no em-dashes or curly quotes) so
// every browser / font fallback renders the text cleanly.
window.PROFILE = {
  name: "Goshtasb Shahriari Mehr",
  shortName: "Goshtasb Shahriari",
  initials: "GS",
  title: "PhD - Urban Analytics - Spatial AI",
  tagline: "Spatial AI for the next city.",
  oneLine:
    "I build agent-based models, spatial machine learning, and LLM-powered geo-tools to study how people move, eat, and live in cities.",
  photo: "../assets/photo.jpeg",
  emails: {
    uf: "g.shahriarimehr@ufl.edu",
    personal: "goshtasbshahriari@gmail.com",
  },
  // Keep the original `email` for legacy mockups
  email: "g.shahriarimehr@ufl.edu",
  phone: "+1 (352) 727-2728",
  location: "Gainesville, Florida, USA",
  cvUrl: "assets/cv.pdf",
  social: {
    github: "https://github.com/GoshtasbSh",
    linkedin: "https://www.linkedin.com/in/goshtasb-shahriari-mehr-1826bb130/",
    scholar: "https://scholar.google.com/citations?user=Bruj7TQAAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0001-5867-9675",
  },

  // ------------ NEW reel definitions (used by mockup-06b-spatial-reels) ------------
  reels: [
    {
      key: "path",
      label: "Spatial path",
      sub: "4 degrees - 2012 to 2026",
      kicker: "// Reel 01 - Spatial path",
      title: "A spatial mind,",
      titleEm: "in motion.",
      body:
        "Four degrees over fourteen years on one line of inquiry: how do people, places, and policy interact in space. From civil-geomatics engineering to GIS, urban analytics, and machine learning.",
      skills: [
        "BSc - Civil-Geomatics - KNTU",
        "MSc - GIS - University of Tehran",
        "MSc - ECE - University of Florida (dual degree)",
        "PhD - Urban Analytics - University of Florida",
      ],
      color: "#9bc6ff",
    },
    {
      key: "ml",
      label: "Machine Learning",
      sub: "ML, computer vision, certifications",
      kicker: "// Reel 02 - Machine Learning",
      title: "Teaching maps",
      titleEm: "to learn.",
      body:
        "Modern machine learning applied to urban data and imagery. Transfer learning on CIFAR-100 for built-environment features, U-Net lung-X-ray segmentation, MobileNetV2 and Xception for flowers, YOLOv5 for handwritten math symbols, PCA studies on ship imagery.",
      skills: [
        "UF Machine Learning Certificate (ECE)",
        "Coursera Machine Learning + Deep Learning Specialization",
        "PyTorch - TensorFlow - scikit-learn",
        "U-Net - YOLOv5 - MobileNetV2",
      ],
      color: "#22d3ee",
    },
    {
      key: "abm",
      label: "Agent-based modeling",
      sub: "PhD dissertation (defended 2026)",
      kicker: "// Reel 03 - Agent-based modeling",
      title: "Cities, modeled",
      titleEm: "as agents.",
      body:
        "My PhD dissertation populates Jacksonville Health Zone 1 with synthetic residents and simulates how they reach food. The output is concrete policy recommendations on transit, retail siting, and pricing - all derived from the ABM results. Built entirely in Python with Mesa and GeoMesa.",
      skills: [
        "Python - Mesa - GeoMesa",
        "Spatial agents - census + travel data",
        "Policy recommendations from ABM results",
        "Dissertation defended - 2026",
      ],
      color: "#ffba3b",
    },
    {
      key: "llm",
      label: "Agent AI and LLMs",
      sub: "GeoChatBot, RAG, future tools",
      kicker: "// Reel 04 - Agent AI and LLMs",
      title: "LLM agents,",
      titleEm: "for the map.",
      body:
        "I am bringing LLM-powered agents into spatial analysis. GeoChatBot - my open-source embeddable widget - lets users drop a CSV or GeoJSON, ask in plain English, and watch an LLM agent plan, ask for approval, then execute. Built with agent loops, tool calling, and RAG. More LLM tools are in development.",
      skills: [
        "LLM Agents - Agent AI - RAG",
        "Tool calling - planning loops",
        "GeoChatBot (open source)",
        "More LLM tools - in development",
      ],
      color: "#ff6dd9",
    },
  ],

  bio: [
    "I am a PhD candidate in Design, Construction & Planning at the University of Florida. In December 2025 I completed a dual MSc in Electrical & Computer Engineering at UF, taken alongside the PhD to bring modern machine learning, computer vision, and LLM / agent-AI methods into the urban-analytics work.",
    "My dissertation - defended in 2026 - evaluates different scenarios for food access in Jacksonville Health Zone 1 using agent-based modeling, and provides policy recommendations based on the simulation results.",
    "Before UF I earned an MSc in Geographic Information Science from the University of Tehran and a BSc in Civil-Geomatics Engineering from K. N. Toosi University of Technology.",
  ],

  interests: [
    { label: "Agent-Based Modeling", note: "Food access - resilience" },
    { label: "Spatio-temporal Analysis", note: "Transport review - spatial optimization" },
    { label: "Location-Based Services", note: "Recommender systems - POIs" },
    { label: "Urban Analytics", note: "Built-environment ML" },
    { label: "Computer Vision", note: "Segmentation - classification" },
    { label: "Machine Learning", note: "Certified - UF + Coursera" },
    { label: "Agent AI and LLMs", note: "GeoChatBot - RAG - tool-using agents" },
  ],

  affiliations: [
    {
      role: "Graduate Research Assistant",
      org: "Florida Institute for Built Environment Resilience (FIBER), UF",
      years: "Jan 2022 - Present",
    },
    {
      role: "Graduate Research Assistant",
      org: "Disasters, Trust, and Social Change Lab, UF",
      years: "Jun 2023 - Present",
    },
    {
      role: "Graduate Research Assistant",
      org: "iAdapt - International Center for Adaptation Planning & Design",
      years: "Aug 2025 - Feb 2026",
      detail: "FDOT District 5: review and comparative analysis of existing transport analyses for Central Florida. Advisor: Dr. Zhong-Ren Peng.",
    },
  ],

  education: [
    {
      degree: "PhD, Design, Construction & Planning",
      school: "University of Florida",
      years: "2022 - 2026",
      note: "Dissertation defended in 2026. Evaluating Food Access Scenarios in Jacksonville Health Zone 1 with Agent-Based Modeling.",
    },
    {
      degree: "MSc, Electrical & Computer Engineering",
      school: "University of Florida",
      years: "2023 - 2025",
      note: "Dual degree alongside the PhD. GPA 3.81 / 4.00.",
    },
    {
      degree: "MSc, Geographic Information Science",
      school: "University of Tehran",
      years: "2016 - 2019",
      note: "Thesis grade: Excellent. Two peer-reviewed papers published from this thesis.",
    },
    {
      degree: "BSc, Civil-Geomatics Engineering",
      school: "K. N. Toosi University of Technology",
      years: "2012 - 2016",
      note: "Thesis: Evaluation of methods for 3D cadaster.",
    },
  ],

  projects: [
    {
      name: "GeoChatBot",
      tag: "Agent AI - RAG - LLM",
      summary:
        "Embeddable widget for in-browser spatial and tabular analysis. Drop a CSV or GeoJSON, ask in plain English; an LLM agent plans, asks for approval, then executes. Built with agent loops, tool calling, and RAG.",
      stack: ["TypeScript", "LLM Agents", "RAG", "Tool Calling", "GeoJSON"],
      url: "https://github.com/GoshtasbSh/GeoChatBot",
      dashboardUrl: "#dashboard-coming-soon",
      year: "2026",
      featured: true,
    },
    {
      name: "Keystone Field Survey Dashboard",
      tag: "Geospatial - Dashboard",
      summary:
        "Interactive geospatial visualization of a Keystone Heights field survey for the DTSC Lab - maps, charts, and filters in one place.",
      stack: ["Python", "Streamlit", "GeoPandas"],
      url: "https://github.com/GoshtasbSh/Keystone_Project_Survey",
      dashboardUrl: "#dashboard-coming-soon",
      year: "2026",
      featured: true,
    },
    {
      name: "Built-Environment Feature Detection (CIFAR-100 transfer)",
      tag: "Pattern Recognition",
      summary:
        "Optimizing built-environment feature detection using transfer learning on CIFAR-100. Course capstone, Fall 2024.",
      stack: ["PyTorch", "Transfer Learning"],
      url: "https://github.com/GoshtasbSh",
      year: "2024",
      featured: true,
    },
    {
      name: "Flower Classification + Lung X-ray Segmentation",
      tag: "Deep Learning",
      summary:
        "Transfer-learning flower classification (MobileNetV2 / Xception) plus U-Net lung X-ray segmentation. Applied ML, Spring 2024.",
      stack: ["TensorFlow", "U-Net", "MobileNetV2"],
      url: "https://github.com/GoshtasbSh/deep-learning-image-classification-and-segmentation",
      year: "2024",
      featured: true,
    },
    {
      name: "Handwritten Math Symbols (YOLOv5)",
      tag: "Object Detection",
      summary:
        "YOLOv5 classification + object detection of 10 handwritten math symbols. Fundamental ML, Fall 2022.",
      stack: ["YOLOv5", "PyTorch"],
      url: "https://github.com/GoshtasbSh/handwritten-math-symbol-recognition-yolov5",
      year: "2022",
      featured: true,
    },
    {
      name: "Retail Sales Prediction & Classification",
      tag: "ML Pipeline",
      summary:
        "End-to-end ML pipeline on supermarket data - regression for gross income / unit price and classification for customer type, gender, weekday.",
      stack: ["scikit-learn", "pandas"],
      url: "https://github.com/GoshtasbSh/retail-sales-prediction-and-classification",
      year: "2026",
    },
    {
      name: "PCA Impact on Classification",
      tag: "Empirical Study",
      summary:
        "Empirical study of PCA's effect on accuracy and training time for Logistic Regression vs. Random Forest on a ship image dataset.",
      stack: ["scikit-learn"],
      url: "https://github.com/GoshtasbSh/dimensionality-reduction-impact-on-classification",
      year: "2026",
    },
    {
      name: "Landfill Site Selection (Genetic Algorithm)",
      tag: "Spatial Optimization",
      summary:
        "Site selection of a landfill using genetic algorithms over a multi-criteria GIS layer.",
      stack: ["MATLAB", "GA"],
      url: "https://github.com/GoshtasbSh",
      year: "2017",
    },
    {
      name: "Hospital Site Selection (MCDM + GIS)",
      tag: "Decision Analysis",
      summary:
        "Site selection of urban hospitals using a combined MCDM + GIS spatial-analysis workflow.",
      stack: ["ArcGIS", "AHP"],
      url: "https://github.com/GoshtasbSh",
      year: "2014",
    },
  ],

  publications: [
    {
      year: 2024,
      authors:
        "N. Soltani Nejad, R. Rastegar, G. Shahriari Mehr, F. Taheri Azad",
      title:
        "Conceptualizing the Tourist Journey: Qualitative Analysis of Tourist Experiences on TripAdvisor",
      venue: "Journal of Quality Assurance in Hospitality and Tourism",
      doi: "https://doi.org/10.1080/17489725.2021.1880029",
      pdfUrl: null,
      openAccess: false,
      tags: ["Qualitative", "Tourism", "Text Analysis"],
    },
    {
      year: 2021,
      authors:
        "G. Shahriari Mehr, M. Delavar, C. Claramunt, B. N. Araabi, M. R. A. Dehaqani",
      title:
        "A Store Location-based Recommender System Based on User's Position and Web Searches",
      venue: "Journal of Location Based Services",
      doi: "https://doi.org/10.1080/17489725.2021.1880029",
      pdfUrl: "assets/paper-2021-lbs-recommender.pdf",
      openAccess: true,
      tags: ["LBS", "Recommender", "First Author"],
    },
    {
      year: 2020,
      authors:
        "G. Shahriari Mehr, M. Delavar, C. Claramunt, B. N. Araabi, M. R. A. Dehaqani",
      title:
        "Discover Points of Interest based on Users' Internet Searches Through an Online Shopping Website",
      venue: "ISPRS International Joint Conference 2019",
      doi: "#",
      pdfUrl: "assets/paper-2020-isprs-poi.pdf",
      openAccess: true,
      tags: ["POI", "Recommender", "Conference"],
    },
  ],

  teaching: [
    { course: "Shelter Development", school: "University of Florida", terms: "Summer 2024 - Fall 2024 - Summer 2025 - Fall 2025" },
    { course: "Introduction to Planning Information Systems", school: "University of Florida", terms: "Fall 2023 - Spring 2025" },
    { course: "Introduction to Urban Analytics", school: "University of Florida", terms: "Fall 2023" },
    { course: "Geographic Information Systems I", school: "University of Tehran", terms: "Spring 2018" },
  ],

  honors: [
    "Graduate Support Funding, Office of the Provost, University of Florida (2021)",
    "Ranked 10th of 2,000 in Iran's national graduate entrance exam (1st at K. N. Toosi University, 2016)",
    "Ranked in the top 1% of ~300,000 in Iran's national university entrance exam (2012)",
  ],

  skills: {
    Programming: ["Python", "TypeScript", "C#", "MATLAB", "Octave"],
    "ML / DL / LLM": ["PyTorch", "TensorFlow", "scikit-learn", "U-Net", "YOLOv5", "MobileNetV2", "Xception", "LLM Agents", "RAG"],
    "Geo / Spatial": ["ArcGIS Pro", "QGIS", "PostGIS", "GeoPandas", "Mesa", "GeoMesa", "Leaflet", "Mapbox"],
    "Web & Data": ["HTML", "CSS", "Bootstrap", "Django", "PostgreSQL", "MySQL", "Oracle"],
    Tools: ["LaTeX", "ENVI", "AutoCAD", "Australis"],
  },

  // ------------ Detailed records used by mockups 06a/06b/06c/06b-spatial-reels (modal pop-ups) ------------
  degreesDetailed: [
    {
      key: "phd",
      degree: "PhD",
      field: "Design, Construction & Planning",
      school: "University of Florida",
      city: "Gainesville, FL",
      years: "Jan 2022 - 2026",
      status: "Defended in 2026",
      gpa: null,
      advisor: "Dr. Jason Von Meding",
      thesis:
        "Evaluating Different Scenarios for Food Access in Jacksonville Health Zone 1 using Agent-Based Modeling.",
      blurb:
        "Population-scale agent-based simulation of how residents reach food under different policy interventions. The dissertation delivers concrete policy recommendations on transit, retail siting, and pricing for the study area - all derived from the ABM results. Built entirely in Python with Mesa and GeoMesa.",
      highlights: [
        "Spatial ABM on the Jacksonville Health Zone 1 road network",
        "Calibration on census and travel-survey data",
        "Policy recommendations from simulation results",
      ],
    },
    {
      key: "msc-ece",
      degree: "MSc",
      field: "Electrical & Computer Engineering",
      school: "University of Florida",
      city: "Gainesville, FL",
      years: "Aug 2023 - Dec 2025",
      status: "Conferred December 2025",
      gpa: "3.81 / 4.00",
      advisor: null,
      thesis: null,
      certificateUrl: "assets/msc-ece-degree.pdf",
      blurb:
        "Dual degree pursued alongside the PhD to bring modern machine learning, computer vision, and (most recently) LLM and agent-AI methods into the urban-analytics work. Capstones spanned pattern recognition, deep learning, applied ML, and an ongoing line of LLM-powered tools (GeoChatBot and follow-on projects).",
      highlights: [
        "Pattern Recognition - CIFAR-100 transfer learning for built-environment features (Fall 2024)",
        "Applied ML - flower classification (MobileNetV2 / Xception) + U-Net lung X-ray segmentation (Spring 2024)",
        "Neural Networks & Deep Learning - CNN + MLP on Kuzushiji-MNIST (Fall 2023)",
        "Agent AI + LLM line - GeoChatBot (open source) and follow-on tools (2026 onwards)",
        "UF Machine Learning Certificate (ECE Department, Jan 2023 - Dec 2024)",
        "Coursera Machine Learning + Deep Learning Specialization (2020)",
      ],
    },
    {
      key: "msc-gis",
      degree: "MSc",
      field: "Geographic Information Science",
      school: "University of Tehran",
      city: "Tehran, Iran",
      years: "Sep 2016 - Aug 2019",
      status: "Conferred - Thesis grade: Excellent",
      gpa: null,
      advisor: "Profs. M. Delavar, C. Claramunt, B. Nadjar Araabi, M. R. Abolghasemi",
      thesis:
        "Developing a Location-Based Recommender System using Pattern Recognition with Users' Points of Interest and Internet Behavior.",
      blurb:
        "Trained as a GIS scientist with a research focus on location-based services and recommender systems. Two peer-reviewed papers published from this thesis.",
      highlights: [
        "Thesis grade: Excellent",
        "Ranked 10th of ~2,000 in Iran's national graduate entrance exam (1st at K. N. Toosi)",
        "Two peer-reviewed papers from this thesis",
        "TA - GIS I (Spring 2018)",
      ],
    },
    {
      key: "bsc",
      degree: "BSc",
      field: "Civil-Geomatics Engineering",
      school: "K. N. Toosi University of Technology",
      city: "Tehran, Iran",
      years: "Sep 2012 - Aug 2016",
      status: "Conferred",
      gpa: "16.07 / 20",
      advisor: null,
      thesis: "Evaluation of Methods for 3D Cadaster.",
      blurb:
        "Classical civil-geomatics - surveying, photogrammetry, GIS, CAD. The discipline that taught me to care about error budgets and coordinate systems before anything else.",
      highlights: [
        "Ranked in the top 1% of ~300,000 in Iran's national university entrance exam (2012)",
        "Site-selection projects using GIS + AHP and Genetic Algorithms",
      ],
    },
  ],

  affiliationsDetailed: [
    {
      key: "fiber",
      name: "FIBER",
      full: "Florida Institute for Built Environment Resilience",
      school: "University of Florida",
      role: "Graduate Research Assistant",
      years: "Jan 2022 - Present",
      link: "https://dcp.ufl.edu/fiber/",
      advisor: null,
      project: null,
      blurb:
        "Long-running GRA appointment at FIBER - the Florida Institute for Built Environment Resilience.",
    },
    {
      key: "dtsc",
      name: "DTSC Lab",
      full: "Disasters, Trust, and Social Change Lab",
      school: "University of Florida",
      role: "Graduate Research Assistant",
      years: "Jun 2023 - Present",
      link: "https://dcp.ufl.edu/fiber/disasters-trust-and-social-change-lab/",
      advisor: null,
      project: null,
      blurb:
        "GRA at the DTSC Lab - field survey, dashboards, and analysis work. Open-source outputs include the Keystone Heights project on GitHub.",
    },
    {
      key: "iadapt",
      name: "iAdapt",
      full: "International Center for Adaptation Planning & Design",
      school: "University of Florida",
      role: "Graduate Research Assistant",
      years: "Aug 2025 - Feb 2026",
      status: "Completed",
      link: "https://dcp.ufl.edu/iadapt",
      advisor: "Dr. Zhong-Ren Peng",
      project: "FDOT District 5 - review and comparative analysis of existing transport analyses for Central Florida.",
      blurb:
        "Completed appointment (Aug 2025 - Feb 2026) on the FDOT District 5 project at iAdapt, focused on review and comparative analysis of existing transport analyses for Central Florida.",
    },
  ],

  axisDetails: {
    "Agent-Based Modeling": {
      one: "Population-scale simulation of urban behavior in Python.",
      stack: ["Python", "Mesa", "GeoMesa", "GeoPandas"],
      items: [
        { year: "2022 - 2026", what: "PhD dissertation - food-access ABM in Jacksonville Health Zone 1. Defended in 2026. Produces concrete policy recommendations on transit, retail siting, and pricing." },
      ],
    },
    "Spatio-temporal Analysis": {
      one: "Spatial-temporal analytics and decision modeling.",
      stack: ["Python", "GeoPandas", "MCDM", "Genetic Algorithms"],
      items: [
        { year: "Aug 2025 - Feb 2026", what: "iAdapt - FDOT District 5: review and comparative analysis of existing transport analyses for Central Florida." },
        { year: "Spring 2017", what: "Site Selection of Landfill using Genetic Algorithms over multi-criteria GIS layers." },
        { year: "Fall 2014", what: "Site Selection of Urban Hospitals using combined MCDM + GIS spatial analysis." },
      ],
    },
    "Location-Based Services": {
      one: "Recommender systems that know where you are.",
      stack: ["Python", "scikit-learn", "PostGIS"],
      items: [
        { year: "2021", what: "First-authored - A Store Location-based Recommender System Based on User's Position and Web Searches (Journal of Location Based Services)." },
        { year: "2020 / ISPRS 2019", what: "Discover Points of Interest based on Users' Internet Searches through an Online Shopping Website." },
        { year: "2019", what: "MSc thesis at U Tehran on POI-aware recommenders using pattern recognition." },
      ],
    },
    "Urban Analytics": {
      one: "Built-environment data, treated as data.",
      stack: ["Python", "PyTorch", "QGIS", "ArcGIS"],
      items: [
        { year: "Fall 2024", what: "Pattern Recognition capstone - Optimizing built-environment feature detection using transfer learning on CIFAR-100." },
        { year: "Fall 2023", what: "TA, Introduction to Urban Analytics (UF, MURP)." },
      ],
    },
    "Computer Vision": {
      one: "Classification, detection, and segmentation on real imagery.",
      stack: ["PyTorch", "TensorFlow", "YOLOv5", "U-Net", "MobileNetV2"],
      items: [
        { year: "Fall 2022", what: "YOLOv5 - handwritten math symbol classification + object detection (graduate ML project)." },
        { year: "Spring 2024", what: "Applied ML - flower classification (MobileNetV2 / Xception) and U-Net lung X-ray segmentation." },
        { year: "2026", what: "Empirical study of PCA's effect on Logistic Regression vs. Random Forest on a ship image dataset." },
      ],
    },
    "Machine Learning": {
      one: "Certified and project-based ML across urban, image, and tabular data.",
      stack: ["PyTorch", "scikit-learn", "TensorFlow", "Coursera ML", "UF ML Cert"],
      items: [
        { year: "Dec 2025", what: "MSc in ECE conferred by UF (dual degree alongside the PhD) - GPA 3.81." },
        { year: "Jan 2023 - Dec 2024", what: "UF Machine Learning Certificate (Department of ECE)." },
        { year: "2020", what: "Coursera Machine Learning + Deep Learning Specialization (Neural Networks and Deep Learning, Structuring ML Projects)." },
        { year: "Fall 2023", what: "Neural Networks & Deep Learning course - CNN + MLP on Kuzushiji-MNIST." },
        { year: "Multiple", what: "Project-based ML across pattern recognition, computer vision, recommender systems, and LLM-powered agents." },
      ],
    },
    "Agent AI and LLMs": {
      one: "LLM-powered agents for spatial and tabular data analysis.",
      stack: ["LLM Agents", "RAG", "Tool Calling", "TypeScript", "Python"],
      items: [
        { year: "2026", what: "GeoChatBot - embeddable widget that lets users drop a CSV/GeoJSON and ask in plain English. The LLM agent plans, asks for approval, then executes. Built with agent loops and RAG." },
        { year: "Coming", what: "More LLM-powered geospatial and analysis tools in development." },
      ],
    },
  },

  timeline: [
    { year: 2012, label: "Top 1% - Iran national university entrance" },
    { year: 2016, label: "BSc, Civil-Geomatics Engineering, KNTU" },
    { year: 2016, label: "Ranked 10th - national MSc entrance exam" },
    { year: 2017, label: "Joined LBS Lab, University of Tehran" },
    { year: 2019, label: "MSc, GIS, University of Tehran (thesis: Excellent)" },
    { year: 2020, label: "Coursera ML + Deep Learning Specialization" },
    { year: 2021, label: "Provost Graduate Support Funding, UF" },
    { year: 2022, label: "Began PhD, Design Construction & Planning, UF" },
    { year: 2023, label: "Began MSc, ECE, UF (dual degree)" },
    { year: 2024, label: "UF Machine Learning Certificate completed" },
    { year: 2025, label: "MSc ECE conferred - GPA 3.81" },
    { year: 2026, label: "PhD dissertation defended - GeoChatBot - FDOT D5 wrapped" },
  ],
};
