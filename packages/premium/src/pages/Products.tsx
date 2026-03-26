import { ChevronRight } from 'lucide-react';
import { products } from '@shared/data/company';

const migrationSources = [
  'IBM CM8',
  'FileNet',
  'Documentum',
  'SharePoint',
  'OpenText',
  'Hyland',
];

const migrationTargets = [
  'SharePoint',
  'Box',
  'AWS S3',
  'Azure Blob',
  'IBM FileNet',
  'Any ECM',
];

export default function Products() {
  const asm = products[0];
  const aisBridge = products[1];
  const ibig = products[2];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Proprietary Technology
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-cream-100 animate-slide-up">
            Built, Not Bought
          </h1>
          <p className="mt-6 text-cream-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '150ms' }}>
            We own our intellectual property. Every product exists because we saw
            a problem nobody else was solving -- and built the answer.
          </p>
        </div>
      </section>

      {/* ASM - Flagship */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border border-dark-700/30 p-8 md:p-16">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-3">
                Flagship Product
              </p>
              <h2 className="font-heading text-4xl md:text-6xl text-cream-100 mb-2">
                {asm.name}
              </h2>
              <p className="font-heading text-lg md:text-xl text-cream-300 italic">
                {asm.tagline}
              </p>
            </div>

            <p className="text-cream-400 text-base leading-relaxed max-w-2xl mx-auto text-center mb-16">
              {asm.description}
            </p>

            {/* Migration Diagram */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
                {/* Sources */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mb-4 text-center md:text-right">
                    Source Systems
                  </p>
                  {migrationSources.map((source) => (
                    <div
                      key={source}
                      className="bg-dark-700/30 border border-dark-600/20 px-5 py-2.5 text-sm text-cream-300 text-center md:text-right"
                    >
                      {source}
                    </div>
                  ))}
                </div>

                {/* ASM Engine */}
                <div className="flex flex-col items-center py-4 md:py-0">
                  <div className="hidden md:flex flex-col items-center gap-2 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <ChevronRight
                        key={`l${i}`}
                        size={16}
                        className="text-copper-500/40 -rotate-90 md:rotate-0"
                      />
                    ))}
                  </div>
                  <div className="bg-copper-500/10 border border-copper-500/30 px-8 py-6 text-center">
                    <p className="font-heading text-2xl text-copper-500">ASM</p>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-cream-400 mt-1">
                      Engine
                    </p>
                  </div>
                  <div className="hidden md:flex flex-col items-center gap-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <ChevronRight
                        key={`r${i}`}
                        size={16}
                        className="text-copper-500/40 -rotate-90 md:rotate-0"
                      />
                    ))}
                  </div>
                </div>

                {/* Targets */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mb-4 text-center md:text-left">
                    Target Systems
                  </p>
                  {migrationTargets.map((target) => (
                    <div
                      key={target}
                      className="bg-dark-700/30 border border-dark-600/20 px-5 py-2.5 text-sm text-cream-300 text-center md:text-left"
                    >
                      {target}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {asm.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-cream-300"
                >
                  <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIS Bridge */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex md:gap-16 items-start">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <h2 className="font-heading text-3xl md:text-4xl text-cream-100 mb-2">
                {aisBridge.name}
              </h2>
              <p className="font-heading text-base text-cream-300 italic mb-6">
                {aisBridge.tagline}
              </p>
            </div>
            <div className="md:w-3/5">
              <p className="text-cream-400 text-sm leading-relaxed mb-8">
                {aisBridge.description}
              </p>
              <div className="space-y-3">
                {aisBridge.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-cream-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-dark-700/20" />
      </div>

      {/* IBIG */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex md:flex-row-reverse md:gap-16 items-start">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <h2 className="font-heading text-3xl md:text-4xl text-cream-100 mb-2">
                {ibig.name}
              </h2>
              <p className="font-heading text-base text-cream-300 italic mb-6">
                {ibig.tagline}
              </p>
            </div>
            <div className="md:w-3/5">
              <p className="text-cream-400 text-sm leading-relaxed mb-8">
                {ibig.description}
              </p>
              <div className="space-y-3">
                {ibig.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-cream-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Narrative */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-t border-b border-copper-500/20 py-12 md:py-16">
            <h2 className="font-heading text-2xl md:text-4xl text-cream-100 mb-6">
              Better Together
            </h2>
            <p className="text-cream-400 text-base leading-relaxed">
              ASM migrates your content. AIS Bridge preserves your ImagePlus
              investment. IBIG delivers content services on demand. Together, they
              form a complete platform for organizations modernizing their content
              infrastructure -- built by a team that has been doing this longer
              than most companies have existed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
