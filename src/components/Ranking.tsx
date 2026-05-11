import { rankingsData, type RankingTeam } from "../data/rankingsData";

export function Ranking() {
  const rankings: RankingTeam[] = rankingsData;
  
  // チーム名に「日大」が含まれているかを判定する関数
  const isNihonUniversity = (teamName: string) => {
    return teamName.includes("日大");
  };

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
          {/* Desktop Version - 表示 (768px以上) */}
          <div className="hidden md:block">
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
              {rankings.map((team, index) => {
                const isNU = isNihonUniversity(team.team);
                return (
                  <div
                    key={`${team.rank}-${team.team}`}
                    className={`grid grid-cols-[70px_1fr_80px_80px_70px_70px_70px] gap-2 p-4 border-b last:border-b-0 ${
                      isNU
                        ? "bg-primary/5 border-l-4 border-l-primary"
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
                            : isNU
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700"
                        } text-sm md:text-base font-bold`}
                      >
                        {team.rank}
                      </span>
                    </div>
                    <div className={`text-left flex items-center text-sm md:text-base ${
                      isNU ? "font-bold text-primary" : ""
                    }`}>
                      {/* エンブレム */}
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 overflow-hidden bg-white shadow-md">
                        <img 
                          src={team.emblemImage} 
                          alt={`${team.team}エンブレム`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {team.team}
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <span className={`text-lg md:text-xl font-bold ${
                        isNU ? "text-primary" : "text-accent"
                      }`}>{team.points}</span>
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
                );
              })}
            </div>
          </div>

          {/* Mobile Version - カード形式 (767px以下) */}
          <div className="md:hidden space-y-3">
            {rankings.map((team) => {
              const isNU = isNihonUniversity(team.team);
              return (
                <div
                  key={`${team.rank}-${team.team}`}
                  className={`rounded-lg overflow-hidden shadow-md ${
                    isNU
                      ? "bg-white border-2 border-primary"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`px-3 py-2.5 flex items-center justify-between ${
                      isNU
                        ? "bg-primary"
                        : team.rank <= 3
                        ? "bg-secondary"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold flex-shrink-0 ${
                          team.rank <= 3 || isNU
                            ? "bg-white text-gray-900"
                            : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {team.rank}
                      </span>
                      {/* エンブレム */}
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-white shadow-md">
                        <img 
                          src={team.emblemImage} 
                          alt={`${team.team}エンブレム`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span
                        className={`font-bold text-sm truncate ${
                          team.rank <= 3 || isNU
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {team.team}
                      </span>
                    </div>
                    <div
                      className={`text-xl font-bold flex-shrink-0 ml-2 ${
                        team.rank <= 3 || isNU
                          ? "text-white"
                          : "text-accent"
                      }`}
                    >
                      {team.points}
                      <span className="text-[10px] ml-0.5">pt</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="px-3 py-2.5 grid grid-cols-4 gap-1.5 text-center">
                    <div>
                      <div className="text-[10px] text-muted-foreground mb-0.5">試合</div>
                      <div className="text-sm font-semibold">{team.matches}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground mb-0.5">勝</div>
                      <div className="text-sm font-semibold text-primary">{team.wins}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground mb-0.5">分</div>
                      <div className="text-sm font-semibold text-gray-600">{team.draws}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground mb-0.5">負</div>
                      <div className="text-sm font-semibold text-secondary">{team.losses}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center text-sm text-white/60">
            <p>※ 日本大学は現在2位です</p>
            <p className="mt-1">関東大学女子サッカーリーグ順位表（最終更新日 2026/05/11）</p>
          </div>
        </div>
      </div>
    </section>
  );
}