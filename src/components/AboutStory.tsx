"use client";
import { motion } from "framer-motion";
import { Factory, Zap, Package, Truck, CheckCircle } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const milestones = [
  { year: "2020", label: "Company Founded", desc: "First factory setup in Okhla, Delhi" },
  { year: "2021", label: "Scaling Up", desc: "First 10 brand clients onboarded · FMCG packaging launched" },
  { year: "2022", label: "Industry Expansion", desc: "Restaurant & QSR vertical started · Burger King onboarded" },
  { year: "2023", label: "Diversification", desc: "Healthcare & Education vertical launched · 5000+ orders milestone" },
  { year: "2024", label: "New Horizons", desc: "50+ brand clients · Greater Noida corporate office opened" },
];

export function AboutStory() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
        {/* Left Column - Story Content */}
        <div className="lg:col-span-3">
          <SectionBadge text="Our Story" />
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-navy font-heading leading-tight">
            Born from a Real <br />
            <span className="text-magenta">Printing Challenge</span>
          </h2>

          <div className="mt-8 space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>
              Years ago, while searching for packaging for our own brand, we realized a gap — 
              quality packaging in India was either prohibitively expensive or delivery was unreliable. 
              There was no single vendor to handle everything from design to dispatch.
            </p>
            <p>
              That’s why we built PrintsFly. A company dedicated to manufacturing premium packaging 
              for FMCG brands, healthcare companies, QSR chains, and educational institutions — 
              without compromise. Our Okhla factory is equipped for both offset and digital printing.
            </p>
            <p>
              Today, we work with over 50 brands — from homegrown D2C startups to established QSR giants 
              like Burger King. We bring the same passion to every order as we did on day one.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16 relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-magenta via-magenta/50 to-transparent" />
            
            <div className="space-y-10">
              {milestones.map((item, i) => (
                <motion.div 
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute -left-10 mt-1 w-5 h-5 rounded-full bg-white border-4 border-magenta shadow-lg shadow-magenta/20" />
                  <div>
                    <span className="text-xs font-black text-magenta uppercase tracking-widest">{item.year}</span>
                    <h4 className="text-navy font-bold text-lg">{item.label}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Panel */}
        <div className="lg:col-span-2 lg:sticky lg:top-32">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 border border-gray-100 bg-white">
              {/* Top half */}
              <div className="h-48 bg-gradient-brand flex items-center justify-center overflow-hidden">
                <span className="text-white/10 text-[12rem] font-black pointer-events-none select-none">PF</span>
              </div>
              
              {/* Bottom half */}
              <div className="p-8">
                <h3 className="font-bold text-navy text-lg">PrintsFly HQ</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  Okhla Industrial Area, Phase 1<br />
                  New Delhi — 110020
                </p>
                
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Factory, text: "4,000 sq ft production floor" },
                    { icon: Zap, text: "Offset + Digital press" },
                    { icon: Package, text: "In-house die-cutting & lamination" },
                    { icon: Truck, text: "Pan-India delivery" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <item.icon size={18} className="text-magenta" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle size={20} className="text-green-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Quality Global</p>
                <p className="text-sm font-black text-navy">ISO Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
