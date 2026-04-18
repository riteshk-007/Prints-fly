"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "health", label: "Health & Pharma" },
  { id: "retail", label: "Retail & FMCG" },
  { id: "education", label: "Education" },
  { id: "restaurant", label: "Restaurant & QSR" },
];

const stats = [
  { value: "15+", label: "Product categories" },
  { value: "50+", label: "Happy brand clients" },
  { value: "2-5", label: "Days average delivery" },
  { value: "500+", label: "Design variants delivered" },
];

export function ServicesOverview() {
  const [activeTab, setActiveTab] = useState("health");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Industry Tabs */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-navy text-white shadow-lg shadow-navy/20 border-navy"
                  : "bg-light text-navy/50 border-navy/5 hover:border-navy/20 hover:text-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-navy/5">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl font-black text-magenta font-heading tracking-tight">{stat.value}</div>
              <div className="text-[10px] font-black text-navy/30 uppercase tracking-[0.2em] mt-3">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
