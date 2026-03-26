export const company = {
  name: "SYSCOM, Inc.",
  tagline: "The right technology at the right time.",
  founded: 1982,
  yearsInBusiness: new Date().getFullYear() - 1982,
  address: {
    street: "400 East Pratt Street, Suite 600",
    city: "Baltimore",
    state: "Maryland",
    zip: "21202",
  },
  phone: "(410) 539-3737",
  phoneTollfree: "800-7SYSCOM",
  email: "sales@syscom.com",
  website: "https://syscom.com",
  mission:
    "To create and deliver the right technology solutions by teaming with our customers to understand their business needs.",
};

export const leadership = [
  {
    name: "Ted Bayer",
    title: "President",
    bio: "Founder and President of SYSCOM, Ted has led the company's growth from a startup to a leading ECM solutions provider over four decades.",
  },
  {
    name: "Mark Anzmann",
    title: "Executive Vice President",
    bio: "Mark oversees SYSCOM's strategic client relationships and business development across government and financial services verticals.",
  },
  {
    name: "Chris Benedetti",
    title: "Chief Technology Officer",
    bio: "Chris drives SYSCOM's technology strategy, leading AI integration, cloud modernization, and product development initiatives.",
  },
];

export const services = [
  {
    id: "ecm",
    name: "Content Services / ECM",
    shortName: "ECM",
    description:
      "IBM FileNet P8, Content Manager Enterprise Edition, Content Manager for iSeries, ImagePlus support and migration, Content Manager OnDemand. Federation, application integration, and migration between platforms.",
    icon: "database",
  },
  {
    id: "bpa",
    name: "Business Process Automation",
    shortName: "BPA",
    description:
      "End-to-end workflow definition and optimization. Process analysis and redesign. Workflow orchestration using IBM and Tungsten platforms.",
    icon: "workflow",
  },
  {
    id: "capture",
    name: "Enterprise Capture",
    shortName: "Capture",
    description:
      "30+ year Tungsten Automation (Kofax) partnership. Remote and central capture, scanner and VRS configuration, high-availability and disaster recovery, advanced recognition and classification, custom validation and release scripts, IBM Datacap deployment.",
    icon: "scan",
  },
  {
    id: "migration",
    name: "Content Migration",
    shortName: "Migration",
    description:
      "Move content between any ECM platform with full metadata, security, and folder structure preservation. Powered by our proprietary AnySource Migrator — 25+ pre-built repository connectors.",
    icon: "move",
  },
  {
    id: "ai",
    name: "AI & Intelligent Automation",
    shortName: "AI",
    description:
      "Zero-shot document classification without templates. AI-powered auto-mapping in ASM 2.0. Semantic search and knowledge graphs in IBIG 2.0. Compliance-as-Code for automated security documentation. Cloud and on-premises model deployment for air-gapped environments.",
    icon: "brain",
  },
  {
    id: "staffing",
    name: "Contract Staffing",
    shortName: "Staffing",
    description:
      "Project Managers, Architects, Business Analysts, Programmers, Technical Writers, and Testers. Individual resources, teams, or entire departments. Rapid deployment backed by deep ECM technical knowledge.",
    icon: "users",
  },
];

