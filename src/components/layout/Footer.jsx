import Container from "../common/Container";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms &amp; Conditions</a>
        </div>
      </Container>
    </footer>
  );
}
