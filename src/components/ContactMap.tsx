"use client";
import { ExternalLink } from "lucide-react";

const primaryLocation = {
  type: "Corporate HQ & Factory",
  name: "PrintsFly Tri Nagar Hub",
  address: "1913/143, Ganesh pura, Tri Nagar, Delhi — 110035",
  embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.3769182544315!2d77.16274927550246!3d28.6783695756398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzQyLjEiTiA3N8KwMDknNTUuMiJF!5e0!3m2!1sen!2sin!4v1776513627502!5m2!1sen!2sin",
  link: "https://www.google.com/maps?q=28.6783696,77.1653242&z=17&hl=en",
};

export function ContactMap() {
  return (
    <section className="bg-light py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl shadow-navy/5 group">
          <div className="h-[450px] relative overflow-hidden">
            <iframe 
              src={primaryLocation.embed}
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-magenta/10 text-magenta">
                {primaryLocation.type}
              </span>
              
              <h3 className="font-heading font-black text-2xl text-navy">{primaryLocation.name}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-sm">
                {primaryLocation.address}
              </p>
            </div>
            
            <a 
              href={primaryLocation.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-magenta transition-all hover:scale-105 shadow-lg shadow-navy/20"
            >
              Get Directions <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
