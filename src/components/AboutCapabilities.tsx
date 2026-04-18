"use client";
import { motion } from "framer-motion";
import { Printer, Zap, Scissors, Sparkles, Layers, Package } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const steps = [
  {
    title: "Design Review",
    desc: "Once we receive your file, we perform a thorough pre-press check — verifying bleeds, color profiles, and resolution.",
  },
  {
    title: "Material Selection",
    desc: "From GSM and finishes to board types — we recommend the best materials tailored for your specific product needs.",
  },
  {
    title: "Plate Making & Press",
    desc: "Orders are run on high-end offset or digital presses. Precision color proofing is part of our standard process.",
  },
  {
    title: "Finishing & Assembly",
    desc: "Custom die-cutting, embossing, foiling, and UV spot — all finishing processes are handled entirely in-house.",
  },
  {
    title: "QC & Dispatch",
    desc: "Final batches undergo 100% visual QC before packing and delivery via our Pan-India courier partners.",
  },
];

const capabilities = [
  { icon: Printer, title: "Offset Printing", spec: "Up to 5-colour CMYK+1 special" },
  { icon: Zap, title: "Digital Printing", spec: "Min qty 50 units, next-day proof" },
  { icon: Scissors, title: "Die Cutting", spec: "Custom shapes, kiss-cut, crease" },
  { icon: Sparkles, title: "Foiling & Emboss", spec: "Hot foil, blind emboss, spot UV" },
  { icon: Layers, title: "Lamination", spec: "Matte, gloss, soft-touch, anti-scuff" },
  { icon: Package, title: "Box Making", spec: "Auto-bottom, tuck, sleeve, rigid" },
];

export function AboutCapabilities() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <SectionBadge text="What We Do" />
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-navy font-heading leading-tight">
            End-to-End In-House <br />
            <span className="text-magenta">Production</span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            From design files to packed boxes — everything happens under one roof. 
            No middlemen, no delays, and absolute quality control at every stage.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Stepper */}
          <div className="relative pl-12">
            <div className="absolute left-[20px] top-2 bottom-2 w-[1.5px] border-l-2 border-dashed border-gray-200" />
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute -left-12 w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-black text-sm shadow-lg shadow-magenta/20 z-10">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg font-heading">{step.title}</h4>
                    <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Grid */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className="bg-light rounded-2xl border border-gray-100 p-6 hover:border-magenta/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-magenta/5 flex items-center justify-center group-hover:bg-magenta transition-colors duration-300">
                  <cap.icon size={20} className="text-magenta group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="mt-4 font-bold text-navy text-sm font-heading">{cap.title}</h4>
                <p className="text-gray-400 text-[11px] mt-1 font-medium">{cap.spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
