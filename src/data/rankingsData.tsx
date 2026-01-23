import { emblems } from "./constants/emblems";

export interface RankingTeam {
    rank: number;
    team: string;
    points: number;
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    emblemImage: string;
}

export const rankingsData: RankingTeam[] = [
    { rank: 1, team: "東洋大学", points: 50, matches: 22, wins: 16, draws: 2, losses: 4, emblemImage: emblems.toyo },
    { rank: 2, team: "神奈川大学", points: 42, matches: 22, wins: 12, draws: 6, losses: 4, emblemImage: emblems.kanagawadai },
    { rank: 3, team: "十文字学園女子大学", points: 41, matches: 22, wins: 12, draws: 5, losses: 5, emblemImage: emblems.jumonji },
    { rank: 4, team: "東京国際大学", points: 40, matches: 22, wins: 12, draws: 4, losses: 6, emblemImage: emblems.tokyoKokusai },
    { rank: 5, team: "早稲田大学", points: 38, matches: 22, wins: 11, draws: 5, losses: 6, emblemImage: emblems.wasedaDai },
    { rank: 6, team: "山梨学院大学", points: 37, matches: 22, wins: 12, draws: 1, losses: 9, emblemImage: emblems.yamanashiGakuin },
    { rank: 7, team: "日本大学", points: 35, matches: 22, wins: 11, draws: 2, losses: 9, emblemImage: emblems.nichidai },
    { rank: 8, team: "日本体育大学", points: 34, matches: 22, wins: 10, draws: 4, losses: 8, emblemImage: emblems.nittai },
    { rank: 9, team: "帝京平成大学", points: 33, matches: 22, wins: 10, draws: 3, losses: 8, emblemImage: emblems.teihei },
    { rank: 10, team: "大東文化大学", points: 11, matches: 22, wins: 3, draws: 2, losses: 17, emblemImage: emblems.daitodai },
    { rank: 11, team: "東海大学", points: 9, matches: 22, wins: 2, draws: 3, losses: 17, emblemImage: emblems.tokai },
    { rank: 12, team: "筑波大学", points: 6, matches: 22, wins: 1, draws: 3, losses: 18, emblemImage: emblems.tukuba },
];