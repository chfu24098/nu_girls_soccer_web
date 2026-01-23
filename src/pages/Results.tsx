import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { resultsData } from "../data/resultsData";
import { SEO } from "../components/SEO";

export function Results() {
  const [selectedSeason, setSelectedSeason] = useState<string>(""); // 空文字列は最新シーズンを意味する
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const categorySelectorRef = useRef<HTMLDivElement>(null);
  const matchesPerPage = 10;

  const completedMatches = resultsData;

  // 利用可能なシーズンを取得（降順）
  const availableSeasons = Array.from(
    new Set(completedMatches.map((match) => match.season))
  ).sort((a, b) => b.localeCompare(a)); // 降順（最新が先）

  // 最新シーズンを取得
  const latestSeason = availableSeasons[0] || "2025";

  // 選択中のシーズン（空文字列の場合は最新シーズン）
  const currentSeason = selectedSeason || latestSeason;

  // カテゴリリストを動的に生成（選択中のシーズンの試合から）
  const seasonMatches = completedMatches.filter(
    (match) => match.season === currentSeason
  );
  const categoriesInSeason = Array.from(
    new Set(seasonMatches.map((match) => match.category))
  );
  const categories = ["ALL", ...categoriesInSeason];

  const filteredMatches = completedMatches.filter((match) => {
    // シーズンフィルター
    if (match.season !== currentSeason) return false;
    // カテゴリフィルター
    if (selectedCategory === "ALL") return true;
    return match.category === selectedCategory;
  });

  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = filteredMatches.slice(indexOfFirstMatch, indexOfLastMatch);

  const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (categorySelectorRef.current) {
      const offsetTop = categorySelectorRef.current.offsetTop - 80; // 80px for fixed header
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title="RESULT"
        description="NU GIRLS SOCCERの試合結果と戦績。関東大学女子サッカーリーグ、Blossom League、東京都女子サッカーリーグなどの試合結果を掲載。"
        keywords="試合結果,戦績,関東大学女子サッカーリーグ,試合記録,日本大学女子サッカー部"
      />
      <div className="min-h-screen bg-white">         {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 bg-gradient-to-br from-accent via-accent/90 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              <span className="text-primary">RESULT</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              これまでの試合結果と記録
            </p>
          </div>
        </section>

        {/* Season and Category Selector */}
        <section className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4" ref={categorySelectorRef}>
              {/* Season Selector */}
              <div className="relative">
                <label className="block text-xs text-gray-600 mb-1 text-center sm:text-left">
                  SEASON
                </label>
                <select
                  className="block appearance-none w-full sm:w-48 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={selectedSeason}
                  onChange={(e) => {
                    setSelectedSeason(e.target.value);
                    setSelectedCategory("ALL");
                    setCurrentPage(1);
                  }}
                >
                  {availableSeasons.map((season) => (
                    <option key={season} value={season}>
                      {season} SEASON
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute bottom-0 right-0 flex items-center px-2 text-gray-700 h-[48px]">
                  <ChevronDown size={18} />
                </div>
              </div>

              {/* Category Selector */}
              <div className="relative">
                <label className="block text-xs text-gray-600 mb-1 text-center sm:text-left">
                  LEAGUE
                </label>
                <select
                  className="block appearance-none w-full sm:w-64 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute bottom-0 right-0 flex items-center px-2 text-gray-700 h-[48px]">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-secondary/10 rounded-lg">
                <div className="text-4xl mb-2 text-secondary">
                  {filteredMatches.filter((m) => m.result === "勝利").length}
                </div>
                <div className="text-muted-foreground">勝利</div>
              </div>
              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-4xl mb-2 text-gray-600">
                  {filteredMatches.filter((m) => m.result === "引き分け").length}
                </div>
                <div className="text-muted-foreground">引き分け</div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-4xl mb-2 text-primary">
                  {filteredMatches.filter((m) => m.result === "敗北").length}
                </div>
                <div className="text-muted-foreground">敗北</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results List */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {currentMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-primary hover:shadow-xl transition-shadow"
                >
                  {/* Header - League Name */}
                  <div className="bg-primary px-4 py-3 text-center">
                    <p className="text-white text-lg font-semibold">
                      {match.type}
                    </p>
                  </div>

                  {/* Main Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Result Badge and Score */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                      {/* Left: Result Badge and Score */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span
                          className={`px-4 py-2 sm:px-6 sm:py-4 rounded-lg text-base sm:text-xl font-bold text-white ${
                            match.result === "勝利"
                              ? "bg-primary"
                              : match.result === "敗北"
                              ? "bg-secondary"
                              : "bg-gray-400"
                          }`}
                        >
                          {match.result === "勝利"
                            ? "WIN"
                            : match.result === "敗北"
                            ? "LOSE"
                            : "DRAW"}
                        </span>

                        {/* Score */}
                        <div className="text-foreground text-3xl sm:text-5xl font-semibold tracking-[0.3em] sm:tracking-[0.4em]">
                          {match.pkScore ? (
                            <div className="flex flex-col items-start">
                              <span>{match.score}</span>
                              <span className="text-lg sm:text-2xl">PK {match.pkScore}</span>
                            </div>
                          ) : (
                            <span>{match.score}</span>
                          )}
                        </div>
                      </div>

                      {/* Right: VS, Emblem, Opponent - スマホでも右揃え */}
                      <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
                        <p className="text-accent text-2xl sm:text-3xl font-semibold">vs</p>
                        {match.opponentEmblem && (
                          <img
                            src={match.opponentEmblem}
                            alt={match.opponent}
                            className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                          />
                        )}
                        <p className="text-foreground text-base sm:text-xl font-semibold whitespace-nowrap">
                          {match.opponent}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border my-3 sm:my-4"></div>

                    {/* Location and Home/Away Badge */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      {/* Home/Away Badge */}
                      {match.isHome === true && (
                        <span className="bg-primary text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-semibold">
                          HOME
                        </span>
                      )}
                      {match.isHome === false && (
                        <span className="bg-white text-primary border-2 border-primary px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-semibold">
                          AWAY
                        </span>
                      )}
                      {match.isHome === null && <div className="hidden sm:block"></div>}

                      {/* Date, Time, Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground">
                        {/* スマホ：日時と場所を2行で表示 */}
                        <span className="text-xs sm:text-sm font-medium">
                          <span className="sm:hidden">
                            {match.date} {match.dayOfWeek} {match.time}
                          </span>
                          <span className="hidden sm:inline">
                            {match.date} {match.dayOfWeek} {match.time} {match.location}
                          </span>
                        </span>
                        {/* スマホ：場所を2行目に表示 */}
                        <span className="text-xs font-medium sm:hidden">
                          {match.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-center items-center gap-2">
                {/* Previous Button */}
                <button
                  className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={18} />
                  <span>前へ</span>
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === pageNumber
                        ? "bg-primary text-white font-semibold"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span>次へ</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}