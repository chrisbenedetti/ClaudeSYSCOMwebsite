import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-gov-navy font-heading font-bold text-xl hover:text-gov-blue transition-colors"
            aria-label="SYSCOM, Inc. - Home"
            onClick={closeMenu}
          >
            <Shield className="w-7 h-7" aria-hidden="true" />
            <span>SYSCOM</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? 'text-gov-navy border-b-2 border-gov-navy'
                      : 'text-gov-gray-dark hover:text-gov-navy hover:bg-gov-gray'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-3 btn-primary text-sm !py-2 !px-4"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded text-gov-navy hover:bg-gov-gray transition-colors"
            onClick={toggleMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 bg-white"
          role="menu"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 rounded text-base font-medium transition-colors ${
                    isActive
                      ? 'text-gov-navy bg-gov-gray font-semibold'
                      : 'text-gov-gray-dark hover:text-gov-navy hover:bg-gov-gray'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="block mt-2 btn-primary text-center text-sm"
              onClick={closeMenu}
              role="menuitem"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
