import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Players } from "../components/Players";
import { News } from "../components/News";
import { HomeSchedule } from "../components/HomeSchedule";
import { Ranking } from "../components/Ranking";
import { HomeAccess } from "../components/HomeAccess";
import { SocialLinks } from "../components/SocialLinks";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Players />
      <HomeSchedule />
      <Ranking />
      <News />
      <SocialLinks />
      <HomeAccess />
      <ScrollToTopButton />
    </>
  );
}