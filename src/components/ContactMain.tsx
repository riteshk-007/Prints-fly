"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin, FacebookIcon as Facebook } from "./SocialIcons";
import { SectionBadge } from "./SectionBadge";
import { ContactForm } from "./ContactForm";

const contactCards = [
  { icon: Phone, label: "Call / WhatsApp", value: "+91 82876 22854", sub: "Mon–Sat 9:30 AM – 7:10 PM" },
  { icon: Mail, label: "Official Email", value: "sales@printsfly.in", sub: "Response within 4 business hours" },
  { icon: MapPin, label: "Corporate Office & Factory", value: "1913/143, Ganesh pura\nTri Nagar, Delhi – 110035", sub: "Central production & Admin hub" },
];

export function ContactMain() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-2">
          <SectionBadge text="Get in Touch" />
          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-navy font-heading leading-tight">
            Response Guaranteed <br />
            <span className="text-magenta">Within 24 Hours</span>
          </h2>
          <p className="mt-6 text-navy/50 text-base leading-relaxed max-w-md">
            Whether it&apos;s a bulk order or a sample request — quotes are available for everyone. 
            For the fastest communication, reach out to us on WhatsApp.
          </p>

          <div className="mt-12 flex flex-col gap-5">
            {contactCards.map((card, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-5 p-6 rounded-[2rem] bg-light border border-navy/5 hover:border-magenta/20 transition-all duration-500 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center bg-magenta/10 text-magenta group-hover:bg-magenta group-hover:text-white transition-all duration-500">
                  <card.icon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-magenta mb-1.5 block">{card.label}</span>
                  <p className="text-base font-bold text-navy leading-relaxed whitespace-pre-line">{card.value}</p>
                  {card.sub && <p className="text-xs text-navy/40 mt-1 font-medium">{card.sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a 
            href="https://wa.me/918287622854"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full py-4 rounded-2xl bg-[#25D366] text-white font-black text-sm flex items-center justify-center gap-3 shadow-lg shadow-green-200/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start WhatsApp Chat →
          </a>

          {/* Social Row */}
          <div className="mt-8 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Social, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-xl border border-navy/5 bg-white flex items-center justify-center text-navy/20 hover:bg-magenta hover:text-white hover:border-magenta transition-all"
              >
                <Social size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-3">
          <ContactForm title="Request a Quote" />
        </div>
      </div>
    </section>
  );
}
