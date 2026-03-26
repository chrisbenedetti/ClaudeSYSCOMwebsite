import { ArrowRight } from 'lucide-react';
import { company } from '@shared/data/company';

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Careers at SYSCOM
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream-100 animate-slide-up font-light">
            Join Us
          </h1>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-cream-300 text-base md:text-lg leading-relaxed font-light">
            <p>
              SYSCOM is not a revolving door. Over 70% of our team has been here
              for five years or more -- not because they are comfortable, but
              because the work is challenging, the people are exceptional, and the
              company gives them room to grow.
            </p>
            <p>
              We are a Baltimore-based firm with over {company.yearsInBusiness}{' '}
              years of history. Our size means you will have real ownership over
              your work. Our longevity means you will have the stability to build
              a career, not just fill a role.
            </p>
            <p>
              We work on hard problems -- migrating millions of documents,
              automating complex business processes, bringing AI to enterprise
              content management. If that sounds interesting, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-cream-100 font-light">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Meaningful Work',
                text: 'Enterprise-scale projects for government agencies, financial institutions, and healthcare organizations. Your work matters.',
              },
              {
                title: 'Technical Depth',
                text: 'IBM ecosystem, cloud platforms, AI, and our own proprietary products. You will work with technology that challenges you.',
              },
              {
                title: 'Stability',
                text: 'Over four decades of continuous operation. We are privately held, profitable, and growing. No layoff cycles.',
              },
              {
                title: 'Growth',
                text: 'Small enough to know everyone. Large enough to offer real career progression. We promote from within whenever possible.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-lg p-8">
                <h3 className="font-heading text-xl text-cream-100 mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream-100 mb-4 font-light">
            Interested?
          </h2>
          <p className="text-cream-400 text-base mb-12 max-w-md mx-auto font-light">
            Send us your resume and tell us what excites you about enterprise
            content. We read every application.
          </p>
          <a
            href={`mailto:${company.email}?subject=Career%20Inquiry`}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-500 border border-copper-500/25 px-10 py-4 hover:bg-copper-500/8 hover:border-copper-500/50 transition-all duration-700 group"
          >
            Apply Now
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-500"
            />
          </a>
        </div>
      </section>
    </>
  );
}