export const products = [
  {
    id: "asm",
    name: "AnySource Migrator",
    shortName: "ASM",
    tagline: "Any source. Any destination. Zero compromises.",
    badge: "Flagship",
    description:
      "Enterprise content migration platform with 25+ pre-built repository connectors. AI-powered auto-mapping, real-time monitoring, and the most flexible migration engine on the market.",
    features: [
      {
        title: "25+ Connectors",
        description:
          "FileNet P8, Content Manager, ImagePlus, SharePoint, CMIS, EMC Documentum, OLEDB, File Systems, and a custom connector framework.",
      },
      {
        title: "AI Auto-Mapping (2.0)",
        description:
          "Analyze source taxonomy and auto-suggest target mappings using AI. Weeks of planning reduced to hours.",
      },
      {
        title: "Smart Transformations",
        description:
          "TIFF to PDF, MODCA to TIFF, Full-Text PDF, metadata manipulation. All configurable without code.",
      },
      {
        title: "Live Monitoring",
        description:
          "Track every document migrated with status reporting, anomaly detection, and predictive issue identification.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Scale vertically or horizontally. Repository Providers, Transformations engine, and Rendition functions work independently.",
      },
      {
        title: "Self-Service Portal (2.0)",
        description:
          "Web-based migration configuration for mid-market clients. Extends ASM's reach beyond enterprise engagements.",
      },
    ],
    connectors: [
      "FileNet P8",
      "Content Manager",
      "ImagePlus",
      "SharePoint",
      "CMIS",
      "EMC Documentum",
      "OLEDB",
      "File System",
      "Custom",
    ],
    workflow: [
      { icon: "search", label: "Analyze" },
      { icon: "ruler", label: "Design" },
      { icon: "link", label: "Connect" },
      { icon: "settings", label: "Transform" },
      { icon: "rocket", label: "Migrate" },
      { icon: "check", label: "Validate" },
    ],
    flagship: true,
  },
  {
    id: "ais-bridge",
    name: "AIS Bridge",
    shortName: "Bridge",
    tagline: "ImagePlus to Modern. Zero disruption.",
    badge: "Modernization",
    description:
      "A complete, fully-supported drop-in replacement for IBM ImagePlus. Preserves every integration, workflow, and user process. Backed by decades of ImagePlus expertise.",
    features: [
      {
        title: "Drop-In Replacement",
        description:
          "Full API compatibility. Existing CICS, IMS, MQ Workflow, and Windows client integrations work without modification.",
      },
      {
        title: "Modern Architecture",
        description:
          "Current technology stack underneath, complete backward compatibility on the surface.",
      },
      {
        title: "Zero-Downtime Migration",
        description:
          "Phased migration approach keeps all systems operational throughout the transition.",
      },
      {
        title: "Expert Support",
        description:
          "SYSCOM is THE go-to for ImagePlus — the team that built and maintained these systems now supports your Bridge.",
      },
    ],
    connectors: [
      "ImagePlus API",
      "CICS",
      "IMS",
      "MQ Workflow",
      "Windows Clients",
      "OnDemand",
    ],
    workflow: [
      { icon: "clipboard", label: "Assess" },
      { icon: "refresh", label: "Config" },
      { icon: "plug", label: "Integrate" },
      { icon: "flask", label: "Test" },
      { icon: "rocket", label: "Deploy" },
      { icon: "shield", label: "Support" },
    ],
    flagship: false,
  },
  {
    id: "ibig",
    name: "IBIG 2.0",
    shortName: "IBIG",
    tagline: "Don't just search your documents. Understand them.",
    badge: "Next Gen",
    description:
      "The Imagetext Business Intelligence Gateway, reborn with AI. Crawls existing repositories, uses LLMs to understand documents — not just OCR text — and builds a semantic knowledge layer with natural language search.",
    features: [
      {
        title: "AI Document Understanding",
        description:
          "LLMs comprehend document meaning — types, entities, dates, relationships. Far beyond text extraction.",
      },
      {
        title: "Semantic Search",
        description:
          'Natural language queries: "Find all contracts expiring this quarter" returns intelligent, ranked results.',
      },
      {
        title: "Knowledge Graph",
        description:
          "Automatically maps relationships between people, organizations, dates, and topics across your entire archive.",
      },
      {
        title: "Continuous Monitoring",
        description:
          "Scheduled recrawls detect new and changed documents, keeping the intelligence layer always current.",
      },
      {
        title: "25+ Repository Connectors",
        description:
          "Works with all ASM connectors — FileNet, SharePoint, Content Manager, and more. One platform, any repository.",
      },
      {
        title: "Air-Gap Capable",
        description:
          "On-premises model deployment for classified and air-gapped government environments.",
      },
    ],
    connectors: [
      "All ASM Connectors",
      "SharePoint",
      "FileNet P8",
      "Content Manager",
      "File Shares",
      "Custom APIs",
    ],
    workflow: [
      { icon: "spider", label: "Crawl" },
      { icon: "eye", label: "OCR+AI" },
      { icon: "brain", label: "Understand" },
      { icon: "folder", label: "Classify" },
      { icon: "link", label: "Relate" },
      { icon: "search", label: "Search" },
    ],
    flagship: false,
  },
  {
    id: "content-services",
    name: "Content Services",
    shortName: "CS",
    tagline: "Config-driven content workflows. Ship in days.",
    badge: "Platform",
    description:
      "SOA architecture for rapid ECM service deployment. Build powerful content workflows through configuration, not custom code. Pre-built templates for common patterns.",
    features: [
      {
        title: "No-Code Configuration",
        description:
          "Define workflows, rules, and integrations through configuration. Pre-built templates for common patterns.",
      },
      {
        title: "SOA Architecture",
        description:
          "Standard REST and SOAP interfaces integrate with any enterprise system.",
      },
      {
        title: "Rapid Deployment",
        description:
          "Requirements to production in days. Dramatically reduces project timelines.",
      },
      {
        title: "Full Integration",
        description:
          "Microsoft Office, SharePoint, line-of-business systems, and the complete SYSCOM product suite.",
      },
    ],
    connectors: [
      "REST APIs",
      "SOAP Services",
      "SharePoint",
      "MS Office",
      "FileNet",
      "LOB Systems",
    ],
    workflow: [
      { icon: "edit", label: "Define" },
      { icon: "settings", label: "Config" },
      { icon: "plug", label: "Connect" },
      { icon: "flask", label: "Test" },
      { icon: "rocket", label: "Deploy" },
      { icon: "bar-chart", label: "Monitor" },
    ],
    flagship: false,
  },
];

