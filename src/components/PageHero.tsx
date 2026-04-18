"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { GradientButton } from "./GradientButton";
import { SectionBadge } from "./SectionBadge";

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  breadcrumb: Array<{ label: string; href?: string }>;
  align?: "left" | "center";
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  cta,
  ctaSecondary,
  breadcrumb,
  align = "center",
}: PageHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";
  const justifyAlign = align === "center" ? "justify-center" : "justify-start";

  return (
    <section className="relative min-h-[62vh] lg:min-h-[70vh] bg-dark overflow-hidden flex flex-col items-center justify-center">
      {/* Layer 1 - Grid lines */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Layer 2 - Radial glow (top center) */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(233,30,140,0.18) 0%, transparent 70%)'
        }}
      />

      {/* Layer 3 - Cyan accent (bottom right) */}
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 rounded-full bg-cyan/10 blur-[100px] pointer-events-none" />

      <motion.div
        className={`relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col ${textAlign}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Breadcrumb */}
        <motion.div className="flex items-center gap-2 text-white/40 text-xs mb-8" variants={itemVariants}>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-magenta font-semibold">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && <ChevronRight size={12} />}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants}>
          <SectionBadge text={badge} className="opacity-80" />
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="mt-4 font-heading font-black text-white leading-[1.1] tracking-tight text-4xl sm:text-5xl xl:text-7xl whitespace-pre-line"
          variants={itemVariants}
        >
          {titleHighlight ? (
            <>
              {title.split(titleHighlight)[0]}
              <span style={{
                background: "linear-gradient(135deg,#E91E8C,#ff6b35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                {titleHighlight}
              </span>
              {title.split(titleHighlight)[1]}
            </>
          ) : title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-white/60 text-lg max-w-2xl leading-relaxed"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        {/* CTA buttons */}
        {(cta || ctaSecondary) && (
          <motion.div className={`mt-9 flex gap-4 flex-wrap ${justifyAlign}`} variants={itemVariants}>
            {cta && (
              <GradientButton href={cta.href}>
                {cta.label}
              </GradientButton>
            )}
            {ctaSecondary && (
              <GradientButton
                href={ctaSecondary.href}
                variant="outline"
                className="!border-white/30 !text-white/80 hover:!bg-white/10"
              >
                {ctaSecondary.label}
              </GradientButton>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom fade edge */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-light to-transparent" />
    </section>
  );
}
