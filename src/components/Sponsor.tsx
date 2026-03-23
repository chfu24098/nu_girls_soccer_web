export function Sponsor() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl mb-4 relative">
              <span className="text-accent relative z-10">SPONSOR</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
            <p className="text-muted-foreground mt-4">
              私たちの活動を支えてくださっているスポンサー様
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <a
              href="https://ors-jp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all hover:opacity-80 hover:scale-105 duration-300"
            >
              <img
                src="https://ors-jp.com/wp/wp-content/themes/ors/images/common/logo.png"
                alt="ORS - スポンサーロゴ"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            ※ スポンサー様のご支援により、チームの活動が支えられています。
          </p>
        </div>
      </div>
    </section>
  );
}
