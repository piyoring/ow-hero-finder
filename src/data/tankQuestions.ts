import type { Question } from "../types";

export type TankHero =
  | "D.Va"
  | "Doomfist"
  | "Hazard"
  | "Junker Queen"
  | "Mauga"
  | "Orisa"
  | "Ramattra"
  | "Reinhardt"
  | "Roadhog"
  | "Sigma"
  | "Winston"
  | "Wrecking Ball"
  | "Zarya"
  | "Domina";

export const tankQuestions: Question[] = [
  {
    id: 1,
    text: "チームが迷っているなら、自分が先頭で流れを作りたい",
    scoring: {
      yes: { targets: ["Reinhardt", "Junker Queen", "Mauga", "Winston"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Junker Queen", "Mauga", "Winston"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Zarya", "Ramattra"], points: 1 },
      no: { targets: ["Sigma", "Zarya", "Ramattra"], points: 2 },
    },
  },
  {
    id: 2,
    text: "味方を守るために、自分の攻撃を後回しにできる",
    scoring: {
      yes: { targets: ["D.Va", "Zarya", "Reinhardt", "Winston"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Zarya", "Reinhardt", "Winston"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Mauga", "Junker Queen"], points: 1 },
      no: { targets: ["Roadhog", "Mauga", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 3,
    text: "単独で敵陣をかき回し、複数人の注意を自分に向けたい",
    scoring: {
      yes: { targets: ["Wrecking Ball", "Doomfist"], points: 2 },
      somewhat_yes: { targets: ["Wrecking Ball", "Doomfist"], points: 1 },
      somewhat_no: { targets: ["D.Va", "Ramattra", "Reinhardt"], points: 1 },
      no: { targets: ["D.Va", "Ramattra", "Reinhardt"], points: 2 },
    },
  },
  {
    id: 4,
    text: "正面からぶつかるより、敵の隙を突く方が好きだ",
    scoring: {
      yes: { targets: ["Doomfist", "Hazard", "Roadhog"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Hazard", "Roadhog"], points: 1 },
      somewhat_no: { targets: ["Reinhardt", "Orisa", "Domina"], points: 1 },
      no: { targets: ["Reinhardt", "Orisa", "Domina"], points: 2 },
    },
  },
  {
    id: 5,
    text: "危険でも一気に踏み込んで試合を動かしたい",
    scoring: {
      yes: { targets: ["Winston"], points: 3 },
      somewhat_yes: { targets: ["Winston"], points: 2 },
      somewhat_no: { targets: ["Sigma", "Domina", "Ramattra"], points: 1 },
      no: { targets: ["Sigma", "Domina", "Ramattra"], points: 2 },
    },
  },
  {
    id: 6,
    text: "安定して少しずつ有利を作る戦い方が好きだ",
    scoring: {
      yes: { targets: ["Sigma", "Orisa", "Ramattra", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Orisa", "Ramattra", "Domina"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Junker Queen", "Hazard"], points: 1 },
      no: { targets: ["Doomfist", "Junker Queen", "Hazard"], points: 2 },
    },
  },
  {
    id: 7,
    text: "味方と足並みを揃えて戦う方が好きだ",
    scoring: {
      yes: { targets: ["Reinhardt", "Zarya", "Ramattra"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Zarya", "Ramattra"], points: 1 },
      somewhat_no: { targets: ["Wrecking Ball", "Roadhog"], points: 1 },
      no: { targets: ["Wrecking Ball", "Roadhog"], points: 2 },
    },
  },
  {
    id: 8,
    text: "敵の後衛を見るとプレッシャーをかけたくなる",
    scoring: {
      yes: { targets: ["Winston", "D.Va", "Doomfist", "Wrecking Ball"], points: 2 },
      somewhat_yes: { targets: ["Winston", "D.Va", "Doomfist", "Wrecking Ball"], points: 1 },
      somewhat_no: { targets: ["Orisa", "Zarya"], points: 1 },
      no: { targets: ["Orisa", "Zarya"], points: 2 },
    },
  },
  {
    id: 9,
    text: "高機動なキャラの方が使っていて楽しい",
    scoring: {
      yes: { targets: ["D.Va", "Winston", "Wrecking Ball", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Winston", "Wrecking Ball", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Ramattra", "Orisa", "Domina"], points: 1 },
      no: { targets: ["Ramattra", "Orisa", "Domina"], points: 2 },
    },
  },
  {
    id: 10,
    text: "相手の行動や立ち位置を制限して、じわじわ主導権を握りたい",
    scoring: {
      yes: { targets: ["Orisa", "Sigma", "Domina", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Orisa", "Sigma", "Domina", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Junker Queen", "Mauga"], points: 1 },
      no: { targets: ["Roadhog", "Junker Queen", "Mauga"], points: 2 },
    },
  },
  {
    id: 11,
    text: "一対一の読み合いで勝つのが好きだ",
    scoring: {
      yes: { targets: ["Roadhog", "Junker Queen", "Doomfist"], points: 2 },
      somewhat_yes: { targets: ["Roadhog", "Junker Queen", "Doomfist"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Orisa", "D.Va"], points: 1 },
      no: { targets: ["Sigma", "Orisa", "D.Va"], points: 2 },
    },
  },
  {
    id: 12,
    text: "味方が狙われた時、すぐ助けに入り守り切る動きにやりがいを感じる",
    scoring: {
      yes: { targets: ["D.Va", "Zarya", "Winston"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Zarya", "Winston"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Mauga", "Junker Queen"], points: 1 },
      no: { targets: ["Roadhog", "Mauga", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 13,
    text: "その場の直感で大胆に動く方だ",
    scoring: {
      yes: { targets: ["Junker Queen", "Wrecking Ball", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Junker Queen", "Wrecking Ball", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina", "Zarya"], points: 1 },
      no: { targets: ["Sigma", "Domina", "Zarya"], points: 2 },
    },
  },
  {
    id: 14,
    text: "圧倒的な存在感で敵を押し返したい",
    scoring: {
      yes: { targets: ["Reinhardt", "Mauga", "Orisa", "Ramattra"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Mauga", "Orisa", "Ramattra"], points: 1 },
      somewhat_no: { targets: ["Hazard", "Doomfist"], points: 1 },
      no: { targets: ["Hazard", "Doomfist"], points: 2 },
    },
  },
  {
    id: 15,
    text: "敵を有利な場所から追い出して崩したい",
    scoring: {
      yes: { targets: ["Hazard", "Orisa", "Wrecking Ball", "D.Va"], points: 2 },
      somewhat_yes: { targets: ["Hazard", "Orisa", "Wrecking Ball", "D.Va"], points: 1 },
      somewhat_no: { targets: ["Reinhardt", "Mauga", "Zarya"], points: 1 },
      no: { targets: ["Reinhardt", "Mauga", "Zarya"], points: 2 },
    },
  },
  {
    id: 16,
    text: "敵に囲まれてもワクワクする",
    scoring: {
      yes: { targets: ["Mauga", "Junker Queen", "Reinhardt", "Roadhog"], points: 2 },
      somewhat_yes: { targets: ["Mauga", "Junker Queen", "Reinhardt", "Roadhog"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina"], points: 1 },
      no: { targets: ["Sigma", "Domina"], points: 2 },
    },
  },
  {
    id: 17,
    text: "キルを狙うより、味方が動きやすい前線や安全地帯を作る方を優先したい",
    scoring: {
      yes: { targets: ["Reinhardt", "Winston", "D.Va", "Orisa", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Winston", "D.Va", "Orisa", "Domina"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Doomfist", "Junker Queen", "Hazard"], points: 1 },
      no: { targets: ["Roadhog", "Doomfist", "Junker Queen", "Hazard"], points: 2 },
    },
  },
  {
    id: 18,
    text: "有利な場所を確保して相手を追い詰めるのが好きだ",
    scoring: {
      yes: { targets: ["Sigma", "Domina", "Ramattra", "Orisa"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Domina", "Ramattra", "Orisa"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Wrecking Ball", "Hazard"], points: 1 },
      no: { targets: ["Doomfist", "Wrecking Ball", "Hazard"], points: 2 },
    },
  },
  {
    id: 19,
    text: "敵の立ち位置を崩して不利な場所に追い込みたい",
    scoring: {
      yes: { targets: ["Wrecking Ball", "Doomfist", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Wrecking Ball", "Doomfist", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Reinhardt"], points: 1 },
      no: { targets: ["Reinhardt"], points: 2 },
    },
  },
  {
    id: 20,
    text: "状況に応じて攻撃と防御を切り替える戦い方が好きだ",
    scoring: {
      yes: { targets: ["Ramattra", "Zarya", "D.Va", "Sigma"], points: 2 },
      somewhat_yes: { targets: ["Ramattra", "Zarya", "D.Va", "Sigma"], points: 1 },
      somewhat_no: { targets: ["Mauga", "Roadhog", "Winston"], points: 1 },
      no: { targets: ["Mauga", "Roadhog", "Winston"], points: 2 },
    },
  },
];
