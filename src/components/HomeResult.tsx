import { Link } from "react-router-dom";
import { resultsData } from "../data/resultsData";

export function HomeResults() {
  // 最新9試合を取得
  const allMatches = resultsData.slice(0, 9);

  // カテゴリごとに分類
  const leagues = [
    {
      name: "全国大学女子サッカー選手権",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
      matches: allMatches.filter((m) => m.type === "全国大学女子サッカー選手権").slice(0, 3),
    },
    {
      name: "Blossom League",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      matches: allMatches.filter((m) => m.type === "Blossom League").slice(0, 3),
    },
    {
      name: "東京都女子サッカーリーグ一般2部",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
      matches: allMatches.filter((m) => m.type === "東京都女子サッカーリーグ一般2部").slice(0, 3),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">LATEST RESULTS</h2>
          <p className="text-muted-foreground">最新の試合結果</p>
        </div>

        <div className="space-y-8">
          {leagues.map((league) => {
            if (league.matches.length === 0) return null;

            return (
              <div key={league.name}>
                <h3
                  className={`text-xl mb-4 pb-2 border-b-2 ${league.borderColor} ${league.color}`}
                >
                  {league.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {league.matches.map((match, index) => (
                    <div
                      key={index}
                      className={`border-2 ${league.borderColor} rounded-lg p-6 ${league.bgColor} hover:shadow-lg transition-shadow`}
                    >
                      <div className="text-center mb-4">
                        <div className="text-sm text-muted-foreground mb-2">
                          {match.date}
                        </div>
                        <div className="text-xs text-muted-foreground mb-4">
                          {league.name}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center flex-1">
                          <div className="font-bold mb-2">NU GIRLS</div>
                        </div>
                        <div className="text-center px-4">
                          <div className="text-2xl font-bold">{match.score}</div>
                          {match.pkScore && (
                            <div className="text-xs text-muted-foreground">
                              PK {match.pkScore}
                            </div>
                          )}
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-sm">{match.opponent}</div>
                          {match.opponentEmblem && (
                            <img
                              src={match.opponentEmblem}
                              alt={match.opponent}
                              className="w-12 h-12 mx-auto mt-2 object-contain"
                            />
                          )}
                        </div>
                      </div>

                      <div
                        className={`text-center py-2 rounded ${
                          match.result === "勝利"
                            ? "bg-green-100 text-green-700 font-bold"
                            : "bg-red-100 text-red-700 font-bold"
                        }`}
                      >
                        {match.result === "勝利" ? "WIN" : "LOSE"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/results"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            すべての試合結果を見る
          </Link>
        </div>
      </div>
    </section>
  );
}