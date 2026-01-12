import { ImageWithFallback } from "../components/ImageWithFallback";
import { useState } from "react";
import { motion } from "framer-motion";
import { playersData, positionOrder, gradeOrder } from "../data/playersData";

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
    <motion.div 
      className="min-h-screen bg-white"      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-accent via-accent/90 to-black">
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
              <div key={group.label} className="mb-10">
                <h2 className="text-xl font-bold mb-4">{group.label}</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {group.players.map((player) => (
                    <motion.div
                      key={player.number}
                      className="overflow-hidden relative cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      onClick={() => {
                        console.log(`Clicked player ${player.number}: ${player.name}`);
                        window.location.href = `/members/${player.number}`;
                      }}
                    >
                      <ImageWithFallback
                        src={player.image}
                        alt={player.name}
                        className="w-full h-auto object-cover pointer-events-none"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {sortedPlayers.map((player) => (
                <motion.div
                  key={player.number}
                  className="overflow-hidden relative cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => {
                    console.log(`Clicked player ${player.number}: ${player.name}`);
                    window.location.href = `/members/${player.number}`;
                  }}
                >
                  <ImageWithFallback
                    src={player.image}
                    alt={player.name}
                    className="w-full h-auto object-cover pointer-events-none"
                  />
                </motion.div>
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
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
              <h3 className="text-xl mb-1">佐藤 琴美</h3>
              <p className="text-muted-foreground">監督</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
              <h3 className="text-xl mb-1">山本 義弘</h3>
              <p className="text-muted-foreground">コーチ</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
              <h3 className="text-xl mb-1">野田 恭平</h3>
              <p className="text-muted-foreground">GPコーチ</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}