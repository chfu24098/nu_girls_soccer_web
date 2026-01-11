import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { playersData } from "../data/playersData";
import { MemberIntro } from "../components/MemberIntro.tsx";

export function MemberDetail() {
  const { number } = useParams();
  const [showIntro, setShowIntro] = useState(true);

  // ページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowIntro(true);
  }, [number]);

  const player = playersData.find((p) => p.number === Number(number));

  if (!player) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">選手が見つかりません</h1>
          <Link to="/members" className="text-primary hover:underline">
            メンバー一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* オープニングアニメーション */}
      <AnimatePresence>
        {showIntro && (
          <MemberIntro player={player} onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* メインコンテンツ */}
      {!showIntro && (
        <motion.div 
          className="-mt-[72px] bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* ヒーローセクション */}
          <section className="relative pt-[144px] pb-8 bg-gradient-to-br from-accent via-accent/90 to-black overflow-hidden min-h-screen flex items-center">
            <div className="container mx-auto px-4 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Link
                  to="/members"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  メンバー一覧に戻る
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12 max-w-7xl mx-auto">
                {/* 左側：ポジション・背番号・名前情報 */}
                <motion.div 
                  className="text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* ポジションと背番号 */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary px-5 py-2 shadow-lg">
                      <p className="font-['Oswald',sans-serif] font-semibold text-[48px] md:text-[56px] leading-none text-white">
                        {player.position}
                      </p>
                    </div>
                        <p className="font-['Oswald',sans-serif] font-bold text-[100px] md:text-[120px] leading-none text-white drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        {player.position === "MG" ? "MG" : player.number}
                        </p>
                  </div>

                  {/* 名前情報 */}
                  <div className="mb-6 pb-4 border-b-2 border-primary/50">
                    <h1 className="font-['Noto_Serif_JP',serif] font-bold text-2xl md:text-3xl lg:text-4xl mb-2">
                      {player.name}
                    </h1>
                    {player.nameReading && (
                      <p className="text-base md:text-lg opacity-80 mb-2">
                        {player.nameReading}
                      </p>
                    )}
                    <p className="font-['Oswald',sans-serif] font-light text-lg md:text-xl opacity-90">
                      {player.nameEn}
                    </p>
                  </div>

                  {/* 詳細情報 */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary px-3 py-1 min-w-[110px]">
                        <span className="text-white text-xs font-semibold">学年</span>
                      </div>
                      <span className="text-base">{player.grade}</span>
                    </div>
                    {player.previousTeam && (
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 min-w-[110px]">
                          <span className="text-white text-xs font-semibold">前所属</span>
                        </div>
                        <span className="text-base">{player.previousTeam}</span>
                      </div>
                    )}
                    {player.department && (
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 min-w-[110px]">
                          <span className="text-white text-xs font-semibold">所属学部</span>
                        </div>
                        <span className="text-base">{player.department}</span>
                      </div>
                    )}
                    {player.favoriteFood && (
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 min-w-[110px]">
                          <span className="text-white text-xs font-semibold">好きな食べ物</span>
                        </div>
                        <span className="text-base">{player.favoriteFood}</span>
                      </div>
                    )}
                    {player.favoriteSong && (
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 min-w-[110px]">
                          <span className="text-white text-xs font-semibold">好きな曲</span>
                        </div>
                        <span className="text-base">{player.favoriteSong}</span>
                      </div>
                    )}
                    {player.favoritePlay && (
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 min-w-[110px]">
                          <span className="text-white text-xs font-semibold">好きなプレー</span>
                        </div>
                        <span className="text-base">{player.favoritePlay}</span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* 右側：選手画像 */}
                <motion.div 
                  className="flex items-center justify-center lg:justify-end"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-100 w-full max-w-[340px] lg:max-w-[380px]">
                    <img
                      src={player.detailImage}
                      alt={player.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 一言コメントセクション */}
          {player.comment && (
            <motion.section 
              className="py-12 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl mb-8 text-center font-['Oswald',sans-serif] font-semibold">
                  MESSAGE
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border-l-4 border-primary">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                    {player.comment}
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* ギャラリーセクション */}
          {player.galleryImages && player.galleryImages.length > 0 && (
            <motion.section 
              className="py-12 bg-gray-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-5xl md:text-7xl mb-12 text-center font-['Oswald',sans-serif] font-semibold">
                  GALLERY
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {player.galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <img
                        src={image}
                        alt={`${player.name} ギャラリー ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* 戻るボタン */}
          <motion.section 
            className="py-12 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 text-center">
              <Link
                to="/members"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                <ArrowLeft size={20} />
                メンバー一覧に戻る
              </Link>
            </div>
          </motion.section>
        </motion.div>
      )}
    </>
  );
}