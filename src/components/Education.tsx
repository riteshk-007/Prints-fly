"use client";
import { ServiceIndustry } from "./ServiceIndustry";
import {
  BookOpen,
  IdCard,
  Files,
  BookMarked,
} from "lucide-react";

export function Education() {
  const products = [
    {
      name: "Prospectus & Brochures",
      desc: "Vibrant admissions material with premium finishing to attract the next generation of students.",
      gradient: "linear-gradient(135deg, #0A1172 0%, #E91E8C 100%)",
      specs: ["250GSM Art Card", "Center Stapled", "Spot UV"],
      icon: BookMarked
    },
    {
      name: "Examination Material",
      desc: "Secure, precisely printed answer sheets, admit cards, and degree certificates.",
      gradient: "linear-gradient(135deg, #0A1172 0%, #00BFFF 100%)",
      specs: ["High Security", "Variable Data", "Barcode Ready"],
      icon: Files
    },
    {
      name: "Identity Solutions",
      desc: "Durable PVC ID cards and lanyards for students, staff, and faculty members.",
      gradient: "linear-gradient(135deg, #0A1172 0%, #6366f1 100%)",
      specs: ["Premium PVC", "Thermal Printed", "Durable Lanyard"],
      icon: IdCard
    },
    {
      name: "Custom Notebooks",
      desc: "Branded diaries and notebooks for institutional branding and student use.",
      gradient: "linear-gradient(135deg, #0A1172 0%, #22c55e 100%)",
      specs: ["Soft/Hard Cover", "Section Sewn", "Custom Ruling"],
      icon: BookOpen
    }
  ];

  const highlights = [
    "Secure handling of sensitive examination material",
    "High-volume capacity for annual admissions cycles",
    "Custom variable data printing for certificates",
    "Eco-friendly paper options for green campuses",
    "On-time delivery for critical academic deadlines"
  ];

  return (
    <ServiceIndustry
      id="education"
      badge="Education"
      title="Print essentials for\ninstitutions"
      subtitle="Examination, identity and admissions material — printed precisely, delivered on schedule."
      description="The educational sector requires both volume and variety. We provide a complete suite of printing services tailored for schools, colleges, and universities. From high-security examination papers to premium prospectus sets, our solutions are designed to uphold the prestige and operational efficiency of your institution."
      bgColor="light"
      accentColor="#0A1172"
      products={products}
      highlights={highlights}
    />
  );
}
