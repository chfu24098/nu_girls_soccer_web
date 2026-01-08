//オーナーがワイヤーフレームを確認したときに使用する
//URLに/wireframeを挿入し確認可能

export function Wireframe() {
  return (
    <div className="pt-20 bg-gray-50 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="text-accent">NU GIRLS SOCCER</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-2">Wireframe Documentation</h2>
          <p className="text-muted-foreground">全8ページの構造図</p>
        </div>

        {/* ============ HOME PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            1. HOME (/)
          </h2>
          
          <div className="space-y-4">
            {/* Header */}
            <div className="border-2 border-gray-400 p-4 bg-gray-100">
              <div className="font-bold text-center">HEADER (共通)</div>
              <div className="text-sm text-center text-muted-foreground mt-2">
                Logo | HOME | TEAM | NEWS | MATCH SCHEDULE | RESULT | MEMBER | ACCESS
              </div>
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5">
              <div className="font-bold text-center mb-2">HERO SECTION</div>
              <div className="text-center text-sm space-y-1">
                <div>背景: グラデーション（赤→黒）</div>
                <div className="font-serif text-2xl mt-4">闘昇</div>
                <div className="text-lg">〜挑戦と尊重〜</div>
                <div className="mt-4 text-xs">日本大学女子サッカー部へようこそ</div>
              </div>
            </div>

            {/* About */}
            <div className="border-2 border-blue-400 p-6">
              <div className="font-bold text-center mb-3">ABOUT SECTION</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-300 p-4 bg-gray-50 text-center">
                  <div className="text-sm">チーム紹介テキスト</div>
                </div>
                <div className="border border-gray-300 p-4 bg-gray-50 text-center">
                  <div className="text-sm">チーム写真</div>
                </div>
              </div>
            </div>

            {/* Players */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">PLAYERS SECTION</div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="border border-gray-300 p-2 bg-gray-50 text-center text-xs">
                    選手 {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="border-2 border-purple-400 p-6">
              <div className="font-bold text-center mb-3">MATCH SCHEDULE</div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-gray-300 p-3 bg-gray-50">
                    <div className="text-xs">日時 | 対戦相手 | 会場</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ranking */}
            <div className="border-2 border-yellow-400 p-6">
              <div className="font-bold text-center mb-3">RANKING TABLE</div>
              <div className="border border-gray-300 p-4 bg-gray-50 text-center text-sm">
                順位表（リーグ戦順位）
              </div>
            </div>

            {/* News */}
            <div className="border-2 border-red-400 p-6">
              <div className="font-bold text-center mb-3">LATEST NEWS</div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                    ニュース {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="border-2 border-pink-400 p-4">
              <div className="font-bold text-center mb-2">SOCIAL LINKS</div>
              <div className="flex justify-center gap-4 text-xs">
                <div>Instagram</div>
                <div>Twitter</div>
                <div>YouTube</div>
              </div>
            </div>

            {/* Access */}
            <div className="border-2 border-indigo-400 p-6">
              <div className="font-bold text-center mb-3">ACCESS</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-300 p-4 bg-gray-50 text-center text-sm">
                  地図
                </div>
                <div className="border border-gray-300 p-4 bg-gray-50 text-center text-sm">
                  アクセス情報
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-2 border-gray-400 p-4 bg-gray-100">
              <div className="font-bold text-center">FOOTER (共通)</div>
              <div className="text-sm text-center text-muted-foreground mt-2">
                Logo | Links | Copyright
              </div>
            </div>
          </div>
        </div>

        {/* ============ TEAM PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            2. TEAM (/team)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5 text-center">
              <div className="font-bold mb-2">PAGE HERO</div>
              <div className="text-2xl">TEAM</div>
              <div className="text-sm mt-2">私たちのビジョン、ミッション、そして歩んできた道のり</div>
            </div>

            {/* About */}
            <div className="border-2 border-blue-400 p-6">
              <div className="font-bold text-center mb-3">チームについて</div>
              <div className="border border-gray-300 p-4 bg-gray-50">
                <div className="text-sm">創部の経緯、チームの歴史、理念</div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">PHILOSOPHY</div>
              <div className="text-center mb-4">
                <div className="font-serif text-2xl">闘昇</div>
                <div className="text-lg">〜挑戦と尊重〜</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  声を出す
                </div>
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  ハードワーク
                </div>
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  楽しむ
                </div>
              </div>
            </div>

            {/* History */}
            <div className="border-2 border-purple-400 p-6">
              <div className="font-bold text-center mb-3">HISTORY</div>
              <div className="border border-gray-300 p-4 bg-gray-50">
                <div className="text-sm">2015年 創部 → 現在までの歩み</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="border-2 border-yellow-400 p-6">
              <div className="font-bold text-center mb-3">ACHIEVEMENTS</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  全国大会3位
                </div>
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  WE・なでしこ選手排出 8+名
                </div>
              </div>
            </div>

            {/* Team Culture */}
            <div className="border-2 border-red-400 p-6">
              <div className="font-bold text-center mb-3">TEAM CULTURE</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  主体性を重視
                </div>
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  声を出す文化
                </div>
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  個性を尊重
                </div>
                <div className="border border-gray-300 p-3 bg-gray-50 text-center text-xs">
                  横と縦の関係
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ NEWS LIST PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            3. NEWS LIST (/news)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5 text-center">
              <div className="font-bold mb-2">PAGE HERO</div>
              <div className="text-2xl">NEWS</div>
            </div>

            {/* Category Filter */}
            <div className="border-2 border-blue-400 p-4">
              <div className="font-bold text-center mb-3">CATEGORY FILTER</div>
              <div className="flex justify-center gap-3">
                <div className="border border-gray-300 px-4 py-2 bg-accent text-white text-xs">
                  すべて
                </div>
                <div className="border border-gray-300 px-4 py-2 bg-gray-50 text-xs">
                  お知らせ
                </div>
                <div className="border border-gray-300 px-4 py-2 bg-gray-50 text-xs">
                  試合結果
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">NEWS GRID (9件/ページ)</div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className="border border-gray-300 p-4 bg-gray-50">
                    <div className="text-xs mb-2">画像</div>
                    <div className="text-xs">日付 | カテゴリ</div>
                    <div className="text-xs font-bold mt-1">タイトル</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="border-2 border-purple-400 p-4">
              <div className="font-bold text-center mb-3">PAGINATION</div>
              <div className="flex justify-center gap-2">
                <div className="border border-gray-300 px-3 py-1 text-xs">←</div>
                <div className="border border-gray-300 px-3 py-1 bg-accent text-white text-xs">1</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">2</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">3</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">4</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">→</div>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ NEWS DETAIL PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            4. NEWS DETAIL (/news/:id)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Breadcrumb */}
            <div className="border-2 border-blue-400 p-3">
              <div className="text-xs">HOME &gt; NEWS &gt; 記事タイトル</div>
            </div>

            {/* Article Header */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">ARTICLE HEADER</div>
              <div className="text-center">
                <div className="text-xs mb-2">2026年1月8日 | カテゴリ</div>
                <div className="font-bold text-lg">記事タイトル</div>
              </div>
            </div>

            {/* Article Content */}
            <div className="border-2 border-purple-400 p-6">
              <div className="font-bold text-center mb-3">ARTICLE CONTENT</div>
              <div className="space-y-3">
                <div className="border border-gray-300 p-4 bg-gray-50 text-center text-sm">
                  メイン画像
                </div>
                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="text-xs">記事本文...</div>
                  <div className="text-xs mt-2">段落...</div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="border-2 border-yellow-400 p-4 text-center">
              <div className="inline-block border border-gray-300 px-6 py-2 bg-gray-50 text-xs">
                ← 一覧に戻る
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ MATCH SCHEDULE PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            5. MATCH SCHEDULE (/schedule)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5 text-center">
              <div className="font-bold mb-2">PAGE HERO</div>
              <div className="text-2xl">MATCH SCHEDULE</div>
            </div>

            {/* Category Filter */}
            <div className="border-2 border-blue-400 p-4">
              <div className="font-bold text-center mb-3">CATEGORY DROPDOWN</div>
              <div className="flex justify-center">
                <div className="border border-gray-300 px-6 py-2 bg-gray-50 text-xs">
                  ALL ▼
                </div>
              </div>
            </div>

            {/* Match List */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">MATCH LIST (10件/ページ)</div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="border border-gray-300 p-4 bg-gray-50">
                    <div className="grid grid-cols-5 gap-2 text-xs">
                      <div>日付</div>
                      <div>時刻</div>
                      <div>対戦相手</div>
                      <div>会場</div>
                      <div>リーグ</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="border-2 border-purple-400 p-4">
              <div className="font-bold text-center mb-3">PAGINATION</div>
              <div className="flex justify-center gap-2">
                <div className="border border-gray-300 px-3 py-1 text-xs">←</div>
                <div className="border border-gray-300 px-3 py-1 bg-accent text-white text-xs">1</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">→</div>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ RESULT PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            6. RESULT (/results)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5 text-center">
              <div className="font-bold mb-2">PAGE HERO</div>
              <div className="text-2xl">RESULT</div>
            </div>

            {/* Category Filter */}
            <div className="border-2 border-blue-400 p-4">
              <div className="font-bold text-center mb-3">CATEGORY DROPDOWN</div>
              <div className="flex justify-center">
                <div className="border border-gray-300 px-6 py-2 bg-gray-50 text-xs">
                  ALL ▼
                </div>
              </div>
            </div>

            {/* Result Cards */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">RESULT CARDS (10件/ページ)</div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-2 border-gray-300 p-6 bg-gray-50">
                    <div className="text-xs mb-2 text-center">日付 | リーグ</div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="text-center">
                        <div className="text-xs">NU GIRLS</div>
                        <div className="text-sm font-bold">エンブレム</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">3 - 1</div>
                        <div className="text-xs mt-1 text-green-600">WIN</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs">対戦相手</div>
                        <div className="text-sm font-bold">エンブレム</div>
                      </div>
                    </div>
                    <div className="text-xs text-center mt-3">会場名</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="border-2 border-purple-400 p-4">
              <div className="font-bold text-center mb-3">PAGINATION</div>
              <div className="flex justify-center gap-2">
                <div className="border border-gray-300 px-3 py-1 text-xs">←</div>
                <div className="border border-gray-300 px-3 py-1 bg-accent text-white text-xs">1</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">2</div>
                <div className="border border-gray-300 px-3 py-1 text-xs">→</div>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ MEMBER PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            7. MEMBER (/members)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5 text-center">
              <div className="font-bold mb-2">PAGE HERO</div>
              <div className="text-2xl">MEMBER</div>
              <div className="text-sm mt-2">チームを支えるメンバーたち</div>
            </div>

            {/* Main Category Filter */}
            <div className="border-2 border-blue-400 p-4">
              <div className="font-bold text-center mb-3">MAIN CATEGORY</div>
              <div className="flex justify-center gap-3">
                <div className="border border-gray-300 px-6 py-2 bg-accent text-white text-xs">
                  ALL
                </div>
                <div className="border border-gray-300 px-6 py-2 bg-gray-50 text-xs">
                  POSITION
                </div>
                <div className="border border-gray-300 px-6 py-2 bg-gray-50 text-xs">
                  GRADE
                </div>
              </div>
            </div>

            {/* Sub Filter - Position */}
            <div className="border-2 border-green-400 p-4">
              <div className="font-bold text-center mb-3">SUB FILTER (POSITION)</div>
              <div className="flex justify-center gap-2">
                {["ALL", "GP", "DF", "MF", "FW", "MG"].map((pos) => (
                  <div key={pos} className="border border-gray-300 px-4 py-1 bg-gray-50 text-xs">
                    {pos}
                  </div>
                ))}
              </div>
            </div>

            {/* Sub Filter - Grade */}
            <div className="border-2 border-purple-400 p-4">
              <div className="font-bold text-center mb-3">SUB FILTER (GRADE)</div>
              <div className="flex justify-center gap-2">
                {["ALL", "4年", "3年", "2年", "1年"].map((grade) => (
                  <div key={grade} className="border border-gray-300 px-4 py-1 bg-gray-50 text-xs">
                    {grade}
                  </div>
                ))}
              </div>
            </div>

            {/* Players Grid with Grouping */}
            <div className="border-2 border-yellow-400 p-6">
              <div className="font-bold text-center mb-3">PLAYERS GRID (グループ表示)</div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-bold mb-2">GP</div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-300 bg-gray-50 aspect-[3/4]">
                        <div className="text-xs p-2">選手写真</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold mb-2">DF</div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border border-gray-300 bg-gray-50 aspect-[3/4]">
                        <div className="text-xs p-2">選手写真</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  ... 他のポジション/学年グループ
                </div>
              </div>
            </div>

            {/* Staff Section */}
            <div className="border-2 border-red-400 p-6">
              <div className="font-bold text-center mb-3">STAFF</div>
              <div className="grid grid-cols-3 gap-4">
                {["監督", "コーチ", "GPコーチ"].map((role) => (
                  <div key={role} className="border border-gray-300 p-4 bg-gray-50 text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <div className="text-xs">{role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ ACCESS PAGE ============ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-accent">
            8. ACCESS (/access)
          </h2>
          
          <div className="space-y-4">
            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              HEADER
            </div>

            {/* Hero */}
            <div className="border-2 border-accent p-8 bg-accent/5 text-center">
              <div className="font-bold mb-2">PAGE HERO</div>
              <div className="text-2xl">ACCESS</div>
            </div>

            {/* Map */}
            <div className="border-2 border-blue-400 p-6">
              <div className="font-bold text-center mb-3">MAP</div>
              <div className="border border-gray-300 p-12 bg-gray-50 text-center">
                <div className="text-sm">Google Map埋め込み</div>
              </div>
            </div>

            {/* Access Info */}
            <div className="border-2 border-green-400 p-6">
              <div className="font-bold text-center mb-3">ACCESS INFO</div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="text-xs font-bold mb-2">住所</div>
                  <div className="text-xs">〒XXX-XXXX</div>
                  <div className="text-xs">東京都...</div>
                </div>
                <div className="border border-gray-300 p-4 bg-gray-50">
                  <div className="text-xs font-bold mb-2">アクセス</div>
                  <div className="text-xs">最寄り駅...</div>
                  <div className="text-xs">バス...</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-2 border-purple-400 p-6">
              <div className="font-bold text-center mb-3">CONTACT</div>
              <div className="border border-gray-300 p-4 bg-gray-50">
                <div className="text-xs">お問い合わせ先</div>
                <div className="text-xs mt-2">Email: xxx@xxx.jp</div>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 bg-gray-100 text-center">
              FOOTER
            </div>
          </div>
        </div>

        {/* ============ SUMMARY ============ */}
        <div className="bg-gradient-to-br from-accent via-accent/90 to-black rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">サイト構造サマリー</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">📄 ページ構成</h3>
              <ul className="space-y-2 text-sm">
                <li>• HOME - トップページ（全セクション統合）</li>
                <li>• TEAM - チーム紹介・理念・歴史</li>
                <li>• NEWS - ニュース一覧（ページネーション）</li>
                <li>• NEWS詳細 - 個別記事ページ</li>
                <li>• MATCH SCHEDULE - 試合予定</li>
                <li>• RESULT - 試合結果</li>
                <li>• MEMBER - メンバー一覧（フィルター機能）</li>
                <li>• ACCESS - アクセス情報</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">🎯 主な機能</h3>
              <ul className="space-y-2 text-sm">
                <li>• カテゴリフィルター（NEWS, MEMBER）</li>
                <li>• ページネーション（NEWS, SCHEDULE, RESULT）</li>
                <li>• ポジション別フィルター（MEMBER）</li>
                <li>• 学年別フィルター（MEMBER）</li>
                <li>• グループ表示（MEMBER）</li>
                <li>• レスポンシブデザイン（全ページ）</li>
                <li>• スムーススクロール</li>
                <li>• トップへ戻るボタン（HOME）</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <h3 className="text-lg font-bold mb-3">🎨 デザインシステム</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-bold mb-1">配色</div>
                <div>赤・黒・青・白・灰色</div>
              </div>
              <div>
                <div className="font-bold mb-1">フォント</div>
                <div>Noto Serif JP（明朝体）</div>
                <div>Montserrat</div>
              </div>
              <div>
                <div className="font-bold mb-1">コンセプト</div>
                <div>闘昇 〜挑戦と尊重〜</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
