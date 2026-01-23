import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Players } from "../components/Players";
import { News } from "../components/News";
import { HomeSchedule } from "../components/HomeSchedule";
import { Ranking } from "../components/Ranking";
import { HomeAccess } from "../components/HomeAccess";
import { SocialLinks } from "../components/SocialLinks";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { PhotographerCredit } from "../components/PhotographerCredit";

        
export function Home() {
  return (
    <>
      <SEO
        title="NU GIRLS SOCCER - 日本大学女子サッカー部"
        description="日本大学女子サッカー部の公式サイト。チームのキャッチコピーは「闘昇」。挑戦と尊重の精神で、声を出す・ハードワーク・楽しむという三原則のもと活動しています。試合結果、選手情報、スケジュールなどを掲載。"
        keywords="日本大学,女子サッカー部,NU GIRLS SOCCER,闘昇,大学サッカー,関東大学女子サッカー,日大,女子サッカー,試合結果,スケジュール"
      />
      <StructuredData type="SportsTeam" />
      <div>
        <Hero />
        <About />
        <Players />
        <HomeSchedule />
        <Ranking />
        <News />
        <SocialLinks />
        <PhotographerCredit />
        <HomeAccess />
        <ScrollToTopButton /> 
      </div>
    </>
  );
}