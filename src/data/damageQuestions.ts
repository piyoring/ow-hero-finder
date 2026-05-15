import type { AnswerKey } from "../types";

export type DamageGenre =
  | "flanker"
  | "midrange"
  | "longRange"
  | "areaDamage"
  | "defense"
  | "technical";

export type DamageHero =
  | "Ashe"
  | "Bastion"
  | "Cassidy"
  | "Echo"
  | "Freja"
  | "Genji"
  | "Hanzo"
  | "Junkrat"
  | "Mei"
  | "Pharah"
  | "Reaper"
  | "Sojourn"
  | "Soldier: 76"
  | "Sombra"
  | "Symmetra"
  | "Torbjörn"
  | "Tracer"
  | "Venture"
  | "Widowmaker"
  | "Anran"
  | "Emre"
  | "Sierra"
  | "Vendetta";

export type Scoring<T extends string> = {
  [key in AnswerKey]: {
    targets: T[];
    points: number;
  };
};

export type DamageGenreQuestion = {
  id: string;
  text: string;
  scoring: Scoring<DamageGenre>;
};

export type DamageHeroQuestion = {
  id: string;
  text: string;
  genre: DamageGenre;
  scoring: Scoring<DamageHero>;
};

export const damageGenreLabels: Record<DamageGenre, string> = {
  flanker: "フランカー・暗殺",
  midrange: "中距離・正面火力",
  longRange: "遠距離・ピック",
  areaDamage: "範囲火力・空間制圧",
  defense: "エリア管理・防衛",
  technical: "テクニカル・特殊操作",
};

/**
 * 第1段階：ジャンル判定 12問
 * 上位2ジャンルを選び、第2段階でそれぞれ9問ずつ出題する想定です。
 */
