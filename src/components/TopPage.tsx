import type { Role } from "../types";
import { styles } from "../styles/appStyles";

type Props = {
  onStart: (role: Role) => void;
};

const roles: {
  role: Role;
  title: string;
  text: string;
  accent: string;
  meta: string;
}[] = [
  {
    role: "tank",
    title: "タンク",
    text: "前線の作り方と守り方から診断",
    accent: "#f59e0b",
    meta: "ROLE 01",
  },
  {
    role: "damage",
    title: "ダメージ",
    text: "まずプレイスタイルを絞って診断",
    accent: "#38bdf8",
    meta: "ROLE 02",
  },
  {
    role: "support",
    title: "サポート",
    text: "支援・火力・判断の好みから診断",
    accent: "#34d399",
    meta: "ROLE 03",
  },
];

export function TopPage({ onStart }: Props) {
  return (
    <section className="top-layout" style={styles.topLayout}>
      <div>
        <h1 style={styles.brandTitle}>
          OVERWATCH
          <br />
          FIND YOUR HERO
        </h1>
        <p style={styles.lead}>
          立ち回り、戦い方、得意な距離感から、今のあなたに合うヒーロー候補を見つけます。
        </p>
      </div>

      <div style={styles.roleGrid}>
        {roles.map((item) => (
          <button
            key={item.role}
            style={{
              ...styles.primaryCard,
              borderTopColor: item.accent,
            }}
            onClick={() => onStart(item.role)}
          >
            <span style={{ ...styles.roleAccent, background: item.accent }} />
            <span style={styles.roleMeta}>{item.meta}</span>
            <span style={styles.roleTitle}>{item.title}</span>
            <span style={styles.roleText}>{item.text}</span>
            <span style={styles.roleCta}>START</span>
          </button>
        ))}
      </div>
    </section>
  );
}
