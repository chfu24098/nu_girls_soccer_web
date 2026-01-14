import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { NewsList } from "./pages/NewsList";
import { NewsDetail } from "./pages/NewsDetail";
import { MatchSchedule } from "./pages/MatchSchedule";
import { Results } from "./pages/Results";
import { Members } from "./pages/Members";
import { Access } from "./pages/Access";
import { Wireframe } from "./pages/Wireframe";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/schedule" element={<MatchSchedule />} />
            <Route path="/results" element={<Results />} />
            <Route path="/members" element={<Members />} />
            <Route path="/access" element={<Access />} />
            <Route path="/wireframe" element={<Wireframe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}