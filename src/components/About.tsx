import { Trophy, Users, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  const values = [
    {
      icon: Trophy,
      title: "勝利へのこだわり",
      description: "常に勝利を目指し、最高のパフォーマンスを追求します",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "チームワーク",
      description: "互いを信頼し、支え合い、一つのチームとして戦います",
      color: "text-secondary",
    },
    {
      icon: Target,
      title: "継続的な成長",
      description: "日々の練習を通じて、個人とチームの成長を目指します",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "サッカーへの情熱",
      description: "サッカーを愛する気持ちを大切に、全力でプレーします",
      color: "text-secondary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl mb-4 relative">
              <span className="text-accent relative z-10">TEAM</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2015年創部、関東大学女子サッカーリーグ1部に所属。「闘昇」をスローガンに、
            挑戦と尊重の精神のもと、声を出す・ハードワーク・楽しむという三原則を大切にしながら、
            インカレ3位の実績を持つ全国レベルのチームへと成長を続けています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${value.color} mb-4`}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-black text-white p-8 md:p-12 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">
                <span className="text-primary">10</span>年
              </div>
              <p className="text-white/80">創部からの歴史</p>
            </div>
            <div>
              <div className="text-5xl mb-2">
                <span className="text-secondary">3</span>位
              </div>
              <p className="text-white/80">インカレ最高成績</p>
            </div>
            <div>
              <div className="text-5xl mb-2">
                <span className="text-primary">1</span>部
              </div>
              <p className="text-white/80">関東リーグ所属</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/team"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors inline-block"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}