import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";


export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-light py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-20 right-10 h-80 w-80 rounded-full bg-magenta/10 blur-[100px]" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-magenta">
            Contact Us
          </span>
          <h2 className="mt-6 font-heading text-4xl font-black text-navy sm:text-5xl leading-tight">
            Let&apos;s Start Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">Next Project</span>
          </h2>
          <p className="mt-6 text-navy/50 text-base leading-relaxed max-w-lg">
            We&apos;re here to help you print smarter. Reach out and a packaging
            specialist will respond within a few hours.
          </p>

          <div className="mt-12 space-y-4">
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Call Us">
              <a href="tel:+918287622854" className="hover:text-magenta transition-colors font-bold">+91 82876 22854</a>
            </InfoCard>
            <InfoCard icon={<Mail className="h-5 w-5" />} title="Email">
              <a href="mailto:sales@printsfly.in" className="hover:text-magenta transition-colors font-bold">
                sales@printsfly.in
              </a>
            </InfoCard>
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Location">
              <a 
                href="https://www.google.com/maps?q=28.6783696,77.1653242&z=17&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-magenta transition-colors font-bold"
              >
                1913/143, Ganesh pura Tri Nagar Delhi 110035
              </a>
            </InfoCard>
          </div>

          <div className="mt-12 flex gap-4">
            {[
              { icon: InstagramIcon, href: "#", label: "Instagram" },
              { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
              { icon: FacebookIcon, href: "#", label: "Facebook" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-navy/5 bg-white text-navy transition-all hover:border-magenta hover:text-magenta hover:shadow-xl hover:shadow-magenta/10"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <ContactForm title="Send us a message" />
      </div>
    </section>
  );
}

function InfoCard({
  icon, title, children,
}: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
        {icon}
      </div>
      <div>
        <p className="font-display text-sm font-semibold text-navy-deep">{title}</p>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
