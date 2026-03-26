import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { company } from '@shared/data/company';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-dark-800 border border-white/[0.06] text-cream-100 placeholder-cream-400/25 text-sm px-5 py-3.5 rounded-lg focus:outline-none focus:border-copper-500/40 transition-colors duration-500 font-light';

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Get in Touch
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream-100 animate-slide-up font-light">
            Let&rsquo;s Talk
          </h1>
          <p
            className="mt-8 text-cream-400 text-base md:text-lg max-w-md mx-auto leading-relaxed font-light animate-slide-up"
            style={{ animationDelay: '150ms' }}
          >
            Whether you have a project in mind or simply want to explore what is
            possible -- we are here.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-lg p-14 text-center">
                  <h3 className="font-heading text-3xl text-cream-100 mb-4 font-light">
                    Thank You
                  </h3>
                  <p className="text-cream-400 text-sm font-light">
                    We have received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-2.5"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-2.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-2.5"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Organization"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-2.5"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-2.5"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Select an area</option>
                      <option value="ecm">Enterprise Content Management</option>
                      <option value="bpa">Business Process Automation</option>
                      <option value="capture">Enterprise Capture</option>
                      <option value="migration">Content Migration</option>
                      <option value="ai">AI & Intelligent Automation</option>
                      <option value="staffing">Contract Staffing</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-2.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-500 border border-copper-500/30 px-10 py-4 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500 group"
                  >
                    Send Inquiry
                    <Send
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="space-y-10 md:pt-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={16} className="text-copper-500/50" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-cream-300">
                      Office
                    </h4>
                  </div>
                  <p className="text-cream-200 text-sm leading-relaxed pl-7 font-light">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state}{' '}
                    {company.address.zip}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={16} className="text-copper-500/50" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-cream-300">
                      Phone
                    </h4>
                  </div>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-cream-200 text-sm hover:text-copper-500 transition-colors duration-500 pl-7 font-light"
                  >
                    {company.phone}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={16} className="text-copper-500/50" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-cream-300">
                      Email
                    </h4>
                  </div>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-cream-200 text-sm hover:text-copper-500 transition-colors duration-500 pl-7 font-light"
                  >
                    {company.email}
                  </a>
                </div>

                <div className="pt-6 border-t border-white/[0.04]">
                  <p className="text-cream-400 text-sm leading-relaxed font-light">
                    Prefer a direct conversation? Call us during business hours,
                    Monday through Friday, 9am to 5pm Eastern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
