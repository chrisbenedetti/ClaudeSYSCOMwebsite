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
  ArrowRight,
} from 'lucide-react';
import {
  company,
  services,
  products,
  verticals,
  stats,
} from '@shared/data/company';

const serviceIcons: Record<string, React.ReactNode> = {
  ecm: <Database size={24} />,
  bpa: <Workflow size={24} />,
  capture: <ScanLine size={24} />,
  migration: <ArrowLeftRight size={24} />,
  integration: <Plug size={24} />,
  ai: <Brain size={24} />,
};

const verticalIcons: Record<string, React.ReactNode> = {
  landmark: <Landmark size={28} />,
  building: <Building2 size={28} />,
  'heart-pulse': <HeartPulse size={28} />,
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,147,94,0.04)_0%,_transparent_70%)]" />
        <div className="relative text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-100 leading-[0.95] tracking-tight animate-fade-in">
            Enterprise Content.
            <br />
            <span className="text-gradient-copper">Perfected.</span>
          </h1>
          <p className="mt-8 text-cream-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed animate-slide-up">
            Four decades of precision. Proprietary technology.
            <br className="hidden sm:block" />
            Quietly solving the hardest problems in content management.
          </p>
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-copper-500 border border-copper-500/30 px-8 py-3.5 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500 group"
            >
              Discover Our Approach
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center ${
                  i < stats.length - 1
                    ? 'md:border-r md:border-dark-700/30'
                    : ''
                }`}
              >
                <p className="font-heading text-4xl md:text-5xl text-cream-100">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Centers of Excellence */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-cream-100">
              Centers of Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/services"
                className="group bg-dark-800/50 border border-dark-700/30 p-8 hover:border-copper-500/20 transition-all duration-500"
              >
                <div className="text-copper-500/70 mb-5 group-hover:text-copper-500 transition-colors duration-500">
                  {serviceIcons[service.id]}
                </div>
                <h3 className="font-heading text-xl text-cream-100 mb-3">
                  {service.name}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Our Products
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-cream-100">
              Built, Not Bought
            </h2>
          </div>

          {/* ASM - Flagship Feature */}
          <div className="mb-16 border border-dark-700/30 p-8 md:p-14">
            <div className="md:flex items-start gap-12">
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-3">
                  Flagship Product
                </p>
                <h3 className="font-heading text-3xl md:text-4xl text-cream-100 mb-2">
                  {products[0].name}
                </h3>
                <p className="font-heading text-lg text-cream-300 italic mb-6">
                  {products[0].tagline}
                </p>
                <p className="text-cream-400 text-sm leading-relaxed mb-8">
                  {products[0].description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-copper-500 hover:text-copper-400 transition-colors duration-300 group"
                >
                  Explore ASM
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="flex-1 mt-8 md:mt-0">
                <div className="grid grid-cols-1 gap-3">
                  {products[0].features.slice(0, 4).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-cream-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Products */}
          <div className="grid md:grid-cols-2 gap-6">
            {products.slice(1).map((product) => (
              <Link
                key={product.id}
                to="/products"
                className="group border border-dark-700/30 p-8 hover:border-copper-500/20 transition-all duration-500"
              >
                <h3 className="font-heading text-2xl text-cream-100 mb-1">
                  {product.name}
                </h3>
                <p className="font-heading text-sm text-cream-300 italic mb-4">
                  {product.tagline}
                </p>
                <p className="text-cream-400 text-sm leading-relaxed">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Industries We Serve
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-cream-100">
              Deep Vertical Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {verticals.map((vertical) => (
              <div
                key={vertical.name}
                className="bg-dark-800/30 border border-dark-700/20 p-8 text-center"
              >
                <div className="text-copper-500/60 flex justify-center mb-5">
                  {verticalIcons[vertical.icon]}
                </div>
                <h3 className="font-heading text-lg text-cream-100 mb-3">
                  {vertical.name}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-cream-100 mb-6">
            Begin a Conversation
          </h2>
          <p className="text-cream-400 text-base mb-10 max-w-md mx-auto">
            {company.yearsInBusiness} years of solving enterprise content
            challenges. Let us solve yours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-copper-500 border border-copper-500/30 px-8 py-3.5 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500 group"
          >
            Get in Touch
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
