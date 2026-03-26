import { User } from 'lucide-react';
import { company, leadership } from '@shared/data/company';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Since 1982
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream-100 animate-slide-up font-light">
            Our Story
          </h1>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-cream-300 text-base md:text-lg leading-relaxed font-light">
            <p>
              SYSCOM was founded in 1982 in Baltimore, Maryland, with a clear
              conviction: that enterprise content management is too critical to
              leave to generic solutions. For over {company.yearsInBusiness}{' '}
              years, we have built, deployed, and maintained the systems that
              organizations depend on to manage their most important documents
              and data.
            </p>
            <p>
              We are not a body shop. We build and own our intellectual property.
              Our proprietary products -- AnySource Migrator, AIS Bridge, IBIG,
              and Content Services -- exist because we saw problems that nobody
              else was solving and built the solutions ourselves.
            </p>
            <p>
              Our clients are government agencies processing millions of citizen
              documents, financial institutions under strict regulatory
              requirements, and healthcare organizations managing complex claims
              workflows. They choose SYSCOM because we deliver, and because we
              stay.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Pull Quote */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-t border-b border-copper-500/15 py-14 md:py-20">
            <blockquote className="font-heading text-3xl md:text-5xl text-cream-100 italic leading-tight font-light">
              &ldquo;{company.tagline}&rdquo;
            </blockquote>
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mt-8">
              Our Guiding Principle
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Detail */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-cream-300 text-base md:text-lg leading-relaxed font-light">
            We know that the newest, latest technology is not always the best
            solution, but it&rsquo;s sometimes the only solution, and we know the
            difference. That discernment -- earned over four decades of hands-on
            implementation -- is what sets SYSCOM apart. We solve problems with
            the right tool, not the trendy one.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Leadership
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-cream-100 font-light">
              The People Behind SYSCOM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="glass-card rounded-lg p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-700/50 border border-white/[0.06] flex items-center justify-center">
                  <User size={28} className="text-copper-500/50" />
                </div>
                <h3 className="font-heading text-xl text-cream-100 font-normal">
                  {person.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mt-1 mb-5">
                  {person.title}
                </p>
                <p className="text-cream-400 text-sm leading-relaxed font-light">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-cream-100 font-light">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Ownership',
                text: 'We build and own our intellectual property. Every product we ship, every solution we architect -- it belongs to us and to you.',
              },
              {
                title: 'Longevity',
                text: 'Over 70% of our team has been with SYSCOM for five years or more. We do not churn through talent. We invest in expertise.',
              },
              {
                title: 'Precision',
                text: 'Enterprise content is mission-critical. We approach every engagement with the rigor and attention it demands. No shortcuts.',
              },
              {
                title: 'Candor',
                text: 'We tell clients what they need to hear, not what they want to hear. That honesty has kept relationships strong for decades.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-lg p-8"
              >
                <h3 className="font-heading text-xl text-cream-100 mb-3 font-normal">
                  {value.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed font-light">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
