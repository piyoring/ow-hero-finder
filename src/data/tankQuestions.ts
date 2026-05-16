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
    text: "チームが前に出るきっかけを自分から作りたい",
    scoring: {
      yes: { targets: ["Reinhardt", "Junker Queen", "Winston", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Junker Queen", "Winston", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Zarya", "Ramattra", "Domina"], points: 1 },
      no: { targets: ["Sigma", "Zarya", "Ramattra", "Domina"], points: 2 },
    },
  },
  {
    id: 2,
    text: "正面で攻撃を受け止めるより、敵の後衛や横の展開にプレッシャーをかけたい",
    scoring: {
      yes: { targets: ["Doomfist", "Wrecking Ball", "Winston", "D.Va"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Wrecking Ball", "Winston", "D.Va"], points: 1 },
      somewhat_no: { targets: ["Orisa", "Reinhardt", "Zarya", "Domina"], points: 1 },
      no: { targets: ["Orisa", "Reinhardt", "Zarya", "Domina"], points: 2 },
    },
  },
  {
    id: 3,
    text: "自分がキルを取るより、味方が動きやすい場所を作る方にやりがいを感じる",
    scoring: {
      yes: { targets: ["Reinhardt", "Sigma", "Orisa", "Domina", "Winston", "Zarya", "D.Va"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Sigma", "Orisa", "Domina", "Winston", "Zarya", "D.Va"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Doomfist", "Junker Queen", "Hazard"], points: 1 },
      no: { targets: ["Roadhog", "Doomfist", "Junker Queen", "Hazard"], points: 2 },
    },
  },
  {
    id: 4,
    text: "敵が有利な場所にいると、まずそこからどかしたくなる",
    scoring: {
      yes: { targets: ["D.Va", "Winston", "Hazard", "Wrecking Ball"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Winston", "Hazard", "Wrecking Ball"], points: 1 },
      somewhat_no: { targets: ["Ramattra", "Zarya", "Mauga", "Sigma"], points: 1 },
      no: { targets: ["Ramattra", "Zarya", "Mauga", "Sigma"], points: 2 },
    },
  },
  {
    id: 5,
    text: "正面からプレッシャーを受け止めて、じっくり前線を作りたい",
    scoring: {
      yes: { targets: ["Orisa", "Sigma", "Ramattra", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Orisa", "Sigma", "Ramattra", "Domina"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Wrecking Ball", "Hazard", "Junker Queen"], points: 1 },
      no: { targets: ["Doomfist", "Wrecking Ball", "Hazard", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 6,
    text: "味方が狙われていたら、攻めよりもカバーを優先したい",
    scoring: {
      yes: { targets: ["D.Va", "Zarya", "Winston", "Reinhardt"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Zarya", "Winston", "Reinhardt"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Mauga", "Junker Queen", "Hazard"], points: 1 },
      no: { targets: ["Roadhog", "Mauga", "Junker Queen", "Hazard"], points: 2 },
    },
  },
  {
    id: 7,
    text: "味方の準備が整う前でも、チャンスが見えたら仕掛けたい",
    scoring: {
      yes: { targets: ["Doomfist", "Wrecking Ball", "Roadhog", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Wrecking Ball", "Roadhog", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Reinhardt", "Sigma", "Zarya", "Ramattra"], points: 1 },
      no: { targets: ["Reinhardt", "Sigma", "Zarya", "Ramattra"], points: 2 },
    },
  },
  {
    id: 8,
    text: "相手のタンクと正面で戦うより、敵の横や裏を使って崩したい",
    scoring: {
      yes: { targets: ["Doomfist", "Wrecking Ball", "D.Va", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Wrecking Ball", "D.Va", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Reinhardt", "Orisa", "Ramattra", "Domina"], points: 1 },
      no: { targets: ["Reinhardt", "Orisa", "Ramattra", "Domina"], points: 2 },
    },
  },
  {
    id: 9,
    text: "味方が自分の後ろで安心して戦える状況を作りたい",
    scoring: {
      yes: { targets: ["Reinhardt", "Ramattra", "Orisa", "Mauga"], points: 2 },
      somewhat_yes: { targets: ["Reinhardt", "Ramattra", "Orisa", "Mauga"], points: 1 },
      somewhat_no: { targets: ["Doomfist", "Wrecking Ball", "Roadhog", "D.Va"], points: 1 },
      no: { targets: ["Doomfist", "Wrecking Ball", "Roadhog", "D.Va"], points: 2 },
    },
  },
  {
    id: 10,
    text: "敵の攻めを受け止めてから、反撃につなげる動きが好き",
    scoring: {
      yes: { targets: ["Zarya", "Sigma", "Ramattra", "D.Va"], points: 2 },
      somewhat_yes: { targets: ["Zarya", "Sigma", "Ramattra", "D.Va"], points: 1 },
      somewhat_no: { targets: ["Winston", "Mauga", "Junker Queen", "Hazard"], points: 1 },
      no: { targets: ["Winston", "Mauga", "Junker Queen", "Hazard"], points: 2 },
    },
  },
  {
    id: 11,
    text: "孤立した敵を見つけたら、逃さずプレッシャーをかけたい",
    scoring: {
      yes: { targets: ["Roadhog", "Junker Queen", "Doomfist", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Roadhog", "Junker Queen", "Doomfist", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Sigma", "Domina", "Winston", "Orisa"], points: 1 },
      no: { targets: ["Sigma", "Domina", "Winston", "Orisa"], points: 2 },
    },
  },
  {
    id: 12,
    text: "じわじわ場所を広げて、相手の動ける範囲を狭めたい",
    scoring: {
      yes: { targets: ["Sigma", "Orisa", "Domina", "Ramattra"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "Orisa", "Domina", "Ramattra"], points: 1 },
      somewhat_no: { targets: ["Wrecking Ball", "Doomfist", "Mauga", "Junker Queen"], points: 1 },
      no: { targets: ["Wrecking Ball", "Doomfist", "Mauga", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 13,
    text: "不利な状況でも、耐えながらチャンスを待つのが好き",
    scoring: {
      yes: { targets: ["Mauga", "Junker Queen", "Roadhog", "Ramattra", "Wrecking Ball", "Orisa"], points: 2 },
      somewhat_yes: { targets: ["Mauga", "Junker Queen", "Roadhog", "Ramattra", "Wrecking Ball", "Orisa"], points: 1 },
      somewhat_no: { targets: ["Sigma", "D.Va", "Domina", "Zarya"], points: 1 },
      no: { targets: ["Sigma", "D.Va", "Domina", "Zarya"], points: 2 },
    },
  },
  {
    id: 14,
    text: "マップや味方構成に合わせて、戦い方を切り替えたい",
    scoring: {
      yes: { targets: ["D.Va", "Winston", "Ramattra", "Sigma", "Domina"], points: 2 },
      somewhat_yes: { targets: ["D.Va", "Winston", "Ramattra", "Sigma", "Domina"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Mauga", "Reinhardt", "Junker Queen"], points: 1 },
      no: { targets: ["Roadhog", "Mauga", "Reinhardt", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 15,
    text: "相手の注意を引きつけて、味方が動ける時間を作りたい",
    scoring: {
      yes: { targets: ["Wrecking Ball", "Doomfist", "Winston", "Hazard"], points: 2 },
      somewhat_yes: { targets: ["Wrecking Ball", "Doomfist", "Winston", "Hazard"], points: 1 },
      somewhat_no: { targets: ["Orisa", "Zarya", "Ramattra", "Domina"], points: 1 },
      no: { targets: ["Orisa", "Zarya", "Ramattra", "Domina"], points: 2 },
    },
  },
  {
    id: 16,
    text: "味方のウルトや火力に合わせて、前に出るタイミングを揃えたい",
    scoring: {
      yes: { targets: ["Zarya", "Reinhardt", "Ramattra", "Junker Queen"], points: 2 },
      somewhat_yes: { targets: ["Zarya", "Reinhardt", "Ramattra", "Junker Queen"], points: 1 },
      somewhat_no: { targets: ["Roadhog", "Wrecking Ball", "Doomfist", "Hazard"], points: 1 },
      no: { targets: ["Roadhog", "Wrecking Ball", "Doomfist", "Hazard"], points: 2 },
    },
  },
  {
    id: 17,
    text: "敵の弾やスキルを受け流して、相手のリソースを使わせたい",
    scoring: {
      yes: { targets: ["Sigma", "D.Va", "Orisa", "Domina"], points: 2 },
      somewhat_yes: { targets: ["Sigma", "D.Va", "Orisa", "Domina"], points: 1 },
      somewhat_no: { targets: ["Mauga", "Roadhog", "Winston", "Junker Queen"], points: 1 },
      no: { targets: ["Mauga", "Roadhog", "Winston", "Junker Queen"], points: 2 },
    },
  },
  {
    id: 18,
    text: "相手を倒すことより、まず立ち位置を崩すことを意識したい",
    scoring: {
      yes: { targets: ["Hazard", "Wrecking Ball", "Doomfist", "Orisa"], points: 2 },
      somewhat_yes: { targets: ["Hazard", "Wrecking Ball", "Doomfist", "Orisa"], points: 1 },
      somewhat_no: { targets: ["Mauga", "Zarya", "Reinhardt", "Roadhog"], points: 1 },
      no: { targets: ["Mauga", "Zarya", "Reinhardt", "Roadhog"], points: 2 },
    },
  },
  {
    id: 19,
    text: "難しくても、キャラコンやスキルのクールタイム管理で差が出るタンクが好き",
    scoring: {
      yes: { targets: ["Doomfist", "Wrecking Ball", "D.Va", "Hazard", "Winston"], points: 2 },
      somewhat_yes: { targets: ["Doomfist", "Wrecking Ball", "D.Va", "Hazard", "Winston"], points: 1 },
      somewhat_no: { targets: ["Orisa", "Mauga", "Roadhog", "Reinhardt"], points: 1 },
      no: { targets: ["Orisa", "Mauga", "Roadhog", "Reinhardt"], points: 2 },
    },
  },
  {
    id: 20,
    text: "最後は自分が前に出て、チームを押し上げたい",
    scoring: {
      yes: { targets: ["Mauga", "Junker Queen", "Reinhardt", "Roadhog", "Winston"], points: 2 },
      somewhat_yes: { targets: ["Mauga", "Junker Queen", "Reinhardt", "Roadhog", "Winston"], points: 1 },
      somewhat_no: { targets: ["Sigma", "D.Va", "Domina", "Zarya"], points: 1 },
      no: { targets: ["Sigma", "D.Va", "Domina", "Zarya"], points: 2 },
    },
  },
];
