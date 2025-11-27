import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const projects = [
  // Waterproofing
  { id: 1, category: 'Waterproofing', title: 'Cresta Hotel Roof Refurbishment', image: 'https://picsum.photos/seed/hotel_roof/1200/900', client: 'Cresta Hotels', desc: 'Complete torch-on waterproofing of the main hotel roof deck, including gutter replacement.' },
  { id: 2, category: 'Waterproofing', title: 'Turnall Factory Roof Sealing', image: 'https://picsum.photos/seed/factory_roof/1200/900', client: 'Turnall', desc: 'Heavy-duty industrial waterproofing and IBR sheet sealing for manufacturing plant.' },
  { id: 3, category: 'Waterproofing', title: 'Private Residence Shingle Roof', image: 'https://picsum.photos/seed/shingle_roof/1200/900', client: 'Private Client', desc: 'Repair and sealing of asphalt shingle roofing system.' },
  
  // Finishes (Painting/Epoxy)
  { id: 4, category: 'Finishes', title: 'Precision Grinders Epoxy Floor', image: 'https://picsum.photos/seed/epoxy_workshop/1200/900', client: 'Precision Grinders', desc: 'Installation of high-traffic chemical resistant epoxy flooring in the main workshop.' },
  { id: 5, category: 'Finishes', title: 'OK Mart Interior Renovation', image: 'https://picsum.photos/seed/mall_paint/1200/900', client: 'OK Mart', desc: 'Complete interior painting and tiling for the retail floor.' },
  { id: 6, category: 'Finishes', title: 'Apartment Complex Exterior', image: 'https://picsum.photos/seed/exterior_paint/1200/900', client: 'Property Manager', desc: 'Full exterior painting and crack filling for a 20-unit complex.' },

  // Maintenance & Utilities
  { id: 7, category: 'Maintenance', title: 'Delta Beverages Guttering', image: 'https://picsum.photos/seed/guttering/1200/900', client: 'Delta Beverages', desc: 'Fabrication and installation of large-scale industrial box gutters.' },
  { id: 8, category: 'Maintenance', title: 'School Plumbing Overhaul', image: 'https://picsum.photos/seed/plumbing/1200/900', client: 'Government School', desc: 'Renovation of sanitary ware and drainage systems for school ablutions.' },
  { id: 9, category: 'Maintenance', title: 'Perimeter Razor Wire', image: 'https://picsum.photos/seed/razorwire/1200/900', client: 'Gated Community', desc: 'Installation of high-security flat wrap razor wire along perimeter walls.' },
  { id: 10, category: 'Maintenance', title: 'Factory Ventilation System', image: 'https://picsum.photos/seed/ventilation/1200/900', client: 'Industrial Client', desc: 'Installation of whirlybirds and air ducts for factory cooling.' },
  { id: 11, category: 'Maintenance', title: 'Suspended Ceilings', image: 'https://picsum.photos/seed/ceiling/1200/900', client: 'Corporate Office', desc: 'Installation of acoustic suspended ceilings and LED lighting.' },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const categories = ['All', 'Waterproofing', 'Finishes', 'Maintenance'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="Construction Projects Gallery" 
        description="View our portfolio of completed projects including waterproofing, epoxy flooring, industrial painting, and maintenance for clients like Delta Beverages and Turnall."
        keywords="Construction projects Zimbabwe, Epoxy flooring portfolio, Waterproofing case studies, Industrial maintenance projects"
      />
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Work</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">A showcase of our precision in waterproofing, painting, and specialized maintenance.</p>
        </div>
      </div>

      {/* Featured Project Spotlight */}
      <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-1/2">
                      <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                          <img src="https://picsum.photos/seed/waterproof_detail/1200/800" alt="Featured Project" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                          <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Featured Project</div>
                      </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                      <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">Case Study</h2>
                      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Industrial Roof Rehabilitation</h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                          Complete rehabilitation of a 2,000sqm factory roof for Turnall Holdings. The project involved stripping old material, repairing the substrate, and applying a dual-layer torch-on bitumen system.
                      </p>
                      <ul className="space-y-2 mb-8 text-slate-700">
                          <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>4mm Torch-on Membrane</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Custom Box Gutter Fabrication</li>
                          <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>10-Year Warranty</li>
                      </ul>
                      <Link to="/contact" className="inline-flex items-center text-teal-800 font-bold hover:text-teal-600 transition-colors">
                          Request similar solution <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all ${
                filter === cat 
                  ? 'bg-teal-600 text-white shadow-lg' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-teal-400 hover:text-teal-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                    <ZoomIn className="w-8 h-8 text-teal-400 mb-2" />
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-serif font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="mt-3">
                   <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{project.title}</h3>
                   <p className="text-sm text-slate-500">{project.client}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

       {/* Testimonials */}
       <section className="bg-slate-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-3">Feedback</h2>
                  <h3 className="text-3xl font-serif font-bold">What Clients Say</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                     <Quote className="w-8 h-8 text-teal-500 mb-4 opacity-50" />
                     <p className="text-lg text-slate-300 italic mb-6">"Energy Pool's epoxy flooring completely transformed our workshop. It's durable, easy to clean, and looks professional."</p>
                     <div className="flex items-center">
                         <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center font-bold text-white mr-3">D</div>
                         <div>
                             <p className="font-bold">Director</p>
                             <p className="text-xs text-slate-400 uppercase">Precision Grinders</p>
                         </div>
                     </div>
                 </div>
                 <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                     <Quote className="w-8 h-8 text-teal-500 mb-4 opacity-50" />
                     <p className="text-lg text-slate-300 italic mb-6">"We had chronic roof leaks for years. The team's waterproofing diagnosis and torch-on solution finally solved the problem."</p>
                     <div className="flex items-center">
                         <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center font-bold text-white mr-3">F</div>
                         <div>
                             <p className="font-bold">Facilities Manager</p>
                             <p className="text-xs text-slate-400 uppercase">FSI</p>
                         </div>
                     </div>
                 </div>
              </div>
          </div>
       </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="w-full md:w-2/3 h-[40vh] md:h-auto bg-black relative">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain" />
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col overflow-y-auto">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">{selectedProject.category}</span>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">{selectedProject.title}</h2>
                    </div>
                    <button onClick={() => setSelectedProject(null)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-6 h-6 text-slate-500" />
                    </button>
                 </div>
                 
                 <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase mb-2">Client</h4>
                        <p className="text-slate-600">{selectedProject.client}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase mb-2">Description</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            {selectedProject.desc}
                        </p>
                    </div>
                 </div>

                 <div className="mt-auto pt-8">
                     <button onClick={() => setSelectedProject(null)} className="w-full py-3 border border-slate-200 text-slate-600 font-bold rounded hover:bg-slate-50 transition-colors">
                         Close Project
                     </button>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
