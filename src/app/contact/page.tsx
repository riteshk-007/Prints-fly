"use client";

import { PageHero } from "@/components/PageHero";
import { ContactMain } from "@/components/ContactMain";
import { ContactMap } from "@/components/ContactMap";
import { ContactFAQ } from "@/components/ContactFAQ";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-light">
      <PageHero
        badge="Contact Us"
        title={"Let's Talk. Get a Quote. \nGet Started."}
        titleHighlight="Get a Quote"
        subtitle="From packaging inquiries to reorders — the PrintsFly team is just a WhatsApp message away."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        align="center"
      />
      <ContactMain />
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
