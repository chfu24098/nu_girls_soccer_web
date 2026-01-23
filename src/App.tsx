import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { NewsList } from "./pages/NewsList";
import { NewsDetail } from "./pages/NewsDetail";
import { MatchSchedule } from "./pages/MatchSchedule";
import { Results } from "./pages/Results";
import { Members } from "./pages/Members";
import { MemberDetail } from "./pages/MemberDetail";
import { Access } from "./pages/Access";
import { Wireframe } from "./pages/Wireframe";

function AnimatedRoutes() {
  const location = useLocation();
  
  // デバッグ用ログ
  console.log("Current location:", location.pathname);

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<NewsList />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/schedule" element={<MatchSchedule />} />
      <Route path="/results" element={<Results />} />
      <Route path="/members" element={<Members />} />
      <Route path="/members/:number" element={<MemberDetail />} />
      <Route path="/access" element={<Access />} />
      <Route path="/wireframe" element={<Wireframe />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <ScrollToTopButton /> 
    </BrowserRouter>
  );
}