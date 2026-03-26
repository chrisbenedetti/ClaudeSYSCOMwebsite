import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, User, Shield, MapPin } from 'lucide-react';
import { company } from '@shared/data/company';

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gov-gray py-16 sm:py-20" aria-label="Careers hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gov-navy">
            Careers at SYSCOM
          </h1>
          <p className="mt-4 text-lg text-gov-gray-dark max-w-3xl leading-relaxed">
            Build enterprise software that matters. Join a team where senior engineers stay
            for decades, your work ships to production, and you solve real problems for
            government and enterprise clients.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="culture-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                id="culture-heading"
                className="font-heading text-3xl font-bold text-gov-navy"
              >
                Why SYSCOM
              </h2>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                SYSCOM is not a revolving door. Our 70%+ employee retention rate over five
                years means the people you work with are experienced, invested, and here for
                the long haul. We've been doing this for {company.yearsInBusiness} years
                because we hire well and treat people right.
              </p>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                Based in Baltimore's Inner Harbor, we work on enterprise content management
                and automation for government agencies, financial institutions, and healthcare
                organizations. The problems are real, the scale is significant, and the
                impact is tangible.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gov-gray rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gov-navy font-heading">
                    {company.yearsInBusiness}+
                  </p>
                  <p className="text-xs text-gov-gray-dark mt-1">Years in Business</p>
                </div>
                <div className="bg-gov-gray rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gov-navy font-heading">70%+</p>
                  <p className="text-xs text-gov-gray-dark mt-1">5-Year Retention</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-xl text-gov-navy mb-4">
                What We Value
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Deep Expertise',
                    desc: 'We hire specialists who know their platforms inside and out, not generalists who skim the surface.',
                  },
                  {
                    title: 'Ownership',
                    desc: 'You own your work from design through deployment. No handing off to another team.',
                  },
                  {
                    title: 'Longevity',
                    desc: 'We build long-term client relationships and long-term careers. Both matter.',
                  },
                  {
                    title: 'Honesty',
                    desc: 'We tell clients what they need to hear, not what they want to hear. Same goes internally.',
                  },
                ].map((value) => (
                  <li key={value.title} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-700 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-gov-navy text-sm">{value.title}</p>
                      <p className="text-sm text-gov-gray-dark mt-0.5">{value.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 bg-gov-gray" aria-labelledby="offer-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="offer-heading"
            className="font-heading text-3xl font-bold text-gov-navy text-center mb-12"
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" aria-hidden="true" />,
                title: 'Stability',
                desc: '40+ years in business. We are not a startup that might not be here next year.',
              },
              {
                icon: <User className="w-6 h-6" aria-hidden="true" />,
                title: 'Meaningful Work',
                desc: 'Build systems that process millions of documents for government agencies and financial institutions.',
              },
              {
                icon: <MapPin className="w-6 h-6" aria-hidden="true" />,
                title: 'Baltimore Location',
                desc: 'Downtown Inner Harbor office with easy access to transit. Flexible work arrangements available.',
              },
              {
                icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />,
                title: 'Benefits',
                desc: 'Competitive salary, health insurance, retirement plan, and professional development support.',
              },
              {
                icon: <Shield className="w-6 h-6" aria-hidden="true" />,
                title: 'Growth',
                desc: 'Work with AI, cloud platforms, and enterprise technologies. Learn from people who have been doing this for decades.',
              },
              {
                icon: <User className="w-6 h-6" aria-hidden="true" />,
                title: 'Team',
                desc: 'Small, focused teams where your contributions are visible and valued. No bureaucracy.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="text-gov-blue mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-base text-gov-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gov-gray-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-gov-navy" aria-label="Apply call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Interested in Joining Us?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We are always looking for talented people with enterprise content management,
            automation, or AI experience. Send us your resume and let's talk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${company.email}?subject=Career%20Inquiry`}
              className="btn-white"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-gov-navy transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
