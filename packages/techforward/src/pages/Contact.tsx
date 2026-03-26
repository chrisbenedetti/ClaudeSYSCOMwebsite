import { useState, useEffect, useRef } from 'react';
import { company, services } from '@shared/data/company';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`section-fade ${className}`}>{children}</div>;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: form submission would be handled here
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-electric-400 uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Let's build{' '}
              <span className="gradient-text">something.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Whether you're planning a migration, modernizing workflows, or exploring
              what AI can do for your content operations &mdash; we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="rounded-2xl bg-navy-800/60 border border-electric-500/20 p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-electric-500/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-7 h-7 text-electric-400" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl mb-3">
                      Message received.
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                      Thanks for reaching out. A member of our team will be in touch within
                      one business day. In the meantime, feel free to call us at {company.phone}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-300 mb-1.5"
                        >
                          Name <span className="text-electric-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-300 mb-1.5"
                        >
                          Email <span className="text-electric-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30 transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-300 mb-1.5"
                        >
                          Company <span className="text-electric-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30 transition-all"
                          placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-300 mb-1.5"
                        >
                          Phone <span className="text-slate-500 text-xs">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30 transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30 transition-all appearance-none"
                      >
                        <option value="" className="bg-navy-800">
                          Select a service area...
                        </option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id} className="bg-navy-800">
                            {s.name}
                          </option>
                        ))}
                        <option value="products" className="bg-navy-800">
                          Products (ASM, AIS Bridge, IBIG)
                        </option>
                        <option value="other" className="bg-navy-800">
                          Other / General Inquiry
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Message <span className="text-electric-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/30 transition-all resize-none"
                        placeholder="Tell us about your project or challenge..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-teal-500 hover:from-electric-400 hover:to-teal-400 transition-all shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-2xl bg-navy-800/60 border border-white/5 p-6 space-y-6">
                  <h3 className="font-heading font-semibold text-lg">Get in touch</h3>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200 mb-0.5">Office</p>
                      <p className="text-sm text-slate-400">
                        {company.address.street}<br />
                        {company.address.city}, {company.address.state} {company.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200 mb-0.5">Phone</p>
                      <a
                        href={`tel:${company.phone}`}
                        className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200 mb-0.5">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-slate-400 hover:text-electric-400 transition-colors"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl bg-navy-800/60 border border-white/5 p-6 overflow-hidden">
                  <div className="rounded-xl bg-navy-900/80 border border-white/5 h-48 flex items-center justify-center relative">
                    <div className="absolute inset-0 gradient-mesh opacity-30" />
                    <div className="relative z-10 text-center">
                      <MapPin className="w-8 h-8 text-electric-400 mx-auto mb-2" />
                      <p className="text-sm font-heading font-semibold">Baltimore, MD</p>
                      <p className="text-xs text-slate-500 mt-1">Inner Harbor / Pratt Street</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  );
}
