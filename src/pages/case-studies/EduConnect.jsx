import CaseStudyLayout, { CaseStudySection } from "../../components/case-study/CaseStudyLayout";
import { projects } from "../../data/profile";

const meta = [
  { label: "Role", value: "Full-stack Developer" },
  { label: "Timeline", value: "4 months" },
  { label: "Platform", value: "React Native, Web" },
  { label: "Team", value: "Solo + 1 designer" },
];

export default function EduConnectCaseStudy() {
  return (
    <CaseStudyLayout
      title="EduConnect"
      tagline="A full-stack school management platform built for administrators, teachers, parents, and students — each with their own tailored portal."
      tags={["React Native", "Expo Router", "Django", "Strawberry GraphQL"]}
      meta={meta}
      nextProject={projects.find((p) => p.slug === "shuleyetu")}
    >
      <CaseStudySection heading="The problem">
        <p>
          Schools using EduConnect's predecessor relied on a patchwork of
          spreadsheets, group chats, and paper notices to communicate between
          staff, parents, and students. Information was scattered, slow to
          reach the people who needed it, and nearly impossible to audit.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="What I built">
        <p>
          A single mobile app with four role-specific portals — admin,
          teacher, parent, and student — each surfacing only the data and
          actions relevant to that role. On the backend, every query
          derives the requesting user's school from their authenticated
          profile rather than trusting any client-supplied value, closing
          off an entire category of cross-tenant data leaks.
        </p>
        <p>
          I refactored every screen onto a consistent layout pattern (layered
          headers, role-specific accent colors), extracted shared logic into
          custom hooks, modernized the in-app notification system with
          animated toasts, and added a network-awareness layer so the app
          degrades gracefully when connectivity drops mid-school-day.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Backend hardening">
        <p>
          Beyond features, I tightened the Django backend for production:
          environment-based secrets, enforced HTTPS headers, narrowed CORS,
          per-endpoint rate throttling, PostgreSQL connections over SSL, and
          rotating logs for incident review.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Outcome">
        <p>
          The result is a single source of truth schools can trust: parents
          get real-time updates instead of missed paper notices, teachers
          spend less time on admin overhead, and the multi-portal
          architecture made it straightforward to onboard new schools without
          custom code per client.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
