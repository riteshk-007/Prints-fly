"use client";



const brands = [
  "Burger King", "Xero Degrees", "Value & Variety", "Protiviti",
  "Fashion Factory", "Honey & Dough", "Malabar Gold", "Chinese Wok",
  "Anytime Fitness", "Zingbus"
];

export function TrustBar() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E91E8C]">
              Our Clients
            </p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-black text-[#0A1172]">
              Trusted by Leading Brands
            </h2>
          </div>

          <div className="text-sm font-semibold text-[#0A1172]">
            ✨ Next could be <span className="text-[#E91E8C] underline">YOU</span>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {brands.map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <span className="font-heading font-black text-sm sm:text-lg tracking-tighter text-navy whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT: CTA CARD */}
          <div
            className="
              rounded-2xl border border-gray-100 p-8
              shadow-[0_8px_30px_-10px_rgba(10,17,114,0.15)]
              bg-[#F8F9FF]
            "
          >
            <p className="text-xs uppercase tracking-widest text-[#E91E8C]">
              Work With Us
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0A1172] leading-snug">
              Let’s Build Your Brand Next
            </h3>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Join brands that trust us for high-quality printing & packaging.
              From concept to delivery — we handle everything.
            </p>

            <button
              className="
                mt-6 w-full rounded-xl
                bg-gradient-to-r from-[#E91E8C] to-[#0A1172]
                text-white font-semibold text-sm py-3
                hover:opacity-90 transition
              "
            >
              Get Started →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}