export const damageGenreQuestions: DamageGenreQuestion[] = [
  {
    id: "G1",
    text: "正面から撃ち合うより、横や裏から相手を崩す動きが好き",
    scoring: {
      yes: { targets: ["flanker"], points: 2 },
      somewhat_yes: { targets: ["flanker"], points: 1 },
      somewhat_no: { targets: ["midrange"], points: 1 },
      no: { targets: ["midrange"], points: 2 },
    },
  },
  {
    id: "G2",
    text: "複数人に圧をかけるより、遠距離から重要な敵を抜きたい",
    scoring: {
      yes: { targets: ["longRange"], points: 2 },
      somewhat_yes: { targets: ["longRange"], points: 1 },
      somewhat_no: { targets: ["areaDamage"], points: 1 },
      no: { targets: ["areaDamage"], points: 2 },
    },
  },
  {
    id: "G3",
    text: "操作が難しくても、スキルや判断で差が出るキャラに惹かれる",
    scoring: {
      yes: { targets: ["technical"], points: 2 },
      somewhat_yes: { targets: ["technical"], points: 1 },
      somewhat_no: { targets: ["defense"], points: 1 },
      no: { targets: ["defense"], points: 2 },
    },
  },
  {
    id: "G4",
    text: "遠くから待つより、自分から距離を詰めて勝負したい",
    scoring: {
      yes: { targets: ["flanker"], points: 2 },
      somewhat_yes: { targets: ["flanker"], points: 1 },
      somewhat_no: { targets: ["longRange"], points: 1 },
      no: { targets: ["longRange"], points: 2 },
    },
  },
  {
    id: "G5",
    text: "目の前の敵を正確に撃つより、爆発や範囲で場を荒らしたい",
    scoring: {
      yes: { targets: ["areaDamage"], points: 2 },
      somewhat_yes: { targets: ["areaDamage"], points: 1 },
      somewhat_no: { targets: ["midrange"], points: 1 },
      no: { targets: ["midrange"], points: 2 },
    },
  },
  {
    id: "G6",
    text: "敵を追い回すより、強い場所を守って相手を通しにくくしたい",
    scoring: {
      yes: { targets: ["defense"], points: 2 },
      somewhat_yes: { targets: ["defense"], points: 1 },
      somewhat_no: { targets: ["flanker"], points: 1 },
      no: { targets: ["flanker"], points: 2 },
    },
  },
  {
    id: "G7",
    text: "シンプルな撃ち合いより、特殊な性能や独特な攻撃方法を使いこなしたい",
    scoring: {
      yes: { targets: ["technical"], points: 2 },
      somewhat_yes: { targets: ["technical"], points: 1 },
      somewhat_no: { targets: ["areaDamage"], points: 1 },
      no: { targets: ["areaDamage"], points: 2 },
    },
  },
  {
    id: "G8",
    text: "遠距離で狙うより、中距離で継続的に圧をかけたい",
    scoring: {
      yes: { targets: ["midrange"], points: 2 },
      somewhat_yes: { targets: ["midrange"], points: 1 },
      somewhat_no: { targets: ["longRange"], points: 1 },
      no: { targets: ["longRange"], points: 2 },
    },
  },
  {
    id: "G9",
    text: "複雑な操作より、素早く入り込んで敵を崩す方が好き",
    scoring: {
      yes: { targets: ["flanker"], points: 2 },
      somewhat_yes: { targets: ["flanker"], points: 1 },
      somewhat_no: { targets: ["technical"], points: 1 },
      no: { targets: ["technical"], points: 2 },
    },
  },
  {
    id: "G10",
    text: "広く圧をかけるより、特定の場所を守る・封鎖する方が好き",
    scoring: {
      yes: { targets: ["defense"], points: 2 },
      somewhat_yes: { targets: ["defense"], points: 1 },
      somewhat_no: { targets: ["areaDamage"], points: 1 },
      no: { targets: ["areaDamage"], points: 2 },
    },
  },
  {
    id: "G11",
    text: "固定位置で守るより、味方と同じ方向を見て火力を出したい",
    scoring: {
      yes: { targets: ["midrange"], points: 2 },
      somewhat_yes: { targets: ["midrange"], points: 1 },
      somewhat_no: { targets: ["defense"], points: 1 },
      no: { targets: ["defense"], points: 2 },
    },
  },
  {
    id: "G12",
    text: "特殊な操作より、落ち着いて狙う・射線を作るプレイが好き",
    scoring: {
      yes: { targets: ["longRange"], points: 2 },
      somewhat_yes: { targets: ["longRange"], points: 1 },
      somewhat_no: { targets: ["technical"], points: 1 },
      no: { targets: ["technical"], points: 2 },
    },
  },
];

/**
 * 第2段階：ジャンル別深掘り質問
 */