export const aiCapabilities = [
  {
    title: "Zero-Shot Classification",
    description: "No templates needed. AI recognizes documents on sight.",
    icon: "brain",
  },
  {
    title: "SecureCapture Gateway",
    description:
      "FedRAMP-aligned. NIST 800-53, CJIS, IRS Pub 1075 built-in.",
    icon: "shield",
  },
  {
    title: "Intelligent Migration",
    description:
      "ASM 2.0: AI auto-mapping + predictive anomaly detection.",
    icon: "bar-chart",
  },
  {
    title: "Compliance-as-Code",
    description: "Auto-generate security docs from deployment configs.",
    icon: "settings",
  },
];

export const verticals = [
  {
    name: "Government",
    subtitle: "Federal & State",
    description:
      "Document processing, records management, and compliance solutions for agencies handling millions of citizen documents. NIST 800-53, CJIS, IRS Pub 1075 compliance.",
    icon: "landmark",
  },
  {
    name: "Financial Services",
    subtitle: "Banking & Insurance",
    description:
      "Content management and automation for banks, credit unions, and financial institutions with strict regulatory requirements.",
    icon: "building",
  },
  {
    name: "Manufacturing",
    subtitle: "Industrial & Telecom",
    description:
      "Document management and process automation for manufacturing and telecommunications organizations.",
    icon: "factory",
  },
  {
    name: "Healthcare",
    subtitle: "Compliance-driven",
    description:
      "Claims processing, adjudication workflows, and document management for healthcare payers managing complex member records. HIPAA compliance.",
    icon: "heart-pulse",
  },
];

export const stats = [
  { value: "40+", label: "Years" },
  { value: "90%", label: "Retention" },
  { value: "25+", label: "Connectors" },
  { value: "30+", label: "Yr Kofax Partner" },
];
