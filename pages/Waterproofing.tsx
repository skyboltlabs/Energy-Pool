
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, CheckCircle2, ShieldAlert, Umbrella, Layers, Sun, PenTool, Check } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Waterproofing: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Roof Waterproofing & Torch-on Specialists"
        description="Expert roof waterproofing services in Zimbabwe. We use industrial torch-on bitumen membranes to fix roof leaks on concrete decks and flat roofs. 10-year warranty."
        keywords={["Roof Waterproofing Zimbabwe", "Torch-on Waterproofing", "Roof Leak Repair Harare", "Bitumen Waterproofing", "Concrete Deck Sealing"]}
      />
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/roof_torch.jpg" 
            alt="Waterproofing work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/60 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-200 border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
                <ShieldAlert className="w-4 h-4 mr-2" /> Expert Roof Protection
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Secure Your <br/> <span className="text-blue-400">Investment</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light border-l-4 border-blue-400 pl-6">
                Water damage is silent but destructive. Energy Pool utilizes industrial-grade torch-on systems to provide a fortress against the elements.
            </p>
            <div className="flex gap-4">
                <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-sm font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1">
                    Free Site Assessment
                </Link>
                <Link to="/projects" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-sm font-bold transition-all">
                    View Past Projects
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-3">Our Methodology</h2>
               <h3 className="text-4xl font-serif font-bold text-slate-900">The 4-Step Protection Process</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <ProcessStep 
                 number="01" 
                 title="Assessment" 
                 desc="Thorough inspection of roof condition, identifying leak origins and structural weaknesses."
                 icon={<PenTool className="w-6 h-6 text-blue-500" />}
               />
               <ProcessStep 
                 number="02" 
                 title="Preparation" 
                 desc="Cleaning, crack repair, and priming of the surface to ensure optimal adhesion."
                 icon={<Sun className="w-6 h-6 text-blue-500" />}
               />
               <ProcessStep 
                 number="03" 
                 title="Application" 
                 desc="Precision torch-on bitumen application or liquid membrane coating by skilled technicians."
                 icon={<Layers className="w-6 h-6 text-blue-500" />}
               />
               <ProcessStep 
                 number="04" 
                 title="Testing" 
                 desc="Rigorous quality control and flood testing to verify the seal integrity."
                 icon={<Check className="w-6 h-6 text-blue-500" />}
               />
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Comprehensive Waterproofing Solutions</h2>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        We don't just patch holes; we engineer solutions. Whether it's a flat concrete deck, an IBR steel roof, or a tiled residence, we have the specific product and expertise for the job.
                    </p>
                    <div className="space-y-6">
                        <ServiceItem 
                            icon={<Droplets />} 
                            title="Torch-on Systems" 
                            desc="The gold standard for flat roofs. A heat-fused bitumen layer that is durable and UV resistant."
                        />
                         <ServiceItem 
                            icon={<Umbrella />} 
                            title="Roof Maintenance" 
                            desc="Regular cleaning, coating, and minor repairs to extend the lifespan of your roof."
                        />
                         <ServiceItem 
                            icon={<Layers />} 
                            title="Guttering & Flashings" 
                            desc="Ensuring proper water drainage to prevent pooling and structural damage."
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/roof_prep.jpg" className="rounded-lg shadow-xl w-full h-full object-cover transform translate-y-8" alt="Torch on application" />
                        <img src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/balcony_work.jpg" className="rounded-lg shadow-xl w-full h-full object-cover" alt="Roof repair" />
                    </div>
                    <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-blue-200 rounded-lg"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      "Proven Track Record in Zimbabwe",
                      "High-Quality Bitumen & Acrylic Sealants",
                      "Trained & Safety-Certified Team",
                      "Comprehensive Warranty",
                      "Quick Response to Emergencies",
                      "Competitive Pricing"
                  ].map((item, i) => (
                      <div key={i} className="bg-white/10 p-6 rounded border border-white/10 flex items-center backdrop-blur-sm">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-4 flex-shrink-0" />
                          <span className="font-semibold text-blue-50">{item}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Call to action */}
      <div className="relative py-24 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
               <img src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/tiled_roof.jpg" alt="Rain" className="w-full h-full object-cover" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white z-10">
              <h2 className="text-4xl font-serif font-bold mb-6">Before the next rain, call Energy Pool.</h2>
              <p className="text-slate-300 mb-10 text-xl font-light">Don't wait for a leak to become a disaster.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-blue-500 text-white font-bold px-10 py-4 rounded hover:bg-blue-600 transition-colors">
                    Request Quote
                </Link>
                <a href="tel:+263773768592" className="bg-transparent border border-blue-500 text-blue-400 font-bold px-10 py-4 rounded hover:bg-blue-900/50 transition-colors">
                    Call Now
                </a>
              </div>
          </div>
      </div>
    </div>
  );
};

const ProcessStep: React.FC<{number: string, title: string, desc: string, icon: React.ReactNode}> = ({number, title, desc, icon}) => (
    <div className="relative p-6 border border-slate-100 rounded-lg hover:shadow-lg transition-shadow bg-white">
        <div className="text-5xl font-bold text-slate-100 absolute top-4 right-4">{number}</div>
        <div className="relative z-10">
            <div className="mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
)

const ServiceItem: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
    <div className="flex">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                {icon}
            </div>
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="mt-1 text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
)
