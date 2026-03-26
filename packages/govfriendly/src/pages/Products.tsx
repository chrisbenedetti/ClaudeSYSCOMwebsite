import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  FileText,
  Shield,
  Database,
  ArrowLeftRight,
} from 'lucide-react';
import { products } from '@shared/data/company';

const supportedPlatforms = [
  'IBM Content Manager (CM8)',
  'IBM FileNet',
  'IBM Content Navigator',
  'OpenText Documentum',
  'Microsoft SharePoint',
  'Hyland OnBase',
  'Alfresco',
  'Box',
  'Laserfiche',
  'Oracle WebCenter',
  'File Systems (NTFS, NFS)',
  'Custom Repositories',
];

export default function Products() {
  const asm = products.find((p) => p.id === 'asm')!;
  const aisBridge = products.find((p) => p.id === 'ais-bridge')!;
  const ibig = products.find((p) => p.id === 'ibig')!;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gov-gray py-16 sm:py-20" aria-label="Products hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gov-navy">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-gov-gray-dark max-w-3xl leading-relaxed">
            Purpose-built software developed and maintained by SYSCOM. We own the code,
            control the roadmap, and support every deployment ourselves.
          </p>
        </div>
      </section>

      {/* ASM - Flagship */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="asm-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-gov-red bg-gov-red/10 px-3 py-1 rounded-full mb-3">
              Flagship Product
            </span>
            <h2
              id="asm-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-gov-navy"
            >
              {asm.name} ({asm.shortName})
            </h2>
            <p className="mt-2 text-lg text-gov-blue font-medium">{asm.tagline}</p>
            <p className="mt-4 text-gov-gray-dark max-w-3xl mx-auto leading-relaxed">
              {asm.description}
            </p>
          </div>

          {/* Migration Diagram */}
          <div className="mb-12">
            <h3 className="font-heading font-semibold text-xl text-gov-navy text-center mb-6">
              How ASM Works
            </h3>
            <div className="bg-gov-gray rounded-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Source Systems */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-gov-blue" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-gov-navy">
                      Source Systems
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-sm text-gov-gray-dark">
                    <li>IBM CM8 / FileNet</li>
                    <li>Documentum</li>
                    <li>SharePoint</li>
                    <li>Hyland OnBase</li>
                    <li>File Systems</li>
                    <li>Any ECM Platform</li>
                  </ul>
                </div>

                {/* ASM Engine */}
                <div className="flex flex-col items-center">
                  <ArrowLeftRight
                    className="w-8 h-8 text-gov-navy mb-3 hidden md:block"
                    aria-hidden="true"
                  />
                  <div className="bg-gov-navy text-white rounded-lg p-5 w-full text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <p className="font-heading font-bold text-lg">ASM Engine</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-gray-300 text-left">
                      <li>Metadata mapping</li>
                      <li>Security preservation</li>
                      <li>Format conversion</li>
                      <li>Validation & audit</li>
                    </ul>
                  </div>
                  <ArrowLeftRight
                    className="w-8 h-8 text-gov-navy mt-3 hidden md:block"
                    aria-hidden="true"
                  />
                </div>

                {/* Target Systems */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-gov-blue" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-gov-navy">
                      Target Systems
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-sm text-gov-gray-dark">
                    <li>IBM Content Navigator</li>
                    <li>SharePoint Online</li>
                    <li>Cloud Repositories</li>
                    <li>Alfresco / Box</li>
                    <li>File Systems</li>
                    <li>Any ECM Platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Platforms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-xl text-gov-navy mb-4">
                Key Capabilities
              </h3>
              <ul className="space-y-3">
                {asm.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-700 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gov-gray-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-xl text-gov-navy mb-4">
                Supported Platforms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {supportedPlatforms.map((platform) => (
                  <div
                    key={platform}
                    className="flex items-center gap-2 bg-gov-gray rounded px-3 py-2"
                  >
                    <FileText
                      className="w-4 h-4 text-gov-blue shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gov-gray-dark">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIS Bridge */}
      <section className="py-16 sm:py-20 bg-gov-gray" aria-labelledby="ais-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                id="ais-heading"
                className="font-heading text-3xl font-bold text-gov-navy"
              >
                {aisBridge.name}
              </h2>
              <p className="mt-2 text-gov-blue font-medium">{aisBridge.tagline}</p>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                {aisBridge.description}
              </p>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                Organizations that invested in IBM ImagePlus often face a difficult choice:
                rewrite applications or stay on unsupported infrastructure. AIS Bridge
                eliminates that choice. Your applications continue to work exactly as they
                do today, running on modern, fully supported infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-heading font-semibold text-lg text-gov-navy mb-4">
                Capabilities
              </h3>
              <ul className="space-y-3">
                {aisBridge.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-700 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gov-gray-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IBIG */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="ibig-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                id="ibig-heading"
                className="font-heading text-3xl font-bold text-gov-navy"
              >
                {ibig.name}
              </h2>
              <p className="mt-1 text-xs text-gov-gray-dark">
                Intelligent Business Information Gateway
              </p>
              <p className="mt-2 text-gov-blue font-medium">{ibig.tagline}</p>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                {ibig.description}
              </p>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                IBIG takes a service-oriented architecture approach to content services.
                Instead of writing custom code for every integration point, you configure
                services through IBIG's management interface and deploy them instantly.
                This dramatically reduces time-to-value and lowers the cost of change.
              </p>
            </div>
            <div className="bg-gov-gray rounded-lg border border-gray-200 p-6">
              <h3 className="font-heading font-semibold text-lg text-gov-navy mb-4">
                Capabilities
              </h3>
              <ul className="space-y-3">
                {ibig.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-700 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gov-gray-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section
        className="py-16 sm:py-20 bg-gov-gray"
        aria-labelledby="together-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="together-heading"
            className="font-heading text-3xl font-bold text-gov-navy text-center mb-4"
          >
            Better Together
          </h2>
          <p className="text-lg text-gov-gray-dark text-center max-w-2xl mx-auto mb-12">
            Our products are designed to work as an integrated suite, covering the full
            content lifecycle from capture to migration to delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gov-navy/10 text-gov-navy mb-4">
                <ArrowLeftRight className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gov-navy">
                Migrate
              </h3>
              <p className="mt-2 text-sm text-gov-gray-dark">
                Use ASM to move content from legacy platforms to modern repositories with
                full fidelity.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gov-navy/10 text-gov-navy mb-4">
                <Shield className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gov-navy">
                Preserve
              </h3>
              <p className="mt-2 text-sm text-gov-gray-dark">
                AIS Bridge maintains critical ImagePlus workflows while modernizing
                infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gov-navy/10 text-gov-navy mb-4">
                <Database className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gov-navy">
                Deliver
              </h3>
              <p className="mt-2 text-sm text-gov-gray-dark">
                IBIG provides service-oriented content delivery, making content available
                wherever it's needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gov-navy" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            See Our Products in Action
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Schedule a demonstration and see how SYSCOM products can solve your content
            challenges.
          </p>
          <Link to="/contact" className="mt-8 btn-white inline-flex">
            Request a Demo
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
