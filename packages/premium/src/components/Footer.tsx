import { Link } from 'react-router-dom';
import { company } from '@shared/data/company';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-700/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-heading text-xl font-semibold text-cream-100 tracking-wide">
                SYSCOM<span className="text-copper-500">.</span>
              </span>
            </Link>
            <p className="mt-4 text-cream-400 text-sm leading-relaxed max-w-xs">
              {company.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-cream-300 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Products', path: '/products' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-400 text-sm hover:text-copper-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-cream-300 mb-6">
              Expertise
            </h4>
            <ul className="space-y-3">
              {[
                'Content Management',
                'Process Automation',
                'Enterprise Capture',
                'Content Migration',
                'Platform Integration',
                'AI & Automation',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-cream-400 text-sm hover:text-copper-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-cream-300 mb-6">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-cream-400">
              <li>{company.address.street}</li>
              <li>
                {company.address.city}, {company.address.state}{' '}
                {company.address.zip}
              </li>
              <li className="pt-2">
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-copper-500 transition-colors duration-300"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-copper-500 transition-colors duration-300"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-700/20">
          <p className="text-cream-400/50 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} {company.name} All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
