import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

// HomeとTeamは初回に読み込む（よく使われるため）
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";

// その他のページは遅延読み込み
const NewsList = lazy(() => import("./pages/NewsList").then(module => ({ default: module.NewsList })));
const NewsDetail = lazy(() => import("./pages/NewsDetail").then(module => ({ default: module.NewsDetail })));
const MatchSchedule = lazy(() => import("./pages/MatchSchedule").then(module => ({ default: module.MatchSchedule })));
const Results = lazy(() => import("./pages/Results").then(module => ({ default: module.Results })));
const Members = lazy(() => import("./pages/Members").then(module => ({ default: module.Members })));
const MemberDetail = lazy(() => import("./pages/MemberDetail").then(module => ({ default: module.MemberDetail })));
const Access = lazy(() => import("./pages/Access").then(module => ({ default: module.Access })));
const Wireframe = lazy(() => import("./pages/Wireframe").then(module => ({ default: module.Wireframe })));

// ローディングコンポーネント
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">読み込み中...</p>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  // デバッグ用ログ
  console.log("Current location:", location.pathname);

  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}

export default function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}