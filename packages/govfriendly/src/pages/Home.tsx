import { Link } from 'react-router-dom';
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
  ChevronRight,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { company, services, products, verticals, stats } from '@shared/data/company';

const serviceIcons: Record<string, React.ReactNode> = {
  ecm: <Database className="w-8 h-8" aria-hidden="true" />,
  bpa: <Workflow className="w-8 h-8" aria-hidden="true" />,
  capture: <ScanLine className="w-8 h-8" aria-hidden="true" />,
  migration: <ArrowLeftRight className="w-8 h-8" aria-hidden="true" />,
  integration: <Plug className="w-8 h-8" aria-hidden="true" />,
  ai: <Brain className="w-8 h-8" aria-hidden="true" />,
};

const verticalIcons: Record<string, React.ReactNode> = {
  landmark: <Landmark className="w-10 h-10" aria-hidden="true" />,
  building: <Building2 className="w-10 h-10" aria-hidden="true" />,
  'heart-pulse': <HeartPulse className="w-10 h-10" aria-hidden="true" />,
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-24" aria-label="Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-gov-blue">
              <Shield className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Trusted Partner Since {company.founded}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gov-navy leading-tight">
              Trusted Enterprise Content Management Since&nbsp;1982
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gov-gray-dark leading-relaxed max-w-2xl">
              {company.yearsInBusiness} years of proven solutions for government agencies,
              financial institutions, and healthcare organizations. We solve complex content
              challenges with technology that works.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">
                Our Services
                <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gov-gray py-12" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-2">
                <p className="text-3xl sm:text-4xl font-bold text-gov-navy font-heading">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gov-gray-dark">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-gov-navy"
            >
              Centers of Excellence
            </h2>
            <p className="mt-3 text-lg text-gov-gray-dark max-w-2xl mx-auto">
              Six specialized practices built on decades of real-world enterprise deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/services"
                className="group block bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md focus-visible:shadow-md"
              >
                <div className="text-gov-blue mb-4">
                  {serviceIcons[service.id]}
                </div>
                <h3 className="font-heading font-semibold text-lg text-gov-navy group-hover:text-gov-blue transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-gov-gray-dark leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gov-blue group-hover:underline">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-20 bg-gov-gray" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="products-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-gov-navy"
            >
              Our Products
            </h2>
            <p className="mt-3 text-lg text-gov-gray-dark max-w-2xl mx-auto">
              Purpose-built software we develop and own. Not off-the-shelf. Not vaporware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to="/products"
                className={`group block rounded-lg p-6 transition-shadow hover:shadow-md focus-visible:shadow-md ${
                  product.flagship
                    ? 'bg-gov-navy text-white border-2 border-gov-navy'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {product.flagship && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-yellow-300 mb-2">
                    Flagship Product
                  </span>
                )}
                <h3
                  className={`font-heading font-bold text-xl ${
                    product.flagship ? 'text-white' : 'text-gov-navy'
                  }`}
                >
                  {product.name}
                </h3>
                <p className={`text-sm font-medium mt-1 ${product.flagship ? 'text-gray-300' : 'text-gov-blue'}`}>
                  {product.tagline}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    product.flagship ? 'text-gray-200' : 'text-gov-gray-dark'
                  }`}
                >
                  {product.description}
                </p>
                <span
                  className={`mt-4 inline-flex items-center text-sm font-medium group-hover:underline ${
                    product.flagship ? 'text-white' : 'text-gov-blue'
                  }`}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="verticals-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="verticals-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-gov-navy"
            >
              Industries We Serve
            </h2>
            <p className="mt-3 text-lg text-gov-gray-dark max-w-2xl mx-auto">
              Deep domain expertise in the sectors where content management matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.name}
                className="bg-gov-gray rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gov-navy/10 text-gov-navy mb-4">
                  {verticalIcons[vertical.icon]}
                </div>
                <h3 className="font-heading font-semibold text-lg text-gov-navy">
                  {vertical.name}
                </h3>
                <p className="mt-2 text-sm text-gov-gray-dark leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gov-navy py-16 sm:py-20" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Partner with SYSCOM
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need to modernize legacy systems, automate document workflows, or
            migrate millions of records, we have the tools and the track record.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-gov-navy transition-colors"
            >
              About SYSCOM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
