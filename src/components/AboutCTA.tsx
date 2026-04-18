"use client";
import { SectionBadge } from "./SectionBadge";
import { GradientButton } from "./GradientButton";

export function AboutCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-navy overflow-hidden relative py-20 px-8 text-center border border-white/5">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-magenta/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <SectionBadge text="Let's Work Together" className="mx-auto !text-white/60" />
          <h2 className="mt-6 text-3xl md:text-5xl font-black text-white font-heading leading-tight">
            Ready to Upgrade Your <br />
            <span className="text-magenta">Packaging?</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience over 1,000 orders worth of expertise without any risk. 
            Start with a sample order — we offer flexible minimum quantities and fast turnaround.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GradientButton href="/contact">
              Get Free Quote →
            </GradientButton>
            <GradientButton 
              href="/services" 
              variant="outline" 
              className="!border-white/20 !text-white hover:!bg-white/10"
            >
              Explore Services
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
