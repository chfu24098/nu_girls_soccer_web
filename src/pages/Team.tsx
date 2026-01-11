import { Target, Users, Trophy, Award, TrendingUp, Users2, Heart } from "lucide-react";

export function Team() {
  return (
    <div className="-mt-[72px]">
      <section className="relative pt-[144px] pb-32 bg-gradient-to-br from-accent via-accent/90 to-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-accent via-accent/90 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            <span className="text-primary">TEAM</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            私たちのビジョン、ミッション、そして歩んできた道のり
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl mb-4 relative">
                  <span className="text-accent relative z-10">チーム</span>
                  <span className="relative z-10">について</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                </h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              日本大学女子サッカー部は2015年6月に創部され、関東大学女子サッカーリーグ2部からスタートしました。創部からわずか8年で全国大会インカレ3位という快挙を達成し、チーム史上最高順位を記録しています。
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              「闘昇」をスローガンに、「挑戦と尊重」という精神のもと、サッカーを楽しみながら勝利を目指すという姿勢を大切にしています。声を出す、ハードワーク、楽しむという三原則のもと、ピッチ内外で全力を尽くし、全国レベルで戦えるチームへと成長してきました。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              チームからはWEリーグやなでしこリーグへ選手を輩出し、プロの世界で活躍する選手も誕生しています。メンバー一人ひとりが主体性を持ち、サッカーを通じて人間的にも成長できる環境を大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif-jp text-4xl md:text-5xl mb-4">
              <span className="text-primary">闘昇</span>
            </h2>
            <p className="font-serif-jp text-2xl md:text-3xl text-muted-foreground mb-8">
              挑戦と尊重
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">挑戦</h3>
              <p className="text-muted-foreground">
                常に新しい目標に向かって挑戦し続ける勇気を持つ。失敗を恐れず、前進し続けることが成長への道。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl mb-4">尊重</h3>
              <p className="text-muted-foreground">
                チームメイト、対戦相手、審判、サポーターすべての人々を尊重する心を忘れない。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl mb-4 relative">
                  <span className="text-accent relative z-10">History</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mt-6">
                創部から現在まで、挑戦を続けてきた軌跡
              </p>
            </div>

            <div className="space-y-0">
              {/* 2015 創部 */}
              <div className="relative pl-8 pb-12 border-l-2 border-gray-300">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2015
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-accent">
                  部創設
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  日本大学女子サッカー部が創部。関東大学女子サッカーリーグ2部からスタートし、チームづくりの段階から歩みを始めました。
                </p>
              </div>

              {/* 2015-2019 成長期 */}
              <div className="relative pl-8 pb-12 border-l-2 border-gray-300">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-secondary text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2015 - 2019
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-accent">
                  大学リーグでの成長
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  関東大学女子サッカーリーグ2部で戦いながら、チーム力を積み重ねていく時期。部員たちは大学リーグで経験を積み、チームとしての基礎を形成しました。
                </p>
              </div>

              {/* 2020 1部昇格 */}
              <div className="relative pl-8 pb-12 border-l-2 border-gray-300">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2020
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-accent">
                  関東大学女子サッカーリーグ 1部昇格
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  リーグ戦で好成績を残し、関東女子大学リーグ1部へ昇格。この昇格はチーム史上大きな転機となり、上位校との対戦機会が増えました。
                </p>
              </div>

              {/* 2021 インカレ初出場 */}
              <div className="relative pl-8 pb-12 border-l-2 border-gray-300">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-secondary text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2021
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-accent">
                  インカレ初出場
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  初めて全日本大学女子サッカー選手権大会（インカレ）への出場を果たし、本格的に全国レベルでの戦いに挑みました。
                </p>
              </div>

              {/* 2022 ベスト4 */}
              <div className="relative pl-8 pb-12 border-l-2 border-gray-300">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2022
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-accent">
                  インカレ ベスト4進出
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  2年連続でインカレに出場し、ベスト4まで勝ち進む成果を出しました。全国レベルで勝負できるチームとしての存在感を確立し始めました。
                </p>
              </div>

              {/* 2023 3位 */}
              <div className="relative pl-8 pb-12 border-l-2 border-gray-300">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-accent text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2023
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-primary">
                  インカレ 3位 — チーム史上最高順位
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="font-bold text-accent">快挙達成</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    創部8年目にして、全国大会で3位という好成績を収め、チーム史上最高順位を記録。八戸学院大戦で9-0という圧勝を見せるなど、全国レベルで勝負できるチームであることを証明しました。
                  </p>
                </div>
              </div>

              {/* 2024-2025 プロ選手輩出 */}
              <div className="relative pl-8 pb-0">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-['Montserrat',sans-serif] font-bold">
                    2024 - 2025
                  </span>
                </div>
                <h3 className="text-2xl mb-3 font-['Montserrat',sans-serif] font-bold text-accent">
                  WE・なでしこ選手排出
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  チーム史上初となるWEリーグ（女子プロリーグ）やなでしこリーグへの選手輩出を実現。高い評価を受ける選手を送り出すことに成功しました。
                </p>
                <div className="space-y-3">
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-accent mb-1">渡邉 莉沙子選手（主将・FW）</p>
                        <p className="text-sm text-muted-foreground">三菱重工浦和レッズレディース内定（WEリーグ）</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-accent mb-1">牧野 美優選手</p>
                        <p className="text-sm text-muted-foreground">大宮アルディージャVENTUS内定（WEリーグ）</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-accent mb-1">藤原 愛里選手</p>
                        <p className="text-sm text-muted-foreground">なでしこリーグ1部所属</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Summary Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-accent/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                <span className="text-primary">Achievements</span>
              </h2>
              <p className="text-xl text-white/80">
                主な実績
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">2015</div>
                <div className="text-white/90 text-sm">創部</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">2020</div>
                <div className="text-white/90 text-sm">関東リーグ1部昇格</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">2023</div>
                <div className="text-white/90 text-sm">インカレ3位</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/20">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-white/90 text-sm">WE・なでしこ選手排出</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl mb-4 relative">
                  <span className="text-accent relative z-10">Team Culture</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mt-6">
                チームの特徴と文化
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-accent font-['Montserrat',sans-serif] font-bold">
                    サッカーを楽しみながら勝利を目指す
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    チームコンセプトとして「サッカーを楽しみながら勝利を目指す」という姿勢が大切にされています。楽しむことが力になり、その力が勝利へとつながると信じています。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <Users2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-accent font-['Montserrat',sans-serif] font-bold">
                    成長志向を持ち続ける
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    歴史は比較的浅いですが、成長志向を持ちながら全国で戦えるチームに育ってきています。一人ひとりが主体性を持ち、チーム全体で高め合う文化が根付いています。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-accent font-['Montserrat',sans-serif] font-bold">
                    横と縦の絆が強いチーム
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    同学年の仲間同士はもちろん、先輩後輩の縦の関係も非常に良好です。学年を超えた絆がチームの一体感を生み出し、ピッチ内外で支え合う文化が育まれています。この良好な人間関係がチームの強さの土台となっています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}