import type { Question } from "../types";

export type SupportHero =
  | "Ana"
  | "Baptiste"
  | "Brigitte"
  | "Illari"
  | "Juno"
  | "Kiriko"
  | "Lifeweaver"
  | "Lucio"
  | "Mercy"
  | "Moira"
  | "Zenyatta"
  | "Mizuki"
  | "Wuyang"
  | "Jetpack Cat";

export const supportQuestions: Question[] = [
  {
    id: 1,
    text: "味方がピンチだと、危ないと分かっていても助けに行きたくなる",
    scoring: {
      yes: { targets: ["Kiriko", "Mercy", "Lifeweaver", "Lucio"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Mercy", "Lifeweaver", "Lucio"], points: 1 },
      somewhat_no: { targets: ["Zenyatta", "Illari", "Moira", "Wuyang"], points: 1 },
      no: { targets: ["Zenyatta", "Illari", "Moira", "Wuyang"], points: 2 },
    },
  },
  {
    id: 2,
    text: "回復で支えるより、自分も攻撃に参加して状況を変えたい",
    scoring: {
      yes: { targets: ["Zenyatta", "Illari", "Moira", "Baptiste"], points: 2 },
      somewhat_yes: { targets: ["Zenyatta", "Illari", "Moira", "Baptiste"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Brigitte", "Juno"], points: 1 },
      no: { targets: ["Mercy", "Brigitte", "Juno"], points: 2 },
    },
  },
  {
    id: 3,
    text: "敵のウルトや強スキルに「それは通さないよ」と返す瞬間が好き",
    scoring: {
      yes: { targets: ["Kiriko", "Baptiste", "Ana", "Lucio"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Baptiste", "Ana", "Lucio"], points: 1 },
      somewhat_no: { targets: ["Illari", "Moira", "Juno", "Jetpack Cat"], points: 1 },
      no: { targets: ["Illari", "Moira", "Juno", "Jetpack Cat"], points: 2 },
    },
  },
  {
    id: 4,
    text: "味方が変な位置にいると、回復より先に「そこ危ない」と思う",
    scoring: {
      yes: { targets: ["Lifeweaver", "Ana", "Brigitte", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Lifeweaver", "Ana", "Brigitte", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Jetpack Cat", "Illari", "Moira", "Mizuki"], points: 1 },
      no: { targets: ["Jetpack Cat", "Illari", "Moira", "Mizuki"], points: 2 },
    },
  },
  {
    id: 5,
    text: "味方全員がまとまって動いてくれる試合が一番気持ちいい",
    scoring: {
      yes: { targets: ["Lucio", "Brigitte", "Baptiste", "Juno"], points: 2 },
      somewhat_yes: { targets: ["Lucio", "Brigitte", "Baptiste", "Juno"], points: 1 },
      somewhat_no: { targets: ["Kiriko", "Mercy", "Mizuki", "Jetpack Cat"], points: 1 },
      no: { targets: ["Kiriko", "Mercy", "Mizuki", "Jetpack Cat"], points: 2 },
    },
  },
  {
    id: 6,
    text: "一人で暴れている味方にも、できるだけ付き合ってあげたい",
    scoring: {
      yes: { targets: ["Kiriko", "Mercy", "Juno", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Mercy", "Juno", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Lucio", "Brigitte", "Wuyang", "Moira"], points: 1 },
      no: { targets: ["Lucio", "Brigitte", "Wuyang", "Moira"], points: 2 },
    },
  },
  {
    id: 7,
    text: "自分が目立つより、味方に「今の助かった」と思われる方が嬉しい",
    scoring: {
      yes: { targets: ["Mercy", "Lifeweaver", "Baptiste", "Kiriko"], points: 2 },
      somewhat_yes: { targets: ["Mercy", "Lifeweaver", "Baptiste", "Kiriko"], points: 1 },
      somewhat_no: { targets: ["Zenyatta", "Illari", "Mizuki", "Wuyang"], points: 1 },
      no: { targets: ["Zenyatta", "Illari", "Mizuki", "Wuyang"], points: 2 },
    },
  },
  {
    id: 8,
    text: "負けている時ほど、安定行動より流れを変えるプレイを狙いたくなる",
    scoring: {
      yes: { targets: ["Kiriko", "Zenyatta", "Illari", "Moira"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Zenyatta", "Illari", "Moira"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Lifeweaver", "Brigitte", "Baptiste"], points: 1 },
      no: { targets: ["Mercy", "Lifeweaver", "Brigitte", "Baptiste"], points: 2 },
    },
  },
  {
    id: 9,
    text: "回復要請が多い味方より、勝ち筋を作ってくれる味方を優先して支えたい",
    scoring: {
      yes: { targets: ["Mercy", "Juno", "Baptiste", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Mercy", "Juno", "Baptiste", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Lucio", "Moira", "Mizuki", "Brigitte"], points: 1 },
      no: { targets: ["Lucio", "Moira", "Mizuki", "Brigitte"], points: 2 },
    },
  },
  {
    id: 10,
    text: "敵に絡まれた時、逃げるより返り討ちにしたい",
    scoring: {
      yes: { targets: ["Brigitte", "Moira", "Kiriko", "Mizuki"], points: 2 },
      somewhat_yes: { targets: ["Brigitte", "Moira", "Kiriko", "Mizuki"], points: 1 },
      somewhat_no: { targets: ["Ana", "Mercy", "Lifeweaver", "Zenyatta"], points: 1 },
      no: { targets: ["Ana", "Mercy", "Lifeweaver", "Zenyatta"], points: 2 },
    },
  },
  {
    id: 11,
    text: "高台やオフアングルから、こっそり試合に圧をかけたい",
    scoring: {
      yes: { targets: ["Ana", "Illari", "Zenyatta", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Illari", "Zenyatta", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Lucio", "Brigitte", "Mercy", "Wuyang"], points: 1 },
      no: { targets: ["Lucio", "Brigitte", "Mercy", "Wuyang"], points: 2 },
    },
  },
  {
    id: 12,
    text: "操作が忙しくても、機動力やキャラコンで差が出るキャラが好き",
    scoring: {
      yes: { targets: ["Lucio", "Juno", "Kiriko", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Lucio", "Juno", "Kiriko", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Ana", "Baptiste", "Zenyatta", "Lifeweaver"], points: 1 },
      no: { targets: ["Ana", "Baptiste", "Zenyatta", "Lifeweaver"], points: 2 },
    },
  },
  {
    id: 13,
    text: "味方のミスを自分のスキルで無理やり帳消しにするのが好き",
    scoring: {
      yes: { targets: ["Kiriko", "Baptiste", "Mercy", "Ana"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Baptiste", "Mercy", "Ana"], points: 1 },
      somewhat_no: { targets: ["Illari", "Moira", "Mizuki", "Jetpack Cat"], points: 1 },
      no: { targets: ["Illari", "Moira", "Mizuki", "Jetpack Cat"], points: 2 },
    },
  },
  {
    id: 14,
    text: "攻める合図を出して、チーム全体のテンポを上げたい",
    scoring: {
      yes: { targets: ["Lucio", "Juno", "Wuyang", "Brigitte"], points: 2 },
      somewhat_yes: { targets: ["Lucio", "Juno", "Wuyang", "Brigitte"], points: 1 },
      somewhat_no: { targets: ["Ana", "Illari", "Lifeweaver", "Zenyatta"], points: 1 },
      no: { targets: ["Ana", "Illari", "Lifeweaver", "Zenyatta"], points: 2 },
    },
  },
  {
    id: 15,
    text: "癖が強くても、使いこなせたら唯一無二なキャラに惹かれる",
    scoring: {
      yes: { targets: ["Mizuki", "Wuyang", "Jetpack Cat", "Lifeweaver"], points: 2 },
      somewhat_yes: { targets: ["Mizuki", "Wuyang", "Jetpack Cat", "Lifeweaver"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Ana", "Baptiste", "Lucio"], points: 1 },
      no: { targets: ["Mercy", "Ana", "Baptiste", "Lucio"], points: 2 },
    },
  },
  {
    id: 16,
    text: "回復だけしているより、敵の位置やスキルのクールタイムも見て動きたい",
    scoring: {
      yes: { targets: ["Ana", "Kiriko", "Zenyatta", "Baptiste"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Kiriko", "Zenyatta", "Baptiste"], points: 1 },
      somewhat_no: { targets: ["Mizuki", "Moira", "Lifeweaver", "Juno"], points: 1 },
      no: { targets: ["Mizuki", "Moira", "Lifeweaver", "Juno"], points: 2 },
    },
  },
  {
    id: 17,
    text: "空中・高所など、縦の動きも使って自由自在に動き回るのが好き",
    scoring: {
      yes: { targets: ["Juno", "Illari", "Jetpack Cat", "Kiriko"], points: 2 },
      somewhat_yes: { targets: ["Juno", "Illari", "Jetpack Cat", "Kiriko"], points: 1 },
      somewhat_no: { targets: ["Brigitte", "Lucio", "Wuyang", "Mizuki"], points: 1 },
      no: { targets: ["Brigitte", "Lucio", "Wuyang", "Mizuki"], points: 2 },
    },
  },
  {
    id: 18,
    text: "味方を強くして、その味方に試合を壊してもらうのが好き",
    scoring: {
      yes: { targets: ["Mercy", "Juno", "Baptiste", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Mercy", "Juno", "Baptiste", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Ana", "Illari", "Mizuki", "Zenyatta"], points: 1 },
      no: { targets: ["Ana", "Illari", "Mizuki", "Zenyatta"], points: 2 },
    },
  },
  {
    id: 19,
    text: "敵に嫌なことをし続けて、相手のやりたい動きを崩したい",
    scoring: {
      yes: { targets: ["Ana", "Brigitte", "Zenyatta", "Mizuki"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Brigitte", "Zenyatta", "Mizuki"], points: 1 },
      somewhat_no: { targets: ["Illari", "Juno", "Lifeweaver", "Jetpack Cat"], points: 1 },
      no: { targets: ["Illari", "Juno", "Lifeweaver", "Jetpack Cat"], points: 2 },
    },
  },
  {
    id: 20,
    text: "状況に合わせて、回復・火力・移動支援を細かく切り替えたい",
    scoring: {
      yes: { targets: ["Baptiste", "Juno", "Wuyang", "Moira", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Baptiste", "Juno", "Wuyang", "Moira", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Lucio", "Zenyatta", "Lifeweaver", "Ana"], points: 1 },
      no: { targets: ["Lucio", "Zenyatta", "Lifeweaver", "Ana"], points: 2 },
    },
  },
];
