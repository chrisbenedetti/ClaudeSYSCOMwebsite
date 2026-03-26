import { Link } from 'react-router-dom';
import { company, services, products } from '@shared/data/company';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 border-t border-white/5">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center font-heading font-bold text-sm text-white">
                S
              </div>
              <span className="font-heading font-bold text-lg tracking-tight">
                SYSCOM<span className="text-electric-500">,</span>
                <span className="text-sm font-medium text-slate-400 ml-1">Inc.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {company.tagline}
            </p>
            <p className="text-slate-500 text-xs">
              Enterprise content management and intelligent automation since {company.founded}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to="/products"
                    className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                >
                  Content Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  {company.address.street}<br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric-500 shrink-0" />
                <a
                  href={`tel:${company.phone}`}
                  className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric-500 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {company.name} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link to="/careers" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
