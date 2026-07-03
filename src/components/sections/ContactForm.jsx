import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Your message has been sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label className="block mb-2 text-sm text-zinc-300">
          Name
        </label>

        <input
          type="text"
          name="user_name"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm text-zinc-300">
          Email
        </label>

        <input
          type="email"
          name="user_email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm text-zinc-300">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm text-zinc-300">
          Message
        </label>

        <textarea
          name="message"
          rows="6"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-sm text-zinc-300">{status}</p>
      )}
    </form>
  );
}