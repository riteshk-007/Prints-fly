"use client";
import { ServiceIndustry } from "./ServiceIndustry";
import {
  UtensilsCrossed,
  Coffee,
  ShoppingBasket,
  Box,
} from "lucide-react";

export function RestaurantHospitality() {
  const products = [
    {
      name: "Food Boxes",
      desc: "Food-safe burger, pizza, and cookie boxes designed to keep content fresh and warm.",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #0A1172 100%)",
      specs: ["Food Grade", "Oil Resistant", "Heat Retention"],
      icon: Box
    },
    {
      name: "Custom Cups",
      desc: "Branded paper cups for hot and cold beverages with secure lids and insulation.",
      gradient: "linear-gradient(135deg, #00BFFF 0%, #0A1172 100%)",
      specs: ["Double Wall", "Leak Proof", "Vibrant Print"],
      icon: Coffee
    },
    {
      name: "Dine-in Essentials",
      desc: "Custom tray liners, cutlery sleeves, and branded napkins for a complete dining experience.",
      gradient: "linear-gradient(135deg, #E91E8C 0%, #0A1172 100%)",
      specs: ["Eco-friendly", "Soft Texture", "Fine Printing"],
      icon: UtensilsCrossed
    },
    {
      name: "Delivery Containers",
      desc: "Sturdy, stackable containers for safe transport and high-speed delivery operations.",
      gradient: "linear-gradient(135deg, #22c55e 0%, #0A1172 100%)",
      specs: ["Stackable", "Lightweight", "Custom Sizes"],
      icon: ShoppingBasket
    }
  ];

  const highlights = [
    "FDA-approved, food-safe inks and materials",
    "Grease-proof and moisture-resistant coatings",
    "Ventilation-optimized designs for crispiness",
    "Easy-fold construction for kitchen efficiency",
    "Custom branding for dark kitchens and franchises"
  ];

  return (
    <ServiceIndustry
      id="hospitality"
      badge="Restaurant, QSR & Hospitality"
      title="Food-safe packaging\nthat travels well"
      subtitle="Crafted for QSR speed and dine-in branding — keep food fresh and your brand front-of-mind."
      description="The food industry demands speed and safety without compromising on brand identity. We provide high-performance food packaging solutions that are as functional as they are beautiful. From grease-resistant burger boxes to premium coffee carriers, our products ensure your food looks as good on the table as it does in the delivery bag."
      bgColor="white"
      accentColor="#f59e0b"
      products={products}
      highlights={highlights}
    />
  );
}
