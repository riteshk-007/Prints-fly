"use client";
import { Star } from "lucide-react";

const reviews = [
  {
    initials: "RV",
    name: "Rajesh V.",
    city: "Delhi",
    tag: "Retail",
    tagStyle: "bg-[#0A1172]/10 text-[#0A1172]",
    avatarStyle: "bg-[#E91E8C]/10 text-[#C0145E]",
    text: "Earlier, I had no idea about GSM or matte vs gloss. The PrintsFly team guided me step-by-step — which material would be more durable and which would be cost-effective. Very humble people, and the work quality is solid. Support local companies like this!",
  },
  {
    initials: "PM",
    name: "Priyanka Mehta",
    city: "Ahmedabad",
    tag: "Events",
    tagStyle: "bg-[#E91E8C]/10 text-[#C0145E]",
    avatarStyle: "bg-[#0A1172]/10 text-[#0A1172]",
    text: "I needed high-quality digital printing for wedding invites. PrintsFly suggested a better paper GSM, which saved money and made the final look more premium. Very honest and professional team — you can trust them blindly.",
  },
  {
    initials: "PI",
    name: "Priya Iyer",
    city: "Bengaluru",
    tag: "Corporate",
    tagStyle: "bg-[#00BFFF]/10 text-[#007799]",
    avatarStyle: "bg-[#00BFFF]/10 text-[#007799]",
    text: "We use them for corporate brochures and annual reports. The offset printing is extremely clean — no smudging, no alignment issues. Even in bulk orders of 5,000 units, the consistency remained perfect. The team is very responsive on WhatsApp.",
  },
  {
    initials: "AG",
    name: "Amit Goel",
    city: "Delhi",
    tag: "Pharma",
    tagStyle: "bg-[#0A1172]/10 text-[#0A1172]",
    avatarStyle: "bg-[#E91E8C]/10 text-[#C0145E]",
    text: "I used to get my letterheads printed elsewhere — PrintsFly’s finish is far superior. The matte lamination feels premium. They also suggested design tweaks that helped reduce final costs. Honest work.",
  },
  {
    initials: "SK",
    name: "Sunita Kapoor",
    city: "Mumbai",
    tag: "FMCG",
    tagStyle: "bg-[#E91E8C]/10 text-[#C0145E]",
    avatarStyle: "bg-[#0A1172]/10 text-[#0A1172]",
    text: "The packaging boxes for our FMCG products looked premium right off the shelf. They delivered 2 days before the deadline, and the quality matched the sample perfectly. Reordering is now just a WhatsApp message away.",
  },
  {
    initials: "AJ",
    name: "Ankur Joshi",
    city: "Pune",
    tag: "D2C Brand",
    tagStyle: "bg-[#00BFFF]/10 text-[#007799]",
    avatarStyle: "bg-[#00BFFF]/10 text-[#007799]",
    text: "The die-cutting and finish of the mono cartons were outstanding. Our retail buyers even asked who our printer is. When packaging itself becomes a brand ambassador — that’s exactly what we wanted. We’ll continue with them going forward.",
  },
];

export function CustomerReviews() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C]">
            Customer Reviews
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-black text-[#0A1172] leading-tight">
            Brands That Trust Us
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
            Real feedback from founders, operators, and brand managers
            who have worked with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="
                flex flex-col rounded-2xl border border-gray-100 bg-white p-6
                shadow-[0_4px_24px_-8px_rgba(10,17,114,0.10)]
                hover:border-[#E91E8C]/30 hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed text-gray-600 italic flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`
                    w-9 h-9 rounded-full flex-shrink-0 flex items-center
                    justify-center font-bold text-xs ${r.avatarStyle}
                  `}
                >
                  {r.initials}
                </div>

                {/* Name + City */}
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-semibold text-sm text-[#0A1172] truncate">
                    {r.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{r.city}</p>
                </div>

                {/* Tag */}
                <span
                  className={`
                    text-[10px] font-semibold tracking-wide px-2.5 py-1
                    rounded-full flex-shrink-0 ${r.tagStyle}
                  `}
                >
                  {r.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}