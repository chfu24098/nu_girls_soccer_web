import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Player } from "../data/playersData";

const emblem = "/images/emblem/日大/背景なしN.png";

interface MemberIntroProps {
  player: Player;
  onComplete: () => void;
}

export function MemberIntro({ player, onComplete }: MemberIntroProps) {
  const [stage, setStage] = useState(0);

  // ギャラリー画像の取得
  const galleryImages = player.galleryImages?.slice(0, 4) || [];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 100), // 番号表示開始
      setTimeout(() => setStage(2), 1200), // 名前表示
      setTimeout(() => setStage(3), 2400), // ギャラリー画像1枚目（左）
      setTimeout(() => setStage(4), 2700), // ギャラリー画像2枚目（右）
      setTimeout(() => setStage(5), 3000), // ギャラリー画像3枚目（左）
      setTimeout(() => setStage(6), 3300), // ギャラリー画像4枚目（右）
      setTimeout(() => setStage(7), 3800), // エンブレム表示
      setTimeout(() => onComplete(), 5000), // アニメーション終了
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 背番号（アップから引く） */}
      <AnimatePresence>
        {stage >= 1 && stage < 7 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-['Oswald',sans-serif] font-bold text-[40vw] leading-none text-primary">
                {player.position === "MG" ? "MG" : player.number}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 名前（ローマ字） */}
      <AnimatePresence>
        {stage >= 2 && stage < 7 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="font-['Oswald',sans-serif] font-bold text-6xl md:text-8xl lg:text-9xl text-white text-center px-4">
              {player.nameEn.toUpperCase()}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ギャラリー画像 - 4枚 */}
      {galleryImages.length === 4 && (
        <>
          {/* 1枚目 - 左上から */}
          <AnimatePresence>
            {stage >= 3 && stage < 7 && (
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-1/2 overflow-hidden z-20"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={galleryImages[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2枚目 - 右上から */}
          <AnimatePresence>
            {stage >= 4 && stage < 7 && (
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden z-20"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={galleryImages[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3枚目 - 左下から */}
          <AnimatePresence>
            {stage >= 5 && stage < 7 && (
              <motion.div
                className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden z-20"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={galleryImages[2]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 4枚目 - 右下から */}
          <AnimatePresence>
            {stage >= 6 && stage < 7 && (
              <motion.div
                className="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden z-20"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={galleryImages[3]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* エンブレム */}
      <AnimatePresence>
        {stage >= 7 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30 bg-black"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src={emblem}
                alt="Nihon University Emblem"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
