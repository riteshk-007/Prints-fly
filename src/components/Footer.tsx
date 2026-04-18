import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon as Facebook, InstagramIcon as Instagram, LinkedinIcon as Linkedin } from "./SocialIcons";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const industries = [
  { label: "Health & Pharma", href: "/services#health" },
  { label: "Retail & FMCG", href: "/services#retail" },
  { label: "Education", href: "/services#education" },
  { label: "Restaurant & QSR", href: "/services#restaurant" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image src={"/logo.png"} alt="PrintsFly" className="h-10 w-auto brightness-0 invert" width={140} height={40} />
            </Link>
            <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-xs">
              Your premium partner for end-to-end printing and packaging solutions. 
              Built for ambitious Indian brands who value quality and reliability.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-magenta hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-magenta">Useful Links</h4>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-magenta">Industries</h4>
            <ul className="mt-6 space-y-3">
              {industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-magenta">Contact Us</h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="text-magenta mt-1 shrink-0" />
                <span className="text-white/50 text-sm group-hover:text-white transition-colors underline underline-offset-4 decoration-white/10">sales@printsfly.in</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone size={16} className="text-magenta mt-1 shrink-0" />
                <span className="text-white/50 text-sm group-hover:text-white transition-colors">+91 82876 22854</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-magenta mt-1 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed group-hover:text-white transition-colors">
                  1913/143, Ganesh pura <br />
                  Tri Nagar Delhi 110035
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <span>© 2026 PrintsFly. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

