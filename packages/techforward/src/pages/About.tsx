import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, leadership, services, stats } from '@shared/data/company';
import { User, ArrowRight } from 'lucide-react';

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

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              About {company.name}
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              {company.yearsInBusiness}+ years solving enterprise{' '}
              <span className="gradient-text">content challenges.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Founded in {company.founded} in {company.address.city}, {company.address.state},
              SYSCOM has grown from a small consultancy into a recognized leader in enterprise
              content management, business process automation, and intelligent document solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
                  The right technology at the right time.
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    That philosophy has guided SYSCOM for over four decades. We know that the
                    newest, latest technology is not always the best solution &mdash; but it's
                    sometimes the only solution. And we know the difference.
                  </p>
                  <p>
                    We are not a body shop. SYSCOM builds and owns the intellectual property
                    behind our products. Every solution we deploy is backed by engineers who
                    built it, understand it, and support it long-term.
                  </p>
                  <p>
                    Our clients &mdash; in government, financial services, and healthcare &mdash;
                    trust us with their most critical document workflows because we've earned
                    that trust over decades, one successful deployment at a time.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-navy-800/60 border border-white/5 p-8 space-y-8">
                <div>
                  <div className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-2">
                    Headquarters
                  </div>
                  <p className="text-slate-300">
                    {company.address.street}<br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-2">
                    Founded
                  </div>
                  <p className="text-slate-300">{company.founded}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-2">
                    Focus Areas
                  </div>
                  <p className="text-slate-300">
                    Enterprise Content Management, Business Process Automation,
                    AI & Intelligent Automation
                  </p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-2">
                    Key Verticals
                  </div>
                  <p className="text-slate-300">
                    Government, Financial Services, Health Insurance
                  </p>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-navy-800/20">
        <FadeSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Leadership */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Leadership
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              The team behind the technology
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              SYSCOM's leadership combines deep technical expertise with decades of
              client-facing experience in enterprise content management.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <FadeSection key={member.name}>
                <div className="rounded-xl bg-navy-800/60 border border-white/5 p-6 text-center card-hover hover:border-electric-500/20">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center mx-auto mb-5">
                    <User className="w-8 h-8 text-electric-400/70" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-electric-400 font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{member.bio}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
              Centers of Excellence
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Six specialized disciplines
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every engagement draws from our deep, focused expertise. Each Center of
              Excellence is staffed by practitioners who have spent their careers in that discipline.
            </p>
          </FadeSection>

          <FadeSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to="/services"
                  className="flex items-center gap-4 rounded-xl bg-navy-800/60 border border-white/5 hover:border-electric-500/20 p-5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0 group-hover:bg-electric-500/20 transition-colors">
                    <span className="text-electric-400 text-lg font-heading font-bold">
                      {service.shortName.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-sm group-hover:text-electric-400 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-xs text-slate-500 truncate">{service.shortName}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-electric-400 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Want to learn more?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              See how SYSCOM's {company.yearsInBusiness}+ years of expertise can solve
              your enterprise content challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-400 hover:to-teal-400 transition-all shadow-lg shadow-electric-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
