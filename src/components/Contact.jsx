import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import Logo from './Logo';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Web Design',
    budget: '₹30k - ₹75k',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const budgetRanges = [
    "Under ₹25k",
    "₹25k - ₹50k",
    "₹50k - ₹1 Lakh",
    "₹1 Lakh+"
  ];

  const servicesList = [
    "Web Design",
    "Web Development",
    "Branding & Graphic Design",
    "Digital Marketing",
    "Social Media Management",
    "Reel & Video Editing",
    "Portfolio Design",
    "SEO Optimization"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatInquiryMessage = (data) => {
    return `🚀 *New Project Inquiry - Aryavik Technologies*
---------------------------------------
👤 *Name:* ${data.name || 'N/A'}
🏢 *Business:* ${data.businessName || 'N/A'}
📧 *Email:* ${data.email || 'N/A'}
📞 *Phone:* ${data.phone || 'N/A'}
🛠️ *Service Required:* ${data.service || 'N/A'}
💰 *Target Budget:* ${data.budget || 'N/A'}
📝 *Project Details:* ${data.details || 'None provided'}
---------------------------------------
Sent via Aryavik Technologies Website`;
  };

  const getWhatsappUrl = (phone, data) => {
    const text = formatInquiryMessage(data);
    return `https://api.whatsapp.com/send?phone=91${phone}&text=${encodeURIComponent(text)}`;
  };

  const getEmailUrl = (data) => {
    const text = formatInquiryMessage(data).replace(/\*/g, '');
    const subject = `New Project Request: ${data.service || 'Inquiry'} - ${data.name || 'Client'}`;
    return `mailto:info.aryavik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const waUrl = getWhatsappUrl('8140843303', formData);

    // 1. Direct Background Email Dispatch to info.aryavik@gmail.com
    try {
      await fetch("https://formsubmit.co/ajax/info.aryavik@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `🚀 New Project Request: ${formData.service || 'Inquiry'} - ${formData.name}`,
          _template: "table",
          _captcha: "false",
          "Client Name": formData.name,
          "Business / Organization": formData.businessName || "N/A",
          "Client Email": formData.email,
          "Client Phone": formData.phone,
          "Service Required": formData.service,
          "Target Budget": formData.budget,
          "Project Details": formData.details || "None provided"
        })
      });
    } catch (err) {
      console.warn("Email service dispatch notice:", err);
    }

    setLoading(false);
    setSubmitted(true);
    if (showToast) {
      showToast("Email dispatched to info.aryavik@gmail.com! Opening WhatsApp...");
    }
    window.open(waUrl, '_blank');
  };

  const whatsappNumber = "8140843303";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Aryavik%20Technologies,%20I'm%20${encodeURIComponent(formData.name || 'a client')}%20and%20interested%20in%20${encodeURIComponent(formData.service)}.`;

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider border border-orange-200">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Talk About <span className="text-orange-500">Your Project</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Fill out the form below or contact us directly on WhatsApp or Email. We usually respond within 2 hours.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/20 rounded-full blur-[80px]" />

              <div className="space-y-3 relative z-10">
                <Logo size="normal" showTagline={true} />
                <h3 className="text-xl font-extrabold text-white pt-2">Direct Contacts</h3>
                <p className="text-xs text-slate-400">Available Monday - Saturday, 9 AM - 8 PM IST</p>
              </div>

              <div className="space-y-4 relative z-10 text-sm">
                
                {/* Email */}
                <a 
                  href="mailto:info.aryavik@gmail.com" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Official Email</div>
                    <div className="font-bold text-white group-hover:text-orange-400 transition-colors">info.aryavik@gmail.com</div>
                  </div>
                </a>

                {/* Phone 1 */}
                <a 
                  href="tel:8140843303" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Primary Phone</div>
                    <div className="font-bold text-white group-hover:text-orange-400 transition-colors">+91 81408 43303</div>
                  </div>
                </a>

                {/* Phone 2 */}
                <a 
                  href="tel:9664709383" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Secondary Phone</div>
                    <div className="font-bold text-white group-hover:text-orange-400 transition-colors">+91 96647 09383</div>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/aryavik.tech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Official Instagram</div>
                    <div className="font-bold text-white group-hover:text-pink-400 transition-colors">@aryavik.tech</div>
                  </div>
                </a>

              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2 relative z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>

            </div>

            {/* SLA Trust Badge */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-500 shrink-0" />
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900">Guaranteed Response Time:</span> We review all project inquiries within 2 hours during business hours.
              </div>
            </div>

          </div>

          {/* Right Column: Project Requirement Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-lg">
              
              {submitted ? (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-slate-900">Project Inquiry Ready!</h3>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                      All your project requirements have been structured into a formatted message. Click below to send directly to our team via WhatsApp or Email:
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto shadow-2xs">
                    <div><span className="font-bold text-slate-900">Name:</span> {formData.name}</div>
                    {formData.businessName && <div><span className="font-bold text-slate-900">Business:</span> {formData.businessName}</div>}
                    <div><span className="font-bold text-slate-900">Email:</span> {formData.email}</div>
                    <div><span className="font-bold text-slate-900">Phone:</span> {formData.phone}</div>
                    <div><span className="font-bold text-slate-900">Service:</span> {formData.service}</div>
                    <div><span className="font-bold text-slate-900">Budget:</span> {formData.budget}</div>
                    {formData.details && <div><span className="font-bold text-slate-900">Details:</span> {formData.details}</div>}
                  </div>

                  {/* Direct Action Dispatch Buttons */}
                  <div className="pt-2 flex flex-col gap-3 max-w-md mx-auto">
                    <a
                      href={getWhatsappUrl('8140843303', formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 81408 43303)</span>
                    </a>

                    <a
                      href={getWhatsappUrl('9664709383', formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-600 shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 96647 09383)</span>
                    </a>

                    <a
                      href={getEmailUrl(formData)}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 shadow-xs transition-all"
                    >
                      <Mail className="w-4 h-4 text-orange-500" />
                      <span>Send via Email (info.aryavik@gmail.com)</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        service: 'Web Design',
                        budget: '₹30k - ₹75k',
                        details: ''
                      });
                    }}
                    className="mt-2 text-xs font-semibold text-slate-500 hover:text-slate-900 underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">Start Your Project</h3>
                    <p className="text-xs text-slate-500">Fill in your requirements for an immediate quote.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Business / Organization
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Ventures"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      {servicesList.map((svc, i) => (
                        <option key={i} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            formData.budget === b
                              ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-orange-400'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Details & Goals
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, goals, or timelines..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/25 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Project Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
