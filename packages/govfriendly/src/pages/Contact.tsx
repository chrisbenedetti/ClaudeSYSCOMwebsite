import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { company, services } from '@shared/data/company';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder: form data would be sent to backend
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gov-gray py-16 sm:py-20" aria-label="Contact hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gov-navy">
            Contact SYSCOM
          </h1>
          <p className="mt-4 text-lg text-gov-gray-dark max-w-3xl leading-relaxed">
            Tell us about your enterprise content challenges. We'll respond within one
            business day with an honest assessment and a clear path forward.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2
                id="contact-form-heading"
                className="font-heading text-2xl font-bold text-gov-navy mb-6"
              >
                Send Us a Message
              </h2>

              {submitted ? (
                <div
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                  role="alert"
                >
                  <CheckCircle
                    className="w-12 h-12 text-green-700 mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-semibold text-xl text-gov-navy">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-gov-gray-dark">
                    Thank you for reaching out. Our team will respond within one business
                    day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-gov-gray-dark mb-1"
                      >
                        Full Name <span className="text-gov-red" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gov-gray-dark placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-gov-blue"
                        placeholder="Jane Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-gov-gray-dark mb-1"
                      >
                        Email Address <span className="text-gov-red" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gov-gray-dark placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-gov-blue"
                        placeholder="jane@agency.gov"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-sm font-medium text-gov-gray-dark mb-1"
                      >
                        Organization
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gov-gray-dark placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-gov-blue"
                        placeholder="Your organization"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-gov-gray-dark mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gov-gray-dark placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-gov-blue"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-medium text-gov-gray-dark mb-1"
                    >
                      Service Interest
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gov-gray-dark bg-white focus-visible:outline-2 focus-visible:outline-gov-blue"
                    >
                      <option value="">Select a service area (optional)</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                      <option value="products">Products (ASM, AIS Bridge, IBIG)</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gov-gray-dark mb-1"
                    >
                      Message <span className="text-gov-red" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gov-gray-dark placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-gov-blue resize-y"
                      placeholder="Describe your project or questions..."
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn-primary">
                      <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                      Send Message
                    </button>
                  </div>

                  <p className="text-xs text-gray-500">
                    Fields marked with <span className="text-gov-red">*</span> are
                    required. We will not share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gov-navy mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-gov-blue mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gov-navy text-sm">Office Address</p>
                    <p className="text-sm text-gov-gray-dark mt-1">
                      {company.address.street}
                      <br />
                      {company.address.city}, {company.address.state}{' '}
                      {company.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 text-gov-blue mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gov-navy text-sm">Phone</p>
                    <a
                      href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm text-gov-blue hover:underline"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 text-gov-blue mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-gov-navy text-sm">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm text-gov-blue hover:underline"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gov-gray rounded-lg border border-gray-200 p-6 text-center">
                <MapPin
                  className="w-10 h-10 text-gov-navy/30 mx-auto mb-3"
                  aria-hidden="true"
                />
                <p className="font-heading font-semibold text-gov-navy text-sm">
                  Baltimore Inner Harbor
                </p>
                <p className="text-xs text-gov-gray-dark mt-1">
                  400 East Pratt Street, Suite 600
                  <br />
                  Baltimore, Maryland 21202
                </p>
              </div>

              {/* Hours */}
              <div className="mt-6 bg-gov-gray rounded-lg p-4">
                <p className="font-medium text-gov-navy text-sm">Business Hours</p>
                <p className="text-sm text-gov-gray-dark mt-1">
                  Monday - Friday: 8:30 AM - 5:30 PM ET
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
