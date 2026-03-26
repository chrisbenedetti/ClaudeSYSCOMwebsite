import {
  Database,
  Workflow,
  ScanLine,
  ArrowLeftRight,
  Plug,
  Brain,
} from 'lucide-react';
import { services } from '@shared/data/company';
import ROICalculator from '../components/ROICalculator';

const serviceIcons: Record<string, React.ReactNode> = {
  ecm: <Database size={28} />,
  bpa: <Workflow size={28} />,
  capture: <ScanLine size={28} />,
  migration: <ArrowLeftRight size={28} />,
  integration: <Plug size={28} />,
  ai: <Brain size={28} />,
};

const serviceDetails: Record<string, string[]> = {
  ecm: [
    'Repository design and implementation across IBM, Microsoft, and cloud platforms',
    'Records management and retention policies that meet regulatory requirements',
    'Document lifecycle management from creation through disposition',
    'Integration with existing line-of-business applications',
  ],
  bpa: [
    'Workflow design and automation using IBM BAW, Microsoft Power Automate, and custom solutions',
    'Business rules engines that codify organizational knowledge',
    'Case management for complex, multi-step processes',
    'Process mining and optimization for continuous improvement',
  ],
  capture: [
    'High-volume document scanning and digitization at enterprise scale',
    'Intelligent OCR with 99%+ accuracy for structured and unstructured documents',
    'Automated classification and routing based on document content',
    'Data extraction and validation against business rules',
  ],
  migration: [
    'Powered by our proprietary AnySource Migrator technology',
    'Full metadata, security, and folder structure preservation',
    'Support for 20+ ECM platforms including IBM CM8, FileNet, Documentum, and SharePoint',
    'Taxonomy analysis and mapping for cross-platform compatibility',
  ],
  integration: [
    'Deep expertise in the IBM ecosystem: CM8, FileNet, Content Navigator, BAW',
    'Microsoft 365 and SharePoint integration and customization',
    'Cloud platform migration and hybrid architecture design',
    'API development and service-oriented integration patterns',
  ],
  ai: [
    'Computer vision for automated document analysis and classification',
    'Natural language processing for content extraction and understanding',
    'Intelligent classification that learns from organizational patterns',
    'Robotic process automation for repetitive content workflows',
  ],
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Centers of Excellence
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-cream-100 animate-slide-up">
            What We Do
          </h1>
          <p className="mt-6 text-cream-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '150ms' }}>
            Six disciplines. Four decades of refinement. Each one backed by
            proprietary technology and hard-won expertise.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id}>
              <div
                className={`py-16 md:py-20 ${
                  index % 2 === 0
                    ? 'md:flex md:gap-16'
                    : 'md:flex md:flex-row-reverse md:gap-16'
                }`}
              >
                <div className="md:w-2/5 mb-8 md:mb-0">
                  <div className="text-copper-500/60 mb-4">
                    {serviceIcons[service.id]}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-cream-100 mb-3">
                    {service.name}
                  </h2>
                  <p className="text-cream-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="md:w-3/5">
                  <div className="space-y-4">
                    {serviceDetails[service.id]?.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 text-sm text-cream-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < services.length - 1 && (
                <div className="border-t border-dark-700/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>
    </>
  );
}
