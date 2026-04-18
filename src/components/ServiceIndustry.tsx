"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon, Check } from "lucide-react";

interface Product {
  name: string;
  desc: string;
  gradient: string;
  specs: string[];
  icon: LucideIcon;
}

interface ServiceIndustryProps {
  id: string;
  badge: string;
  badgeIcon?: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  bgColor: "white" | "light";
  accentColor: string;
  products: Product[];
  highlights: string[];
}

const customEase = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: customEase }
  },
};

export function ServiceIndustry({
  id, badge, title, subtitle, description,
  bgColor, accentColor, products, highlights,
}: ServiceIndustryProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-14 md:py-16 px-6
        ${bgColor === "light" ? "bg-[#F8F9FF]" : "bg-white"}`}
    >
      {/* Subtle bg blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 -top-40 h-[500px] w-[500px]
            rounded-full blur-[100px] opacity-40"
          style={{ background: `${accentColor}0D` }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-[400px] w-[400px]
            rounded-full blur-[90px] opacity-30"
          style={{ background: `${accentColor}0A` }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header ── */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: customEase }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full
              px-5 py-2 text-[11px] font-black uppercase tracking-[.15em]
              mb-5"
            style={{
              background: `${accentColor}12`,
              color: accentColor,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accentColor }}
            />
            {badge}
          </span>

          <h2
            className="font-heading text-4xl font-black leading-[1.15]
              tracking-tight text-[#0A1172] lg:text-5xl"
            style={{ whiteSpace: "pre-line" }}
          >
            {(title || "").split("\\n").map((line, i, arr) => {
              /* Last line gets accent gradient */
              if (i === arr.length - 1 && line) {
                return (
                  <span
                    key={i}
                    style={{
                      background: `linear-gradient(135deg,${accentColor},#0A1172)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "block",
                    }}
                  >
                    {line}
                  </span>
                );
              }
              return <span key={i} className="block">{line}</span>;
            })}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 italic">
            &ldquo;{subtitle}&rdquo;
          </p>
        </motion.div>

        {/* ── Product Cards ── */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2
            lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group cursor-pointer rounded-xl overflow-hidden
                bg-white border border-gray-100/80
                hover:-translate-y-2 hover:shadow-2xl
                hover:shadow-[#0A1172]/8 hover:border-[#E91E8C]/20
                transition-all duration-400"
            >
              {/* Card image area */}
              <div
                className="relative h-40 overflow-hidden
                  flex items-center justify-center"
                style={{ background: product.gradient }}
              >
                {/* Large bg initials */}
                <span
                  className="pointer-events-none absolute left-3 top-2
                    select-none font-black text-[60px] leading-none
                    text-white/[0.08]"
                >
                  {product.name.slice(0, 2).toUpperCase()}
                </span>

                {/* Large bg icon */}
                <product.icon
                  size={90}
                  className="pointer-events-none absolute -bottom-3
                    -right-3 text-white/[0.07] transition-transform
                    duration-500 group-hover:scale-110"
                />

                {/* Shine layer */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 55%)",
                  }}
                />

                {/* Center icon box */}
                <div
                  className="relative z-10 flex h-12 w-12 items-center
                    justify-center rounded-[14px] border
                    border-white/25 backdrop-blur-sm
                    transition-transform duration-500
                    group-hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                >
                  <product.icon size={24} className="text-white/90" />
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3
                  className="font-heading text-[11px] font-black
                    uppercase tracking-[.1em] text-[#0A1172]
                    transition-colors duration-200
                    group-hover:text-[#E91E8C]"
                >
                  {product.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs
                  leading-relaxed text-gray-400">
                  {product.desc}
                </p>

                {/* Specs */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.specs.map((spec, si) => (
                    <span
                      key={si}
                      className="rounded-full border border-[#0A1172]/8
                        bg-[#F0F4FF] px-2.5 py-0.5 text-[10px]
                        font-bold text-[#0A1172]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Description + Highlights ── */}
        <motion.div
          className="mt-20 grid grid-cols-1 items-center
            gap-10 lg:grid-cols-2"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: customEase }}
        >
          {/* Description */}
          <div className="relative pl-6">
            <div
              className="absolute left-0 top-1 h-[calc(100%-8px)] w-[3px]
                rounded-full"
              style={{
                background: `linear-gradient(180deg,${accentColor},${accentColor}1A)`,
              }}
            />
            <p className="text-[15px] font-medium leading-[1.85]
              text-gray-500">
              {description}
            </p>
          </div>

          {/* Highlights card */}
          <div
            className="rounded-3xl border border-gray-100 bg-white p-8
              shadow-xl shadow-[#0A1172]/5"
          >
            <h4
              className="mb-6 flex items-center gap-2 font-heading
                text-[12px] font-black uppercase tracking-[.12em]
                text-[#0A1172]"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: `linear-gradient(135deg,${accentColor},#0A1172)`,
                }}
              />
              Key Industry Advantages
            </h4>

            <div className="space-y-1">
              {highlights.map((hl, hi) => (
                <div
                  key={hi}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5
                    transition-colors duration-200
                    hover:bg-[#F8F9FF]"
                >
                  <div
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0
                      items-center justify-center rounded-[6px]"
                    style={{ background: `${accentColor}15` }}
                  >
                    <Check
                      size={11}
                      strokeWidth={3}
                      style={{ color: accentColor }}
                    />
                  </div>
                  <span className="text-sm font-medium
                    leading-[1.55] text-gray-600">
                    {hl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}