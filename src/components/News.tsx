import { ImageWithFallback } from "./ImageWithFallback";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData.tsx";

export function News() {
  // 日付順にソート（新しい順）して最新3件を取得
  const sortedNews = [...newsData].sort((a, b) => {
    const dateA = new Date(a.date.replace(/年|月/g, '-').replace(/日/g, ''));
    const dateB = new Date(b.date.replace(/年|月/g, '-').replace(/日/g, ''));
    return dateB.getTime() - dateA.getTime();
  });
  
  const latestNews = sortedNews.slice(0, 4);

  return (
    <section id="news" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl mb-4 relative">
              <span className="text-accent relative z-10">NEWS</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            チームの最新情報をお届けします
          </p>
        </div>

         {/* スマホ版: 2x2グリッド、PC版: 横4列 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-5">
                <div className="flex flex-col sm:flez-col items-start sm:items-center gap1 sm:gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary text-white text-xs sm:text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">{item.excerpt}</p>
                <span className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1 sm:gap-2">
                  続きを読む
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/news"
            className="bg-primary hover:bg-secondary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors inline-block text-sm sm:text-base"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}