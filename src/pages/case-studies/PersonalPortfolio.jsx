import CaseStudyLayout, { CaseStudySection } from "../../components/case-study/CaseStudyLayout";
import { projects } from "../../data/profile";

const meta = [
  { label: "Role", value: "Designer & Developer" },
  { label: "Timeline", value: "Ongoing" },
  { label: "Stack", value: "React, Tailwind" },
  { label: "Variants", value: "2 visual identities" },
];

export default function PersonalPortfolioCaseStudy() {
  return (
    <CaseStudyLayout
      title="Personal Portfolio"
      tagline="A component-driven portfolio site engineered to support two completely different visual identities — Terminal/Blueprint and Dark Editorial — without duplicating logic."
      tags={["React", "TypeScript", "React Router", "Tailwind CSS"]}
      meta={meta}
      prevProject={projects.find((p) => p.slug === "shuleyetu")}
    >
      <CaseStudySection heading="The problem">
        <p>
          Iterating on visual design usually means choosing between rewriting
          a site from scratch or fighting an existing component tree that
          wasn't built to flex. I wanted to design freely — testing a
          terminal-inspired aesthetic next to a dark editorial magazine
          look — without forking the codebase every time.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="What I built">
        <p>
          Every section — hero, about, skills, work, blog, contact — is a
          standalone, data-driven component that reads its content from a
          single source file rather than hardcoded JSX. That meant a new
          visual identity could reuse the same data and routing while
          swapping only the presentational layer: typography, color tokens,
          spacing scale, and the small UI primitives (cards, badges) each
          design leans on.
        </p>
        <p>
          Shared building blocks like <code className="text-cyan-300">ProjectCard</code>,{" "}
          <code className="text-cyan-300">BlogCard</code>, and{" "}
          <code className="text-cyan-300">ContactForm</code> stayed
          consistent in behavior across both designs, with namespace
          isolation in the CSS custom properties so the two aesthetics never
          bled into each other.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="This page">
        <p>
          This case-study layout is itself part of that system: one shared{" "}
          <code className="text-cyan-300">CaseStudyLayout</code> component
          handles the chrome (nav, hero, meta strip, prev/next), while each
          project gets its own dedicated page file for its written content —
          easy to extend with screenshots, metrics, or embedded demos per
          project without touching the others.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
