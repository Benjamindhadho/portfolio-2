export const profile = {
  name: "Ben Dhadho",
  firstName: "Ben",
  role: "Full-stack Developer",
  tagline:
    "I help businesses grow by crafting fast, accessible web experiences — from pixel-perfect interfaces to the APIs behind them.",
  email: "dhadhobenjamin@gmail.com",
  location: "Voi, Kenya",
  availability: "Full-time / Freelance",
  website: "www.bendhadho.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "Github", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Discord", href: "https://discord.com" },
  ],
};

export const stats = [
  { value: "4", label: "Programming languages" },
  { value: "6", label: "Development tools" },
  { value: "8", label: "Years of experience" },
];

export const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 93 },
  { name: "GraphQL", level: 72 },
  { name: "Django", level: 70 },
];

export const projects = [
  {
    id: 1,
    slug: "educonnect",
    title: "EduConnect",
    summary:
      "A full-stack school management platform with role-specific portals, real-time notifications, and offline support.",
    tags: ["React Native", "Django", "GraphQL"],
  },
  {
    id: 2,
    slug: "shuleyetu",
    title: "ShuleYetu",
    summary:
      "A multi-tenant school data backend with strict, server-derived data scoping for every API resolver.",
    tags: ["Python", "Strawberry GraphQL", "PostgreSQL"],
  },
  {
    id: 3,
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    summary:
      "A component-driven portfolio site with two interchangeable visual identities sharing one design system.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development covers a wide range of tasks and processes involved in building modern websites and applications.",
    tag: "Career",
    date: "Oct 10, 2023",
    readTime: "1 min read",
  },
];
