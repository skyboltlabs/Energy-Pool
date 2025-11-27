
import React from 'react';
import { Mail, Phone, MapPin, Clock, HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Energy Pool Investments",
    "image": "https://picsum.photos/seed/ep_social/1200/600",
    "telephone": "+263-773-768-592",
    "email": "obertmandigo10@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8278 Kirkman Gardens, Westlea",
      "addressLocality": "Harare",
      "addressRegion": "Harare",
      "addressCountry": "ZW"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -17.82, // Approx Harare coords, strictly illustrative
      "longitude": 31.05
    },
    "priceRange": "$$"
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us - Get a Quote"
        description="Contact Energy Pool Zimbabwe for a free quote on waterproofing, plumbing, painting, or construction. Call +263 773 768 592 or visit us in Westlea, Harare."
        keywords={["Contact Construction Company Harare", "Waterproofing Quote Zimbabwe", "Building Maintenance Phone Number"]}
        schema={contactSchema}
        type="business"
      />
      {/* Dark Hero Section for Navbar Visibility */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
             <img src="https://picsum.photos/seed/contact/1920/600" alt="Contact Us" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Contact Energy Pool</h1>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
                Ready to start your project? Get in touch for a comprehensive consultation or quote.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-10">
            <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Get In Touch</h3>
                
                <ContactItem 
                    icon={<MapPin className="w-6 h-6 text-white" />}
                    title="Our Headquarters"
                    content={<>8278 Kirkman Gardens, Westlea<br/>Harare, Zimbabwe</>}
                />
                
                <ContactItem 
                    icon={<Phone className="w-6 h-6 text-white" />}
                    title="Phone Lines"
                    content={
                        <div className="space-y-1">
                          <a href="tel:+263773768592" className="hover:text-teal-600 block transition-colors">+263 773 768 592 (Sales & Support)</a>
                          <a href="tel:+263773109447" className="hover:text-teal-600 block transition-colors">+263 773 109 447 (Office)</a>
                        </div>
                    }
                />
                
                <ContactItem 
                    icon={<Mail className="w-6 h-6 text-white" />}
                    title="Email Address"
                    content={
                        <>
                            obertmandigo10@gmail.com<br/>
                        </>
                    }
                />
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-teal-600 mr-3" />
                    <h4 className="text-xl font-bold text-slate-800">Operating Hours</h4>
                </div>
                <div className="space-y-3 text-slate-600">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-medium">Monday - Friday</span>
                        <span>08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-medium">Saturday</span>
                        <span>08:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span className="text-teal-600 font-bold">Closed</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="space-y-8">
             <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10"></div>
                
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Request a Quote</h3>
                <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we will get back to you within 24 hours.</p>
                
                <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="+263..." />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Service Required</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all cursor-pointer">
                            <option>Roof Waterproofing</option>
                            <option>Steel Structure Fabrication</option>
                            <option>General Construction</option>
                            <option>Renovations & Tiling</option>
                            <option>Plumbing & Ventilation</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Project Details</label>
                        <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your project requirements..."></textarea>
                    </div>
                    <button type="button" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-sm transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Send Message
                    </button>
                </form>
             </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <FAQItem 
                    question="Do you operate outside of Harare?"
                    answer="Yes, Energy Pool operates nationwide across Zimbabwe. We have successfully completed projects in Bulawayo, Mutare, Gweru, and other major centers."
                />
                <FAQItem 
                    question="What warranty do you offer on waterproofing?"
                    answer="We offer a comprehensive workmanship and material warranty on our torch-on waterproofing systems, typically ranging from 5 to 10 years depending on the specific product specification."
                />
                <FAQItem 
                    question="Are you registered with NSSA?"
                    answer="Absolutely. We are fully registered with NSSA and adhere to strict safety protocols. Our team undergoes regular safety induction and training."
                />
                <FAQItem 
                    question="Can you handle large industrial steel structures?"
                    answer="Yes, steel structures are our core expertise. We handle everything from design and fabrication to on-site erection for warehouses, factories, and commercial centers."
                />
            </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode }> = ({ icon, title, content }) => (
    <div className="flex items-start mb-8 group">
        <div className="bg-teal-600 p-3 rounded-lg mr-6 shadow-md group-hover:bg-teal-700 transition-colors">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
            <div className="text-slate-600 leading-relaxed">{content}</div>
        </div>
    </div>
);

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => (
    <div className="bg-white p-6 rounded-lg border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
        <div className="flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">{question}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    </div>
);
