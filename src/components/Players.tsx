import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { playersData } from "../data/playersData";
import { motion, AnimatePresence } from "motion/react";
import { PlayerCard } from "./PlayerCard";

export function Players() {
  const [currentIndex, setCurrentIndex] = useState(0); // 3枚単位のページインデックス
  const [direction, setDirection] = useState(0); // 1: 次へ, -1: 前へ

  const [isMobile, setIsMobile] = useState(false);
  const totalPlayers = playersData.length;
  const itemsPerPage = isMobile ? 2 : 3; //スマホ2人,PC3人
  const totalPages = Math.ceil(totalPlayers / itemsPerPage); // 総ページ数

  useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 640);
  };
  
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
  }, []);

  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // 現在のページの3人を取得
  const startIndex = currentIndex * itemsPerPage;
  const visiblePlayers = playersData.slice(startIndex, startIndex + itemsPerPage);

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

        <div className="relative">
          {/* 左矢印 */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/90 hover:bg-primary text-white p-2 sm:p-3 rounded-full transition-all shadow-lg"
          >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* プレイヤーグリッド */}
          <div className="max-w-[1200px] mx-auto px-14sm:px-16">            {/* アニメーションするグリッド */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  initial={{ x: direction > 0 ? '100%' : '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: direction > 0 ? '-100%' : '100%' }}
                  transition={{
                    type: "tween",
                    ease: [0.4, 0, 0.2, 1],
                    duration: 0.7
                  }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6"
                >
                  {visiblePlayers.map((player) => (
                    <div key={player.number}>
                      <PlayerCard player={player} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 右矢印 */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/90 hover:bg-primary text-white p-2 sm:p-3 rounded-full transition-all shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* ドット */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
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