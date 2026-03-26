import { User } from 'lucide-react';
import { company, leadership } from '@shared/data/company';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Since 1982
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-cream-100 animate-slide-up">
            Our Story
          </h1>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-cream-300 text-base md:text-lg leading-relaxed">
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
              Our proprietary products -- AnySource Migrator, AIS Bridge, and
              IBIG -- exist because we saw problems that nobody else was solving
              and built the solutions ourselves.
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
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-t border-b border-copper-500/20 py-12 md:py-16">
            <blockquote className="font-heading text-2xl md:text-4xl text-cream-100 italic leading-snug">
              &ldquo;{company.tagline}&rdquo;
            </blockquote>
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mt-6">
              Our Guiding Principle
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Detail */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-cream-300 text-base md:text-lg leading-relaxed">
            We know that the newest, latest technology is not always the best
            solution, but it&rsquo;s sometimes the only solution, and we know the
            difference. That discernment -- earned over four decades of hands-on
            implementation -- is what sets SYSCOM apart. We solve problems with
            the right tool, not the trendy one.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Leadership
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-cream-100">
              The People Behind SYSCOM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-dark-800/50 border border-dark-700/30 p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-700/50 border border-dark-600/30 flex items-center justify-center">
                  <User size={28} className="text-copper-500/60" />
                </div>
                <h3 className="font-heading text-xl text-cream-100">
                  {person.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mt-1 mb-4">
                  {person.title}
                </p>
                <p className="text-cream-400 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-cream-100">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                className="border border-dark-700/30 p-8"
              >
                <h3 className="font-heading text-xl text-cream-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed">
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
