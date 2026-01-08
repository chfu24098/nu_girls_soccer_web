import { MapPin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { schedulesData } from "../data/schedulesData";

export function MatchSchedule() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const categorySelectorRef = useRef<HTMLDivElement>(null);
  const matchesPerPage = 10;

  // データファイルから試合予定を取得
  const upcomingMatches = schedulesData;

  const categories = [
    "ALL",
    "関東大学女子サッカーリーグ",
    "Blossom League",
    "東京都女子サッカーリーグ一般2部",
    "皇后杯",
    "全国大学女子サッカー選手権",
  ];

  const filteredMatches = upcomingMatches.filter((match) => {
    if (selectedCategory === "ALL") return true;
    return match.category === selectedCategory;
  });

  const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);
  const currentMatches = filteredMatches.slice(
    (currentPage - 1) * matchesPerPage,
    currentPage * matchesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    categorySelectorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-accent via-accent/90 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            <span className="text-primary">MATCH SCHEDULE</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            今後の試合スケジュールをチェック
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative" ref={categorySelectorRef}>
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matches List */}
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
                <div className="p-6">
                  {/* Date and Time */}
                  <div className="mb-6">
                    <p className="text-foreground">
                      <span className="text-5xl md:text-6xl font-bold">{match.date}</span>
                      <span className="text-2xl md:text-3xl ml-2">
                        {match.dayOfWeek} KICK OFF {match.time}
                      </span>
                    </p>
                  </div>

                  {/* VS and Opponent */}
                  <div className="flex items-center justify-end mb-6 gap-4">
                    {/* VS */}
                    <p className="text-accent text-3xl font-semibold">
                      vs
                    </p>
                    {/* Opponent Emblem - Only show if opponent is not 未定 */}
                    {match.opponent !== "未定" && match.opponentEmblem && (
                      <img 
                        src={match.opponentEmblem} 
                        alt={match.opponent}
                        className="w-20 h-20 object-contain"
                      />
                    )}
                    {/* Opponent Name */}
                    <p className="text-foreground text-xl font-semibold">
                      {match.opponent}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-4"></div>

                  {/* Location and Home Badge */}
                  <div className="flex items-center justify-between gap-4">
                    {/* Home Badge */}
                    {match.isHome && (
                      <span className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">
                        HOME
                      </span>
                    )}
                    {!match.isHome && <div></div>}
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} />
                      <span className="text-sm font-medium">
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
  );
}