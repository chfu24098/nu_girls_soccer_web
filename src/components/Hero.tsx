import { MessageCircle, PersonStanding, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const imgTeam1 = "/images/team/team_1.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full grid lg:grid-cols-2">
        {/* 左側：写真 */}
        <div className="relative h-full">
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
            <div className="mb-12">
              <h1 className="font-serif-jp text-7xl md:text-9xl lg:text-[10rem] leading-none mb-6">
                <span className="text-primary">闘昇</span>
              </h1>
              <p className="font-serif-jp text-3xl md:text-4xl text-white mb-8 border-l-4 border-primary pl-6">
                挑戦と尊重
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </div>

            {/* 三原則 */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-primary/20 p-4 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-all flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-1">声を出す</h3>
                  <p className="text-white/60 text-sm">コミュニケーションが勝利への鍵</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-primary/20 p-4 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-all flex-shrink-0">
                  <PersonStanding className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-1">ハードワーク</h3>
                  <p className="text-white/60 text-sm">チームのため自分のために走る</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-primary/20 p-4 rounded-lg border border-primary/40 group-hover:bg-primary/30 transition-all flex-shrink-0">
                  <Smile className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-1">楽しむ</h3>
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