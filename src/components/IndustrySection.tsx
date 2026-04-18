"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export type IndustryProps = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  products: Array<{
    name: string;
    gradient: string;
    iconPath: string; // SVG path string for the icon
  }>;
  altBg?: boolean;
  accentColor?: string;
};

export function IndustrySection({
  id,
  badge,
  title,
  subtitle,
  products,
  altBg,
  accentColor = "#E91E8C",
}: IndustryProps) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24
        ${altBg ? "bg-[#F8F9FF]" : "bg-white"}`}
    >
      {/* Bg blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-48 -top-48 h-[500px] w-[500px]
            rounded-full blur-[100px]"
          style={{ background: `${accentColor}0D` }}
        />
        <div
          className="absolute -bottom-32 -right-48 h-[400px] w-[400px]
            rounded-full blur-[90px]"
          style={{ background: "rgba(0,191,255,0.06)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header ── */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="mb-5 inline-flex items-center gap-2 rounded-full
              px-5 py-2 text-[10px] font-black uppercase tracking-[.18em]"
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
            className="font-heading text-4xl font-black leading-[1.12]
              tracking-tight text-[#0A1172] sm:text-5xl"
          >
            {title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-400">
            {subtitle}
          </p>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="absolute -left-1 top-1/2 z-20 hidden -translate-y-1/2
              items-center justify-center
              h-11 w-11 rounded-full bg-white
              border border-[#0A1172]/10
              shadow-lg shadow-[#0A1172]/8
              text-[#0A1172] transition-all duration-200
              hover:bg-[#0A1172] hover:border-[#0A1172] hover:text-white
              hover:shadow-xl md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="absolute -right-1 top-1/2 z-20 hidden -translate-y-1/2
              items-center justify-center
              h-11 w-11 rounded-full bg-white
              border border-[#0A1172]/10
              shadow-lg shadow-[#0A1172]/8
              text-[#0A1172] transition-all duration-200
              hover:bg-[#0A1172] hover:border-[#0A1172] hover:text-white
              hover:shadow-xl md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Track */}
          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-4
              overflow-x-auto px-6 pb-6 pt-2
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden"
          >
            {products?.map((product, i) => {
              const initials = (product?.name || "")
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group w-[218px] flex-shrink-0 snap-start cursor-pointer"
                >
                  <div
                    className="overflow-hidden rounded-[20px]
                      border border-[#0A1172]/7 bg-white
                      transition-all duration-400
                      group-hover:-translate-y-2
                      group-hover:border-[#E91E8C]/20
                      group-hover:shadow-2xl
                      group-hover:shadow-[#0A1172]/10"
                  >
                    {/* Image area */}
                    <div
                      className="relative h-[155px] overflow-hidden
                        flex items-center justify-center"
                      style={{ background: product.gradient }}
                    >
                      {/* Bg initials */}
                      <span
                        className="pointer-events-none absolute left-3
                          top-2 select-none font-black text-[64px]
                          leading-none text-white/[0.08]
                          tracking-tighter"
                      >
                        {initials}
                      </span>

                      {/* Shine */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 55%)",
                        }}
                      />

                      {/* Icon box */}
                      <div
                        className="relative z-10 flex h-[52px] w-[52px]
                          items-center justify-center rounded-2xl
                          border border-white/25
                          transition-transform duration-400
                          group-hover:scale-110"
                        style={{
                          background: "rgba(255,255,255,0.18)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {/* Render icon via SVG path */}
                        <svg
                          width="24" height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.92)"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={product.iconPath} />
                        </svg>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="px-5 py-4">
                      <h3
                        className="font-heading text-[11px] font-black
                          uppercase tracking-[.1em] text-[#0A1172]
                          transition-colors duration-200
                          group-hover:text-[#E91E8C]"
                      >
                        {product.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium
                        text-gray-300 tracking-wide">
                        Custom Prints · Premium Finish
                      </p>

                      {/* Hover CTA */}
                      <div
                        className="mt-3 flex translate-y-1 items-center
                          gap-1.5 border-t border-gray-50 pt-3
                          text-[10px] font-black uppercase tracking-[.08em]
                          text-[#E91E8C] opacity-0 transition-all duration-300
                          group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        Get Quote
                        <ArrowRight size={10} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="mt-10 flex justify-center px-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full
              px-10 py-4 text-sm font-black text-white
              shadow-lg shadow-[#E91E8C]/25
              transition-all duration-200
              hover:scale-105 hover:shadow-[#E91E8C]/35 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg,#E91E8C,#0A1172)",
            }}
          >
            Get a Quote
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}