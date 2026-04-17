export type Staff = {
  id: string;
  name: string;
  nameKana: string;
  role: string; // 監督、コーチ、GPコーチ、トレーナーなど
  image: string; // プロフィール画像
};
/*  
bio: string; // 経歴
  message: string; // メッセージ
  philosophy?: string; // 指導理念
  achievements?: string[]; // 主な実績
  qualifications?: string[]; // 資格
  favoriteWords?: string; // 座右の銘
};
*/

export const staffData: Staff[] = [
  {
    id: "sato-kotomi",
    name: "佐藤 琴美",
    nameKana: "さとう ことみ",
    role: "監督",
    image: "images/players/b_sato.webp",
    /*
    bio: "日本大学文理学部体育学科卒業。現役時代は日本女子サッカーリーグ（なでしこリーグ）で活躍。引退後は指導者の道へ進み、2020年より日本大学女子サッカー部監督に就任。",
    message: "サッカーは個人の技術だけでなく、チーム全体の連携が何より大切です。一人ひとりが自分の役割を理解し、仲間を信頼してプレーすることで、大きな力を発揮できます。皆さんと一緒に、日本一を目指して頑張りましょう！",
    philosophy: "「闘昇」のマインドを持ち、常に挑戦し続けること。そして仲間を尊重し、全員で成長すること。",
    achievements: [
      "なでしこリーグ1部 通算120試合出場",
      "関東大学女子サッカーリーグ 優勝経験者（選手時代）",
      "日本サッカー協会公認A級コーチ",
      "日本大学女子サッカー部 2022年度 関東大学女子サッカーリーグ2部 準優勝",
    ],
    qualifications: [
      "日本サッカー協会公認A級コーチライセンス",
      "日本体育協会公認スポーツ指導者",
      "体育学修士",
    ],
    favoriteWords: "継続は力なり",
    */
  },
  {
    id: "yamamoto-yoshihiro",
    name: "山本 義弘",
    nameKana: "やまもと よしひろ",
    role: "コーチ",
    image: "images/players/s_yamamoto.webp",
    /*
    bio: "早稲田大学スポーツ科学部卒業。大学卒業後はJリーグクラブのユースチームでコーチを経験。戦術分析とフィジカルトレーニングを専門とし、2021年より日本大学女子サッカー部コーチに就任。",
    message: "サッカーは頭を使うスポーツです。状況を冷静に判断し、最適な選択をする力を養いましょう。練習では一つひとつのプレーに意味を持たせ、試合で使える技術を身につけることを大切にしています。共に成長していきましょう！",
    philosophy: "理論と実践のバランスを大切にし、選手一人ひとりの個性を活かす指導を心がけています。",
    achievements: [
      "Jリーグクラブユースチーム コーチ歴5年",
      "日本サッカー協会公認B級コーチ",
      "全国高等学校サッカー選手権大会 ベスト16（選手時代）",
      "スポーツ科学修士",
    ],
    qualifications: [
      "日本サッカー協会公認B級コーチライセンス",
      "NSCA認定ストレングス&コンディショニングスペシャリスト（CSCS）",
      "スポーツ科学修士",
    ],
    favoriteWords: "準備が全て",
    */
  }
];

export const getStaffById = (id: string): Staff | undefined => {
  return staffData.find((staff) => staff.id === id);
};