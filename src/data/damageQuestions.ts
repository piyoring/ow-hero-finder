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
 * 上位2ジャンルを選び、第2段階でそれぞれ6問ずつ出題する想定です。
 */
export const damageGenreQuestions: DamageGenreQuestion[] = [
  {
    id: "G1",
    text: "正面から撃ち合うより、横や裏から相手を崩したい",
    scoring: {
      yes: { targets: ["flanker"], points: 2 },
      somewhat_yes: { targets: ["flanker"], points: 1 },
      somewhat_no: { targets: ["midrange"], points: 1 },
      no: { targets: ["midrange"], points: 2 },
    },
  },
  {
    id: "G2",
    text: "広く圧をかけるより、遠距離から重要な敵を狙いたい",
    scoring: {
      yes: { targets: ["longRange"], points: 2 },
      somewhat_yes: { targets: ["longRange"], points: 1 },
      somewhat_no: { targets: ["areaDamage"], points: 1 },
      no: { targets: ["areaDamage"], points: 2 },
    },
  },
  {
    id: "G3",
    text: "使いこなすのが難しくても、独特な性能のキャラに惹かれる",
    scoring: {
      yes: { targets: ["technical"], points: 2 },
      somewhat_yes: { targets: ["technical"], points: 1 },
      somewhat_no: { targets: ["defense"], points: 1 },
      no: { targets: ["defense"], points: 2 },
    },
  },
  {
    id: "G4",
    text: "遠くで待つより、自分から距離を詰めて勝負したい",
    scoring: {
      yes: { targets: ["flanker"], points: 2 },
      somewhat_yes: { targets: ["flanker"], points: 1 },
      somewhat_no: { targets: ["longRange"], points: 1 },
      no: { targets: ["longRange"], points: 2 },
    },
  },
  {
    id: "G5",
    text: "正確な撃ち合いより、爆発や範囲で場を動かしたい",
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
    text: "シンプルな武器より、クセのある攻撃方法を使いこなしたい",
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
    text: "じっくり構えるより、素早く入り込んで敵を崩したい",
    scoring: {
      yes: { targets: ["flanker"], points: 2 },
      somewhat_yes: { targets: ["flanker"], points: 1 },
      somewhat_no: { targets: ["technical"], points: 1 },
      no: { targets: ["technical"], points: 2 },
    },
  },
  {
    id: "G10",
    text: "広く動くより、特定の場所を守る・封鎖する方が好き",
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
    text: "クセのある操作より、落ち着いて狙う・射線を作る方が好き",
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
 * 上位2ジャンルそれぞれから6問ずつ出題する想定です。
 */
export const damageHeroQuestions: DamageHeroQuestion[] = [
  // フランカー・暗殺
  {
    id: "F1",
    genre: "flanker",
    text: "短時間で入り、相手を乱してすぐ離脱する動きが好き",
    scoring: {
      yes: { targets: ["Tracer", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Tracer", "Venture"], points: 1 },
      somewhat_no: { targets: ["Genji", "Reaper"], points: 1 },
      no: { targets: ["Genji", "Reaper"], points: 2 },
    },
  },
  {
    id: "F2",
    genre: "flanker",
    text: "スキルや機動力を合わせて、一気に倒し切るのが好き",
    scoring: {
      yes: { targets: ["Genji", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Genji", "Venture"], points: 1 },
      somewhat_no: { targets: ["Tracer", "Reaper"], points: 1 },
      no: { targets: ["Tracer", "Reaper"], points: 2 },
    },
  },
  {
    id: "F3",
    genre: "flanker",
    text: "裏取りやタイミング差で、相手の意識をずらしたい",
    scoring: {
      yes: { targets: ["Tracer", "Genji"], points: 2 },
      somewhat_yes: { targets: ["Tracer", "Genji"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Venture"], points: 1 },
      no: { targets: ["Reaper", "Venture"], points: 2 },
    },
  },
  {
    id: "F4",
    genre: "flanker",
    text: "細かく揺さぶるより、近距離で強く勝負したい",
    scoring: {
      yes: { targets: ["Reaper", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Reaper", "Venture"], points: 1 },
      somewhat_no: { targets: ["Tracer", "Genji"], points: 1 },
      no: { targets: ["Tracer", "Genji"], points: 2 },
    },
  },
  {
    id: "F5",
    genre: "flanker",
    text: "高所や段差を使って、予想外の角度から入りたい",
    scoring: {
      yes: { targets: ["Genji", "Venture"], points: 2 },
      somewhat_yes: { targets: ["Genji", "Venture"], points: 1 },
      somewhat_no: { targets: ["Tracer", "Reaper"], points: 1 },
      no: { targets: ["Tracer", "Reaper"], points: 2 },
    },
  },
  {
    id: "F6",
    genre: "flanker",
    text: "しつこく生き残って、敵の注意を引き続けたい",
    scoring: {
      yes: { targets: ["Tracer", "Genji"], points: 2 },
      somewhat_yes: { targets: ["Tracer", "Genji"], points: 1 },
      somewhat_no: { targets: ["Reaper", "Venture"], points: 1 },
      no: { targets: ["Reaper", "Venture"], points: 2 },
    },
  },

  // 中距離・正面火力
  {
    id: "M1",
    genre: "midrange",
    text: "分かりやすい武器で、安定してダメージを出せると安心",
    scoring: {
      yes: { targets: ["Soldier: 76", "Emre"], points: 2 },
      somewhat_yes: { targets: ["Soldier: 76", "Emre"], points: 1 },
      somewhat_no: { targets: ["Cassidy", "Sojourn"], points: 1 },
      no: { targets: ["Cassidy", "Sojourn"], points: 2 },
    },
  },
  {
    id: "M2",
    genre: "midrange",
    text: "フルオートより、1発ずつ丁寧に当てる武器が好き",
    scoring: {
      yes: { targets: ["Cassidy", "Emre"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Emre"], points: 1 },
      somewhat_no: { targets: ["Soldier: 76", "Sojourn"], points: 1 },
      no: { targets: ["Soldier: 76", "Sojourn"], points: 2 },
    },
  },
  {
    id: "M3",
    genre: "midrange",
    text: "普段は堅実に戦い、勝負所で一気にキルを取りたい",
    scoring: {
      yes: { targets: ["Sojourn", "Cassidy"], points: 2 },
      somewhat_yes: { targets: ["Sojourn", "Cassidy"], points: 1 },
      somewhat_no: { targets: ["Soldier: 76", "Emre"], points: 1 },
      no: { targets: ["Soldier: 76", "Emre"], points: 2 },
    },
  },
  {
    id: "M4",
    genre: "midrange",
    text: "敵の前線やタンクにも継続的に圧をかけたい",
    scoring: {
      yes: { targets: ["Soldier: 76", "Sojourn"], points: 2 },
      somewhat_yes: { targets: ["Soldier: 76", "Sojourn"], points: 1 },
      somewhat_no: { targets: ["Cassidy", "Emre"], points: 1 },
      no: { targets: ["Cassidy", "Emre"], points: 2 },
    },
  },
  {
    id: "M5",
    genre: "midrange",
    text: "中距離の強い位置から、射線を作るのが好き",
    scoring: {
      yes: { targets: ["Cassidy", "Sojourn"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Sojourn"], points: 1 },
      somewhat_no: { targets: ["Soldier: 76", "Emre"], points: 1 },
      no: { targets: ["Soldier: 76", "Emre"], points: 2 },
    },
  },
  {
    id: "M6",
    genre: "midrange",
    text: "裏取りや近距離キャラを止める役割も担いたい",
    scoring: {
      yes: { targets: ["Cassidy", "Emre"], points: 2 },
      somewhat_yes: { targets: ["Cassidy", "Emre"], points: 1 },
      somewhat_no: { targets: ["Soldier: 76", "Sojourn"], points: 1 },
      no: { targets: ["Soldier: 76", "Sojourn"], points: 2 },
    },
  },

  // 遠距離・ピック
  {
    id: "L1",
    genre: "longRange",
    text: "一発の精度で後衛を抜いて、試合の流れを変えたい",
    scoring: {
      yes: { targets: ["Widowmaker", "Hanzo"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Hanzo"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Sierra"], points: 1 },
      no: { targets: ["Ashe", "Sierra"], points: 2 },
    },
  },
  {
    id: "L2",
    genre: "longRange",
    text: "キルだけでなく、射線で相手の動きを制限したい",
    scoring: {
      yes: { targets: ["Sierra", "Ashe"], points: 2 },
      somewhat_yes: { targets: ["Sierra", "Ashe"], points: 1 },
      somewhat_no: { targets: ["Widowmaker", "Hanzo"], points: 1 },
      no: { targets: ["Widowmaker", "Hanzo"], points: 2 },
    },
  },
  {
    id: "L3",
    genre: "longRange",
    text: "相手の動きを読んで、偏差撃ちや先置きで当てたい",
    scoring: {
      yes: { targets: ["Hanzo", "Sierra"], points: 2 },
      somewhat_yes: { targets: ["Hanzo", "Sierra"], points: 1 },
      somewhat_no: { targets: ["Widowmaker", "Ashe"], points: 1 },
      no: { targets: ["Widowmaker", "Ashe"], points: 2 },
    },
  },
  {
    id: "L4",
    genre: "longRange",
    text: "高所や横射線を使って、相手に安全な場所をなくしたい",
    scoring: {
      yes: { targets: ["Widowmaker", "Sierra"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Sierra"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Hanzo"], points: 1 },
      no: { targets: ["Ashe", "Hanzo"], points: 2 },
    },
  },
  {
    id: "L5",
    genre: "longRange",
    text: "素早い乱戦より、落ち着いて狙うプレイが向いている",
    scoring: {
      yes: { targets: ["Widowmaker", "Ashe"], points: 2 },
      somewhat_yes: { targets: ["Widowmaker", "Ashe"], points: 1 },
      somewhat_no: { targets: ["Hanzo", "Sierra"], points: 1 },
      no: { targets: ["Hanzo", "Sierra"], points: 2 },
    },
  },
  {
    id: "L6",
    genre: "longRange",
    text: "一か所に居続けるより、射線を変えながら圧をかけたい",
    scoring: {
      yes: { targets: ["Sierra", "Widowmaker"], points: 2 },
      somewhat_yes: { targets: ["Sierra", "Widowmaker"], points: 1 },
      somewhat_no: { targets: ["Ashe", "Hanzo"], points: 1 },
      no: { targets: ["Ashe", "Hanzo"], points: 2 },
    },
  },

  // 範囲火力・空間制圧
  {
    id: "A1",
    genre: "areaDamage",
    text: "爆発や範囲攻撃で、複数人に圧をかけたい",
    scoring: {
      yes: { targets: ["Junkrat", "Pharah"], points: 2 },
      somewhat_yes: { targets: ["Junkrat", "Pharah"], points: 1 },
      somewhat_no: { targets: ["Echo", "Anran"], points: 1 },
      no: { targets: ["Echo", "Anran"], points: 2 },
    },
  },
  {
    id: "A2",
    genre: "areaDamage",
    text: "空中や高所から、広い範囲にプレッシャーをかけたい",
    scoring: {
      yes: { targets: ["Pharah", "Echo"], points: 2 },
      somewhat_yes: { targets: ["Pharah", "Echo"], points: 1 },
      somewhat_no: { targets: ["Junkrat", "Anran"], points: 1 },
      no: { targets: ["Junkrat", "Anran"], points: 2 },
    },
  },
  {
    id: "A3",
    genre: "areaDamage",
    text: "一瞬のキルより、一定エリアを制圧し続けたい",
    scoring: {
      yes: { targets: ["Junkrat", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Junkrat", "Anran"], points: 1 },
      somewhat_no: { targets: ["Pharah", "Echo"], points: 1 },
      no: { targets: ["Pharah", "Echo"], points: 2 },
    },
  },
  {
    id: "A4",
    genre: "areaDamage",
    text: "範囲攻撃でも、スキルコンボで狙って倒したい",
    scoring: {
      yes: { targets: ["Echo", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Echo", "Anran"], points: 1 },
      somewhat_no: { targets: ["Pharah", "Junkrat"], points: 1 },
      no: { targets: ["Pharah", "Junkrat"], points: 2 },
    },
  },
  {
    id: "A5",
    genre: "areaDamage",
    text: "チョークポイントや狭い通路を封鎖するのが好き",
    scoring: {
      yes: { targets: ["Junkrat", "Pharah"], points: 2 },
      somewhat_yes: { targets: ["Junkrat", "Pharah"], points: 1 },
      somewhat_no: { targets: ["Echo", "Anran"], points: 1 },
      no: { targets: ["Echo", "Anran"], points: 2 },
    },
  },
  {
    id: "A6",
    genre: "areaDamage",
    text: "アルティメットは、複数人を巻き込んで試合を動かしたい",
    scoring: {
      yes: { targets: ["Pharah", "Anran"], points: 2 },
      somewhat_yes: { targets: ["Pharah", "Anran"], points: 1 },
      somewhat_no: { targets: ["Junkrat", "Echo"], points: 1 },
      no: { targets: ["Junkrat", "Echo"], points: 2 },
    },
  },

  // エリア管理・防衛
  {
    id: "D1",
    genre: "defense",
    text: "自分の陣地を作って、敵を通しにくくするのが好き",
    scoring: {
      yes: { targets: ["Torbjörn", "Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Torbjörn", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Mei", "Bastion"], points: 1 },
      no: { targets: ["Mei", "Bastion"], points: 2 },
    },
  },
  {
    id: "D2",
    genre: "defense",
    text: "敵を分断したり、動きを制限したりするのが好き",
    scoring: {
      yes: { targets: ["Mei", "Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Mei", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Torbjörn", "Bastion"], points: 1 },
      no: { targets: ["Torbjörn", "Bastion"], points: 2 },
    },
  },
  {
    id: "D3",
    genre: "defense",
    text: "裏取りや近距離キャラを止める役割を担いたい",
    scoring: {
      yes: { targets: ["Mei", "Torbjörn"], points: 2 },
      somewhat_yes: { targets: ["Mei", "Torbjörn"], points: 1 },
      somewhat_no: { targets: ["Symmetra", "Bastion"], points: 1 },
      no: { targets: ["Symmetra", "Bastion"], points: 2 },
    },
  },
  {
    id: "D4",
    genre: "defense",
    text: "強い位置を守りながら、正面から押し返したい",
    scoring: {
      yes: { targets: ["Bastion", "Torbjörn"], points: 2 },
      somewhat_yes: { targets: ["Bastion", "Torbjörn"], points: 1 },
      somewhat_no: { targets: ["Mei", "Symmetra"], points: 1 },
      no: { targets: ["Mei", "Symmetra"], points: 2 },
    },
  },
  {
    id: "D5",
    genre: "defense",
    text: "罠・タレット・設置物で相手の行動を読ませたい",
    scoring: {
      yes: { targets: ["Symmetra", "Bastion"], points: 2 },
      somewhat_yes: { targets: ["Symmetra", "Bastion"], points: 1 },
      somewhat_no: { targets: ["Mei", "Torbjörn"], points: 1 },
      no: { targets: ["Mei", "Torbjörn"], points: 2 },
    },
  },
  {
    id: "D6",
    genre: "defense",
    text: "防衛寄りでも、クセのある操作や妨害性能が好き",
    scoring: {
      yes: { targets: ["Mei", "Symmetra"], points: 2 },
      somewhat_yes: { targets: ["Mei", "Symmetra"], points: 1 },
      somewhat_no: { targets: ["Bastion", "Torbjörn"], points: 1 },
      no: { targets: ["Bastion", "Torbjörn"], points: 2 },
    },
  },

  // テクニカル・特殊操作
  {
    id: "T1",
    genre: "technical",
    text: "相手の行動を読んで、妨害や奇襲で崩すのが好き",
    scoring: {
      yes: { targets: ["Sombra"], points: 2 },
      somewhat_yes: { targets: ["Sombra"], points: 1 },
      somewhat_no: { targets: ["Freja", "Vendetta"], points: 1 },
      no: { targets: ["Freja", "Vendetta"], points: 2 },
    },
  },
  {
    id: "T2",
    genre: "technical",
    text: "正面から撃つより、相手の判断をずらす動きが好き",
    scoring: {
      yes: { targets: ["Sombra", "Vendetta"], points: 2 },
      somewhat_yes: { targets: ["Sombra", "Vendetta"], points: 1 },
      somewhat_no: { targets: ["Freja"], points: 1 },
      no: { targets: ["Freja"], points: 2 },
    },
  },
  {
    id: "T3",
    genre: "technical",
    text: "弾速や独特な当て方に慣れるほど強くなるキャラが好き",
    scoring: {
      yes: { targets: ["Freja"], points: 2 },
      somewhat_yes: { targets: ["Freja"], points: 1 },
      somewhat_no: { targets: ["Sombra", "Vendetta"], points: 1 },
      no: { targets: ["Sombra", "Vendetta"], points: 2 },
    },
  },
  {
    id: "T4",
    genre: "technical",
    text: "近距離でスキルや機動力を絡めて勝負したい",
    scoring: {
      yes: { targets: ["Vendetta"], points: 2 },
      somewhat_yes: { targets: ["Vendetta"], points: 1 },
      somewhat_no: { targets: ["Sombra", "Freja"], points: 1 },
      no: { targets: ["Sombra", "Freja"], points: 2 },
    },
  },
  {
    id: "T5",
    genre: "technical",
    text: "状況に応じて、立ち回りを大きく変えるキャラに惹かれる",
    scoring: {
      yes: { targets: ["Sombra", "Freja"], points: 2 },
      somewhat_yes: { targets: ["Sombra", "Freja"], points: 1 },
      somewhat_no: { targets: ["Vendetta"], points: 1 },
      no: { targets: ["Vendetta"], points: 2 },
    },
  },
  {
    id: "T6",
    genre: "technical",
    text: "大技やコンボで、試合の流れを一気に変えたい",
    scoring: {
      yes: { targets: ["Freja", "Vendetta"], points: 2 },
      somewhat_yes: { targets: ["Freja", "Vendetta"], points: 1 },
      somewhat_no: { targets: ["Sombra"], points: 1 },
      no: { targets: ["Sombra"], points: 2 },
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
