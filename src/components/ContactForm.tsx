"use client"
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";

type Variant = "glass" | "card";

export function ContactForm({ variant = "card", title }: { variant?: Variant; title?: string }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setError(null);

    const phone = formData.get("phone") as string;
    if (!/^\d{10}$/.test(phone.replace(/\D/g, "").slice(-10))) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: phone,
        company: formData.get("company"),
        industry: formData.get("industry"),
        product: formData.get("product"),
        quantity: formData.get("quantity"),
        city: formData.get("city"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setDone(true);
      form.reset();
    } catch (err) {
      setError("Failed to send enquiry. Please try again later.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const wrap =
    variant === "glass"
      ? "glass shadow-glow-magenta"
      : "bg-card shadow-[0_30px_60px_-30px_rgba(10,17,114,0.35)] border border-border";

  const inputCls =
    "w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition-all focus:border-magenta focus:ring-4 focus:ring-magenta/15";

  return (
    <div className={`relative overflow-hidden rounded-3xl ${wrap}`}>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={onSubmit}
            className="p-6 sm:p-8"
          >
            {title && (
              <h3 className="mb-5 font-heading text-xl font-black text-navy">
                {title}
              </h3>
            )}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input required name="name" placeholder="Your Name *" className={inputCls} />
              <div className="flex items-center rounded-xl border border-border bg-white/80 focus-within:border-magenta focus-within:ring-4 focus-within:ring-magenta/15 transition-all">
                <span className="pl-4 text-sm text-navy/40 font-bold">+91</span>
                <input
                  required
                  name="phone"
                  inputMode="numeric"
                  placeholder="WhatsApp Number *"
                  className="w-full bg-transparent px-3 py-3 text-sm font-medium text-navy outline-none placeholder:text-navy/30"
                />
              </div>
              <input required type="email" name="email" placeholder="Email Address *" className={`${inputCls} sm:col-span-2`} />
              
              <input required name="company" placeholder="Brand / Company Name" className={inputCls} />
              <select required name="industry" className={inputCls} defaultValue="">
                <option value="" disabled>Select Industry *</option>
                <option>Health & Pharma</option>
                <option>Retail & FMCG</option>
                <option>Education</option>
                <option>Restaurant & QSR</option>
                <option>Other</option>
              </select>

              <input required name="product" placeholder="Product Needed (e.g. Mono Cartons) *" className={inputCls} />
              <input name="quantity" placeholder="Approx. Quantity" className={inputCls} />

              <input name="city" placeholder="City & State" className={`${inputCls} sm:col-span-2`} />
              <textarea
                name="message"
                rows={3}
                placeholder="Any special requirements or details..."
                className={`${inputCls} sm:col-span-2 resize-none`}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 flex items-center gap-2 text-red-500 text-sm"
              >
                <AlertCircle className="h-4 w-4" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow-magenta transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending Enquiry...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We respect your privacy. No spam — ever.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 px-6 text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-magenta/10 text-magenta">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-2xl font-black text-navy font-heading">Enquiry Sent!</h3>
            <p className="mb-8 text-sm text-muted-foreground max-w-[280px]">
              Thank you for reaching out. Our team will get back to you within 24 business hours.
            </p>
            <button
              onClick={() => setDone(false)}
              className="flex items-center gap-2 text-sm font-semibold text-magenta hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
