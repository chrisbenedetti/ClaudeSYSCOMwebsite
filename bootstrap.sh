#!/bin/bash
# SYSCOM Website Monorepo Bootstrap
# Run this first to set up the project structure

set -e

echo "🏗️  Setting up SYSCOM website monorepo..."

# Initialize npm workspace root
cat > package.json << 'EOF'
{
  "name": "syscom-website",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev:techforward": "npm run dev --workspace=packages/techforward",
    "dev:govfriendly": "npm run dev --workspace=packages/govfriendly",
    "dev:premium": "npm run dev --workspace=packages/premium",
    "build:techforward": "npm run build --workspace=packages/techforward",
    "build:govfriendly": "npm run build --workspace=packages/govfriendly",
    "build:premium": "npm run build --workspace=packages/premium",
    "build:all": "npm run build:techforward && npm run build:govfriendly && npm run build:premium",
    "preview:techforward": "npm run preview --workspace=packages/techforward",
    "preview:govfriendly": "npm run preview --workspace=packages/govfriendly",
    "preview:premium": "npm run preview --workspace=packages/premium"
  }
}
EOF

# Create directory structure
mkdir -p packages/shared/src/components
mkdir -p packages/shared/src/data
mkdir -p packages/shared/src/utils
mkdir -p packages/techforward/src
mkdir -p packages/govfriendly/src
mkdir -p packages/premium/src
mkdir -p .github/workflows

# Shared data file — company info used by all variants
cat > packages/shared/src/data/company.ts << 'COMPANYEOF'
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
  email: "sales@syscom.com",
  website: "https://syscom.com",
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
    name: "Enterprise Content Management",
    shortName: "ECM",
    description: "Manage, share, integrate, and deliver critical business information on demand. Our ECM solutions improve productivity, enhance responsiveness, and meet the demands of regulatory compliance.",
    icon: "database",
  },
  {
    id: "bpa",
    name: "Business Process Automation",
    shortName: "BPA",
    description: "Streamline operations with intelligent workflow automation, business rules engines, and case management solutions that reduce manual effort and accelerate decision-making.",
    icon: "workflow",
  },
  {
    id: "capture",
    name: "Enterprise Capture",
    shortName: "Capture",
    description: "Custom-tailored capture solutions incorporating intelligent document recognition, OCR, classification, and automated data extraction at enterprise scale.",
    icon: "scan",
  },
  {
    id: "migration",
    name: "Content Migration",
    shortName: "Migration",
    description: "Move content between any ECM platform with full metadata, security, and folder structure preservation. Powered by our proprietary AnySource Migrator technology.",
    icon: "move",
  },
  {
    id: "integration",
    name: "Platform Integration",
    shortName: "Integration",
    description: "Deep expertise across IBM, Microsoft, and cloud platforms. We connect your systems so your content flows where it needs to go.",
    icon: "plug",
  },
  {
    id: "ai",
    name: "AI & Intelligent Automation",
    shortName: "AI",
    description: "Computer vision, natural language processing, and intelligent classification that transforms how organizations process and understand their content.",
    icon: "brain",
  },
];

export const products = [
  {
    id: "asm",
    name: "AnySource Migrator",
    shortName: "ASM",
    tagline: "Migrate anything. Preserve everything.",
    description: "Our proprietary content migration platform moves documents, metadata, security settings, and folder structures between any ECM system. No other tool on the market matches ASM's breadth of platform support.",
    features: [
      "Supports IBM CM8, FileNet, Documentum, SharePoint, and 20+ other platforms",
      "Full metadata and security preservation",
      "Taxonomy analysis and mapping",
      "Format conversion during migration",
      "Audit trail and validation reporting",
      "Handles millions of documents with proven scalability",
    ],
    flagship: true,
  },
  {
    id: "ais-bridge",
    name: "AIS Bridge",
    tagline: "Your ImagePlus investment, modernized.",
    description: "A complete, fully supported replacement for IBM ImagePlus. AIS Bridge lets organizations maintain their existing ImagePlus workflows and integrations while running on modern, supported infrastructure.",
    features: [
      "Drop-in replacement for ImagePlus",
      "No application code changes required",
      "Modern supported platform",
      "Full API compatibility",
      "Reduced infrastructure costs",
    ],
    flagship: false,
  },
  {
    id: "ibig",
    name: "IBIG",
    tagline: "Content services, configured not coded.",
    description: "Intelligent Business Information Gateway provides a service-oriented approach to deploying ECM capabilities. Stand up new content services with configuration instead of custom development.",
    features: [
      "SOA-based content services",
      "Configuration-driven deployment",
      "Rapid service creation",
      "Enterprise-grade scalability",
      "Platform-agnostic architecture",
    ],
    flagship: false,
  },
];

export const verticals = [
  {
    name: "State & Federal Government",
    description: "Document processing, records management, and compliance solutions for government agencies handling millions of citizen documents.",
    icon: "landmark",
  },
  {
    name: "Financial Services",
    description: "Content management and automation for banks, credit unions, and financial institutions with strict regulatory requirements.",
    icon: "building",
  },
  {
    name: "Health Insurance",
    description: "Claims processing, adjudication workflows, and document management for healthcare payers managing complex member records.",
    icon: "heart-pulse",
  },
];

export const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "70%", label: "Employee Retention (5+ years)" },
  { value: "1M+", label: "Documents Migrated Daily" },
  { value: "50+", label: "Enterprise Deployments" },
];
COMPANYEOF

echo "✅ Project structure created"
echo ""
echo "📁 Structure:"
find . -type f -not -path './.git/*' -not -path '*/node_modules/*' | head -30
echo ""
echo "Next: Create each variant's Vite project and build out the pages."
echo "Refer to CLAUDE.md for full requirements."
