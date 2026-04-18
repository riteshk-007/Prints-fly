"use client";
import { ServiceIndustry } from "./ServiceIndustry";
import {
  Pill,
  ClipboardList,
  FileText,
  FolderSearch
} from "lucide-react";

export function HealthPharma() {
  const products = [
    {
      name: "Diagnostic Folders",
      desc: "Premium MRI, X-Ray, and CT Scan folders with custom slots and professional branding.",
      gradient: "linear-gradient(135deg, #00BFFF 0%, #0A1172 100%)",
      specs: ["350GSM Cardboard", "Laminated", "Custom Die-cut"],
      icon: FolderSearch
    },
    {
      name: "Medicine Boxes",
      desc: "Carton packaging for pharmaceutical products, fully compliant and print-perfect.",
      gradient: "linear-gradient(135deg, #E91E8C 0%, #0A1172 100%)",
      specs: ["Pharma Grade", "Aqueous Coat", "Braille Ready"],
      icon: Pill
    },
    {
      name: "Prescription Pads",
      desc: "Official medical stationery for doctors and hospitals with secure binding.",
      gradient: "linear-gradient(135deg, #6366f1 0%, #0A1172 100%)",
      specs: ["100GSM Superfine", "Glue Bound", "75 Leaves"],
      icon: FileText
    },
    {
      name: "Lab Report Files",
      desc: "Sleek, organized file covers for pathology labs and diagnostic centers.",
      gradient: "linear-gradient(135deg, #22c55e 0%, #0A1172 100%)",
      specs: ["Gloss Finish", "Multi-pocket", "Logo Foiling"],
      icon: ClipboardList
    }
  ];

  const highlights = [
    "Compliant with Pharmaceutical packaging standards",
    "Moisture-resistant coatings for long shelf life",
    "Precision die-cutting for easy medicine dispensing",
    "High-clarity printing for technical instructions",
    "Quick turnaround for hospital and clinic batches"
  ];

  return (
    <ServiceIndustry
      id="health-pharma"
      badge="Health & Pharma"
      title="Packaging that builds\npatient trust"
      subtitle="Diagnostic folders, prescription pads, and medicine packaging engineered for clarity, compliance, and care."
      description="In the healthcare sector, precision is everything. Our pharmaceutical packaging and medical stationery solutions are designed to meet the highest standards of safety and professional aesthetics. From diagnostic folders for major hospitals to compliant medicine cartons, we ensure your brand speaks the language of care and reliability."
      bgColor="light"
      accentColor="#00BFFF"
      products={products}
      highlights={highlights}
    />
  );
}
