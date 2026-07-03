import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";
import BlogCard from "./BlogCard";
import { blogPosts } from "../../data/profile";

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <SectionLabel index="04">Blog</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
              Thoughts on tech &amp; business
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5 w-fit"
          >
            Subscribe
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
