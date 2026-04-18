"use client";
import { GradientButton } from "./GradientButton";

export function ServicesCTA() {
  return (
    <section className="py-24 px-6 scale-up-hover">
      <div className="max-w-6xl mx-auto rounded-[3rem] bg-dark overflow-hidden relative py-20 px-10 text-center border border-white/5 shadow-2xl">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Glossy Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-magenta/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan mb-8">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white font-heading leading-tight tracking-tight">
            Elevate Your Brand with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">Expert Packaging</span>
          </h2>
          <p className="mt-8 text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From luxury gift boxes to high-volume retail packaging, we deliver 
            precision, speed, and premium quality for your growing brand.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <GradientButton href="/contact" className="px-10 py-4 !text-base">
              Get Free Quote →
            </GradientButton>
            <GradientButton 
              href="/about" 
              variant="outline" 
              className="px-10 py-4 !text-base !border-white/20 !text-white hover:!bg-white/10"
            >
              Learn More
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
