import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, services, products, verticals, stats } from '@shared/data/company';
import {
  Database,
  Workflow,
  ScanLine,
  ArrowLeftRight,
  Plug,
  Brain,
  Landmark,
  Building2,
  HeartPulse,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  ecm: Database,
  bpa: Workflow,
  capture: ScanLine,
  migration: ArrowLeftRight,
  integration: Plug,
  ai: Brain,
};

const verticalIcons: Record<string, React.ElementType> = {
  landmark: Landmark,
  building: Building2,
  'heart-pulse': HeartPulse,
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
  return (
    <div ref={ref} className={`section-fade ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 gradient-mesh-intense" />

        {/* Floating ambient elements */}
        <div className="absolute top-1/4 left-[15%] w-72 h-72 bg-electric-500/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-teal-500/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-[30%] w-48 h-48 bg-electric-500/4 rounded-full blur-2xl animate-float" />

        {/* Node network (decorative dots) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { top: '18%', left: '8%', delay: '0s' },
            { top: '72%', left: '12%', delay: '1.5s' },
            { top: '28%', left: '85%', delay: '0.8s' },
            { top: '65%', left: '78%', delay: '2.2s' },
            { top: '45%', left: '92%', delay: '1s' },
            { top: '82%', left: '55%', delay: '0.5s' },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-electric-400/30 rounded-full animate-pulse-glow"
              style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              <span className="text-xs font-medium text-electric-400 tracking-wide uppercase">
                {company.yearsInBusiness}+ Years of Innovation
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-slide-up">
              Enterprise Content Management.{' '}
              <span className="gradient-text">Powered by Intelligence.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '0.15s' }}>
              For over four decades, SYSCOM has built the systems that move, manage, and
              automate enterprise content. Now we're applying AI to make them smarter.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-400 hover:to-teal-400 transition-all shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
      </section>

      {/* ============ STATS ============ */}
      <section className="relative py-16 border-y border-white/5">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <FadeSection className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Centers of Excellence
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Six disciplines. One mission.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every SYSCOM engagement draws from decades of specialized expertise across
              content management, automation, and AI.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.id] || Database;
              return (
                <FadeSection key={service.id}>
                  <Link
                    to="/services"
                    className="group block h-full rounded-xl bg-navy-800/60 border border-white/5 hover:border-electric-500/30 p-6 card-hover"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-electric-400" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-electric-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-electric-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              Our Products
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Built from experience. Not from templates.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              SYSCOM owns the IP behind every product we sell. These tools were born from
              real engagements, solving problems no off-the-shelf software could handle.
            </p>
          </FadeSection>

          <div className="grid lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <FadeSection key={product.id}>
                <Link
                  to="/products"
                  className={`group block h-full rounded-xl border p-6 lg:p-8 card-hover ${
                    product.flagship
                      ? 'bg-gradient-to-br from-navy-800 to-navy-800/80 border-electric-500/30 lg:col-span-1'
                      : 'bg-navy-800/60 border-white/5 hover:border-electric-500/20'
                  }`}
                >
                  {product.flagship && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-electric-400 bg-electric-500/10 px-2.5 py-1 rounded-full mb-4">
                      Flagship
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-xl mb-1.5 group-hover:text-electric-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-teal-400 font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="w-1 h-1 rounded-full bg-electric-500/60 mt-1.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-electric-400 mt-5 group-hover:gap-2 transition-all">
                    View details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VERTICALS ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Industries We Serve
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Deep expertise where it matters
            </h2>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {verticals.map((vertical) => {
              const Icon = verticalIcons[vertical.icon] || Landmark;
              return (
                <FadeSection key={vertical.name}>
                  <div className="rounded-xl bg-navy-800/60 border border-white/5 p-6 text-center card-hover hover:border-teal-500/20">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {vertical.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {vertical.description}
                    </p>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-800/50 border border-white/5 overflow-hidden p-10 sm:p-16 text-center">
              <div className="absolute inset-0 gradient-mesh-intense opacity-60" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-electric-500/8 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/6 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                  Ready to modernize your content operations?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                  Talk to our team about how {company.yearsInBusiness}+ years of ECM expertise
                  and modern AI can solve your toughest challenges.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-400 hover:to-teal-400 transition-all shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
