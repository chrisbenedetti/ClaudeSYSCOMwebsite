import { Link } from 'react-router-dom';
import { User, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { company, leadership, services, stats } from '@shared/data/company';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gov-gray py-16 sm:py-20" aria-label="About hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gov-navy">
            About SYSCOM, Inc.
          </h1>
          <p className="mt-4 text-lg text-gov-gray-dark max-w-3xl leading-relaxed">
            Since {company.founded}, SYSCOM has been solving enterprise content management
            challenges for organizations that can't afford to get it wrong. We build proven
            solutions, own our intellectual property, and stand behind every deployment.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                id="mission-heading"
                className="font-heading text-3xl font-bold text-gov-navy"
              >
                Our Philosophy
              </h2>
              <blockquote className="mt-6 border-l-4 border-gov-blue pl-6 text-xl text-gov-navy font-heading font-semibold italic leading-relaxed">
                "{company.tagline}"
              </blockquote>
              <p className="mt-6 text-gov-gray-dark leading-relaxed">
                We know that the newest technology is not always the best solution, but it's
                sometimes the only solution. We know the difference. That's the judgment that
                comes from {company.yearsInBusiness} years of hands-on enterprise deployments.
              </p>
              <p className="mt-4 text-gov-gray-dark leading-relaxed">
                SYSCOM is not a body shop. We build and own our products, develop deep
                expertise in every platform we support, and maintain long-term relationships
                with our clients. Our 70%+ employee retention rate over five years means the
                people who know your systems stay with us.
              </p>
            </div>

            <div className="bg-gov-gray rounded-lg p-8">
              <h3 className="font-heading font-semibold text-xl text-gov-navy mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {[
                  `${company.yearsInBusiness}+ years of continuous operation in ECM`,
                  'Proprietary migration technology (AnySource Migrator)',
                  'Deep IBM ecosystem expertise (CM8, FileNet, BAW)',
                  'We build and own our intellectual property',
                  'AI-forward strategy led by a dedicated CTO',
                  '70%+ employee retention over 5 years',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-700 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gov-gray-dark text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-gov-gray" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="font-heading text-3xl font-bold text-gov-navy text-center mb-12"
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Reliability',
                description:
                  'Our clients depend on us for mission-critical systems. We deliver on time, every time, and we stand behind our work with long-term support.',
              },
              {
                title: 'Integrity',
                description:
                  'We give honest assessments, recommend the right solution (not the most expensive one), and maintain transparency throughout every engagement.',
              },
              {
                title: 'Expertise',
                description:
                  'Every team member is a specialist, not a generalist. Our deep platform knowledge means faster deployments, fewer surprises, and better outcomes.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-gov-navy" aria-hidden="true" />
                  <h3 className="font-heading font-semibold text-lg text-gov-navy">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-gov-gray-dark leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leadership-heading"
            className="font-heading text-3xl font-bold text-gov-navy text-center mb-12"
          >
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="text-center bg-gov-gray rounded-lg p-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gov-navy text-white mb-4">
                  <User className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gov-navy">
                  {leader.name}
                </h3>
                <p className="text-gov-blue font-medium text-sm mt-1">
                  {leader.title}
                </p>
                <p className="mt-3 text-sm text-gov-gray-dark leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-16 sm:py-20 bg-gov-gray" aria-labelledby="coe-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="coe-heading"
            className="font-heading text-3xl font-bold text-gov-navy text-center mb-4"
          >
            Centers of Excellence
          </h2>
          <p className="text-lg text-gov-gray-dark text-center max-w-2xl mx-auto mb-12">
            Specialized practices backed by decades of real-world enterprise experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-5 border border-gray-200"
              >
                <h3 className="font-heading font-semibold text-base text-gov-navy">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm text-gov-gray-dark leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gov-navy" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-2">
                <p className="text-3xl sm:text-4xl font-bold text-white font-heading">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-gov-navy">
            Ready to Work with Us?
          </h2>
          <p className="mt-4 text-lg text-gov-gray-dark max-w-2xl mx-auto">
            Let us show you what {company.yearsInBusiness} years of enterprise content
            management expertise can do for your organization.
          </p>
          <Link to="/contact" className="mt-8 btn-primary inline-flex">
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
