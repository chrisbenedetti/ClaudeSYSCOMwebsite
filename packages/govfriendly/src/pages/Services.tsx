import { Link } from 'react-router-dom';
import {
  Database,
  Workflow,
  ScanLine,
  ArrowLeftRight,
  Plug,
  Brain,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { services } from '@shared/data/company';
import ROICalculator from '../components/ROICalculator';

const serviceIcons: Record<string, React.ReactNode> = {
  ecm: <Database className="w-10 h-10" aria-hidden="true" />,
  bpa: <Workflow className="w-10 h-10" aria-hidden="true" />,
  capture: <ScanLine className="w-10 h-10" aria-hidden="true" />,
  migration: <ArrowLeftRight className="w-10 h-10" aria-hidden="true" />,
  integration: <Plug className="w-10 h-10" aria-hidden="true" />,
  ai: <Brain className="w-10 h-10" aria-hidden="true" />,
};

const serviceDetails: Record<string, { capabilities: string[]; detail: string }> = {
  ecm: {
    detail:
      'Our ECM practice helps organizations manage the full lifecycle of enterprise content, from creation through archival. We design and implement repository solutions that ensure compliance, enable rapid retrieval, and integrate with existing business systems.',
    capabilities: [
      'Document and records management',
      'Regulatory compliance and retention policies',
      'Enterprise search and retrieval',
      'Security and access controls',
      'Integration with line-of-business applications',
      'Cloud and on-premises deployment options',
    ],
  },
  bpa: {
    detail:
      'We design and build automation solutions that replace manual, paper-based processes with streamlined digital workflows. Our BPA implementations reduce processing time, eliminate errors, and provide complete audit trails.',
    capabilities: [
      'Workflow design and automation',
      'Business rules engines',
      'Case management solutions',
      'Process analytics and reporting',
      'Exception handling and escalation',
      'Integration with existing enterprise systems',
    ],
  },
  capture: {
    detail:
      'Our capture solutions turn paper and unstructured content into actionable data. Using intelligent document recognition, machine learning classification, and high-speed OCR, we process millions of documents with accuracy rates above 99%.',
    capabilities: [
      'Intelligent document recognition (IDR)',
      'High-speed OCR and data extraction',
      'Machine learning classification',
      'Forms processing and validation',
      'Multi-channel capture (scan, email, fax, web)',
      'Quality assurance and exception routing',
    ],
  },
  migration: {
    detail:
      'Content migration is one of the hardest problems in enterprise IT. Our proprietary AnySource Migrator (ASM) technology moves content between any ECM platform with full metadata preservation, security mapping, and validation.',
    capabilities: [
      'Platform-to-platform content migration',
      'Full metadata and security preservation',
      'Taxonomy analysis and mapping',
      'Format conversion during migration',
      'Audit trail and validation reporting',
      'Support for 20+ ECM platforms',
    ],
  },
  integration: {
    detail:
      'We connect content management platforms with the rest of your enterprise. Deep expertise in IBM, Microsoft, and cloud ecosystems ensures your content flows seamlessly across systems without custom integration headaches.',
    capabilities: [
      'IBM CM8, FileNet, and Content Navigator',
      'IBM Business Automation Workflow (BAW)',
      'Microsoft SharePoint and Azure',
      'Cloud platform integration (AWS, Azure, GCP)',
      'API development and management',
      'Legacy system connectivity',
    ],
  },
  ai: {
    detail:
      'Our AI practice applies proven machine learning techniques to content challenges. Computer vision, natural language processing, and intelligent classification help organizations extract value from unstructured content at scale.',
    capabilities: [
      'Computer vision for document analysis',
      'Natural language processing (NLP)',
      'Intelligent document classification',
      'Automated data extraction and validation',
      'Robotic process automation (RPA)',
      'Model training and continuous improvement',
    ],
  },
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gov-gray py-16 sm:py-20" aria-label="Services hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gov-navy">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gov-gray-dark max-w-3xl leading-relaxed">
            Six specialized Centers of Excellence, each backed by decades of real-world
            deployments. We don't just advise. We build, implement, and support.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const details = serviceDetails[service.id];
        const isAlt = index % 2 === 1;

        return (
          <section
            key={service.id}
            className={`py-16 sm:py-20 ${isAlt ? 'bg-gov-gray' : 'bg-white'}`}
            aria-labelledby={`service-${service.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-gov-blue shrink-0 mt-1">
                      {serviceIcons[service.id]}
                    </div>
                    <div>
                      <h2
                        id={`service-${service.id}-heading`}
                        className="font-heading text-2xl sm:text-3xl font-bold text-gov-navy"
                      >
                        {service.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-gov-blue">
                        {service.shortName}
                      </p>
                    </div>
                  </div>
                  <p className="text-gov-gray-dark leading-relaxed">
                    {service.description}
                  </p>
                  <p className="mt-4 text-gov-gray-dark leading-relaxed">
                    {details.detail}
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-heading font-semibold text-lg text-gov-navy mb-4">
                    Key Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {details.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-5 h-5 text-green-700 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gov-gray-dark">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ROI Calculator */}
      <section
        className="py-16 sm:py-20 bg-white"
        aria-labelledby="roi-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="roi-heading"
            className="font-heading text-3xl font-bold text-gov-navy text-center mb-4"
          >
            Calculate Your ROI
          </h2>
          <p className="text-lg text-gov-gray-dark text-center max-w-2xl mx-auto mb-10">
            See how automation can reduce costs and improve efficiency in your document
            processing workflows.
          </p>
          <ROICalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gov-navy" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your content management challenges. We'll provide an honest
            assessment and a clear path forward.
          </p>
          <Link to="/contact" className="mt-8 btn-white inline-flex">
            Contact Our Team
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
