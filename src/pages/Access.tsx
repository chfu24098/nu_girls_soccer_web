export function Access() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative py-32 bg-gradient-to-br from-accent via-accent/90 to-black">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-br from-accent via-accent/90 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            <span className="text-primary">ACCESS</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            アクセス情報
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Notice */}
          <div className="mb-12 p-8 bg-gray-50 rounded-lg border-l-4 border-primary">
            <p className="text-xl leading-relaxed">
              本グラウンドは、駐車場台数に限りがあるため、事前に許可された車両以外は入場できません。
              <br />
              各公共交通機関、または近隣の公共駐車場をご利用ください。
            </p>
          </div>

          {/* Venue Information */}
          <div className="mb-12 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">施設情報</h2>
            <div className="space-y-2">
              <p className="text-2xl font-bold">
                スポーツ日大アスレティックパーク稲城サッカーフィールド
              </p>
              <p className="text-xl text-muted-foreground">
                〒206-0822 東京都稲城市坂浜1382
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-1 h-10 bg-primary"></span>
              アクセスマップ
            </h2>
            <div className="w-full rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.439059113903!2d139.4747547805309!3d35.616901165116545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018fb1ac39d36d5%3A0x635e512c13fc26a!2z5pel5pys5aSn5a2m56iy5Z-O44K144OD44Kr44O85aC0!5e0!3m2!1sja!2sjp!4v1767773855099!5m2!1sja!2sjp"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Access Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                電車でお越しの場合
              </h3>
              <div className="space-y-3 text-lg">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>「京王線若葉台駅」より徒歩15分</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>「小田急線栗平駅」より徒歩15分</span>
                </p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                お車でお越しの場合
              </h3>
              <div className="text-lg">
                <p className="leading-relaxed">
                  「京王線若葉台駅」「小田急線栗平駅」の周辺の公共駐車場をご利用ください。
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-center text-muted-foreground">
              ※ ご来場の際は、公共交通機関のご利用にご協力ください
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}