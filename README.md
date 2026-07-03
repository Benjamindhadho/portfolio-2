# Ben Portfolio

Dark, glassmorphic, gradient-accented (violet → cyan) portfolio using
Inter + Space Grotesk, built with React Router so each project on the
Work section links out to its own dedicated case study page.

## Setup

```bash
npm install
npm run dev
```

Add `public/ProfilePhoto.png` for the About section photo.

## Routes

| Path                       | Page                              |
|-----------------------------|------------------------------------|
| `/`                         | Home (all sections, incl. Work grid) |
| `/work/educonnect`          | EduConnect case study              |
| `/work/shuleyetu`           | ShuleYetu case study               |
| `/work/personal-portfolio`  | Personal Portfolio case study      |
| `*`                         | 404                                |

## Structure

```
src/
  components/
    common/        Container.jsx, SectionLabel.jsx, Badge.jsx, Icons.jsx
    ui/             GlassCard.jsx
    layout/         Navbar.jsx, Footer.jsx
    sections/       Hero.jsx, About.jsx, Skills.jsx,
                     Work.jsx, ProjectCard.jsx,
                     Blog.jsx, BlogCard.jsx,
                     Contact.jsx, ContactForm.jsx
    case-study/      CaseStudyLayout.jsx (shared chrome + CaseStudySection block)
  data/             profile.js (slugs live here, drive the routes/links)
  pages/
    HomePage.jsx
    NotFound.jsx
    case-studies/    EduConnect.jsx, ShuleYetu.jsx, PersonalPortfolio.jsx
                      — one file per project, each with its own written content
  App.jsx            route definitions
  main.jsx           BrowserRouter setup
```

