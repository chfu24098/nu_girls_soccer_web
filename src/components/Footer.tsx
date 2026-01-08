import { Link } from "react-router-dom";

const emblem = "/images/emblem/日大/背景なしN.png";

export function Footer() {
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "TEAM", href: "/team" },
    { name: "MEMBER", href: "/members" },
    { name: "MATCH SCHEDULE", href: "/schedule" },
    { name: "RESULT", href: "/results" },
    { name: "NEWS", href: "/news" },
    { name: "ACCESS", href: "/access" },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={emblem} alt="Nihon University Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg">NU GIRLS SOCCER</h3>
                <p className="text-sm text-white/70">Nihon University</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm">
              情熱と団結で勝利へ。私たちは常に前進し続けます。
            </p>
          </div>

          <div>
            <h4 className="mb-4">クイックリンク</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">練習日程</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>月曜日: OFF</li>
              <li>火曜日: 18:00 - 20:30</li>
              <li>水曜日: 18:00 - 20:30</li>
              <li>木曜日: 18:00 - 20:30</li>
              <li>金曜日: 18:00 - 20:30</li>
              <li>土日: 変動</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 2026 NU GIRLS SOCCER. すべての権利を保有しています。</p>
        </div>
      </div>
    </footer>
  );
}