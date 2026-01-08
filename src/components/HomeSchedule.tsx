import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { schedulesData } from "../data/schedulesData";
import { resultsData } from "../data/resultsData";

export function HomeSchedule() {
  const [activeTab, setActiveTab] = useState<"schedule" | "results">("schedule");

  // 予定試合データ
  const upcomingMatches = schedulesData;

  // 試合結果データ
  const completedMatches = resultsData;

  // Group matches by category
  const categorizeMatches = (matches: any[]) => {
    const kantoDai = matches.filter(m => m.category === "関東大学女子サッカーリーグ");
    const blossom = matches.filter(m => m.category === "Blossom League");
    const tokyoDai = matches.filter(m => m.category === "東京都女子サッカーリーグ一般2部");

    return {
      kantoDai: kantoDai.slice(0, 3),
      blossom: blossom.slice(0, 3),
      tokyoDai: tokyoDai.slice(0, 3),
    };
  };

  const scheduleByCategory = categorizeMatches(upcomingMatches);
  const resultsByCategory = categorizeMatches(completedMatches);

  const leagues = [
    {
      name: "関東大学女子サッカーリーグ",
      color: "text-primary",
      bgColor: "bg-primary",
      borderColor: "border-primary",
      schedule: scheduleByCategory.kantoDai,
      results: resultsByCategory.kantoDai,
    },
    {
      name: "Blossom League",
      color: "text-secondary",
      bgColor: "bg-secondary",
      borderColor: "border-secondary",
      schedule: scheduleByCategory.blossom,
      results: resultsByCategory.blossom,
    },
    {
      name: "東京都女子サッカーリーグ一般2部",
      color: "text-accent",
      bgColor: "bg-accent",
      borderColor: "border-accent",
      schedule: scheduleByCategory.tokyoDai,
      results: resultsByCategory.tokyoDai,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl mb-4 relative">
              <span className="text-accent relative z-10">MATCH SCHEDULE & RESULT</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            試合スケジュールと結果
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-8 py-3 rounded-lg transition-colors font-['Montserrat',sans-serif] ${
              activeTab === "schedule"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            SCHEDULE
          </button>
          <button
            onClick={() => setActiveTab("results")}
            className={`px-8 py-3 rounded-lg transition-colors font-['Montserrat',sans-serif] ${
              activeTab === "results"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            RESULTS
          </button>
        </div>

        {/* Leagues Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {leagues.map((league, leagueIndex) => (
            <div key={leagueIndex} className="space-y-4">
              {(activeTab === "schedule" && league.schedule.length === 0) || 
               (activeTab === "results" && league.results.length === 0) ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-gray-400">
                  {/* Header - League Name */}
                  <div className="bg-gray-400 px-4 py-3 text-center">
                    <p className="text-white text-lg font-semibold">
                      {league.name}
                    </p>
                  </div>
                  {/* Coming Soon Content */}
                  <div className="h-48 flex items-center justify-center">
                    <p className="font-['Montserrat',sans-serif] text-2xl font-bold text-gray-500">
                      COMING SOON
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {activeTab === "schedule" ? (
                    <>
                      {league.schedule.map((match, matchIndex) => (
                        <div
                          key={matchIndex}
                          className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${league.borderColor}`}
                        >
                          {/* Header - League Name */}
                          <div className={`${league.bgColor} px-4 py-3 text-center`}>
                            <p className="text-white text-lg font-semibold">
                              {league.name}
                            </p>
                          </div>

                          {/* Main Content */}
                          <div className="p-6">
                            {/* Date and Opponent */}
                            <div className="flex items-center justify-between mb-4 gap-4">
                              {/* Left: Date and Time */}
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <p className="font-['Montserrat',sans-serif] font-bold text-black text-2xl">
                                    {match.date}
                                  </p>
                                  <p className="font-['Montserrat',sans-serif] text-lg text-gray-700">
                                    {match.dayOfWeek}
                                  </p>
                                </div>
                                <p className="font-['Montserrat',sans-serif] text-sm text-muted-foreground">
                                  KICK OFF {match.time}
                                </p>
                              </div>

                              {/* Right: VS, Emblem, Opponent */}
                              <div className="flex items-center gap-3">
                                <p className="text-accent text-2xl font-semibold">vs</p>
                                {match.opponent !== "未定" && match.opponentEmblem && (
                                  <img
                                    src={match.opponentEmblem}
                                    alt={match.opponent}
                                    className="w-16 h-16 object-contain"
                                  />
                                )}
                                <p className="text-foreground text-base font-semibold">
                                  {match.opponent}
                                </p>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-border my-4"></div>

                            {/* Location and Home/Away Badge */}
                            <div className="flex items-center justify-between gap-4">
                              {/* Home/Away Badge */}
                              {match.isHome === true && (
                                <span className="bg-primary text-white px-3 py-1 rounded text-xs font-semibold">
                                  HOME
                                </span>
                              )}
                              {match.isHome === false && (
                                <span className="bg-white text-primary border-2 border-primary px-3 py-1 rounded text-xs font-semibold">
                                  AWAY
                                </span>
                              )}
                              {match.isHome === null && <div></div>}

                              {/* Location */}
                              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>{match.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {league.results.map((match, matchIndex) => (
                        <div
                          key={matchIndex}
                          className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${league.borderColor}`}
                        >
                          {/* Header - League Name */}
                          <div className={`${league.bgColor} px-4 py-3 text-center`}>
                            <p className="text-white text-lg font-semibold">
                              {league.name}
                            </p>
                          </div>

                          {/* Main Content */}
                          <div className="p-6">
                            {/* Result Badge and Score */}
                            <div className="flex items-center justify-between mb-4 gap-4">
                              {/* Left: Result Badge and Score */}
                              <div className="flex items-center gap-3">
                                <span
                                  className={`px-4 py-2 rounded-lg text-base font-bold text-white ${
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
                                <div className="text-foreground text-3xl font-semibold tracking-[0.3em]">
                                  {match.score.includes("PK") ? (
                                    <div className="flex flex-col items-start">
                                      <span className="text-2xl">{match.score.split(" ")[0]}</span>
                                      <span className="text-lg">{match.score.split(" ")[1]}</span>
                                    </div>
                                  ) : (
                                    <span>{match.score}</span>
                                  )}
                                </div>
                              </div>

                              {/* Right: VS, Emblem, Opponent */}
                              <div className="flex items-center gap-3">
                                <p className="text-accent text-2xl font-semibold">vs</p>
                                {match.opponentEmblem && (
                                  <img
                                    src={match.opponentEmblem}
                                    alt={match.opponent}
                                    className="w-16 h-16 object-contain"
                                  />
                                )}
                                <p className="text-foreground text-base font-semibold">
                                  {match.opponent}
                                </p>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-border my-4"></div>

                            {/* Location and Home/Away Badge */}
                            <div className="flex items-center justify-between gap-4">
                              {/* Home/Away Badge */}
                              {match.isHome === true && (
                                <span className="bg-primary text-white px-3 py-1 rounded text-xs font-semibold">
                                  HOME
                                </span>
                              )}
                              {match.isHome === false && (
                                <span className="bg-white text-primary border-2 border-primary px-3 py-1 rounded text-xs font-semibold">
                                  AWAY
                                </span>
                              )}
                              {match.isHome === null && <div></div>}

                              {/* Date, Time, Location */}
                              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <span>
                                  {match.date} {match.dayOfWeek} {match.time}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to={activeTab === "schedule" ? "/schedule" : "/results"}
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors inline-block"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}