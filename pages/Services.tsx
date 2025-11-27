
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Wind, PaintBucket, Pipette, Grid, Layers, ArrowRight, Check, ShieldCheck, FileCheck, Scissors, Hammer, Umbrella, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';

const mainServices = [
  {
    title: "Roof Waterproofing & Care",
    desc: "Our core specialty. We utilize industrial-grade torch-on bitumen systems to seal flat roofs, concrete decks, and foundations. We also provide guttering installation and shingle roof repairs.",
    features: ["Torch-on Waterproofing", "Roof Leak Repairs", "Guttering & Flashings", "Roof Shingles", "Concrete Deck Sealing", "Damp Proofing"],
    icon: <Droplets className="w-6 h-6" />,
    image: "https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/roof_roller.jpg",
    id: "waterproofing",
    link: "/waterproofing"
  },
  {
    title: "Painting & Epoxy Flooring",
    desc: "Enhance and protect your surfaces. We offer specialized epoxy flooring for industrial warehouses and garages, as well as premium interior and exterior painting services.",
    features: ["Industrial Epoxy Flooring", "Interior/Exterior Painting", "Floor Tiling", "Surface Preparation", "Protective Coatings", "Road Marking"],
    icon: <PaintBucket className="w-6 h-6" />,
    image: "https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/epoxy_floor.jpg",
    id: "finishes"
  },
  {
    title: "Security & Ceilings",
    desc: "Secure and finish your property. We install high-tensile razor wire for perimeter security and offer comprehensive ceiling solutions including IBR and suspended ceilings.",
    features: ["Razor Wire Installation", "IBR Ceilings", "Suspended Ceilings", "Partitioning (Aluminium/Timber)", "Perimeter Fencing", "Security Gates"],
    icon: <Scissors className="w-6 h-6" />,
    image: "https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/ceiling_work.jpg",
    id: "security"
  },
  {
    title: "Plumbing & Maintenance",
    desc: "Complete utility maintenance. From pipe ducting and sanitary ware installation to factory ventilation and general repairs, we keep your facility running smoothly.",
    features: ["Industrial Plumbing", "Pipe Ducting", "Factory Ventilation", "Sanitary Ware Install", "Air Conditioning Ducts", "General Repairs"],
    icon: <Pipette className="w-6 h-6" />,
    image: "https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/gutter_repair.jpg",
    id: "maintenance"
  }
];

const secondaryServices = [
  {
    title: "Factory Ventilation",
    desc: "Installation of industrial whirlybirds and air conditioning ducting for optimal airflow.",
    icon: <Wind className="w-8 h-8" />
  },
  {
    title: "Tiling & Cladding",
    desc: "Professional floor and wall tiling, including IBR cladding for industrial buildings.",
    icon: <Grid className="w-8 h-8" />
  },
  {
    title: "Partitioning",
    desc: "Aluminum and timber partitioning to create functional office and work spaces.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "General Maintenance",
    desc: "Routine maintenance for schools, hospitals, and commercial properties.",
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: "Guttering",
    desc: "Fabrication and installation of galvanized and PVC guttering systems.",
    icon: <Umbrella className="w-8 h-8" />
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Our Services - Waterproofing, Painting & Plumbing"
        description="Comprehensive maintenance services including Epoxy Flooring, Razor Wire installation, Suspended Ceilings, and Industrial Plumbing in Zimbabwe."
        keywords={["Epoxy Flooring Harare", "Razor Wire Installers", "Plumbers Zimbabwe", "Industrial Painting"]}
      />
      {/* Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Specialized Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Expert solutions for waterproofing, finishing, security, and general building maintenance.
          </p>
        </div>
      </div>

      {/* Main Services - Alternating Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {mainServices.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                >
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 bg-teal-600 p-4 rounded-br-lg z-10 text-white">
                    {service.icon}
                  </div>
                </motion.div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.link && (
                    <Link to={service.link} className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded font-bold hover:bg-teal-600 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Standards</h2>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Quality Assurance</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We adhere to strict quality control protocols for all maintenance and installation works. Our waterproofing systems undergo rigorous flood testing, and our coatings are applied to manufacturer specifications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-teal-500 mr-3" /> Manufacturer warranty on torch-on membranes
                </li>
                <li className="flex items-center text-slate-700">
                  <FileCheck className="w-5 h-5 text-teal-500 mr-3" /> Post-installation leak detection tests
                </li>
                 <li className="flex items-center text-slate-700">
                  <Check className="w-5 h-5 text-teal-500 mr-3" /> NSSA compliance for all site work
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-teal-100">
               <div className="flex items-center mb-6">
                 <div className="text-5xl font-bold text-teal-600 font-serif mr-4">100%</div>
                 <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Watertight <br/>Guarantee</div>
               </div>
               <p className="text-slate-600 italic">"Our commitment to quality is not just a promise, it's our operational standard."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold text-slate-900">Additional Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group"
              >
                <div className="mb-6 p-3 rounded-lg w-fit bg-slate-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Have a specific requirement?</h2>
              <p className="text-slate-400 mb-8 text-lg">
                  From epoxy flooring to roof repairs, our team is ready to assist.
              </p>
              <Link to="/contact" className="inline-block bg-teal-600 text-white font-bold px-10 py-4 rounded hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/50">
                  Contact Our Team
              </Link>
          </div>
      </section>
    </div>
  );
};
