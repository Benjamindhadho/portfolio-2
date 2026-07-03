import CaseStudyLayout, { CaseStudySection } from "../../components/case-study/CaseStudyLayout";
import { projects } from "../../data/profile";

const meta = [
  { label: "Role", value: "Backend Developer" },
  { label: "Timeline", value: "6 weeks" },
  { label: "Stack", value: "Django, Strawberry" },
  { label: "Focus", value: "Data isolation" },
];

export default function ShuleYetuCaseStudy() {
  return (
    <CaseStudyLayout
      title="ShuleYetu"
      tagline="A multi-tenant school data backend where every resolver enforces strict, server-derived data scoping — no school's data can ever leak into another's."
      tags={["Python", "Django", "Strawberry GraphQL", "PostgreSQL"]}
      meta={meta}
      prevProject={projects.find((p) => p.slug === "educonnect")}
      nextProject={projects.find((p) => p.slug === "personal-portfolio")}
    >
      <CaseStudySection heading="The problem">
        <p>
          ShuleYetu needed to serve many schools from one GraphQL API. The
          early implementation filtered records inconsistently across
          resolvers, which meant a single missed filter could expose one
          school's students or grades to another school's staff account.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Debugging and root cause">
        <p>
          While auditing the resolvers I traced a recurring{" "}
          <code className="text-cyan-300">TypeError</code> back to code that
          iterated directly over a <code className="text-cyan-300">School</code>{" "}
          object instead of a queryset — a small bug, but one symptomatic of
          a bigger gap: there was no single, enforced pattern for scoping
          data to a school.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="The fix">
        <p>
          I introduced an explicit{" "}
          <code className="text-cyan-300">_get_school_for_user</code> helper
          used directly inside every resolver, paired with{" "}
          <code className="text-cyan-300">qs.filter(school=school)</code> as
          the only sanctioned way to scope a queryset. The school is always
          derived from the authenticated user's profile server-side, never
          accepted as client input. I also standardized error handling across
          resolvers with consistent{" "}
          <code className="text-cyan-300">try/except</code> blocks that
          preserve intentional <code className="text-cyan-300">GraphQLError</code>{" "}
          raises rather than swallowing them.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Outcome">
        <p>
          Every resolver in the codebase now follows one auditable pattern
          for tenant isolation, which turned a category of one-off security
          bugs into a single, reviewable convention — and made it the
          default backend pattern I carry into every multi-tenant project
          since.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
