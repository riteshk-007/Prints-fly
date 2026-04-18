"use client";
import { motion } from "framer-motion";
import { SectionBadge } from "./SectionBadge";

const steps = [
  { title: "Share Brief", desc: "Send your files or requirements via WhatsApp." },
  { title: "Get Quote", desc: "Receive pricing and timeline within 24 hours." },
  { title: "Approve Proof", desc: "Start printing once you approve the digital proof." },
  { title: "Production", desc: "Premium printing and in-house finishing." },
  { title: "Delivery", desc: "Pan-India delivery with real-time tracking." },
];

export function ServicesProcess() {
  return (
    <section className="bg-dark py-24 px-6 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionBadge text="How We Work" className="!text-white/40" />
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-white font-heading leading-tight">
            From Order to Delivery — <br />
            <span className="text-magenta">A Completely Transparent Process</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center px-4 group">
              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-full h-[1px] bg-gradient-to-r from-magenta to-transparent opacity-20" />
              )}
              
              {/* Step Circle */}
              <motion.div 
                className="w-20 h-20 rounded-full bg-navy/50 border border-white/10 flex items-center justify-center text-white font-black text-2xl relative z-10 group-hover:border-magenta group-hover:bg-gradient-brand transition-all duration-500 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {i + 1}
              </motion.div>

              <h3 className="mt-8 font-heading font-bold text-lg text-white group-hover:text-magenta transition-colors">
                {step.title}
              </h3>
              <p className="mt-3 text-white/40 text-sm leading-relaxed max-w-[160px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
