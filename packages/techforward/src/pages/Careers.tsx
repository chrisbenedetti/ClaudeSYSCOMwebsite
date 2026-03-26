import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, stats } from '@shared/data/company';
import { ArrowRight, Users, MapPin, Cpu, Shield } from 'lucide-react';

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

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Careers
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Build the future{' '}
              <span className="gradient-text">with us.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              SYSCOM is a place where engineers build products they own, solve problems
              that matter, and work with technology that's actually interesting.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
                  Why people stay at SYSCOM
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Over 70% of our team has been with SYSCOM for five years or more. In an
                    industry known for high turnover, that number speaks for itself.
                  </p>
                  <p>
                    We're a small, focused company where every engineer works directly on
                    products and client solutions. There are no layers of bureaucracy between
                    you and the work. If you build something here, you'll see it deployed,
                    used, and supported.
                  </p>
                  <p>
                    Based in Baltimore's Inner Harbor, SYSCOM offers the stability of a
                    {company.yearsInBusiness}+ year track record with the technical ambition
                    of a company investing heavily in AI, cloud, and modern automation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    title: '70%+ Retention',
                    desc: 'Five-year employee retention rate. Our team stays because the work matters.',
                  },
                  {
                    icon: MapPin,
                    title: 'Baltimore, MD',
                    desc: 'Inner Harbor headquarters. Hybrid and flexible work arrangements available.',
                  },
                  {
                    icon: Cpu,
                    title: 'Real Technology',
                    desc: 'Work with AI, enterprise platforms, and proprietary products — not just staff augmentation.',
                  },
                  {
                    icon: Shield,
                    title: 'Stable & Growing',
                    desc: `${company.yearsInBusiness}+ years in business. Government and financial services clients with long-term contracts.`,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl bg-navy-800/60 border border-white/5 p-5"
                    >
                      <Icon className="w-6 h-6 text-electric-400 mb-3" />
                      <h3 className="font-heading font-semibold text-sm mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 sm:py-28 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
                What We Look For
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                Skills that matter here
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We hire problem solvers who care about craft. If you're motivated by
                building things that work and last, you'll fit in.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Enterprise Content Expertise',
                  desc: 'Experience with IBM FileNet, CM8, Content Navigator, Documentum, SharePoint, or similar ECM platforms.',
                },
                {
                  title: 'Automation & Integration',
                  desc: 'Skills in workflow engines, RPA, API development, and connecting disparate enterprise systems.',
                },
                {
                  title: 'AI & Machine Learning',
                  desc: 'Computer vision, NLP, document classification, or experience applying AI to real business problems.',
                },
                {
                  title: 'Software Engineering',
                  desc: 'Strong fundamentals in Java, Python, TypeScript, or C#. Experience building production systems.',
                },
                {
                  title: 'Client-Facing Skills',
                  desc: 'Ability to communicate technical solutions to IT leaders in government and financial services.',
                },
                {
                  title: 'Curiosity & Ownership',
                  desc: 'Willingness to learn new domains, take ownership of outcomes, and see projects through to completion.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-navy-800/60 border border-white/5 p-6"
                >
                  <h3 className="font-heading font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-800/50 border border-white/5 overflow-hidden p-10 sm:p-16 text-center">
              <div className="absolute inset-0 gradient-mesh-intense opacity-40" />
              <div className="relative z-10">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
                  Interested in joining SYSCOM?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                  We're always looking for talented engineers and consultants. Send us your
                  resume and tell us what you're passionate about.
                </p>
                <a
                  href={`mailto:${company.email}?subject=Career Inquiry`}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-400 hover:to-teal-400 transition-all shadow-lg shadow-electric-500/25"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-slate-500 mt-4">
                  Send your resume to {company.email}
                </p>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
