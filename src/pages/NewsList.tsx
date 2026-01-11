import { useState, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { newsData } from "../data/newsData";

export function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const categorySelectorRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const newsPerPage = 9;

  // カテゴリ定義
  const categories = ["すべて", "お知らせ", "試合結果"];

  // カテゴリでフィルタリング
  const filteredNews =
    selectedCategory === "すべて"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  // 日付順にソート（新しい順）
  const sortedNews = [...filteredNews].sort((a, b) => {
    const dateA = new Date(a.date.replace(/年|月/g, "-").replace(/日/g, ""));
    const dateB = new Date(b.date.replace(/年|月/g, "-").replace(/日/g, ""));
    return dateB.getTime() - dateA.getTime();
  });

  // ページネーション計算
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(sortedNews.length / newsPerPage);

  // ページ変更ハンドラー
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // カテゴリ変更ハンドラー
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // カテゴリ変更時は1ページ目に戻る
  };

  // URLパラメータから初期化（マウント時のみ）
  useEffect(() => {
    const pageParam = searchParams.get("page");
    const categoryParam = searchParams.get("category");

    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }

    if (pageParam) {
      const pageNumber = parseInt(pageParam, 10);
      if (!isNaN(pageNumber) && pageNumber > 0) {
        setCurrentPage(pageNumber);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // マウント時のみ実行

  // 状態変更時にURLパラメータを更新
  useEffect(() => {
    setSearchParams({ page: currentPage.toString(), category: selectedCategory });
  }, [currentPage, selectedCategory, setSearchParams]);

  return (
    <div className="-mt-[72px]">
      <section className="relative pt-[144px] pd-32 bg-gradient-to-br from-accent via-accent/90 to-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-accent via-accent/90 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            <span className="text-primary">NEWS</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            チームの最新情報をお届けします
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center flex-wrap" ref={categorySelectorRef}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {currentNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {currentNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}?page=${currentPage}&category=${selectedCategory}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center min-h-48 max-h-64">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                      <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <span className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-2">
                      続きを読む
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                該当するニュースが見つかりませんでした。
              </p>
            </div>
          )}
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
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
                )
              )}

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
      </section>
    </div>
  );
}