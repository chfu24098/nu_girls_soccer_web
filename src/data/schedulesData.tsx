import { emblems } from "./constants/emblems";

// 試合予定データ
export const schedulesData = [
  
  {
    date: "6/6",
    dayOfWeek: "Sat.",
    time: "14:00",
    opponent: "慶應義塾大学",
    opponentEmblem: emblems.keio,
    location: "慶應義塾大学下田グラウンド",
    type: "関東大学女子サッカーリーグ",
    category: "関東大学女子サッカーリーグ",
    isHome: false,
  },  
  {
    date: "6/14",
    dayOfWeek: "Sun.",
    time: "15:00",
    opponent: "日本体育大学",
    opponentEmblem: emblems.nittai,
    location: "スポーツ日大アスレティックパーク稲城",
    type: "関東大学女子サッカーリーグ",
    category: "関東大学女子サッカーリーグ",
    isHome: true,
  },          
];

export type ScheduleMatch = typeof schedulesData[0];