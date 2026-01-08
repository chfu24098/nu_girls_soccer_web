// 選手データ

export type Position = "GP" | "DF" | "MF" | "FW" | "MG";
export type Grade = "4年" | "3年" | "2年" | "1年";

export interface Player {
  number: number;
  name: string;
  nameEn: string;
  position: Position;
  grade: Grade;
  image: string;
}

export interface Staff {
  name: string;
  nameEn: string;
  role: string;
  image?: string;
}

// 選手データ
export const playersData: Player[] = [
  {
    number: 1,
    name: "山田 桜音",
    nameEn: "Yamada Saion",
    position: "GP",
    grade: "4年",
    image: "/images/member/p1.png",
  },
  {
    number: 2,
    name: "難波 響",
    nameEn: "Nanba Hibiki",
    position: "MF",
    grade: "3年",
    image: "/images/member/p2.png",
  },
  {
    number: 3,
    name: "中嶋 瑠七",
    nameEn: "Nakajima Runa",
    position: "DF",
    grade: "2年",
    image: "/images/member/p3.png",
  },
  {
    number: 4,
    name: "佐藤マリー奈々美",
    nameEn: "Sato Mary Nanami",
    position: "MF",
    grade: "1年",
    image: "/images/member/p4.png",
  },
  {
    number: 6,
    name: "竹田 真菜",
    nameEn: "Takeda Mana",
    position: "MF",
    grade: "4年",
    image: "/images/member/p6.png",
  },
  {
    number: 7,
    name: "菅野 向日葵",
    nameEn: "Kanno Himawari",
    position: "DF",
    grade: "2年",
    image: "/images/member/p7.png",
  },
  {
    number: 8,
    name: "片山 詠乃",
    nameEn: "Katayama Utano",
    position: "FW",
    grade: "3年",
    image: "/images/member/p8.png",
  },
  {
    number: 9,
    name: "柴田 瞳",
    nameEn: "Shibata Hitomi",
    position: "FW",
    grade: "2年",
    image: "/images/member/p9.png",
  },
  {
    number: 10,
    name: "遠山 瑠菜",
    nameEn: "Toyama Runa",
    position: "FW",
    grade: "4年",
    image: "/images/member/p10.png",
  },
  {
    number: 11,
    name: "岩渕 柚月",
    nameEn: "Iwabuchi Yuduki",
    position: "FW",
    grade: "2年",
    image: "/images/member/p11.png",
  },
  {
    number: 13,
    name: "木村 菜々夏",
    nameEn: "Kimura Nanaka",
    position: "DF",
    grade: "1年",
    image: "/images/member/p13.png",
  },
  {
    number: 14,
    name: "久保 華恩",
    nameEn: "Kubo Canon",
    position: "MF",
    grade: "4年",
    image: "/images/member/p14.png",
  },
  {
    number: 15,
    name: "折原 こころ",
    nameEn: "Orihara Cocoro",
    position: "FW",
    grade: "1年",
    image: "/images/member/p15.png",
  },
  {
    number: 16,
    name: "藤田 萌歌",
    nameEn: "Fujita Moeka",
    position: "GP",
    grade: "4年",
    image: "/images/member/p16.png",
  },
  {
    number: 17,
    name: "西野 早紀",
    nameEn: "Nishino Saki",
    position: "FW",
    grade: "4年",
    image: "/images/member/p17.png",
  },
  {
    number: 18,
    name: "朝比奈 優",
    nameEn: "Asahina Yu",
    position: "FW",
    grade: "2年",
    image: "/images/member/p18.png",
  },
  {
    number: 19,
    name: "大光 望結",
    nameEn: "Daiko Miyu",
    position: "DF",
    grade: "3年",
    image: "/images/member/p19.png",
  },
  {
    number: 20,
    name: "難波 奏",
    nameEn: "Nanba Kanade",
    position: "MF",
    grade: "2年",
    image: "/images/member/p20.png",
  },
  {
    number: 21,
    name: "中屋 音葉",
    nameEn: "Nakaya Otoha",
    position: "GP",
    grade: "3年",
    image: "/images/member/p21.png",
  },
  {
    number: 22,
    name: "早稲田 萌絵",
    nameEn: "Waseda Moe",
    position: "FW",
    grade: "1年",
    image: "/images/member/p22.png",
  },
  {
    number: 23,
    name: "五十嵐 美朝",
    nameEn: "Igarashi Miasa",
    position: "MF",
    grade: "1年",
    image: "/images/member/p23.png",
  },
  {
    number: 24,
    name: "増原 遥花",
    nameEn: "Masuhara Haruka",
    position: "FW",
    grade: "4年",
    image: "/images/member/p24.png",
  },
  {
    number: 25,
    name: "滝沢 美結",
    nameEn: "Takizawa Miyu",
    position: "DF",
    grade: "4年",
    image: "/images/member/p25.png",
  },
  {
    number: 26,
    name: "清水 萌衣",
    nameEn: "Shimizu Mei",
    position: "DF",
    grade: "3年",
    image: "/images/member/p26.png",
  },
  {
    number: 27,
    name: "田口 瑚香菜",
    nameEn: "Taguchi Cocona",
    position: "DF",
    grade: "3年",
    image: "/images/member/p27.png",
  },
  {
    number: 28,
    name: "木村 藍",
    nameEn: "Kimura Ai",
    position: "MF",
    grade: "4年",
    image: "/images/member/p28.png",
  },
  {
    number: 29,
    name: "山村 美和子",
    nameEn: "Yamamura Miwako",
    position: "DF",
    grade: "1年",
    image: "/images/member/p29.png",
  },
  {
    number: 32,
    name: "坪井 蛍",
    nameEn: "Tsuboi Kei",
    position: "DF",
    grade: "1年",
    image: "/images/member/p32.png",
  },
  {
    number: 33,
    name: "堀 花成",
    nameEn: "Hori Hana",
    position: "MF",
    grade: "1年",
    image: "/images/member/p33.png",
  },
  {
    number: 34,
    name: "川原 梨寧",
    nameEn: "Kawahara Rine",
    position: "DF",
    grade: "3年",
    image: "/images/member/p34.png",
  },
  {
    number: 35,
    name: "松本 蓮史",
    nameEn: "Matsumoto Remi",
    position: "FW",
    grade: "3年",
    image: "/images/member/p35.png",
  },
  {
    number: 36,
    name: "玄番 理恵",
    nameEn: "Genba Rie",
    position: "FW",
    grade: "3年",
    image: "/images/member/p36.png",
  },
  {
    number: 37,
    name: "笠原 凛",
    nameEn: "Kasahara Rin",
    position: "MF",
    grade: "3年",
    image: "/images/member/p37.png",
  },
  {
    number: 38,
    name: "土屋 美起",
    nameEn: "Tsuchiya Miki",
    position: "DF",
    grade: "3年",
    image: "/images/member/p38.png",
  },
  {
    number: 39,
    name: "白井 心葉",
    nameEn: "Shirai Cocoha",
    position: "DF",
    grade: "2年",
    image: "/images/member/p39.png",
  },
  {
    number: 40,
    name: "濱田 若那",
    nameEn: "Hamada Wakana",
    position: "MF",
    grade: "2年",
    image: "/images/member/p40.png",
  },
  {
    number: 41,
    name: "大塚 陽和",
    nameEn: "Otsuka Hiyori",
    position: "GP",
    grade: "2年",
    image: "/images/member/p41.png",
  },
  {
    number: 42,
    name: "工藤 千愛",
    nameEn: "Kudo Chisato",
    position: "DF",
    grade: "2年",
    image: "/images/member/p42.png",
  },
  {
    number: 43,
    name: "伊藤 そら",
    nameEn: "Ito Sora",
    position: "DF",
    grade: "2年",
    image: "/images/member/p43.png",
  },
  {
    number: 45,
    name: "小澤 楓咲",
    nameEn: "Ozawa Fusaki",
    position: "FW",
    grade: "2年",
    image: "/images/member/p45.png",
  },
  {
    number: 46,
    name: "橋本 志織",
    nameEn: "Hashimoto Shiori",
    position: "MF",
    grade: "1年",
    image: "/images/member/p46.png",
  },
  {
    number: 50,
    name: "福井 ひより",
    nameEn: "Fukui Hiyori",
    position: "MG",
    grade: "4年",
    image: "/images/member/m1.png",
  },
  {
    number: 51,
    name: "加賀美 心音",
    nameEn: "Kagami Cocone",
    position: "MG",
    grade: "3年",
    image: "/images/member/m2.png",
  },
];

// スタッフデータ（将来的に追加可能）
export const staffData: Staff[] = [
  {
    name: "佐藤 琴美",
    nameEn: "Sato Kotomi",
    role: "監督",
  },
  {
    name: "山本 義弘",
    nameEn: "Yamamoto Yoshihiro",
    role: "コーチ",
  },
  {
    name: "野田 恭平",
    nameEn: "Noda Kyohei",
    role: "GPコーチ",
  },
];

// ポジション順序
export const positionOrder: Position[] = ["GP", "DF", "MF", "FW", "MG"];

// 学年順序
export const gradeOrder: Grade[] = ["4年", "3年", "2年", "1年"];

// ポジション名の日本語表記
export const positionLabels: Record<Position, string> = {
  GP: "ゴールキーパー",
  DF: "ディフェンダー",
  MF: "ミッドフィルダー",
  FW: "フォワード",
  MG: "マネージャー",
};