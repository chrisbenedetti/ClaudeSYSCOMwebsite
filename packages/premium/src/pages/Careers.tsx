import { ArrowRight } from 'lucide-react';
import { company } from '@shared/data/company';

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Careers at SYSCOM
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-cream-100 animate-slide-up">
            Join Us
          </h1>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-cream-300 text-base md:text-lg leading-relaxed">
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
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-4xl text-cream-100">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
              <div
                key={item.title}
                className="border border-dark-700/30 p-8"
              >
                <h3 className="font-heading text-lg text-cream-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-4xl text-cream-100 mb-4">
            Interested?
          </h2>
          <p className="text-cream-400 text-base mb-10 max-w-md mx-auto">
            Send us your resume and tell us what excites you about enterprise
            content. We read every application.
          </p>
          <a
            href={`mailto:${company.email}?subject=Career%20Inquiry`}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-copper-500 border border-copper-500/30 px-8 py-3.5 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500 group"
          >
            Apply Now
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </section>
    </>
  );
}
