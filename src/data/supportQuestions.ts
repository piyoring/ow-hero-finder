import type { Question } from "../types";

export const supportQuestions: Question[] = [
  {
    id: 1,
    text: "ピンチの味方を即座に助けられるキャラに魅力を感じる",
    scoring: {
      yes: { targets: ["Kiriko", "Lifeweaver", "Mercy", "Baptiste"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Lifeweaver", "Mercy", "Baptiste"], points: 1 },
      somewhat_no: { targets: ["Zenyatta", "Illari", "Wuyang"], points: 1 },
      no: { targets: ["Zenyatta", "Illari", "Wuyang"], points: 2 },
    },
  },
  {
    id: 2,
    text: "回復だけでなく、自分でも積極的にキルを狙いたい",
    scoring: {
      yes: { targets: ["Illari", "Zenyatta", "Moira", "Baptiste"], points: 2 },
      somewhat_yes: { targets: ["Illari", "Zenyatta", "Moira", "Baptiste"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Lifeweaver", "Juno"], points: 1 },
      no: { targets: ["Mercy", "Lifeweaver", "Juno"], points: 2 },
    },
  },
  {
    id: 3,
    text: "高いエイム精度を求められるキャラが好き",
    scoring: {
      yes: { targets: ["Ana", "Illari", "Baptiste", "Zenyatta"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Illari", "Baptiste", "Zenyatta"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Moira", "Brigitte", "Lifeweaver"], points: 1 },
      no: { targets: ["Mercy", "Moira", "Brigitte", "Lifeweaver"], points: 2 },
    },
  },
  {
    id: 4,
    text: "味方のすぐ近くで一緒に戦う方が好き",
    scoring: {
      yes: { targets: ["Brigitte", "Lucio", "Moira", "Baptiste"], points: 2 },
      somewhat_yes: { targets: ["Brigitte", "Lucio", "Moira", "Baptiste"], points: 1 },
      somewhat_no: { targets: ["Ana", "Zenyatta", "Illari"], points: 1 },
      no: { targets: ["Ana", "Zenyatta", "Illari"], points: 2 },
    },
  },
  {
    id: 5,
    text: "高速で動き回って相手を翻弄したい",
    scoring: {
      yes: { targets: ["Lucio", "Kiriko", "Juno", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Lucio", "Kiriko", "Juno", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Ana", "Zenyatta", "Baptiste"], points: 1 },
      no: { targets: ["Ana", "Zenyatta", "Baptiste"], points: 2 },
    },
  },
  {
    id: 6,
    text: "後方から冷静に戦況を見て支える方が好き",
    scoring: {
      yes: { targets: ["Ana", "Zenyatta", "Illari", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Zenyatta", "Illari", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Lucio", "Brigitte", "Moira"], points: 1 },
      no: { targets: ["Lucio", "Brigitte", "Moira"], points: 2 },
    },
  },
  {
    id: 7,
    text: "味方全体を広く支援する役割が好き",
    scoring: {
      yes: { targets: ["Lucio", "Baptiste", "Juno", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Lucio", "Baptiste", "Juno", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Kiriko", "Zenyatta", "Illari"], points: 1 },
      no: { targets: ["Kiriko", "Zenyatta", "Illari"], points: 2 },
    },
  },
  {
    id: 8,
    text: "難しくても、習熟で強くなるキャラに惹かれる",
    scoring: {
      yes: { targets: ["Ana", "Kiriko", "Mizuki"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Kiriko", "Mizuki"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Moira", "Brigitte"], points: 1 },
      no: { targets: ["Mercy", "Moira", "Brigitte"], points: 2 },
    },
  },
  {
    id: 9,
    text: "トリッキーなスキルや奇襲が好き",
    scoring: {
      yes: { targets: ["Kiriko", "Mizuki", "Jetpack Cat", "Lucio"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Mizuki", "Jetpack Cat", "Lucio"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Baptiste", "Wuyang"], points: 1 },
      no: { targets: ["Mercy", "Baptiste", "Wuyang"], points: 2 },
    },
  },
  {
    id: 10,
    text: "味方を守るためなら自分が危険な位置に入ってもいい",
    scoring: {
      yes: { targets: ["Brigitte", "Mercy", "Lucio"], points: 2 },
      somewhat_yes: { targets: ["Brigitte", "Mercy", "Lucio"], points: 1 },
      somewhat_no: { targets: ["Ana", "Zenyatta", "Illari"], points: 1 },
      no: { targets: ["Ana", "Zenyatta", "Illari"], points: 2 },
    },
  },
  {
    id: 11,
    text: "味方を強化して活躍させる方が好き",
    scoring: {
      yes: { targets: ["Mercy", "Juno", "Baptiste", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Mercy", "Juno", "Baptiste", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Moira", "Zenyatta", "Illari"], points: 1 },
      no: { targets: ["Moira", "Zenyatta", "Illari"], points: 2 },
    },
  },
  {
    id: 12,
    text: "単独行動する味方も積極的にフォローしたい",
    scoring: {
      yes: { targets: ["Kiriko", "Mercy", "Juno", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Kiriko", "Mercy", "Juno", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Lucio", "Brigitte", "Zenyatta"], points: 1 },
      no: { targets: ["Lucio", "Brigitte", "Zenyatta"], points: 2 },
    },
  },
  {
    id: 13,
    text: "忙しく操作するキャラの方が楽しい",
    scoring: {
      yes: { targets: ["Lucio", "Kiriko", "Juno", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Lucio", "Kiriko", "Juno", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Zenyatta", "Illari"], points: 1 },
      no: { targets: ["Mercy", "Zenyatta", "Illari"], points: 2 },
    },
  },
  {
    id: 14,
    text: "敵の行動を妨害して試合の流れを変えたい",
    scoring: {
      yes: { targets: ["Ana", "Mizuki", "Kiriko"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Mizuki", "Kiriko"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Juno"], points: 1 },
      no: { targets: ["Mercy", "Juno"], points: 2 },
    },
  },
  {
    id: 15,
    text: "空中や高所を活かして戦うのが好き",
    scoring: {
      yes: { targets: ["Illari", "Juno", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Illari", "Juno", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Brigitte", "Moira", "Lifeweaver"], points: 1 },
      no: { targets: ["Brigitte", "Moira", "Lifeweaver"], points: 2 },
    },
  },
  {
    id: 16,
    text: "味方の位置取りや立て直しを支えるのが好き",
    scoring: {
      yes: { targets: ["Lifeweaver", "Lucio", "Juno", "Baptiste"], points: 2 },
      somewhat_yes: { targets: ["Lifeweaver", "Lucio", "Juno", "Baptiste"], points: 1 },
      somewhat_no: { targets: ["Zenyatta", "Illari", "Moira"], points: 1 },
      no: { targets: ["Zenyatta", "Illari", "Moira"], points: 2 },
    },
  },
  {
    id: 17,
    text: "シンプルで直感的な操作のキャラが好き",
    scoring: {
      yes: { targets: ["Mercy", "Brigitte", "Lifeweaver"], points: 2 },
      somewhat_yes: { targets: ["Mercy", "Brigitte", "Lifeweaver"], points: 1 },
      somewhat_no: { targets: ["Ana", "Kiriko", "Lucio", "Mizuki"], points: 1 },
      no: { targets: ["Ana", "Kiriko", "Lucio", "Mizuki"], points: 2 },
    },
  },
  {
    id: 18,
    text: "味方の集団行動に合わせて価値を出すキャラが好き",
    scoring: {
      yes: { targets: ["Brigitte", "Lucio", "Baptiste", "Wuyang"], points: 2 },
      somewhat_yes: { targets: ["Brigitte", "Lucio", "Baptiste", "Wuyang"], points: 1 },
      somewhat_no: { targets: ["Zenyatta", "Moira", "Illari"], points: 1 },
      no: { targets: ["Zenyatta", "Moira", "Illari"], points: 2 },
    },
  },
  {
    id: 19,
    text: "味方を救うスキルを正確なタイミングで使いたい",
    scoring: {
      yes: { targets: ["Ana", "Baptiste", "Kiriko", "Mizuki"], points: 2 },
      somewhat_yes: { targets: ["Ana", "Baptiste", "Kiriko", "Mizuki"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Lucio"], points: 1 },
      no: { targets: ["Mercy", "Lucio"], points: 2 },
    },
  },
  {
    id: 20,
    text: "個性的でクセのある独自ギミックに惹かれる",
    scoring: {
      yes: { targets: ["Mizuki", "Wuyang", "Jetpack Cat"], points: 2 },
      somewhat_yes: { targets: ["Mizuki", "Wuyang", "Jetpack Cat"], points: 1 },
      somewhat_no: { targets: ["Mercy", "Moira", "Brigitte"], points: 1 },
      no: { targets: ["Mercy", "Moira", "Brigitte"], points: 2 },
    },
  },
];
