"use client";
import { PageHero } from "@/components/PageHero";
import { AboutStory } from "@/components/AboutStory";
import { AboutValues } from "@/components/AboutValues";
import { AboutCapabilities } from "@/components/AboutCapabilities";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-light">
      <PageHero
        badge="Our Story"
        title={"Packaging That Tells \nYour Brand's Story"}
        titleHighlight="Brand's Story"
        subtitle="PrintsFly is an in-house printing & packaging company built for ambitious Indian brands. We handle end-to-end — from design handoff to doorstep delivery."
        cta={{ label: "See Our Work", href: "/services" }}
        ctaSecondary={{ label: "Talk to Us", href: "/contact" }}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutStory />
      <AboutValues />
      <AboutCapabilities />
      <AboutCTA />
    </main>
  );
}
