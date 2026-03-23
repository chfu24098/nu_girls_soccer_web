import { PlayerCard } from "../components/PlayerCard";
import { SEO } from "../components/SEO";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { playersData, positionOrder, gradeOrder } from "../data/playersData";
import { staffData } from "../data/staffData";

export function Members() {
  const [filterCategory, setFilterCategory] = useState<"ALL" | "POSITION" | "GRADE">("ALL");
  const [selectedPosition, setSelectedPosition] = useState<string>("ALL");
  const [selectedGrade, setSelectedGrade] = useState<string>("ALL");

  const positions = ["ALL", ...positionOrder];
  const grades = ["ALL", ...gradeOrder];

  const filteredPlayers = playersData.filter((player) => {
    if (filterCategory === "POSITION" && selectedPosition !== "ALL") {
      return player.position === selectedPosition;
    }
    if (filterCategory === "GRADE" && selectedGrade !== "ALL") {
      return player.grade === selectedGrade;
    }
    return true;
  });

  // ソート機能を追加
  const getSortedPlayers = () => {
    if (filterCategory === "POSITION" && selectedPosition === "ALL") {
      // ポジション順にソート: GP, DF, MF, FW, MG
      return [...filteredPlayers].sort((a, b) => {
        const posA = positionOrder.indexOf(a.position);
        const posB = positionOrder.indexOf(b.position);
        if (posA !== posB) return posA - posB;
        return a.number - b.number; // 同じポジション内では背番号順
      });
    } else if (filterCategory === "GRADE" && selectedGrade === "ALL") {
      // 学年順にソート: 4年, 3年, 2年, 1年
      return [...filteredPlayers].sort((a, b) => {
        const gradeA = gradeOrder.indexOf(a.grade);
        const gradeB = gradeOrder.indexOf(b.grade);
        if (gradeA !== gradeB) return gradeA - gradeB;
        return a.number - b.number; // 同じ学年内では背番号順
      });
    }
    return filteredPlayers;
  };

  const sortedPlayers = getSortedPlayers();

  // グループ化されたプレイヤーを取得
  const getGroupedPlayers = () => {
    if (filterCategory === "POSITION" && selectedPosition === "ALL") {
      return positionOrder.map((pos) => ({
        label: pos,
        players: sortedPlayers.filter((p) => p.position === pos),
      })).filter((group) => group.players.length > 0);
    } else if (filterCategory === "GRADE" && selectedGrade === "ALL") {
      return gradeOrder.map((grade) => ({
        label: grade,
        players: sortedPlayers.filter((p) => p.grade === grade),
      })).filter((group) => group.players.length > 0);
    }
    return null;
  };

  const groupedPlayers = getGroupedPlayers();

  return (
    <>
      <SEO
        title="MEMBER"
        description="NU GIRLS SOCCERのメンバー紹介。選手・マネージャー・スタッフの情報を掲載。ポジション別、学年別で選手を検索できます。"
        keywords="メンバー,選手紹介,背番号,ポジション,学年,日本大学女子サッカー部"
      />
      <motion.div 
        className="-mt-[72px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 bg-gradient-to-br from-accent via-accent/90 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              <span className="text-primary">MEMBER</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              チームを支えるメンバーたち
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-white border-b-2 border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={() => {
                  setFilterCategory("ALL");
                  setSelectedPosition("ALL");
                  setSelectedGrade("ALL");
                }}
                className={`px-8 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-lg transition-all ${
                  filterCategory === "ALL"
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => {
                  setFilterCategory("POSITION");
                  setSelectedGrade("ALL");
                }}
                className={`px-8 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-lg transition-all ${
                  filterCategory === "POSITION"
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                POSITION
              </button>
              <button
                onClick={() => {
                  setFilterCategory("GRADE");
                  setSelectedPosition("ALL");
                }}
                className={`px-8 py-3 rounded-lg font-['Montserrat',sans-serif] font-bold text-lg transition-all ${
                  filterCategory === "GRADE"
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                GRADE
              </button>
            </div>
          </div>
        </section>

        {/* Sub Filter - Position */}
        {filterCategory === "POSITION" && (
          <section className="py-6 bg-gray-50 border-b">
            <div className="container mx-auto px-4">
              <div className="flex gap-4 justify-center flex-wrap">
                {positions.map((position) => (
                  <button
                    key={position}
                    onClick={() => setSelectedPosition(position)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      selectedPosition === position
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {position}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sub Filter - Grade */}
        {filterCategory === "GRADE" && (
          <section className="py-6 bg-gray-50 border-b">
            <div className="container mx-auto px-4">
              <div className="flex gap-4 justify-center flex-wrap">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      selectedGrade === grade
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Players Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {groupedPlayers ? (
              groupedPlayers.map((group) => (
                <div key={group.label} className="mb-16">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat',sans-serif] text-accent mb-3 inline-block relative">
                      {group.label}
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] mx-auto">
                    {group.players.map((player) => (
                      <PlayerCard key={player.number} player={player} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] mx-auto">
                {sortedPlayers.map((player) => (
                  <PlayerCard key={player.number} player={player} />
                ))}
              </div>
            )}
          </div>
        </section>

       {/* Staff Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl mb-4 relative">
                  <span className="text-accent relative z-10">スタッフ</span>
                  <span className="relative z-10">紹介</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {staffData.map((staff) => (
                <div
                  key={staff.id}
                  className="text-center group"
                >
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center group-hover:ring-4 group-hover:ring-primary/30 transition-all">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // 画像読み込みエラー時のフォールバック
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-500 text-sm">No Image</span>';
                      }}
                    />
                  </div>
                  <h3 className="text-xl mb-1 group-hover:text-primary transition-colors">{staff.name}</h3>
                  <p className="text-muted-foreground">{staff.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}