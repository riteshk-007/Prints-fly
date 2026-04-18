"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

const faqs = [
  {
    q: "What is the Minimum Order Quantity (MOQ)?",
    a: "It varies by product. For prescription pads and ID cards, the MCQ is 100 units. For mono cartons and packaging boxes, it's 500 units. Bulk discounts are available for orders over 1,000 units."
  },
  {
    q: "Can I get a sample order before final delivery?",
    a: "Yes, we provide digital proofs for free. Physical samples (press proofs) are also available for a nominal charge. We highly recommend a physical sample before confirming bulk orders to ensure absolute satisfaction."
  },
  {
    q: "What is the standard turnaround time?",
    a: "Standard orders take 5-7 working days after proof approval. Rush orders (with extra charges) can be completed in 48-72 hours. Reorders with exactly the same specs usually take 3-4 days."
  },
  {
    q: "How should I send my design files?",
    a: "We accept print-ready PDFs (with bleed), AI, CDR, or PSD files. If you don't have a design ready, our in-house team provides design support — free for all orders above ₹10,000."
  },
  {
    q: "Is Pan-India delivery available?",
    a: "Yes, we ship across India via trusted partners like BlueDart, Delhivery, and DTDC. For clients in Delhi-NCR, same-day pickup from our Okhla factory is also available."
  },
  {
    q: "Do you provide proper GST invoices?",
    a: "Absolutely. Every order comes with a valid GST invoice. We are an MSME-registered company, and all standard packaging HSN codes are applied."
  },
  {
    q: "Do you provide end-to-end design services?",
    a: "We offer basic design support for free on orders above ₹10,000. For complex branding, mascot design, or full brand identity work, nominal design fees apply. Let's discuss your vision on WhatsApp."
  }
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <SectionBadge text="FAQs" />
          <h2 className="mt-4 text-3xl lg:text-4xl font-black text-navy font-heading">
            Frequently Asked <br />
            <span className="text-magenta">Questions</span>
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={`font-heading font-bold text-lg transition-colors duration-300 ${
                  openIndex === i ? "text-magenta" : "text-navy group-hover:text-magenta"
                }`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-magenta transition-transform duration-500 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-500 text-sm leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
