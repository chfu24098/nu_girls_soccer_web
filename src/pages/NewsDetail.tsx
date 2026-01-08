import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { newsData } from "../data/newsData";

export function NewsDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  // ページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // URLパラメータから記事IDを取得し、newsDataから該当記事を検索
  const newsItem = newsData.find((item) => item.id === Number(id));

  // 記事が見つからない場合
  if (!newsItem) {
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
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* パンくずリスト */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              HOME
            </Link>
            <span>›</span>
            <Link to="/news" className="hover:text-primary transition-colors">
              NEWS
            </Link>
            <span>›</span>
            <span className="text-foreground">{newsItem.title}</span>
          </div>
        </div>
      </div>

      {/* 記事コンテンツ */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 記事ヘッダー */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={18} />
                <time dateTime={newsItem.date}>{newsItem.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} className="text-primary" />
                <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                  {newsItem.category}
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl mb-6">{newsItem.title}</h1>
          </header>

          {/* メイン画像 */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 記事本文 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            {newsItem.content ? (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
            ) : (
              <div className="prose prose-lg max-w-none">
                <p>{newsItem.excerpt}</p>
              </div>
            )}
          </div>

          {/* 一覧に戻るボタン */}
          <div className="text-center">
            <Link
              to={backToListUrl}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft size={20} />
              ニュース一覧に戻る
            </Link>
          </div>
        </div>
      </article>

      {/* 関連記事 */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl mb-8 text-center">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsData
              .filter(
                (item) =>
                  item.category === newsItem.category && item.id !== newsItem.id
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}