"use client";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, TrendingUp, Factory } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">

      {/* ── Subtle grid lines ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,17,114,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,17,114,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── Animated blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Magenta — top left */}
        <div
          className="animate-blob absolute -left-[15%] -top-[20%]
            h-[75%] w-[65%] rounded-full
            bg-[#E91E8C]/9 blur-[80px]"
        />
        {/* Cyan — top right */}
        <div
          className="animate-blob absolute -right-[20%] top-[10%]
            h-[70%] w-[60%] rounded-full
            bg-[#00BFFF]/8 blur-[90px]"
          style={{ animationDelay: "5s" }}
        />
        {/* Navy — bottom center */}
        <div
          className="animate-blob absolute bottom-[-15%] left-[25%]
            h-[55%] w-[55%] rounded-full
            bg-[#0A1172]/5 blur-[70px]"
          style={{ animationDelay: "9s" }}
        />
        {/* Small magenta center */}
        <div
          className="animate-blob absolute left-[35%] top-[35%]
            h-[40%] w-[35%] rounded-full
            bg-[#E91E8C]/5 blur-[50px]"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center
        gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-14 lg:py-28">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full
            border border-[#E91E8C]/20 bg-[#E91E8C]/5
            px-4 py-2 text-[10px] font-black uppercase
            tracking-[.18em] text-[#E91E8C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E91E8C]
              shadow-[0_0_8px_rgba(233,30,140,0.6)]" />
            🇮🇳 Made in India — Trusted by 50+ Brands
          </span>

          {/* Heading */}
          <h1 className="mt-6 font-heading text-4xl font-black
            leading-[1.05] tracking-tight text-[#0A0F2C]
            sm:text-5xl lg:text-6xl">
            Smart{" "}
            <span style={{
              background: "linear-gradient(135deg,#E91E8C,#ff6b35)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Printing
            </span>
            {" "}&amp;{" "}
            <span style={{
              background: "linear-gradient(135deg,#00BFFF,#0A1172)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Packaging
            </span>
            <span className="block">Solution for Your Brand.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-base leading-[1.8]
            text-gray-500 sm:text-lg">
            Premium quality. On-time delivery. Tailored to your brand
            identity — from concept to doorstep.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 rounded-full
                px-8 py-4 text-sm font-black text-white
                shadow-lg shadow-[#E91E8C]/25
                hover:scale-105 hover:shadow-[#E91E8C]/35
                transition-all duration-200"
              style={{
                background: "linear-gradient(135deg,#E91E8C,#0A1172)",
              }}>
              Start Today <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#health-pharma"
              className="inline-flex items-center rounded-full
                border-2 border-[#0A1172]/15 bg-white/80
                px-8 py-4 text-sm font-black text-[#0A1172]
                backdrop-blur hover:border-[#0A1172]
                hover:bg-white transition-all duration-200">
              View Products
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center
            gap-x-6 gap-y-3">
            {[
              { icon: BadgeCheck, color: "text-[#E91E8C]", label: "Trusted by Leading Brands" },
              { icon: TrendingUp, color: "text-[#00BFFF]", label: "Trend-driven Quality" },
              { icon: Factory, color: "text-[#0A1172]", label: "Made in India" },
            ].map(({ icon: Icon, color, label }, i) => (
              <span key={i} className="inline-flex items-center gap-2
                text-[10px] font-black uppercase tracking-widest
                text-[#0A0F2C]/35">
                <Icon className={`h-4 w-4 ${color}`} />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — glass form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactForm
            variant="glass"
            title="Let's level up your brand, together"
          />

        </motion.div>

      </div>
    </section>
  );
}