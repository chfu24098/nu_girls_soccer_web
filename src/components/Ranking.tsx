export function Ranking() {
  const rankings = [
    { rank: 1, team: "東洋大学", points: 50, matches: 22, wins: 16, draws: 2, losses: 4 },
    { rank: 2, team: "神奈川大学", points: 42, matches: 22, wins: 12, draws: 6, losses: 4 },
    { rank: 3, team: "十文字学園女子大学", points: 41, matches: 22, wins: 12, draws: 5, losses: 5 },
    { rank: 4, team: "東京国際大学", points: 40, matches: 22, wins: 12, draws: 4, losses: 6 },
    { rank: 5, team: "早稲田大学", points: 38, matches: 22, wins: 11, draws: 5, losses: 6 },
    { rank: 6, team: "山梨学院大学", points: 37, matches: 22, wins: 12, draws: 1, losses: 3 },
    { rank: 7, team: "日本大学", points: 35, matches: 22, wins: 11, draws: 2, losses: 9 },
    { rank: 8, team: "日本体育大学", points: 34, matches: 22, wins: 10, draws: 4, losses: 8 },
    { rank: 9, team: "帝京平成大学", points: 33, matches: 22, wins: 10, draws: 4, losses: 8 },
    { rank: 10, team: "大東文化大学", points: 11, matches: 22, wins: 3, draws: 2, losses: 17 },
    { rank: 11, team: "東海大学", points: 9, matches: 22, wins: 2, draws: 3, losses: 17 },
    { rank: 12, team: "筑波大学", points: 6, matches: 22, wins: 1, draws: 3, losses: 18 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl mb-4 relative">
              <span className="text-primary relative z-10">LEAGUE </span>
              <span className="text-white relative z-10">RANKING</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            関東大学女子サッカーリーグ
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-primary rounded-t-lg overflow-hidden">
            <div className="grid grid-cols-[70px_1fr_80px_80px_70px_70px_70px] gap-2 p-4 text-white text-center">
              <div className="text-sm md:text-base">順位</div>
              <div className="text-sm md:text-base text-left">チーム名</div>
              <div className="text-sm md:text-base">勝点</div>
              <div className="text-sm md:text-base">試合数</div>
              <div className="text-sm md:text-base">勝</div>
              <div className="text-sm md:text-base">分</div>
              <div className="text-sm md:text-base">負</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-lg overflow-hidden shadow-2xl">
            {rankings.map((team, index) => (
              <div
                key={team.rank}
                className={`grid grid-cols-[70px_1fr_80px_80px_70px_70px_70px] gap-2 p-4 border-b last:border-b-0 ${
                  team.rank === 7
                    ? "bg-accent/10 border-l-4 border-l-accent"
                    : index % 2 === 0
                    ? "bg-gray-50"
                    : "bg-white"
                } hover:bg-secondary/5 transition-colors`}
              >
                <div className="text-center flex items-center justify-center">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      team.rank <= 3
                        ? "bg-secondary text-white"
                        : team.rank === 7
                        ? "bg-accent text-white"
                        : "bg-gray-200 text-gray-700"
                    } text-sm md:text-base`}
                  >
                    {team.rank}
                  </span>
                </div>
                <div className="text-left flex items-center text-sm md:text-base">
                  {team.team}
                </div>
                <div className="text-center flex items-center justify-center">
                  <span className="text-accent text-lg md:text-xl">{team.points}</span>
                </div>
                <div className="text-center flex items-center justify-center text-sm md:text-base text-muted-foreground">
                  {team.matches}
                </div>
                <div className="text-center flex items-center justify-center text-sm md:text-base text-muted-foreground">
                  {team.wins}
                </div>
                <div className="text-center flex items-center justify-center text-sm md:text-base text-muted-foreground">
                  {team.draws}
                </div>
                <div className="text-center flex items-center justify-center text-sm md:text-base text-muted-foreground">
                  {team.losses}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-white/60">
            <p>※ 日本大学は現在7位です</p>
            <p className="mt-1">関東大学女子サッカーリーグ順位表（最終更新日 2025/12/30）</p>
          </div>
        </div>
      </div>
    </section>
  );
}