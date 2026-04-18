"use client";
import { motion } from "framer-motion";
import { Zap, Target, ShieldCheck, BadgeIndianRupee, Headphones, Leaf } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const values = [
  {
    icon: Zap,
    title: "Speed Without Sacrifice",
    desc: "Tight deadlines are our comfort zone. Rush orders handled with the same high quality standards.",
  },
  {
    icon: Target,
    title: "Brand-First Thinking",
    desc: "Your brand identity is at the forefront of every packaging decision — we care about more than just specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Compromise Quality",
    desc: "Every batch undergoes rigorous quality checks. We reject it internally so you don't have to.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Honest Pricing",
    desc: "No hidden charges. GSM upgrades are suggested only when they genuinely add value to your product.",
  },
  {
    icon: Headphones,
    title: "WhatsApp-First Support",
    desc: "Reorders, proofs, and tracking — all in one message. Response guaranteed in under 2 hours.",
  },
  {
    icon: Leaf,
    title: "Responsible Production",
    desc: "FSC-certified paper options available. Sustainable packaging now accounts for 40% of our orders.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <SectionBadge text="Our Values" />
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-navy font-heading leading-tight">
            What Makes Us <br />
            <span className="text-magenta">Different</span>
          </h2>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/5 hover:border-magenta/20 transition-all duration-300 group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-magenta/5 flex items-center justify-center group-hover:bg-magenta transition-colors duration-300">
                <item.icon size={26} className="text-magenta group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-6 font-heading font-bold text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-navy/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
