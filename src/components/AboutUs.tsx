"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Brands Served" },
  { value: 5000, suffix: "+", label: "Orders Completed" },
  { value: 10, suffix: "+", label: "Cities Covered" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-7 bg-[#E91E8C] rounded-full" />
            <span className="text-[11px] font-bold tracking-[.12em] uppercase text-[#E91E8C]">
              About PrintsFly
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-black text-[#0A1172] leading-tight max-w-lg">
            Your Brand{" "}
            <span className="text-[#E91E8C]">Deserves</span>{" "}
            Better Packaging
          </h2>

          {/* Paragraphs */}
          <div className="mt-6 space-y-4">
            {[
              "PrintsFly is a new-age printing and packaging company that helps ambitious Indian brands elevate their unboxing, in-store, and operational print experience — without the hassle of dealing with multiple vendors.",
              "From mono cartons to food-grade boxes, and from prescription pads to retail collateral — every order is produced in-house at our Okhla facility using offset and digital presses, ensuring complete color accuracy.",
              "We pay attention to every small detail — die-lines, GSM, finish, and on-time dispatch — so you can focus entirely on building your brand.",
            ].map((p, i) => (
              <p
                key={i}
                className="
                  pl-4 text-sm leading-relaxed text-gray-500
                  border-l-2 border-[#E91E8C]/20
                "
              >
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="
                  rounded-xl border border-gray-100 bg-[#F8F9FF]
                  px-3 py-4 text-center
                  hover:border-[#E91E8C]/30 hover:shadow-sm
                  transition-all duration-200
                "
              >
                <p
                  className="text-[22px] font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg,#E91E8C,#0A1172)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-[11px] font-medium text-gray-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main visual card */}
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl flex items-end p-7"
            style={{
              background:
                "linear-gradient(145deg,#0A1172 0%,#2d1b8e 45%,#E91E8C 100%)",
            }}
          >
            {/* Watermark monogram */}
            <span
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]
                select-none pointer-events-none
                text-[96px] font-black tracking-[-4px] leading-none
                text-white/[0.05]
              "
            >
              PF
            </span>

            {/* Glass info card */}
            <div
              className="relative z-10 w-full rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "0.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                In-house Production
              </p>
              <p className="mt-1 text-xs text-white/65 leading-relaxed">
                Offset &amp; Digital Presses &nbsp;·&nbsp; Die-cutting
                &nbsp;·&nbsp; Lamination &nbsp;·&nbsp; Foiling
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="
              absolute -bottom-4 -right-4 z-10
              bg-white border border-gray-100 rounded-2xl
              px-4 py-3 flex items-center gap-3
              shadow-[0_8px_24px_-8px_rgba(10,17,114,0.15)]
            "
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E91E8C]/20 to-[#0A1172]/20 flex items-center justify-center text-lg">
              🏭
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1172] font-heading">
                Made in India
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Factory: Okhla, New Delhi
              </p>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-3xl bg-[#00BFFF]/15 blur-2xl" />
        </motion.div>

      </div>
    </section>
  );
}