import { MessageCircle, PersonStanding, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const imgTeam1 = "/images/team/team_1.webp";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
      <div className="w-full h-full grid lg:grid-cols-2">
        {/* 左側：写真 */}
        <div className="relative h-[600px] lg:h-full">
          <img
            src={imgTeam1}
            alt="Women's soccer team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/90 lg:to-black"></div>
        </div>

        {/* 右側：コンテンツ */}
        <div className="absolute lg:relative inset-0 lg:inset-auto bg-black/80 lg:bg-black flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-xl">
            {/* 闘昇 */}
            <div className="mt-16 mb-6 lg:mt-20">
              <h1 className="font-serif-jp text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none mb-4 lg:mb-6">
                <span className="text-primary">闘昇</span>
              </h1>
              <p className="font-serif-jp text-3xl sm:text-3xl md:text-4xl text-white mb-2 lg:mb-3 border-l-4 border-primary pl-4 lg:pl-4">
                挑戦と尊重
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </div>

            {/* 三原則 */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-primary/20 p-3 lg:p-4 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-all flex-shrink-0">
                  <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-1">声を出す</h3>
                  <p className="text-white/60 text-sm">コミュニケーションが勝利への鍵</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-primary/20 p-3 lg:p-4 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-all flex-shrink-0">
                  <PersonStanding className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-1">ハードワーク</h3>
                  <p className="text-white/60 text-sm">チームのため自分のために走る</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-primary/20 p-3 lg:p-4 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-all flex-shrink-0">
                  <Smile className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-1">楽しむ</h3>
                  <p className="text-white/60 text-sm">サッカーへの純粋な情熱</p>
                </div>
              </div>
            </div>

            {/* ボタン */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/team"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors text-center"
              >
                チームについて
              </Link>
              <Link
                to="/schedule"
                className="border-2 border-primary hover:bg-primary hover:text-white text-white px-8 py-3 rounded-lg transition-colors text-center"
              >
                試合予定を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}