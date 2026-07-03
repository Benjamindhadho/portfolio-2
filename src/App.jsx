import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EduConnectCaseStudy from "./pages/case-studies/EduConnect";
import ShuleYetuCaseStudy from "./pages/case-studies/ShuleYetu";
import PersonalPortfolioCaseStudy from "./pages/case-studies/PersonalPortfolio";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/educonnect" element={<EduConnectCaseStudy />} />
      <Route path="/work/shuleyetu" element={<ShuleYetuCaseStudy />} />
      <Route path="/work/personal-portfolio" element={<PersonalPortfolioCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
