import { useEffect, useRef } from 'react';
import { services } from '@shared/data/company';
import {
  Database,
  Workflow,
  ScanLine,
  ArrowLeftRight,
  Plug,
  Brain,
} from 'lucide-react';
import ROICalculator from '../components/ROICalculator';

const serviceIcons: Record<string, React.ElementType> = {
  ecm: Database,
  bpa: Workflow,
  capture: ScanLine,
  migration: ArrowLeftRight,
  integration: Plug,
  ai: Brain,
};

const serviceCapabilities: Record<string, string[]> = {
  ecm: [
    'Enterprise repository design and implementation across IBM CM8, FileNet, and cloud platforms',
    'Records management with automated retention policies and legal hold capabilities',
    'Document version control, audit trails, and chain-of-custody tracking',
    'Regulatory compliance frameworks for HIPAA, SOX, and state/federal mandates',
    'Content federation enabling unified search across disparate repositories',
    'High-volume document ingestion pipelines handling millions of records',
  ],
  bpa: [
    'Workflow design and implementation using IBM BAW, Microsoft Power Automate, and custom engines',
    'Business rules engines with visual configuration for non-technical stakeholders',
    'Case management solutions for complex, multi-step approval processes',
    'Human-in-the-loop automation with intelligent task routing and escalation',
    'Process mining and optimization using real operational data',
    'Integration with existing ERP, CRM, and line-of-business applications',
  ],
  capture: [
    'Intelligent document classification using machine learning models trained on client data',
    'High-speed OCR with 99%+ accuracy for structured and semi-structured documents',
    'Automated data extraction from forms, invoices, claims, and correspondence',
    'Barcode and QR code recognition for document sorting and indexing',
    'Multi-channel capture: paper, email, fax, web portal, and mobile',
    'Quality assurance workflows with exception handling and human review queues',
  ],
  migration: [
    'Cross-platform migration between IBM CM8, FileNet, Documentum, SharePoint, and 20+ systems',
    'Full metadata preservation including custom properties, security ACLs, and audit history',
    'Taxonomy analysis and mapping between source and target classification schemes',
    'Format conversion during migration (TIFF to PDF, proprietary to open formats)',
    'Phased migration strategies minimizing operational disruption',
    'Validation and reconciliation reporting with document-level audit trails',
  ],
  integration: [
    'IBM ecosystem expertise: Content Navigator, BAW, FileNet, CM8, DataCap, and Datacap',
    'Microsoft 365 and SharePoint Online integration for hybrid content strategies',
    'REST and SOAP API development connecting ECM platforms to enterprise applications',
    'Cloud migration and hybrid deployment architectures (AWS, Azure, IBM Cloud)',
    'Single sign-on, LDAP, and Active Directory integration for unified security',
    'Custom connector development for legacy and proprietary systems',
  ],
  ai: [
    'Computer vision models for document classification, extraction, and quality assessment',
    'Natural language processing for contract analysis, entity recognition, and summarization',
    'Intelligent classification engines that learn from operational feedback loops',
    'Robotic Process Automation (RPA) for high-volume, rules-based document workflows',
    'Predictive analytics for processing bottleneck identification and capacity planning',
    'AI model training and fine-tuning using client-specific document corpora',
  ],
};

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`section-fade ${className}`}>{children}</div>;
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Centers of <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Six specialized disciplines, each staffed by practitioners who have spent
              their careers mastering enterprise content challenges. We don't generalize
              &mdash; we go deep.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => {
        const Icon = serviceIcons[service.id] || Database;
        const capabilities = serviceCapabilities[service.id] || [];
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-24 ${isEven ? '' : 'bg-navy-800/20'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeSection>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Info */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-electric-400" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl">
                          {service.name}
                        </h2>
                        <p className="text-sm text-electric-400 font-medium">
                          {service.shortName}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="rounded-xl bg-navy-800/60 border border-white/5 p-6">
                      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {capabilities.map((cap, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-500 mt-2 shrink-0" />
                            <span className="text-sm text-slate-400 leading-relaxed">
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>

            {/* Divider between sections */}
            {i < services.length - 1 && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            )}
          </section>
        );
      })}

      {/* ROI Calculator */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-10">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              Quantify the Impact
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              What could automation save you?
            </h2>
          </FadeSection>
          <FadeSection>
            <ROICalculator />
          </FadeSection>
        </div>
      </section>
    </>
  );
}
