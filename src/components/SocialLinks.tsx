const instagramIcon = "/images/icon/Instagram.png";
const noteIcon = "/images/icon/note.png";
const tiktokIcon = "/images/icon/TikTok.png";
const youtubeIcon = "/images/icon/youtube.png";
const facebookIcon = "/images/icon/Facebook.png";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/nu_girlsoccer/",
      icon: instagramIcon,
    },
    {
      name: "Note",
      url: "https://note.com/nu_girlsoccer",
      icon: noteIcon,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@nu_girlsoccer",
      icon: tiktokIcon,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCh_0JA9LCXCRp3G2uj1dOkQ",
      icon: youtubeIcon,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/nu.girlsoccer/?locale=ja_JP",
      icon: facebookIcon,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl mb-4 relative">
              <span className="text-primary relative z-10">FOLLOW </span>
              <span className="text-white relative z-10">US</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">公式SNSアカウント</p>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110 duration-300"
              aria-label={social.name}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-shadow duration-300">
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}