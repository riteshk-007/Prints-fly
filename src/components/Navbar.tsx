"use client"
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/75 backdrop-blur-2xl shadow-[0_8px_32px_-12px_rgba(10,17,114,0.18)] border-b border-white/40"
        : "bg-white/95 backdrop-blur-md"
        }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-magenta/40 to-transparent" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-magenta/30 to-cyan/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <Image src={"/logo.png"} alt="PrintsFly" className="h-9 w-auto transition-transform duration-500 group-hover:scale-105" width={140} height={40} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-2">
            {pageLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group relative inline-flex items-center rounded-full px-4 py-2 text-base  transition-all ${isActive(l.href) ? "text-magenta" : "text-navy/70 hover:text-navy"
                    }`}
                >
                  <span className="relative z-10">{l.label}</span>
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-magenta"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 lg:flex ml-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-magenta/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-magenta/30"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Get a Quote</span>
            <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-gray-100 bg-white/70 p-2 text-navy backdrop-blur transition-colors hover:border-magenta/40 hover:text-magenta lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${open ? "max-h-[80vh] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-navy/30 mb-4 block px-2">Navigation</span>
            <ul className="grid grid-cols-1 gap-1">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-4 text-sm font-bold transition-all ${isActive(l.href) ? "bg-magenta/5 text-magenta" : "text-navy hover:bg-light"
                      }`}
                  >
                    {l.label}
                    {isActive(l.href) ? <div className="w-1.5 h-1.5 rounded-full bg-magenta" /> : <ArrowRight size={14} className="text-navy/20" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-brand p-4 text-sm font-black text-white shadow-lg shadow-magenta/20"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}

