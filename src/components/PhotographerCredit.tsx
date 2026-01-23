import { Camera } from "lucide-react";

const instagramIcon = "/images/icon/Instagram.png";

export function PhotographerCredit() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            {/* タイトル */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                <Camera className="w-8 h-8 text-primary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Oswald',sans-serif] font-semibold">
                    <span className="text-white">PHOTOGRAPHER</span>
                </h2>
                <Camera className="w-8 h-8 text-primary" />
                </div>
                <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>

            {/* カメラマン情報カード */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 sm:p-8 shadow-xl">
                <div className="text-center space-y-4">
                <p className="text-white/70 text-sm sm:text-base">
                    当サイトに掲載されている写真を撮影していただいているカメラマンです
                </p>
                
                {/* カメラマン名 */}
                <div className="py-4">
                    <p className="text-lg sm:text-xl md:text-2xl font-['Oswald',sans-serif] font-semibold text-white mb-2">
                    Heitor Ryota Hashimoto
                    </p>
                    <p className="text-sm text-white/60">
                    Photo Credits: Heitor Ryota Hashimoto
                    </p>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                    <a
                    href="https://www.instagram.com/heitor_esporte?igsh=MXV4dTN0a21naW1taw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                    aria-label="Photographer Instagram"
                    >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex-shrink-0">
                        <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-semibold opacity-90">Instagram</p>
                        <p className="text-sm font-['Oswald',sans-serif]">@heitor_esporte</p>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}