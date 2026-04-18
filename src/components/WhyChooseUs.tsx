"use client"
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Headphones, Wallet } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Custom Packaging Solutions",
    desc: "Tailored to your brand, budget, and product requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Packaging Services",
    desc: "Consistent quality and on-time delivery — every single order.",
  },
  {
    icon: Headphones,
    title: "Exceptional Customer Support",
    desc: "A dedicated team available on WhatsApp, phone and email.",
  },
  {
    icon: Wallet,
    title: "Affordable Packaging Solutions",
    desc: "Best value for every order — without compromising on quality.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 left-10 h-96 w-96 rounded-full bg-magenta/20 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-cyan/20 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan">
            Why PrintsFly
          </span>
          <h2 className="mt-6 font-heading text-4xl font-black sm:text-5xl leading-tight">
            Built for brands that take <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">packaging seriously</span>
          </h2>
          <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
            Four reasons growing brands across India choose us as their strategic print partner.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:border-magenta/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-magenta/10"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-lg shadow-magenta/20 group-hover:scale-110 transition-transform duration-500">
                <f.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-8 font-heading text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
