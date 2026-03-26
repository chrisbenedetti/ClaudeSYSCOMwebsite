import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@shared/data/company';

export default function Footer() {
  return (
    <footer className="bg-gov-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6" aria-hidden="true" />
              <span className="font-heading font-bold text-lg">SYSCOM</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {company.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Serving government and enterprise clients since {company.founded}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Enterprise Content Management',
                'Business Process Automation',
                'Enterprise Capture',
                'Content Migration',
                'Platform Integration',
                'AI & Intelligent Automation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 text-sm hover:text-white underline-offset-2 hover:underline transition-colors focus-visible:underline"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Products</h3>
            <ul className="space-y-2">
              {['AnySource Migrator', 'AIS Bridge', 'IBIG'].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-gray-300 text-sm hover:text-white underline-offset-2 hover:underline transition-colors focus-visible:underline"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white underline-offset-2 hover:underline transition-colors focus-visible:underline"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white underline-offset-2 hover:underline transition-colors focus-visible:underline"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {company.name} All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="hover:text-white underline-offset-2 hover:underline transition-colors focus-visible:underline"
            >
              Accessibility Statement
            </Link>
            <Link
              to="/contact"
              className="hover:text-white underline-offset-2 hover:underline transition-colors focus-visible:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
