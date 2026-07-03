import { useState } from "react";
import { SendIcon } from "../common/Icons";

const FIELD_CLASS =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, an API route, etc.)
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Your name
          </label>
          <input id="name" name="name" required value={values.name} onChange={handleChange} placeholder="Jane Doe" className={FIELD_CLASS} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Your email
          </label>
          <input id="email" type="email" name="email" required value={values.email} onChange={handleChange} placeholder="jane@company.com" className={FIELD_CLASS} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-zinc-400">
          Your message
        </label>
        <textarea id="message" name="message" required rows={4} value={values.message} onChange={handleChange} placeholder="Tell me about your project..." className={`${FIELD_CLASS} resize-none`} />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02] w-fit"
      >
        {submitted ? "Message sent" : "Send message"}
        <SendIcon className="w-4 h-4" />
      </button>
    </form>
  );
}
