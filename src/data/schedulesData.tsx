import { emblems } from "./constants/emblems";

// 試合予定データ
export const schedulesData = [
  {
    date: "1/18",
    dayOfWeek: "Sun.",
    time: "13:00",
    opponent: "東京アルミテス",
    opponentEmblem: emblems.tokyoalmi,
    location: "スポーツ日大アスレティックパーク稲城サッカー場",
    type: "東京都女子サッカーリーグ一般2部",
    category: "東京都女子サッカーリーグ一般2部",
    isHome: true,
  },
  {
    date: "2/21",
    dayOfWeek: "Sat.",
    time: "未定",
    opponent: "未定",
    opponentEmblem: emblems.jumonji,
    location: "スポーツ日大アスレティックパーク稲城サッカー場",
    type: "東京都女子サッカーリーグ一般2部",
    category: "東京都女子サッカーリーグ一般2部",
    isHome: null,
  },
  {
    date: "2/22",
    dayOfWeek: "Sun.",
    time: "未定",
    opponent: "未定",
    opponentEmblem: emblems.jumonji,
    location: "スポーツ日大アスレティックパーク稲城サッカー場",
    type: "東京都女子サッカーリーグ一般2部",
    category: "東京都女子サッカーリーグ一般2部",
    isHome: null,
  },
];

export type ScheduleMatch = typeof schedulesData[0];