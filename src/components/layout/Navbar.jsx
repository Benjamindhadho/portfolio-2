import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { MenuIcon, XIcon } from "../common/Icons";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-white">
          ben<span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">.dev</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03]"
        >
          Let's talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950/95 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
