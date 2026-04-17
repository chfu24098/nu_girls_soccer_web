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
    { rank: 1, team: "神奈川", points: 6, matches: 2, wins: 2, draws: 0, losses: 0, emblemImage: emblems.kanagawadai },
    { rank: 2, team: "東洋", points: 6, matches: 2, wins: 2, draws: 0, losses: 0, emblemImage: emblems.toyo },
    { rank: 3, team: "山学", points: 6, matches: 2, wins: 2, draws: 0, losses: 0, emblemImage: emblems.yamanashiGakuin },
    { rank: 4, team: "慶應", points: 4, matches: 2, wins: 1, draws: 1, losses: 0, emblemImage: emblems.keio },
    { rank: 5, team: "日大", points: 3, matches: 2, wins: 1, draws: 0, losses: 1, emblemImage: emblems.nichidai },
    { rank: 6, team: "早稲田", points: 3, matches: 2, wins: 1, draws: 0, losses: 0, emblemImage: emblems.wasedaDai },
    { rank: 7, team: "日体大", points: 3, matches: 2, wins: 0, draws: 1, losses: 0, emblemImage: emblems.nittai },
    { rank: 8, team: "帝平", points: 3, matches: 2, wins: 0, draws: 0, losses: 1, emblemImage: emblems.teihei },
    { rank: 9, team: "十文字", points: 1, matches: 2, wins: 0, draws: 1, losses: 1, emblemImage: emblems.jumonji },
    { rank: 10, team: "東国", points: 0, matches: 2, wins: 0, draws: 0, losses: 2, emblemImage: emblems.tokyoKokusai },
    { rank: 11, team: "順天", points: 0, matches: 2, wins: 0, draws: 0, losses: 2, emblemImage: emblems.junten },
    { rank: 12, team: "国士館", points: 0, matches: 2, wins: 0, draws: 0, losses: 2, emblemImage: emblems.kokushi },
];