export const damageHeroQuestions: DamageHeroQuestion[] = [
  // フランカー・暗殺
  {
    id: "F1",
    genre: "flanker",
    text: "短時間で入り、相手を乱してすぐ離脱する動きが好き",
    scoring: {
      yes: { targets: ["Tracer", "Sombra", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Tracer", "Sombra", "Venture"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Vendetta", "Genji"], points: 1 },
      no: { targets: ["Reaper", "Vendetta", "Genji"], points: 2 },
    },
  },
  {
    id: "F2",
    genre: "flanker",
    text: "スキルコンボで一気に倒し切るプレイが好き",
    scoring: {
      yes: { targets: ["Echo", "Genji", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Genji", "Venture"], points: 1 },
      somewhat_no: { targets: ["Tracer", "Sombra", "Reaper"], points: 1 },
      no: { targets: ["Tracer", "Sombra", "Reaper"], points: 2 },
    },
  },
  {
    id: "F3",
    genre: "flanker",
    text: "裏取りや情報差で相手を崩すのが好き",
    scoring: {
      yes: { targets: ["Sombra", "Tracer", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Sombra", "Tracer", "Venture"], points: 1 },
      somewhat_no: { targets: ["Genji", "Echo", "Vendetta"], points: 1 },
      no: { targets: ["Genji", "Echo", "Vendetta"], points: 2 },
    },
  },
  {
    id: "F4",
    genre: "flanker",
    text: "小回りより、近距離で強引に倒し切る方が好き",
    scoring: {
      yes: { targets: ["Reaper", "Vendetta", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Reaper", "Vendetta", "Venture"], points: 1 },
      somewhat_no: { targets: ["Tracer", "Sombra", "Echo"], points: 1 },
      no: { targets: ["Tracer", "Sombra", "Echo"], points: 2 },
    },
  },
  {
    id: "F5",
    genre: "flanker",
    text: "高所や空中を使って、予想外の角度から刺したい",
    scoring: {
      yes: { targets: ["Echo", "Genji", "Sombra"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Genji", "Sombra"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Vendetta", "Tracer"], points: 1 },
      no: { targets: ["Reaper", "Vendetta", "Tracer"], points: 2 },
    },
  },
  {
    id: "F6",
    genre: "flanker",
    text: "しつこくヘイトを買いながら、生き残って敵の意識を散らし続けたい",
    scoring: {
      yes: { targets: ["Tracer"], points: 2 },
      somewhat_yes: { targets: ["Tracer", "Sombra", "Venture"], points: 1 },
      somewhat_no: { targets: ["Genji", "Reaper", "Vendetta"], points: 1 },
      no: { targets: ["Reaper"], points: 2 },
    },
  },
  {
    id: "F7",
    genre: "flanker",
    text: "リスクを取ってでも、近距離の勝負所でキルを取り切りたい",
    scoring: {
      yes: { targets: ["Vendetta"], points: 2 },
      somewhat_yes: { targets: ["Vendetta", "Genji", "Tracer"], points: 1 },
      somewhat_no: { targets: ["Sombra", "Echo", "Reaper"], points: 1 },
      no: { targets: ["Sombra"], points: 2 },
    },
  },
  {
    id: "F8",
    genre: "flanker",
    text: "単独で荒らすより、味方の攻めに合わせて後衛を狙いたい",
    scoring: {
      yes: { targets: ["Echo", "Genji", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Genji", "Venture"], points: 1 },
      somewhat_no: { targets: ["Tracer", "Sombra", "Vendetta"], points: 1 },
      no: { targets: ["Tracer", "Sombra", "Vendetta"], points: 2 },
    },
  },
  {
    id: "F9",
    genre: "flanker",
    text: "操作が難しくても、練度で暗殺性能が伸びるキャラが好き",
    scoring: {
      yes: { targets: ["Genji", "Echo", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Genji", "Echo", "Venture"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Vendetta", "Sombra"], points: 1 },
      no: { targets: ["Reaper", "Vendetta", "Sombra"], points: 2 },
    },
  },

  // 中距離・正面火力
  {
    id: "M1",
    genre: "midrange",
    text: "初めて使うキャラでも、分かりやすい武器と自己回復で安定して戦えると安心",
    scoring: {
      yes: { targets: ["Soldier: 76"], points: 2 },
      somewhat_yes: { targets: ["Soldier: 76", "Emre", "Bastion"], points: 1 },
      somewhat_no: { targets: ["Cassidy", "Sojourn", "Ashe"], points: 1 },
      no: { targets: ["Sojourn"], points: 2 },
    },
  },
  {
    id: "M2",
    genre: "midrange",
    text: "フルオートより、1発ずつ丁寧に当てる武器が好き",
    scoring: {
      yes: { targets: ["Cassidy", "Ashe", "Emre"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Ashe", "Emre"], points: 1 },
      somewhat_no: { targets: ["Soldier: 76", "Bastion", "Reaper"], points: 1 },
      no: { targets: ["Soldier: 76", "Bastion", "Reaper"], points: 2 },
    },
  },
  {
    id: "M3",
    genre: "midrange",
    text: "普段は堅実に戦い、勝負所で一気にキルを取りたい",
    scoring: {
      yes: { targets: ["Sojourn", "Cassidy", "Ashe"], points: 2 },
      somewhat_yes: { targets: ["Sojourn", "Cassidy", "Ashe"], points: 1 },
      somewhat_no: { targets: ["Soldier: 76", "Emre", "Bastion"], points: 1 },
      no: { targets: ["Soldier: 76", "Emre", "Bastion"], points: 2 },
    },
  },
  {
    id: "M4",
    genre: "midrange",
    text: "敵の前線やタンクにも圧をかけたい",
    scoring: {
      yes: { targets: ["Bastion", "Reaper", "Soldier: 76"], points: 2 },
      somewhat_yes: { targets: ["Bastion", "Reaper", "Soldier: 76"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Cassidy", "Emre"], points: 1 },
      no: { targets: ["Ashe", "Cassidy", "Emre"], points: 2 },
    },
  },
  {
    id: "M5",
    genre: "midrange",
    text: "中距離の強ポジションから射線を作るのが好き",
    scoring: {
      yes: { targets: ["Ashe", "Sojourn", "Cassidy"], points: 2 },
      somewhat_yes: { targets: ["Ashe", "Sojourn", "Cassidy"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Bastion", "Soldier: 76"], points: 1 },
      no: { targets: ["Reaper", "Bastion", "Soldier: 76"], points: 2 },
    },
  },
  {
    id: "M6",
    genre: "midrange",
    text: "操作が分かりやすく、FPSの基礎であるエイム・立ち位置・継続火力で戦いたい",
    scoring: {
      yes: { targets: ["Soldier: 76"], points: 2 },
      somewhat_yes: { targets: ["Soldier: 76", "Emre", "Cassidy"], points: 1 },
      somewhat_no: { targets: ["Sojourn", "Ashe", "Bastion"], points: 1 },
      no: { targets: ["Sojourn"], points: 2 },
    },
  },
  {
    id: "M7",
    genre: "midrange",
    text: "敵の裏取りや近距離キャラを止める役割も担いたい",
    scoring: {
      yes: { targets: ["Cassidy", "Emre", "Soldier: 76"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Emre", "Soldier: 76"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Sojourn", "Reaper"], points: 1 },
      no: { targets: ["Ashe", "Sojourn", "Reaper"], points: 2 },
    },
  },
  {
    id: "M8",
    genre: "midrange",
    text: "自己回復や退避手段があり、ある程度ひとりで動けると安心",
    scoring: {
      yes: { targets: ["Soldier: 76", "Reaper", "Sojourn"], points: 2 },
      somewhat_yes: { targets: ["Soldier: 76", "Reaper", "Sojourn"], points: 1 },
      somewhat_no: { targets: ["Cassidy", "Ashe", "Bastion"], points: 1 },
      no: { targets: ["Cassidy", "Ashe", "Bastion"], points: 2 },
    },
  },
  {
    id: "M9",
    genre: "midrange",
    text: "中距離を保ちながら、相手や状況に応じて撃ち合い方を変えたい",
    scoring: {
      yes: { targets: ["Emre"], points: 2 },
      somewhat_yes: { targets: ["Emre", "Soldier: 76", "Cassidy"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Widowmaker", "Bastion"], points: 1 },
      no: { targets: ["Reaper"], points: 2 },
    },
  },

  // 遠距離・ピック
  {
    id: "L1",
    genre: "longRange",
    text: "一発の精度でサポートや後衛を抜いて、試合の流れを変えたい",
    scoring: {
      yes: { targets: ["Widowmaker"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Hanzo", "Freja"], points: 1 },
      somewhat_no: { targets: ["Sierra", "Ashe", "Cassidy"], points: 1 },
      no: { targets: ["Sierra"], points: 2 },
    },
  },
  {
    id: "L2",
    genre: "longRange",
    text: "キルだけでなく、高所や横射線を作って相手の動きを制限したい",
    scoring: {
      yes: { targets: ["Sierra"], points: 2 },
      somewhat_yes: { targets: ["Sierra", "Ashe", "Widowmaker"], points: 1 },
      somewhat_no: { targets: ["Hanzo", "Freja", "Cassidy"], points: 1 },
      no: { targets: ["Hanzo"], points: 2 },
    },
  },
  {
    id: "L3",
    genre: "longRange",
    text: "相手の動きを読んで、偏差撃ちや先置きで当てたい",
    scoring: {
      yes: { targets: ["Hanzo", "Freja", "Sierra"], points: 2 },
      somewhat_yes: { targets: ["Hanzo", "Freja", "Sierra"], points: 1 },
      somewhat_no: { targets: ["Widowmaker", "Ashe", "Cassidy"], points: 1 },
      no: { targets: ["Widowmaker", "Ashe", "Cassidy"], points: 2 },
    },
  },
  {
    id: "L4",
    genre: "longRange",
    text: "高所や横の射線を使って、相手に安全な場所をなくしたい",
    scoring: {
      yes: { targets: ["Sierra", "Widowmaker", "Ashe"], points: 2 },
      somewhat_yes: { targets: ["Sierra", "Widowmaker", "Ashe"], points: 1 },
      somewhat_no: { targets: ["Hanzo", "Freja", "Cassidy"], points: 1 },
      no: { targets: ["Hanzo", "Freja", "Cassidy"], points: 2 },
    },
  },
  {
    id: "L5",
    genre: "longRange",
    text: "素早い乱戦より、落ち着いて狙うプレイが向いている",
    scoring: {
      yes: { targets: ["Widowmaker", "Ashe", "Hanzo"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Ashe", "Hanzo"], points: 1 },
      somewhat_no: { targets: ["Freja", "Sierra", "Cassidy"], points: 1 },
      no: { targets: ["Freja", "Sierra", "Cassidy"], points: 2 },
    },
  },
  {
    id: "L6",
    genre: "longRange",
    text: "遠距離だけでなく、中距離の撃ち合いにも対応したい",
    scoring: {
      yes: { targets: ["Cassidy", "Ashe", "Freja"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Ashe", "Freja"], points: 1 },
      somewhat_no: { targets: ["Widowmaker", "Hanzo", "Sierra"], points: 1 },
      no: { targets: ["Widowmaker", "Hanzo", "Sierra"], points: 2 },
    },
  },
  {
    id: "L7",
    genre: "longRange",
    text: "継続火力より、決定的な1キルを取る方が好き",
    scoring: {
      yes: { targets: ["Widowmaker"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Hanzo", "Cassidy"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Sierra", "Freja"], points: 1 },
      no: { targets: ["Ashe"], points: 2 },
    },
  },
  {
    id: "L8",
    genre: "longRange",
    text: "一か所に居続けるより、射線を変えながら相手に圧をかけたい",
    scoring: {
      yes: { targets: ["Sierra", "Widowmaker", "Freja"], points: 2 },
      somewhat_yes: { targets: ["Sierra", "Widowmaker", "Freja"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Cassidy", "Hanzo"], points: 1 },
      no: { targets: ["Ashe", "Cassidy", "Hanzo"], points: 2 },
    },
  },
  {
    id: "L9",
    genre: "longRange",
    text: "相手に常に「見られている」圧をかけたい",
    scoring: {
      yes: { targets: ["Widowmaker", "Sierra", "Hanzo"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Sierra", "Hanzo"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Cassidy", "Freja"], points: 1 },
      no: { targets: ["Ashe", "Cassidy", "Freja"], points: 2 },
    },
  },

  // 範囲火力・空間制圧
  {
    id: "A1",
    genre: "areaDamage",
    text: "爆発や範囲攻撃で、複数人に圧をかけたい",
    scoring: {
      yes: { targets: ["Junkrat", "Pharah", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Junkrat", "Pharah", "Anran"], points: 1 },
      somewhat_no: { targets: ["Bastion", "Symmetra", "Echo"], points: 1 },
      no: { targets: ["Bastion", "Symmetra", "Echo"], points: 2 },
    },
  },
  {
    id: "A2",
    genre: "areaDamage",
    text: "空中や高所から、広い範囲にプレッシャーをかけたい",
    scoring: {
      yes: { targets: ["Pharah"], points: 2 },
      somewhat_yes: { targets: ["Pharah", "Echo", "Anran"], points: 1 },
      somewhat_no: { targets: ["Junkrat", "Bastion", "Symmetra"], points: 1 },
      no: { targets: ["Bastion"], points: 2 },
    },
  },
  {
    id: "A3",
    genre: "areaDamage",
    text: "一瞬のキルより、一定エリアを制圧し続けたい",
    scoring: {
      yes: { targets: ["Bastion", "Symmetra", "Junkrat"], points: 2 },
      somewhat_yes: { targets: ["Bastion", "Symmetra", "Junkrat"], points: 1 },
      somewhat_no: { targets: ["Pharah", "Echo", "Anran"], points: 1 },
      no: { targets: ["Pharah", "Echo", "Anran"], points: 2 },
    },
  },
  {
    id: "A4",
    genre: "areaDamage",
    text: "範囲攻撃でも、スキルコンボで狙って倒したい",
    scoring: {
      yes: { targets: ["Echo", "Anran", "Junkrat"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Anran", "Junkrat"], points: 1 },
      somewhat_no: { targets: ["Pharah", "Bastion", "Symmetra"], points: 1 },
      no: { targets: ["Pharah", "Bastion", "Symmetra"], points: 2 },
    },
  },
  {
    id: "A5",
    genre: "areaDamage",
    text: "チョークポイントや狭い通路を封鎖するのが好き",
    scoring: {
      yes: { targets: ["Junkrat"], points: 2 },
      somewhat_yes: { targets: ["Junkrat", "Symmetra", "Bastion"], points: 1 },
      somewhat_no: { targets: ["Echo", "Pharah", "Anran"], points: 1 },
      no: { targets: ["Echo"], points: 2 },
    },
  },
  {
    id: "A6",
    genre: "areaDamage",
    text: "アルティメットは、複数人を巻き込んで一気に試合を動かしたい",
    scoring: {
      yes: { targets: ["Pharah", "Echo", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Pharah", "Echo", "Junkrat"], points: 1 },
      somewhat_no: { targets: ["Symmetra", "Bastion", "Soldier: 76"], points: 1 },
      no: { targets: ["Symmetra"], points: 2 },
    },
  },
  {
    id: "A7",
    genre: "areaDamage",
    text: "敵のタンクや前線にも大きな圧をかけたい",
    scoring: {
      yes: { targets: ["Bastion", "Pharah", "Junkrat"], points: 2 },
      somewhat_yes: { targets: ["Bastion", "Pharah", "Junkrat"], points: 1 },
      somewhat_no: { targets: ["Echo", "Symmetra", "Anran"], points: 1 },
      no: { targets: ["Echo", "Symmetra", "Anran"], points: 2 },
    },
  },
  {
    id: "A8",
    genre: "areaDamage",
    text: "扱いが独特でも、範囲火力に工夫があるキャラが好き",
    scoring: {
      yes: { targets: ["Anran"], points: 2 },
      somewhat_yes: { targets: ["Anran", "Echo", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Bastion", "Pharah", "Junkrat"], points: 1 },
      no: { targets: ["Bastion"], points: 2 },
    },
  },
  {
    id: "A9",
    genre: "areaDamage",
    text: "安全な位置から、相手に嫌な圧をかけ続けたい",
    scoring: {
      yes: { targets: ["Junkrat", "Pharah", "Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Junkrat", "Pharah", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Echo", "Anran", "Bastion"], points: 1 },
      no: { targets: ["Echo", "Anran", "Bastion"], points: 2 },
    },
  },

  // エリア管理・防衛
  {
    id: "D1",
    genre: "defense",
    text: "自分の陣地を作って、敵を通しにくくするのが好き",
    scoring: {
      yes: { targets: ["Torbjörn", "Symmetra", "Bastion"], points: 2 },
      somewhat_yes: { targets: ["Torbjörn", "Symmetra", "Bastion"], points: 1 },
      somewhat_no: { targets: ["Mei", "Cassidy", "Junkrat"], points: 1 },
      no: { targets: ["Mei", "Cassidy", "Junkrat"], points: 2 },
    },
  },
  {
    id: "D2",
    genre: "defense",
    text: "敵を分断したり、動きを制限したりするのが好き",
    scoring: {
      yes: { targets: ["Mei"], points: 2 },
      somewhat_yes: { targets: ["Mei", "Symmetra", "Junkrat"], points: 1 },
      somewhat_no: { targets: ["Torbjörn", "Bastion", "Cassidy"], points: 1 },
      no: { targets: ["Bastion"], points: 2 },
    },
  },
  {
    id: "D3",
    genre: "defense",
    text: "裏取りや近距離キャラを止める役割を担いたい",
    scoring: {
      yes: { targets: ["Cassidy", "Torbjörn", "Mei"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Torbjörn", "Mei"], points: 1 },
      somewhat_no: { targets: ["Symmetra", "Junkrat", "Bastion"], points: 1 },
      no: { targets: ["Symmetra", "Junkrat", "Bastion"], points: 2 },
    },
  },
  {
    id: "D4",
    genre: "defense",
    text: "強い位置を守りながら、正面から押し返したい",
    scoring: {
      yes: { targets: ["Bastion", "Mei", "Torbjörn"], points: 2 },
      somewhat_yes: { targets: ["Bastion", "Mei", "Torbjörn"], points: 1 },
      somewhat_no: { targets: ["Cassidy", "Symmetra", "Junkrat"], points: 1 },
      no: { targets: ["Cassidy", "Symmetra", "Junkrat"], points: 2 },
    },
  },
  {
    id: "D5",
    genre: "defense",
    text: "罠・タレット・設置物で相手の行動を読ませたい",
    scoring: {
      yes: { targets: ["Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Symmetra", "Junkrat", "Torbjörn"], points: 1 },
      somewhat_no: { targets: ["Cassidy", "Mei", "Bastion"], points: 1 },
      no: { targets: ["Cassidy"], points: 2 },
    },
  },
  {
    id: "D6",
    genre: "defense",
    text: "味方を守るために、敵の進行を止める動きが好き",
    scoring: {
      yes: { targets: ["Mei", "Cassidy", "Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Mei", "Cassidy", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Torbjörn", "Junkrat", "Bastion"], points: 1 },
      no: { targets: ["Torbjörn", "Junkrat", "Bastion"], points: 2 },
    },
  },
  {
    id: "D7",
    genre: "defense",
    text: "細かく動くより、強い場所で構えて撃ちたい",
    scoring: {
      yes: { targets: ["Bastion", "Torbjörn", "Cassidy"], points: 2 },
      somewhat_yes: { targets: ["Bastion", "Torbjörn", "Cassidy"], points: 1 },
      somewhat_no: { targets: ["Mei", "Symmetra", "Junkrat"], points: 1 },
      no: { targets: ["Mei", "Symmetra", "Junkrat"], points: 2 },
    },
  },
  {
    id: "D8",
    genre: "defense",
    text: "防衛寄りでも、クセのある操作や妨害性能が好き",
    scoring: {
      yes: { targets: ["Symmetra", "Junkrat", "Mei"], points: 2 },
      somewhat_yes: { targets: ["Symmetra", "Junkrat", "Mei"], points: 1 },
      somewhat_no: { targets: ["Bastion", "Cassidy", "Torbjörn"], points: 1 },
      no: { targets: ["Bastion", "Cassidy", "Torbjörn"], points: 2 },
    },
  },
  {
    id: "D9",
    genre: "defense",
    text: "ウルトや設置物で、エリアそのものを有利にしたい",
    scoring: {
      yes: { targets: ["Torbjörn"], points: 2 },
      somewhat_yes: { targets: ["Torbjörn", "Mei", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Bastion", "Junkrat", "Cassidy"], points: 1 },
      no: { targets: ["Bastion"], points: 2 },
    },
  },

  // テクニカル・特殊操作
  {
    id: "T1",
    genre: "technical",
    text: "スキルコンボでキルを取るキャラが好き",
    scoring: {
      yes: { targets: ["Echo", "Venture", "Genji"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Venture", "Genji"], points: 1 },
      somewhat_no: { targets: ["Symmetra", "Sombra", "Hanzo"], points: 1 },
      no: { targets: ["Symmetra", "Sombra", "Hanzo"], points: 2 },
    },
  },
  {
    id: "T2",
    genre: "technical",
    text: "状況に応じて立ち回りを大きく変えるキャラに惹かれる",
    scoring: {
      yes: { targets: ["Echo", "Sombra", "Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Sombra", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Genji", "Venture", "Freja"], points: 1 },
      no: { targets: ["Genji", "Venture", "Freja"], points: 2 },
    },
  },
  {
    id: "T3",
    genre: "technical",
    text: "弾速や偏差、読み撃ちを使いこなしたい",
    scoring: {
      yes: { targets: ["Hanzo", "Freja", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Hanzo", "Freja", "Anran"], points: 1 },
      somewhat_no: { targets: ["Sombra", "Symmetra", "Venture"], points: 1 },
      no: { targets: ["Sombra", "Symmetra", "Venture"], points: 2 },
    },
  },
  {
    id: "T4",
    genre: "technical",
    text: "近距離でスキルや機動力を絡めて、相手の判断を揺さぶりたい",
    scoring: {
      yes: { targets: ["Venture", "Tracer", "Vendetta"], points: 2 },
      somewhat_yes: { targets: ["Venture", "Tracer", "Vendetta"], points: 1 },
      somewhat_no: { targets: ["Echo", "Hanzo", "Freja"], points: 1 },
      no: { targets: ["Echo", "Hanzo", "Freja"], points: 2 },
    },
  },
  {
    id: "T5",
    genre: "technical",
    text: "いろいろなキャラを触っていて、違う操作感にもすぐ対応できる",
    scoring: {
      yes: { targets: ["Echo"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Symmetra", "Sombra"], points: 1 },
      somewhat_no: { targets: ["Anran", "Hanzo", "Genji"], points: 1 },
      no: { targets: ["Genji"], points: 2 },
    },
  },
  {
    id: "T6",
    genre: "technical",
    text: "大技やコンボで、試合の流れを一気に変えたい",
    scoring: {
      yes: { targets: ["Anran"], points: 2 },
      somewhat_yes: { targets: ["Anran", "Echo", "Genji"], points: 1 },
      somewhat_no: { targets: ["Sombra", "Freja", "Symmetra"], points: 1 },
      no: { targets: ["Sombra"], points: 2 },
    },
  },
  {
    id: "T7",
    genre: "technical",
    text: "相手の行動を読んで、罠や妨害で崩すのが好き",
    scoring: {
      yes: { targets: ["Symmetra", "Hanzo", "Sombra"], points: 2 },
      somewhat_yes: { targets: ["Symmetra", "Hanzo", "Sombra"], points: 1 },
      somewhat_no: { targets: ["Venture", "Echo", "Anran"], points: 1 },
      no: { targets: ["Venture", "Echo", "Anran"], points: 2 },
    },
  },
  {
    id: "T8",
    genre: "technical",
    text: "機動力とスキルを組み合わせて、角度を作りたい",
    scoring: {
      yes: { targets: ["Venture", "Echo", "Freja"], points: 2 },
      somewhat_yes: { targets: ["Venture", "Echo", "Freja"], points: 1 },
      somewhat_no: { targets: ["Symmetra", "Hanzo", "Anran"], points: 1 },
      no: { targets: ["Symmetra", "Hanzo", "Anran"], points: 2 },
    },
  },
  {
    id: "T9",
    genre: "technical",
    text: "難しくても、使い込むほど味が出るキャラが好き",
    scoring: {
      yes: { targets: ["Genji", "Echo", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Genji", "Echo", "Anran"], points: 1 },
      somewhat_no: { targets: ["Sombra", "Symmetra", "Venture"], points: 1 },
      no: { targets: ["Sombra", "Symmetra", "Venture"], points: 2 },
    },
  },
];

export const damageQuestionsByGenre: Record<DamageGenre, DamageHeroQuestion[]> = {
  flanker: damageHeroQuestions.filter((question) => question.genre === "flanker"),
  midrange: damageHeroQuestions.filter((question) => question.genre === "midrange"),
  longRange: damageHeroQuestions.filter((question) => question.genre === "longRange"),
  areaDamage: damageHeroQuestions.filter((question) => question.genre === "areaDamage"),
  defense: damageHeroQuestions.filter((question) => question.genre === "defense"),
  technical: damageHeroQuestions.filter((question) => question.genre === "technical"),
};
