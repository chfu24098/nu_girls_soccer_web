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
    { rank: 1, team: "山学", points: 18, matches: 6, wins: 6, draws: 0, losses: 0, emblemImage: emblems.yamanashiGakuin },
    { rank: 2, team: "日大", points: 13, matches: 6, wins: 4, draws: 1, losses: 1, emblemImage: emblems.nichidai },
    { rank: 3, team: "東洋", points: 13, matches: 6, wins: 4, draws: 1, losses: 1, emblemImage: emblems.toyo },
    { rank: 4, team: "神奈川", points: 13, matches: 6, wins: 4, draws: 1, losses: 1, emblemImage: emblems.kanagawadai },
    { rank: 5, team: "早稲田", points: 13, matches: 6, wins: 4, draws: 1, losses: 1, emblemImage: emblems.wasedaDai },
    { rank: 6, team: "国士館", points: 7, matches: 6, wins: 2, draws: 1, losses: 3, emblemImage: emblems.kokushi },
    { rank: 7, team: "東国", points: 6, matches: 6, wins: 2, draws: 0, losses: 4, emblemImage: emblems.tokyoKokusai },
    { rank: 8, team: "慶應", points: 6, matches: 6, wins: 1, draws: 3, losses: 2, emblemImage: emblems.keio },
    { rank: 9, team: "十文字", points: 4, matches: 6, wins: 1, draws: 1, losses: 4, emblemImage: emblems.jumonji },
    { rank: 10, team: "日体大", points: 4, matches: 6, wins: 1, draws: 1, losses: 4, emblemImage: emblems.nittai },
    { rank: 11, team: "順天", points: 3, matches: 6, wins: 1, draws: 0, losses: 5, emblemImage: emblems.junten },
    { rank: 12, team: "帝平", points: 3, matches: 6, wins: 1, draws: 0, losses: 5, emblemImage: emblems.teihei },
];