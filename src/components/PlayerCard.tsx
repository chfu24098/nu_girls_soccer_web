import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { Player } from "../data/playersData";

const emblem = "/images/emblem/日大/背景なしN.webp";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const navigate = useNavigate();

  // ポジションに応じた色
  const getPositionColor = (position: string) => {
    if (position === "GP") return "bg-secondary"; // 水色
    if (position === "MG") return "bg-accent";//黒色
    return "bg-primary"; // 赤（MF, DF, FW）
  };

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer rounded-2xl bg-[#D9D9D9] flex flex-col h-[360px]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => {
        console.log(`Clicked player ${player.number}: ${player.name}`);
        navigate(`/members/${player.number}`);
      }}
    >
      {/* 上部：背番号（左）とエンブレム+ポジション（右） */}
      <div className="relative px-3 pt-3 pb-1">
        {/* 背番号 - 左上（MGの場合は非表示） */}
        {player.position !== "MG" && (
          <div className="absolute top-6 left-6 z-10">
            <span className="text-[64px] font-black text-black leading-none" style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}>
              {player.number}
            </span>
          </div>
        )}

        {/* エンブレムとポジション - 右上 */}
        <div className="absolute top-2 right-2 flex flex-col items-center gap-1.0 z-10">
          {/* エンブレム */}
          <div className="w-16 h-16">
            <img
              src={emblem}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* ポジションバッジ */}
          <div className={`${getPositionColor(player.position)} px-2.5 py-0.5 rounded-full`}>
            <span className="text-white text-ll font-bold font-['Montserrat',sans-serif]">
              {player.position}
            </span>
          </div>
        </div>
      </div>

      {/* 選手写真 - 中央（影付き） */}
      <div className="absolute top-2 left-0 right-0 bottom-24 flex items-end justify-center px-3">
        <div className="w-full h-full flex items-end justify-center" style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))' }}>
          <ImageWithFallback
            src={player.detailImage}
            alt={player.name}
            className="w-full h-full object-contain object-bottom pointer-events-none"
          />
        </div>
      </div>

      {/* 名前とボタン - 下部固定 */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 bg-gradient-to-t from-[#D9D9D9] via-[#D9D9D9] to-transparent pt-4">
        <div className="text-center mb-2">
          <p className="text-lg font-bold text-black leading-tight">
            {player.name}
          </p>
          <p className="text-xs text-black/70 font-['Montserrat',sans-serif] mt-0.5">
            {player.nameEn}
          </p>
        </div>
        
        {/* More Informationボタン */}
        <button className="w-full bg-primary hover:bg-secondary text-white text-xs font-bold py-2 rounded-lg transition-colors">
          More Information
        </button>
      </div>
    </motion.div>
  );
}