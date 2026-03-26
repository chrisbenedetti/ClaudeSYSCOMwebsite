import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@shared/data/company';
import { ArrowRight, ArrowLeftRight, CheckCircle2, Layers } from 'lucide-react';

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

const sourcePlatforms = [
  'IBM CM8',
  'IBM FileNet',
  'Documentum',
  'SharePoint',
  'OpenText',
  'Hyland OnBase',
  'Alfresco',
  'Box',
  'Laserfiche',
  'Custom / Legacy',
];

const targetPlatforms = [
  'IBM FileNet',
  'SharePoint Online',
  'Microsoft 365',
  'AWS S3',
  'Azure Blob',
  'IBM CM8',
  'Box',
  'Google Drive',
  'OpenText',
  'Any ECM',
];

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Our Products
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Products built from{' '}
              <span className="gradient-text">experience.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              SYSCOM doesn't resell other people's software. We build our own. Each product
              was born from a real client need that no off-the-shelf tool could solve.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ASM (Flagship) ============ */}
      <section id="asm" className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-electric-400 bg-electric-500/10 px-3 py-1.5 rounded-full">
                Flagship Product
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-2">
                  {products[0].name}
                </h2>
                <p className="text-lg text-teal-400 font-medium mb-6">{products[0].tagline}</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  {products[0].description}
                </p>
                <ul className="space-y-3">
                  {products[0].features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-electric-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Migration flow diagram */}
              <div className="rounded-2xl bg-navy-800/60 border border-white/5 p-6 sm:p-8">
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6 text-center">
                  Migration Flow
                </h3>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
                  {/* Source systems */}
                  <div className="flex-1 w-full">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">
                      Source
                    </div>
                    <div className="space-y-2">
                      {sourcePlatforms.slice(0, 5).map((platform) => (
                        <div
                          key={platform}
                          className="px-3 py-2 rounded-lg bg-navy-900/60 border border-white/5 text-xs text-slate-400 text-center"
                        >
                          {platform}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow / ASM Engine */}
                  <div className="flex flex-col items-center gap-2 py-4 sm:py-0 shrink-0">
                    <ArrowLeftRight className="w-5 h-5 text-electric-400 sm:hidden" />
                    <div className="hidden sm:flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-gradient-to-b from-transparent to-electric-500/50" />
                      <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-electric-500/20 to-teal-500/20 border border-electric-500/30">
                        <div className="text-xs font-bold text-electric-400 whitespace-nowrap">
                          ASM Engine
                        </div>
                      </div>
                      <div className="w-px h-4 bg-gradient-to-b from-electric-500/50 to-transparent" />
                    </div>
                    <div className="sm:hidden px-4 py-2 rounded-xl bg-gradient-to-r from-electric-500/20 to-teal-500/20 border border-electric-500/30">
                      <div className="text-xs font-bold text-electric-400">ASM Engine</div>
                    </div>
                  </div>

                  {/* Target systems */}
                  <div className="flex-1 w-full">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">
                      Target
                    </div>
                    <div className="space-y-2">
                      {targetPlatforms.slice(0, 5).map((platform) => (
                        <div
                          key={platform}
                          className="px-3 py-2 rounded-lg bg-navy-900/60 border border-white/5 text-xs text-slate-400 text-center"
                        >
                          {platform}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 text-center mt-6">
                  Supports 20+ ECM platforms. Full metadata, security, and folder structure preservation.
                </p>
              </div>
            </div>

            {/* ASM capabilities grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Any-to-Any Migration',
                  desc: 'Move content between any two ECM platforms with a single, unified toolset.',
                },
                {
                  title: 'Metadata Preservation',
                  desc: 'Security ACLs, custom properties, audit history, and folder structures travel with every document.',
                },
                {
                  title: 'Taxonomy Mapping',
                  desc: 'Automated analysis and mapping of classification schemes between source and target systems.',
                },
                {
                  title: 'Format Conversion',
                  desc: 'TIFF to PDF, proprietary to open formats, and more during the migration process.',
                },
                {
                  title: 'Enterprise Scale',
                  desc: 'Proven performance with migrations of millions of documents. Parallelized for throughput.',
                },
                {
                  title: 'Audit & Validation',
                  desc: 'Complete audit trails and reconciliation reporting to verify every document migrated correctly.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-navy-800/40 border border-white/5 p-5"
                >
                  <h4 className="font-heading font-semibold text-sm mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ============ AIS Bridge ============ */}
      <section id="ais-bridge" className="py-20 sm:py-28 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-2">
                  {products[1].name}
                </h2>
                <p className="text-lg text-teal-400 font-medium mb-6">{products[1].tagline}</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  {products[1].description}
                </p>
                <ul className="space-y-3">
                  {products[1].features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy-800/60 border border-white/5 p-8">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  Why organizations choose AIS Bridge
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Zero Application Changes',
                      desc: 'Your existing applications continue to work exactly as they do today. AIS Bridge provides full API compatibility with ImagePlus.',
                    },
                    {
                      title: 'Modern Infrastructure',
                      desc: 'Run on current, supported hardware and operating systems. Eliminate the risk of unsupported legacy platforms.',
                    },
                    {
                      title: 'Cost Reduction',
                      desc: 'Lower infrastructure costs without the expense of a full application rewrite. Protect your existing investment.',
                    },
                    {
                      title: 'Fully Supported',
                      desc: 'SYSCOM provides complete support for AIS Bridge, unlike the discontinued IBM ImagePlus product.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-teal-500/40 pl-4">
                      <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ============ IBIG ============ */}
      <section id="ibig" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="lg:order-2">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-2">
                  {products[2].name}
                </h2>
                <p className="text-lg text-teal-400 font-medium mb-6">{products[2].tagline}</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  {products[2].description}
                </p>
                <ul className="space-y-3">
                  {products[2].features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-electric-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:order-1 rounded-2xl bg-navy-800/60 border border-white/5 p-8">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  SOA content services, simplified
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  IBIG provides a service-oriented architecture for content operations.
                  Instead of writing custom code for each new ECM capability, configure
                  new services through IBIG's management interface and deploy them immediately.
                </p>
                <div className="space-y-3">
                  {[
                    'Document ingestion services',
                    'Search and retrieval APIs',
                    'Workflow trigger endpoints',
                    'Content transformation pipelines',
                    'Security and access control layers',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-navy-900/40 border border-white/5"
                    >
                      <Layers className="w-4 h-4 text-electric-400 shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ============ Integrated Suite ============ */}
      <section className="py-20 sm:py-28 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              Better Together
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              An integrated product suite
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              SYSCOM's products are designed to work together. Migrate content with ASM,
              serve it through IBIG, and maintain legacy access with AIS Bridge &mdash; all
              from one vendor who built every piece.
            </p>
          </FadeSection>

          <FadeSection>
            <div className="grid sm:grid-cols-3 gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl bg-navy-800/60 border border-white/5 p-6 text-center"
                >
                  <h3 className="font-heading font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-teal-400 font-medium mb-3">{product.tagline}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {product.description.split('.')[0]}.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-navy-800/80 border border-electric-500/20">
                <span className="text-sm text-slate-400">
                  All products backed by SYSCOM engineering &amp; support
                </span>
                <ArrowRight className="w-4 h-4 text-electric-400" />
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Ready to see our products in action?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Schedule a demo to see how ASM, AIS Bridge, and IBIG can solve your
              enterprise content challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-400 hover:to-teal-400 transition-all shadow-lg shadow-electric-500/25"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
