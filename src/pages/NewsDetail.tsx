import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { newsData } from "../data/newsData";

// 日本語日付をISO形式に変換する関数
function convertJapaneseDateToISO(jaDate: string): string {
  try {
    // "2025年12月22日" -> "2025-12-22"
    const match = jaDate.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (match) {
      const [, year, month, day] = match;
      const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      
      // 日付の妥当性を確認
      const date = new Date(isoDate);
      if (isNaN(date.getTime())) {
        // 無効な日付の場合、現在日時を返す
        console.warn(`Invalid date: ${jaDate}, using current date`);
        return new Date().toISOString();
      }
      
      return date.toISOString();
    }
    // パターンにマッチしない場合、現在日時を返す
    console.warn(`Date pattern not matched: ${jaDate}, using current date`);
    return new Date().toISOString();
  } catch (error) {
    console.error(`Error converting date: ${jaDate}`, error);
    return new Date().toISOString();
  }
}

export function NewsDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  // ページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // デバッグ用ログ
  console.log("NewsDetail - id:", id);
  console.log("NewsDetail - newsData:", newsData);

  // URLパラメータから記事IDを取得し、newsDataから該当記事を検索
  const newsItem = newsData.find((item) => item.id === Number(id));

  console.log("NewsDetail - found newsItem:", newsItem);

  // 記事が見つからない場合
  if (!newsItem) {
    console.error("NewsDetail - No news item found for id:", id);
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl mb-4">記事が見つかりません</h1>
          <p className="text-muted-foreground mb-8">
            お探しの記事は存在しないか、削除された可能性があります。
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  // パンくずリスト用のURL
  const backToListUrl = `/news?page=${searchParams.get("page") || "1"}&category=${
    searchParams.get("category") || "すべて"
  }`;

  return (
    <>
      <SEO
        title={newsItem.title}
        description={newsItem.excerpt || (newsItem.content ? newsItem.content.substring(0, 150).replace(/<[^>]*>/g, '') : '')}
        keywords={`${newsItem.category},ニュース,日本大学女子サッカー部,${newsItem.title}`}
        ogType="article"
        article={{
          publishedTime: convertJapaneseDateToISO(newsItem.date),
          section: newsItem.category,
        }}
      />
      <StructuredData
        type="NewsArticle"
        headline={newsItem.title}
        description={newsItem.excerpt || (newsItem.content ? newsItem.content.substring(0, 150).replace(/<[^>]*>/g, '') : '')}
        datePublished={convertJapaneseDateToISO(newsItem.date)}
        image={newsItem.image}
      />
      <div className="pt-20 min-h-screen bg-gray-50">
        <article className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to={backToListUrl}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              ニュース一覧に戻る
            </Link>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>{newsItem.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-primary sm:w-[18px] sm:h-[18px]" />
                  <span className="px-3 sm:px-4 py-1 bg-primary text-white text-xs sm:text-sm rounded-full">
                    {newsItem.category}
                  </span>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8">{newsItem.title}</h1>
            </div>

            <div className="relative mb-8 sm:mb-10 lg:mb-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center max-h-[20rem] sm:max-h-[28rem] lg:max-h-[32rem]">
              <ImageWithFallback
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {newsItem.content ? (
              <div
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.65rem",
                }}
              />
            ) : (
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <p>{newsItem.excerpt}</p>
              </div>
            )}

            <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t">
              <Link
                to={backToListUrl}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                ニュース一覧に戻る
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}