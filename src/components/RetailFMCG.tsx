"use client";
import { ServiceIndustry } from "./ServiceIndustry";
import {
  ShoppingBag,
  Tag,
  Box,
  Sparkles,
} from "lucide-react";

export function RetailFMCG() {
  const products = [
    {
      name: "Mono Cartons",
      desc: "Luxury product boxes with spot UV and metallic foiling for premium retail appeal.",
      gradient: "linear-gradient(135deg, #E91E8C 0%, #0A1172 100%)",
      specs: ["Metpet Printing", "Spot UV", "Embossed"],
      icon: Box
    },
    {
      name: "Product Labels",
      desc: "High-quality roll and sheet labels for bottles, jars, and FMCG containers.",
      gradient: "linear-gradient(135deg, #00BFFF 0%, #0A1172 100%)",
      specs: ["Waterproof", "Transparent", "Matte Finish"],
      icon: Tag
    },
    {
      name: "Paper Bags",
      desc: "Eco-friendly retail bags with reinforced handles and brand-centric designs.",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #0A1172 100%)",
      specs: ["Eco-Kraft", "Rope Handle", "Heavy Duty"],
      icon: ShoppingBag
    },
    {
      name: "POS Collateral",
      desc: "Eye-catching danglers, wobblers, and posters to drive in-store conversions.",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #0A1172 100%)",
      specs: ["High Gloss", "Vibrant Colors", "Custom Shapes"],
      icon: Sparkles
    }
  ];

  const highlights = [
    "Vibrant color matching for brand consistency",
    "Special finishes like Spot UV and Foil Stamping",
    "High-speed production for seasonal launches",
    "Durable materials for long-distance logistics",
    "Eco-friendly and sustainable packaging options"
  ];

  return (
    <ServiceIndustry
      id="retail-fmcg"
      badge="Retail & FMCG"
      title="Shelf-ready packaging\nthat sells"
      subtitle="From mono cartons to in-store collateral — bold designs that move products off the shelf."
      description="In the crowded retail landscape, your packaging is your silent salesperson. We specialize in creating high-impact retail packaging that combines structural integrity with stunning visual appeal. Our FMCG solutions are optimized for both aesthetics and durability, ensuring your brand stands out on every shelf."
      bgColor="white"
      accentColor="#E91E8C"
      products={products}
      highlights={highlights}
    />
  );
}
