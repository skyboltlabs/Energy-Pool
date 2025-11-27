
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Warehouse, Droplets, Hammer, Star, Users, Calendar, PenTool, Truck, Wrench, Clock, Zap, Building2, HardHat, PaintBucket, Pipette, Scissors } from 'lucide-react';
import { SEO } from '../components/SEO';

const clientList = [
  "Delta Beverages", 
  "Olivine Industries", 
  "Turnall Holdings", 
  "Surface Wilmar",
  "Cresta Hotels", 
  "OK Mart", 
  "Bathroom Boutique", 
  "Africa Steel",
  "Cargill", 
  "Precision Grinders", 
  "Iron Sky", 
  "FSI", 
  "Botswana Meat Commission", 
  "Hunyani Paper", 
  "Grid Transmission",
  "Classecon"
];

export const Home: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Energy Pool Investments",
    "url": "https://energypool.co.zw",
    "logo": "https://energypool.co.zw/logo.png",
    "sameAs": [
      "https://facebook.com/energypool",
      "https://instagram.com/energypool"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+263-773-768-592",
      "contactType": "sales",
      "areaServed": "ZW",
      "availableLanguage": "English"
    },
    "description": "Leading construction and maintenance specialists in Zimbabwe offering waterproofing, epoxy flooring, painting, and plumbing services."
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Construction, Waterproofing & Maintenance Experts"
        description="Energy Pool is Zimbabwe's premier contractor for torch-on waterproofing, industrial epoxy flooring, painting, and general building maintenance. 23+ years experience."
        keywords={["General Contractor Zimbabwe", "Building Maintenance", "Industrial Flooring", "Waterproofing Specialists"]}
        schema={homeSchema}
      />

      {/* Hero Section with Ken Burns Effect */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd" 
            alt="Energy Pool Team at Work" 
            className="w-full h-full object-cover"
            // Eager load hero image for LCP
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-teal-500"></div>
              <span className="text-teal-400 font-bold tracking-[0.2em] uppercase text-sm">Since 2000</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.95] mb-8 drop-shadow-lg">
              Expert <br/>
              Building Construction <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">& Maintenance.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Specializing in Building Construction, Torch-on systems, Epoxy Flooring, Painting, Plumbing, and comprehensive industrial maintenance solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/services" 
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-teal-50 rounded-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]"
              >
                Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-teal-500/50 bg-teal-900/30 backdrop-blur-sm hover:bg-teal-900/50 hover:border-teal-400 rounded-sm transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-900 py-12 border-y border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number="23+" label="Years of Excellence" icon={<Calendar className="w-5 h-5 text-teal-400" />} />
            <StatItem number="500+" label="Projects Delivered" icon={<Building2 className="w-5 h-5 text-teal-400" />} />
            <StatItem number="100%" label="Safety Compliance" icon={<Shield className="w-5 h-5 text-teal-400" />} />
            <StatItem number="50+" label="Skilled Tradesmen" icon={<Users className="w-5 h-5 text-teal-400" />} />
          </div>
        </div>
      </section>

      {/* Intro / Mission Snippet */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                Specialized Construction & Maintenance
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">
                Energy Pool is Zimbabwe's premier contractor for building construction and specialized maintenance. We don't just build; we protect, seal, coat, and secure your assets. From new builds to torch-on roof waterproofing, industrial epoxy flooring and high-security razor wire installations, we deliver precision craftsmanship.
              </p>
              <div className="bg-slate-50 p-6 border-l-4 border-teal-500 mb-8">
                <p className="italic text-slate-700 font-serif text-lg">
                  "Our mission is to provide efficient solutions to our customers' challenges through flexibility and quick response."
                </p>
              </div>
              
              <Link to="/about" className="group text-teal-800 font-bold inline-flex items-center text-lg">
                <span className="border-b-2 border-teal-200 group-hover:border-teal-600 transition-colors">Our Full Story</span> 
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1589109807644-924edf14ee09" 
                  alt="Industrial Flooring" 
                  className="w-full h-auto object-cover rounded shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-slate-100 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-3">The Energy Pool Standard</h2>
               <h3 className="text-4xl font-serif font-bold text-white">Why Partner With Us?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <AdvantageCard icon={<Clock className="w-10 h-10" />} title="Quick Response" desc="We minimize downtime with our rapid response teams for leaks and maintenance emergencies." />
               <AdvantageCard icon={<CheckCircle2 className="w-10 h-10" />} title="Quality Materials" desc="We use only industrial-grade torch-on membranes, epoxy resins, and durable coatings." />
               <AdvantageCard icon={<Shield className="w-10 h-10" />} title="Guaranteed Work" desc="We offer comprehensive warranties on our waterproofing and flooring installations." />
            </div>
         </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Workflow</h2>
                  <h3 className="text-4xl font-serif font-bold text-slate-900">Expert Execution</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <ProcessStep icon={<PenTool className="w-8 h-8" />} number="01" title="Inspection" desc="We assess the damage, leaks, or site requirements in detail." />
                  <ProcessStep icon={<Wrench className="w-8 h-8" />} number="02" title="Preparation" desc="Surface cleaning, priming, and crack repair to ensure adhesion." />
                  <ProcessStep icon={<PaintBucket className="w-8 h-8" />} number="03" title="Application" desc="Professional installation of membranes, coatings, or fixtures." />
                  <ProcessStep icon={<CheckCircle2 className="w-8 h-8" />} number="04" title="Testing" desc="Flood tests for roofs and quality checks for all finishes." />
              </div>
          </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">What We Do</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Specialized Trade Services</h3>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-slate-600 hover:text-teal-600 font-bold transition-colors">
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <ServiceCard 
              icon={<Building2 className="w-10 h-10" />}
              title="Building Construction"
              description="Complete building services from foundation to roof, including new structures and major renovations."
              image="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/brick_house.jpg"
              link="/services"
            />
            <ServiceCard 
              icon={<Droplets className="w-10 h-10" />}
              title="Waterproofing & Guttering"
              description="Industrial torch-on systems, roof shingle repairs, and guttering installation to keep your property dry."
              image="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/roof_roller.jpg"
              link="/waterproofing"
              highlight
            />
            <ServiceCard 
              icon={<PaintBucket className="w-10 h-10" />}
              title="Painting & Epoxy"
              description="High-traffic epoxy flooring and premium interior/exterior painting for commercial and industrial facilities."
              image="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/epoxy_floor.jpg"
              link="/services"
            />
             <ServiceCard 
              icon={<Wrench className="w-10 h-10" />}
              title="General Maintenance"
              description="Plumbing, ceilings, razor wire security, and comprehensive facility repairs."
              image="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/ceiling_work.jpg"
              link="/services"
              
            />
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-teal-600 font-bold">
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Construction in Action - Real Project Images */}
      <section className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-3">On Site</h2>
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Specialists At Work</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/roof_torch.jpg" title="Torch-on Waterproofing" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/gutter_repair.jpg" title="Gutter Installation" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/scaffold_painting.jpg" title="Industrial Painting" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/epoxy_floor.jpg" title="Epoxy Flooring" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/ceiling_work.jpg" title="Ceiling Installation" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/tiled_roof.jpg" title="Roof Maintenance" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/roof_roller.jpg" title="Bitumen Priming" />
            <ActionImage src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/brick_house.jpg" title="General Construction" />
        </div>
      </section>

      {/* Client Trust Bar (Animated) */}
      <section className="py-20 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="text-center text-slate-400 font-medium uppercase tracking-widest text-xs">Trusted by major brands in Zimbabwe</p>
        </div>
        
        <div className="flex relative overflow-hidden">
          {/* Gradient Masks to fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <motion.div 
            className="flex gap-20 items-center whitespace-nowrap min-w-full px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 
            }}
          >
            {[...clientList, ...clientList].map((client, index) => (
               <div key={index} className="text-2xl md:text-3xl font-serif font-bold text-slate-300 hover:text-teal-800 transition-colors duration-500 cursor-default select-none">
                  {client}
               </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            <img src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/tiled_roof.jpg" alt="Roof Finish" className="w-full h-full object-cover opacity-20" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Need Expert Maintenance?</h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light">
            From fixing stubborn roof leaks to installing secure epoxy floors, Energy Pool provides the specialist touch your property needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-teal-600 text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-teal-500 transition-colors shadow-2xl hover:shadow-teal-500/20"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

const StatItem: React.FC<{ number: string, label: string, icon: React.ReactNode }> = ({ number, label, icon }) => (
  <div className="text-center p-4">
    <div className="flex justify-center mb-3">{icon}</div>
    <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{number}</div>
    <div className="text-teal-400 text-xs uppercase tracking-widest">{label}</div>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, link: string, highlight?: boolean, image: string }> = ({ icon, title, description, link, highlight, image }) => (
  <Link to={link} className="group relative block h-full overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
    </div>
    <div className="p-8 relative">
      <div className={`absolute -top-8 left-8 p-4 rounded shadow-lg ${highlight ? 'bg-teal-600 text-white' : 'bg-white text-teal-600'}`}>
        {icon}
      </div>
      <h4 className="mt-6 text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{title}</h4>
      <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{description}</p>
      <div className="flex items-center text-sm font-bold text-teal-600 group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  </Link>
);

const ProcessStep: React.FC<{ icon: React.ReactNode, number: string, title: string, desc: string }> = ({ icon, number, title, desc }) => (
    <div className="text-center p-6 hover:-translate-y-2 transition-transform duration-300">
        <div className="relative inline-block mb-6">
            <div className="text-teal-600 bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center shadow-inner">
                {icon}
            </div>
            <div className="absolute -top-2 -right-2 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                {number}
            </div>
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
        <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </div>
);

const AdvantageCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
     <div className="text-teal-400 mb-6">{icon}</div>
     <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
     <p className="text-slate-300 leading-relaxed">{desc}</p>
  </div>
);

const ActionImage: React.FC<{ src: string, title: string }> = ({ src, title }) => (
    <div className="group relative h-64 overflow-hidden">
        <img 
            src={src} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
            loading="lazy"
        />
        <div className="absolute inset-0 bg-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="block text-white font-bold text-lg uppercase tracking-wider border-b-2 border-teal-400 pb-1 mb-2">{title}</span>
            </div>
        </div>
    </div>
);
