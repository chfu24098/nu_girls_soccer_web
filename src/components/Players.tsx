import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { playersData } from "../data/playersData";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";

export function Players() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1: 次へ, -1: 前へ

  const itemsPerPage = 3; // 表示数は3人のまま
  const totalPlayers = playersData.length;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalPlayers - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalPlayers - 1 ? 0 : prev + 1));
  };

  // 3人表示するために、currentIndexから3人分取得（ループ対応）
  const visiblePlayers = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = (currentIndex + i) % totalPlayers;
    return playersData[index];
  });

  return (
    <section id="players" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl mb-4 relative">
              <span className="text-accent relative z-10">MEMBER</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            情熱とスキルを持った選手たちが、チームの勝利のために全力で戦います
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* 左矢印 */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* プレイヤーグリッド */}
          <div className="overflow-hidden relative">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={currentIndex}
                initial={{ x: direction > 0 ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? '-100%' : '100%' }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1
                }}
                className="grid grid-cols-3 gap-4"
              >
                {visiblePlayers.map((player) => (
                  <motion.div
                    key={player.number}
                    className="overflow-hidden transition-all group relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => {
                      window.location.href = `/members/${player.number}`;
                    }}
                  >
                    <ImageWithFallback
                      src={player.image}
                      alt={player.name}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 右矢印 */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* ドット */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPlayers }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/members"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors inline-block"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}