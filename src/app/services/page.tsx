"use client";

import { PageHero } from "@/components/PageHero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ServiceIndustry } from "@/components/ServiceIndustry";
import { ServicesProcess } from "@/components/ServicesProcess";
import { ServicesCTA } from "@/components/ServicesCTA";

// Icons
import {
  FolderOpen, FileText, Folder, Package, ClipboardList, BookOpen, BookMarked, CreditCard,
  Package2, Box, Layers, Tag, ShoppingBag, Sticker, Sparkles, AlignLeft,
  Ticket, Award, CalendarDays, Calendar,
  Pizza, Wind, UtensilsCrossed
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Our Services"
        title={"The Right Packaging \nfor Every Industry"}
        titleHighlight="The Right Packaging"
        subtitle="From Health & Pharma to Restaurants — PrintsFly creates specialized, brand-aligned packaging solutions for every vertical."
        cta={{ label: "Get a Free Quote", href: "/contact" }}
        ctaSecondary={{ label: "See Our Story", href: "/about" }}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <ServicesOverview />

      <ServiceIndustry
        id="health"
        badge="Health & Pharma"
        accentColor="#0066CC"
        bgColor="white"
        title={"Compliance-First Packaging \nfor Healthcare"}
        subtitle="Accurate, hygienic, and high-compliance packaging that meets industry standards."
        description="In medical and pharmaceutical packaging, accuracy is non-negotiable. Our in-house production includes rigorous pre-press checks, color-accurate printing, and careful material selection to ensure every batch is regulation-compliant."
        highlights={[
          "FSC-certified paper board available",
          "Food-grade ink options for pharma packaging",
          "Minimum order 500 units for most products",
          "Serialization-ready labels on request",
          "Express 48-hour turnaround for reorders",
        ]}
        products={[
          { name: "MRI/X-Ray Folders", desc: "Heavy-duty kraft or art board folders for scan reports.", gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)", specs: ["A4/Legal size", "300gsm+", "Custom branding"], icon: FolderOpen },
          { name: "Prescription Pads", desc: "Custom-designed prescription pads with security features.", gradient: "linear-gradient(135deg,#1e40af,#60a5fa)", specs: ["50/100 sheets", "Sequential numbering", "Doctor letterhead"], icon: FileText },
          { name: "Prescription Holders", desc: "Branded envelopes and holders for prescription storage.", gradient: "linear-gradient(135deg,#1d4ed8,#93c5fd)", specs: ["A5/A4 options", "Laminated finish", "Bulk 1000+"], icon: Folder },
          { name: "Medicine Box", desc: "Mono cartons for OTC and branded pharma products.", gradient: "linear-gradient(135deg,#2563eb,#bfdbfe)", specs: ["Custom sizes", "CMYK + Pantone", "Tamper-proof"], icon: Package },
          { name: "Lab Report Folder", desc: "Professional report folders for diagnostic centers.", gradient: "linear-gradient(135deg,#1e3a8a,#6366f1)", specs: ["Logo embossing", "Gloss/Matte", "500+ MCQ"], icon: ClipboardList },
          { name: "Patient File Cover", desc: "Durable file covers for OPD and indoor patient records.", gradient: "linear-gradient(135deg,#3730a3,#818cf8)", specs: ["A4 landscape", "Spine printing", "Recyclable board"], icon: BookOpen },
          { name: "OPD Booklets", desc: "Carbonless or plain OPD registration booklets.", gradient: "linear-gradient(135deg,#4338ca,#a5b4fc)", specs: ["50/100 pages", "Carbonless option", "Custom cover"], icon: BookMarked },
          { name: "Appointment Cards", desc: "Professional visiting and appointment cards for clinics.", gradient: "linear-gradient(135deg,#4f46e5,#c7d2fe)", specs: ["Standard/Square", "Matte lamination", "250gsm"], icon: CreditCard },
        ]}
      />

      <ServiceIndustry
        id="retail"
        badge="Retail & FMCG"
        accentColor="#E91E8C"
        bgColor="light"
        title={"Command Attention \non the Shelf"}
        subtitle="Eye-catching, shelf-ready packaging that protects your product and drives sales."
        description="In FMCG and retail, shelf impact is everything. Our designers and press operators work together to ensure your product stands out — whether you're a premium D2C brand or a mass-market FMCG favorite."
        highlights={[
          "Pantone color matching for brand consistency",
          "Shelf-ready packaging with display-ready cases",
          "Sustainable kraft and recycled board options",
          "Private label manufacturing available",
          "Minimum order from 500 units",
        ]}
        products={[
          { name: "Mono Cartons", desc: "Custom folding cartons for retail product packaging.", gradient: "linear-gradient(135deg,#be185d,#f9a8d4)", specs: ["Auto-bottom", "Tuck top", "Custom die"], icon: Package2 },
          { name: "Packaging Boxes", desc: "Premium rigid and folding boxes for D2C brands.", gradient: "linear-gradient(135deg,#9d174d,#fbcfe8)", specs: ["Rigid/Folding", "Magnetic closure", "FSC board"], icon: Box },
          { name: "Posters & Standees", desc: "In-store POS material — rollup, standee, hanging.", gradient: "linear-gradient(135deg,#831843,#f472b6)", specs: ["A3/A2/A1", "150gsm art paper", "UV coating"], icon: Layers },
          { name: "Danglers & Wobblers", desc: "Shelf and hanging POS display materials.", gradient: "linear-gradient(135deg,#701a75,#e879f9)", specs: ["Custom shapes", "Die-cut", "Plastic/Board"], icon: Tag },
          { name: "Paper Bags", desc: "Branded carry bags for retail and gifting.", gradient: "linear-gradient(135deg,#86198f,#f0abfc)", specs: ["Twisted/Flat cord", "Matte/Gloss", "250gsm+"], icon: ShoppingBag },
          { name: "Product Labels", desc: "Self-adhesive labels for FMCG and retail products.", gradient: "linear-gradient(135deg,#a21caf,#d946ef)", specs: ["Roll/Sheet", "Waterproof option", "Hot stamping"], icon: Sticker },
          { name: "Stickers & Decals", desc: "Custom stickers for branding and product decoration.", gradient: "linear-gradient(135deg,#c026d3,#e879f9)", specs: ["Kiss-cut", "Die-cut", "Clear/White vinyl"], icon: Sparkles },
          { name: "Retail Shelf Strips", desc: "Shelf talkers and channel strips for organized display.", gradient: "linear-gradient(135deg,#d946ef,#f0abfc)", specs: ["Magnetic/Adhesive", "Custom sizing", "Reusable"], icon: AlignLeft },
        ]}
      />

      <ServiceIndustry
        id="education"
        badge="Education"
        accentColor="#059669"
        bgColor="white"
        title={"Great Learning Starts \nwith Quality Printing"}
        subtitle="Custom books, notebooks, and workbooks designed for durability and clarity."
        description="Printing is a core requirement for educational institutions and ed-tech companies. PrintsFly delivers high-volume, cost-effective print solutions for schools, coaching centers, and universities."
        highlights={[
          "Bulk order discounts from 1000 units",
          "Same cover design, multiple content variants",
          "Academic calendar printing with custom layouts",
          "Child-safe, non-toxic inks available",
          "Institution logo and branding on all materials",
        ]}
        products={[
          { name: "Answer Sheets", desc: "OMR-compatible and standard ruled answer sheets.", gradient: "linear-gradient(135deg,#065f46,#34d399)", specs: ["A4 size", "40/60/80 gsm", "Custom header"], icon: FileText },
          { name: "Notebooks & Workbooks", desc: "Soft and hard cover notebooks for students.", gradient: "linear-gradient(135deg,#047857,#6ee7b7)", specs: ["100/200 pages", "Ruled/Plain/Graph", "Bulk 500+"], icon: BookOpen },
          { name: "ID Cards", desc: "Durable PVC and paper ID cards for students and staff.", gradient: "linear-gradient(135deg,#059669,#a7f3d0)", specs: ["PVC/Paper", "Barcode/QR", "Lanyard hole"], icon: CreditCard },
          { name: "Prospectus & Brochures", desc: "Institutional brochures and admission prospectus.", gradient: "linear-gradient(135deg,#10b981,#d1fae5)", specs: ["A4/DL sizes", "Saddle stitched", "130gsm art"], icon: BookMarked },
          { name: "Hall Tickets", desc: "Security-printed admit cards for examinations.", gradient: "linear-gradient(135deg,#34d399,#ecfdf5)", specs: ["Serial numbered", "Watermark option", "Bulk only"], icon: Ticket },
          { name: "Certificates", desc: "Premium award and completion certificates.", gradient: "linear-gradient(135deg,#6ee7b7,#f0fdf4)", specs: ["A4/A3", "Foil stamping", "Embossed seal"], icon: Award },
          { name: "Timetables & Notices", desc: "Printed notice boards and academic timetables.", gradient: "linear-gradient(135deg,#065f46,#10b981)", specs: ["A2/A3", "Laminated", "Magnetic board option"], icon: CalendarDays },
          { name: "School Diaries", desc: "Custom academic diaries with school branding.", gradient: "linear-gradient(135deg,#047857,#34d399)", specs: ["A5/A6 size", "160 pages", "Spiral/Stitched"], icon: Calendar },
        ]}
      />

      <ServiceIndustry
        id="restaurant"
        badge="Restaurant & QSR"
        accentColor="#EA580C"
        bgColor="light"
        title={"Packaging That Delivers \nTaste and Brand Identity"}
        subtitle="Food-safe, visually stunning packaging that enhances the customer experience."
        description="For QSR and restaurant brands, packaging is a vital marketing touchpoint. Your brand should be visible on every burger box, paper bag, and tray liner. PrintsFly uses food-safe inks and FDA-compliant materials."
        highlights={[
          "Food-safe, FDA-compliant inks and materials",
          "Grease-proof and moisture-resistant options",
          "Delivery packaging tested for transit durability",
          "Custom mascot and illustration printing",
          "Chain-level consistency for 50+ outlets",
        ]}
        products={[
          { name: "Burger Boxes", desc: "Corrugated and SBS board burger packaging.", gradient: "linear-gradient(135deg,#9a3412,#fdba74)", specs: ["Grease-proof", "Custom sizes", "Offset print"], icon: Box },
          { name: "Cookie & Snack Boxes", desc: "Retail-ready snack packaging with windowed options.", gradient: "linear-gradient(135deg,#c2410c,#fed7aa)", specs: ["Window cut", "Food-safe", "Flat-pack available"], icon: Package },
          { name: "Pizza Boxes", desc: "Corrugated pizza boxes for delivery and dine-in.", gradient: "linear-gradient(135deg,#ea580c,#ffedd5)", specs: ["7\" to 18\"", "Ventilated", "Corrugated B-flute"], icon: Pizza },
          { name: "Paper Food Containers", desc: "Kraft and SBS containers for hot and cold food.", gradient: "linear-gradient(135deg,#f97316,#fef3c7)", specs: ["PE-coated", "Hot/Cold safe", "500 MCQ"], icon: Package2 },
          { name: "Tray Liners", desc: "Branded tray paper for QSR and dine-in restaurants.", gradient: "linear-gradient(135deg,#fb923c,#fef9c3)", specs: ["300x400mm std", "Custom size", "50gsm paper"], icon: Layers },
          { name: "Tissue Paper", desc: "Branded tissue paper for tables and takeaway.", gradient: "linear-gradient(135deg,#fdba74,#fff7ed)", specs: ["2-ply option", "Interleaved/Roll", "Embossed logo"], icon: Wind },
          { name: "Paper Bags", desc: "Kraft and glossy paper bags for takeaway orders.", gradient: "linear-gradient(135deg,#9a3412,#fb923c)", specs: ["Twisted cord", "Flat bottom", "Grease barrier"], icon: ShoppingBag },
          { name: "Menu Cards", desc: "Premium dine-in menus — laminated, spiral, board.", gradient: "linear-gradient(135deg,#7c2d12,#fdba74)", specs: ["Wipe-clean", "A4/A5/Trifold", "Foil option"], icon: UtensilsCrossed },
        ]}
      />

      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}
