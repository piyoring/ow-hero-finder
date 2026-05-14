import type { Question } from "../types";

export const tankQuestions: Question[] = [
  {
    id: 1,
    text: "チームが迷っているなら、自分が先頭で流れを作りたい",
    scoring: {
      yes: { targets: ["Reinhardt", "Junker Queen", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Junker Queen", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina", "Zarya"], points: 1 },
      no: { targets: ["Sigma", "Domina", "Zarya"], points: 2 },
    },
  },
  {
    id: 2,
    text: "味方を守るために、自分の攻撃を後回しにできる",
    scoring: {
      yes: { targets: ["D.Va", "Zarya", "Reinhardt", "Winston"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Zarya", "Reinhardt", "Winston"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Doomfist"], points: 1 },
      no: { targets: ["Roadhog", "Doomfist"], points: 2 },
    },
  },
  {
    id: 3,
    text: "単独で敵の注意を引きつける役割が好きだ",
    scoring: {
      yes: { targets: ["Wrecking Ball", "Doomfist", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Wrecking Ball", "Doomfist", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Orisa", "Domina"], points: 1 },
      no: { targets: ["Orisa", "Domina"], points: 2 },
    },
  },
  {
    id: 4,
    text: "正面からぶつかるより、敵の隙を突く方が好きだ",
    scoring: {
      yes: { targets: ["Doomfist", "Hazard", "Roadhog"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Hazard", "Roadhog"], points: 1 },
      somewhat_no: { targets: ["Reinhardt", "Orisa"], points: 1 },
      no: { targets: ["Reinhardt", "Orisa"], points: 2 },
    },
  },
  {
    id: 5,
    text: "危険でも一気に踏み込んで試合を動かしたい",
    scoring: {
      yes: { targets: ["Winston", "Doomfist", "Junker Queen", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Winston", "Doomfist", "Junker Queen", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina"], points: 1 },
      no: { targets: ["Sigma", "Domina"], points: 2 },
    },
  },
  {
    id: 6,
    text: "安定して少しずつ有利を作る戦い方が好きだ",
    scoring: {
      yes: { targets: ["Sigma", "Ramattra", "Orisa", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Ramattra", "Orisa", "Domina"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Junker Queen"], points: 1 },
      no: { targets: ["Doomfist", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 7,
    text: "味方と足並みを揃えて戦う方が好きだ",
    scoring: {
      yes: { targets: ["Reinhardt", "Zarya", "Ramattra", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Zarya", "Ramattra", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Wrecking Ball", "Roadhog"], points: 1 },
      no: { targets: ["Wrecking Ball", "Roadhog"], points: 2 },
    },
  },
  {
    id: 8,
    text: "敵の後衛を見るとプレッシャーをかけたくなる",
    scoring: {
      yes: { targets: ["Winston", "D.Va", "Doomfist", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Winston", "D.Va", "Doomfist", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Orisa"], points: 1 },
      no: { targets: ["Sigma", "Orisa"], points: 2 },
    },
  },
  {
    id: 9,
    text: "高機動なキャラの方が使っていて楽しい",
    scoring: {
      yes: { targets: ["D.Va", "Winston", "Doomfist", "Wrecking Ball"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Winston", "Doomfist", "Wrecking Ball"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina"], points: 1 },
      no: { targets: ["Sigma", "Domina"], points: 2 },
    },
  },
  {
    id: 10,
    text: "相手の行動を制限しながら、じわじわ主導権を握る戦い方が好きだ",
    scoring: {
      yes: { targets: ["Orisa", "Sigma", "Ramattra", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Orisa", "Sigma", "Ramattra", "Domina"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Wrecking Ball", "Roadhog"], points: 1 },
      no: { targets: ["Doomfist", "Wrecking Ball", "Roadhog"], points: 2 },
    },
  },
  {
    id: 11,
    text: "一対一の読み合いで勝つのが好きだ",
    scoring: {
      yes: { targets: ["Roadhog", "Junker Queen", "Doomfist"], points: 2 },
      somewhat_yes: { targets: ["Roadhog", "Junker Queen", "Doomfist"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Orisa"], points: 1 },
      no: { targets: ["Sigma", "Orisa"], points: 2 },
    },
  },
  {
    id: 12,
    text: "味方が狙われた時、すぐ助けに入り守り切る動きにやりがいを感じる",
    scoring: {
      yes: { targets: ["D.Va", "Zarya", "Winston"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Zarya", "Winston"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Wrecking Ball"], points: 1 },
      no: { targets: ["Roadhog", "Wrecking Ball"], points: 2 },
    },
  },
  {
    id: 13,
    text: "その場の直感で大胆に動く方だ",
    scoring: {
      yes: { targets: ["Doomfist", "Junker Queen", "Wrecking Ball", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Junker Queen", "Wrecking Ball", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina"], points: 1 },
      no: { targets: ["Sigma", "Domina"], points: 2 },
    },
  },
  {
    id: 14,
    text: "圧倒的な存在感で敵を押し返したい",
    scoring: {
      yes: { targets: ["Reinhardt", "Mauga", "Orisa", "Ramattra"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Mauga", "Orisa", "Ramattra"], points: 1 },
      somewhat_no: { targets: ["Wrecking Ball"], points: 1 },
      no: { targets: ["Wrecking Ball"], points: 2 },
    },
  },
  {
    id: 15,
    text: "冷静に状況を見て最適解を選ぶタイプだ",
    scoring: {
      yes: { targets: ["Sigma", "Domina", "Zarya", "Ramattra"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Domina", "Zarya", "Ramattra"], points: 1 },
      somewhat_no: { targets: ["Junker Queen", "Mauga"], points: 1 },
      no: { targets: ["Junker Queen", "Mauga"], points: 2 },
    },
  },
  {
    id: 16,
    text: "敵をただ倒すより、有利な場所から追い出して崩したい",
    scoring: {
      yes: { targets: ["Hazard", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Hazard", "Domina"], points: 1 },
      somewhat_no: { targets: ["Reinhardt", "Mauga"], points: 1 },
      no: { targets: ["Reinhardt", "Mauga"], points: 2 },
    },
  },
  {
    id: 17,
    text: "派手さより堅実に勝ちたい",
    scoring: {
      yes: { targets: ["Sigma", "Orisa", "Domina", "Zarya"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Orisa", "Domina", "Zarya"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Wrecking Ball"], points: 1 },
      no: { targets: ["Doomfist", "Wrecking Ball"], points: 2 },
    },
  },
  {
    id: 18,
    text: "敵に囲まれてもワクワクする",
    scoring: {
      yes: { targets: ["Mauga", "Junker Queen", "Reinhardt", "Doomfist"], points: 2 },
      somewhat_yes: { targets: ["Mauga", "Junker Queen", "Reinhardt", "Doomfist"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina"], points: 1 },
      no: { targets: ["Sigma", "Domina"], points: 2 },
    },
  },
  {
    id: 19,
    text: "キルよりスペース作りを優先したい",
    scoring: {
      yes: { targets: ["Reinhardt", "Winston", "D.Va", "Zarya", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Winston", "D.Va", "Zarya", "Domina"], points: 1 },
      somewhat_no: { targets: ["Roadhog"], points: 1 },
      no: { targets: ["Roadhog"], points: 2 },
    },
  },
  {
    id: 20,
    text: "有利な場所を確保して相手を追い詰めるのが好きだ",
    scoring: {
      yes: { targets: ["Sigma", "Domina", "Ramattra", "Orisa"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Domina", "Ramattra", "Orisa"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Wrecking Ball"], points: 1 },
      no: { targets: ["Doomfist", "Wrecking Ball"], points: 2 },
    },
  },
  {
    id: 21,
    text: "味方のピンチに素早く飛び込んで救う役が好きだ",
    scoring: {
      yes: { targets: ["D.Va"], points: 2 },
      somewhat_yes: { targets: ["D.Va"], points: 1 },
      somewhat_no: { targets: ["Roadhog"], points: 1 },
      no: { targets: ["Roadhog"], points: 2 },
    },
  },
  {
    id: 22,
    text: "味方が合わせやすい形で、自分が戦闘開始のきっかけを作りたい",
    scoring: {
      yes: { targets: ["Winston"], points: 2 },
      somewhat_yes: { targets: ["Winston"], points: 1 },
      somewhat_no: { targets: ["Sigma"], points: 1 },
      no: { targets: ["Sigma"], points: 2 },
    },
  },
  {
    id: 23,
    text: "相手を1人捕まえて人数差を作るのが好きだ",
    scoring: {
      yes: { targets: ["Roadhog"], points: 2 },
      somewhat_yes: { targets: ["Roadhog"], points: 1 },
      somewhat_no: { targets: ["Zarya"], points: 1 },
      no: { targets: ["Zarya"], points: 2 },
    },
  },
  {
    id: 24,
    text: "敵の立ち位置を崩して不利な場所に追い込みたい",
    scoring: {
      yes: { targets: ["Hazard"], points: 2 },
      somewhat_yes: { targets: ["Hazard"], points: 1 },
      somewhat_no: { targets: ["Reinhardt"], points: 1 },
      no: { targets: ["Reinhardt"], points: 2 },
    },
  },
  {
    id: 25,
    text: "状況に応じて攻撃と防御を切り替える戦い方が好きだ",
    scoring: {
      yes: { targets: ["Ramattra"], points: 2 },
      somewhat_yes: { targets: ["Ramattra"], points: 1 },
      somewhat_no: { targets: ["Mauga"], points: 1 },
      no: { targets: ["Mauga"], points: 2 },
    },
  },
];