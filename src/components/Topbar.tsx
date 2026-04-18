import { Phone, Mail, Clock } from "lucide-react";

export function Topbar() {
  return (
    <div className="relative overflow-hidden bg-navy text-white text-[10px]  uppercase tracking-[0.1em]">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-magenta/30 blur-2xl" />
        <div className="absolute -right-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan/30 blur-2xl" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 px-6 py-2 sm:flex-row">
        <div className="flex items-center gap-6">
          <a href="tel:+918287622854" className="group flex items-center gap-2 transition-all hover:text-cyan">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-cyan/20">
              <Phone className="h-3 w-3" />
            </span>
            <span className="tracking-widest">+91 82876 22854</span>
          </a>
        </div>

        <div className="hidden items-center gap-2 text-white/70 md:flex">
          <Clock className="h-3 w-3" />
          <span className="tracking-wide">Mon–Sat · 9:30 AM – 7:00 PM</span>
        </div>

        <a href="mailto:sales@printsfly.in" className="group flex items-center gap-1.5 transition-colors hover:text-cyan-brand">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-magenta/20">
            <Mail className="h-3 w-3" />
          </span>
          <span className="font-medium tracking-wide">sales@printsfly.in</span>
        </a>
      </div>
    </div>
  );
}
