import { Link } from 'react-router-dom';
import { company, services, products, verticals, stats } from '@shared/data/company';

const SERVICE_EMOJIS: Record<string, string> = {
  ecm: '\u{1F4C1}',
  bpa: '\u{2699}\u{FE0F}',
  capture: '\u{1F4F7}',
  migration: '\u{1F500}',
  ai: '\u{1F9E0}',
  staffing: '\u{1F465}',
};

const PRODUCT_COLORS: Record<string, { badge: string; border: string }> = {
  asm: { badge: 'bg-teal/10 text-teal', border: 'border-teal/30' },
  'ais-bridge': { badge: 'bg-terracotta/10 text-terracotta', border: 'border-terracotta/30' },
  ibig: { badge: 'bg-navy/10 text-navy', border: 'border-navy/30' },
  'content-services': { badge: 'bg-sage/10 text-sage', border: 'border-sage/30' },
};

const VERTICAL_EMOJIS: Record<string, string> = {
  landmark: '\u{1F3DB}\u{FE0F}',
  building: '\u{1F3E6}',
  factory: '\u{1F3ED}',
  'heart-pulse': '\u{1FA7A}',
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-20 sm:py-28" aria-label="Introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-teal uppercase tracking-wider mb-3">
              Trusted Partner Since {company.founded}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy leading-[1.15]">
              Trusted Enterprise Content Management
            </h1>
            <p className="mt-2 font-heading text-xl sm:text-2xl text-warm-brown italic">
              Since 1982
            </p>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl">
              {company.yearsInBusiness} years of proven solutions for government agencies,
              financial institutions, and healthcare organizations. We solve complex content
              challenges with technology that works.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Our Solutions
              </Link>
              <Link to="/contact" className="btn-teal">
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="services-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              Centers of Excellence
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              Six specialized practices built on decades of real-world enterprise deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group block bg-white border border-warm-border rounded-warm p-6 transition-all hover:shadow-md hover:border-warm-brown/20"
              >
                <span className="text-2xl" aria-hidden="true">
                  {SERVICE_EMOJIS[service.id] || '\u{1F4E6}'}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-lg text-navy group-hover:text-teal transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-teal group-hover:underline">
                  Learn more
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-warm-cream" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="products-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              Our Products
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              Purpose-built software we develop and own. Not off-the-shelf. Not vaporware.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const colors = PRODUCT_COLORS[product.id] || PRODUCT_COLORS.asm;
              return (
                <Link
                  key={product.id}
                  to={`/products#${product.id}`}
                  className={`group block bg-white border ${
                    product.flagship ? 'border-teal/40 ring-1 ring-teal/20' : 'border-warm-border'
                  } rounded-warm p-6 transition-all hover:shadow-md`}
                >
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${colors.badge}`}>
                    {product.badge}
                  </span>
                  <h3 className="mt-3 font-heading font-bold text-lg text-navy group-hover:text-teal transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-warm-brown">{product.tagline}</p>
                  <p className="mt-3 text-sm text-slate leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-teal group-hover:underline">
                    Learn More
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 bg-white" aria-labelledby="verticals-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="verticals-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-navy"
            >
              Industries We Serve
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              Deep domain expertise in the sectors where content management matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.name}
                className="bg-warm-light rounded-warm p-8 text-center border border-warm-border"
              >
                <span className="text-3xl" aria-hidden="true">
                  {VERTICAL_EMOJIS[vertical.icon] || '\u{1F3E2}'}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-lg text-navy">
                  {vertical.name}
                </h3>
                <p className="text-xs text-warm-brown font-medium">{vertical.subtitle}</p>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Partner with SYSCOM
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you need to modernize legacy systems, automate document workflows, or
            migrate millions of records, we have the tools and the track record.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors"
            >
              About SYSCOM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
