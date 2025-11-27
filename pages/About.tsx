import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target, Eye, HardHat, Award, Quote, Truck, Anchor, Briefcase, Building, PenTool, PaintBucket } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="About Us - Leading Construction Company"
        description="Learn about Energy Pool's journey as Zimbabwe's leading maintenance contractor. Registered with NSSA and committed to excellence."
        keywords={["Construction History Zimbabwe", "Energy Pool Profile", "Building Contractors Harare", "Reliable Construction Company"]}
      />
      {/* Header */}
      <div className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/blueprint_roll/1920/600" alt="Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">About Us</h1>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Energy Pool: A legacy of specialized building maintenance and waterproofing excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Corporate Evolution (New History Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Milestones</h2>
                <h3 className="text-4xl font-serif font-bold text-slate-900">Our Journey</h3>
            </div>
            
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block"></div>
                
                <div className="space-y-20">
                    <TimelineItem 
                        year="2000"
                        title="Inception"
                        desc="The company was established primarily focusing on roof sheeting and basic repairs, gaining a reputation for reliability in Harare."
                        side="left"
                    />
                    <TimelineItem 
                        year="2010"
                        title="Diversification"
                        desc="Responding to client needs, we expanded our services to include painting, plumbing, and steel fabrication, becoming a one-stop-shop for property maintenance."
                        side="right"
                    />
                    <TimelineItem 
                        year="2022"
                        title="Evolution of Energy Pool"
                        desc="The company modernized its identity to reflect a broader scope of industrial capabilities, including epoxy flooring and large-scale waterproofing projects."
                        side="left"
                    />
                     <TimelineItem 
                        year="Present"
                        title="Maintenance Leaders"
                        desc="Today, Energy Pool is a trusted partner for major Zimbabwean corporations, known for our specialized expertise in keeping buildings watertight, secure, and pristine."
                        side="right"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Resources</h2>
                      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Equipped for the Job</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                          Quality finishes require specialized tools. Energy Pool invests in industrial-grade equipment for every trade we ply, ensuring efficiency and superior results.
                      </p>
                      <div className="space-y-4">
                          <CapabilityItem icon={<PenTool className="w-5 h-5" />} text="Industrial gas torches for bitumen waterproofing" />
                          <CapabilityItem icon={<PaintBucket className="w-5 h-5" />} text="High-pressure sprayers for coating applications" />
                          <CapabilityItem icon={<Briefcase className="w-5 h-5" />} text="Specialized epoxy application tooling" />
                          <CapabilityItem icon={<Truck className="w-5 h-5" />} text="Reliable logistics fleet for nationwide service" />
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <img src="https://images.unsplash.com/photo-1667207591347-86f12a549411" alt="Torch Tool" className="rounded-lg shadow-lg w-full h-full object-cover" />
                      <div className="space-y-4">
                          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" alt="Paint Equipment" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                          <img src="https://raw.githubusercontent.com/skyboltlabs/Energy-Pool/refs/heads/main/assets/scaffold_painting.jpg" alt="Access Equipment" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 p-10 rounded-lg backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all duration-300"
            >
              <Target className="w-16 h-16 text-teal-400 mb-8" />
              <h3 className="text-3xl font-serif font-bold mb-6">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                To provide efficient solutions to our customer's challenges. We are flexible and responsive, aiming to deliver personalized attention and quality workmanship at the fairest price.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 p-10 rounded-lg backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all duration-300"
            >
              <Eye className="w-16 h-16 text-teal-400 mb-8" />
              <h3 className="text-3xl font-serif font-bold mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                To provide products and services which not only meet but clearly exceed the expectations of our customer, giving a new look to the industry with our flexibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Safety */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        "Versatile Customer Service",
                        "Integrity & Governance",
                        "Innovation in Solutions",
                        "Professionalism",
                        "Responsibility",
                        "Quality Workmanship"
                    ].map((val, i) => (
                        <div key={i} className="flex items-center bg-white p-4 rounded border border-slate-100 shadow-sm">
                            <Check className="w-5 h-5 text-teal-500 mr-3" />
                            <span className="text-slate-700 font-medium text-sm">{val}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-xl border border-teal-100">
                <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-orange-500 mr-4" />
                    <h3 className="text-2xl font-serif font-bold text-slate-900">Safety First</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    We are registered with <strong>NSSA</strong> and are committed to a 0% injury target. Whether working at heights on a roof or handling epoxy chemicals, we ensure full protective clothing and safety induction for all employees.
                </p>
                <div className="flex items-center p-4 bg-white rounded border border-slate-200">
                    <Quote className="w-8 h-8 text-teal-200 mr-4" />
                    <p className="text-slate-800 font-medium italic">"We believe in minimizing the amount of time in delivering our promises."</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem: React.FC<{ year: string, title: string, desc: string, side: 'left' | 'right' }> = ({ year, title, desc, side }) => (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <div className={`bg-white p-8 rounded-lg shadow-lg border border-slate-100 ${side === 'left' ? 'text-right' : 'text-left'}`}>
                <span className="text-5xl font-serif font-bold text-teal-100 block mb-2">{year}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
            </div>
        </div>
        <div className="w-8 h-8 bg-teal-600 rounded-full border-4 border-white shadow flex-shrink-0 z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
        <div className="w-full md:w-5/12 hidden md:block"></div>
    </div>
);

const CapabilityItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
    <div className="flex items-center text-slate-700">
        <div className="bg-teal-50 p-2 rounded text-teal-600 mr-3">
            {icon}
        </div>
        <span className="font-medium">{text}</span>
    </div>
);
