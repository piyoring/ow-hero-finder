import type { Role } from "../types";
import { styles } from "../styles/appStyles";

type Props = {
  onStart: (role: Role) => void;
};

export function TopPage({ onStart }: Props) {
  return (
    <>
      <p style={styles.badge}>Overwatch Hero Diagnosis</p>
      <h1 style={styles.title}>あなたに合うヒーロー診断</h1>
      <p style={styles.lead}>
        プレイスタイルに近いヒーローを診断します。まずはロールを選んでください。
      </p>

      <div style={styles.roleGrid}>
        <button style={styles.primaryCard} onClick={() => onStart("tank")}>
          <span style={styles.roleTitle}>タンク</span>
          <span style={styles.roleText}>20問で診断する</span>
        </button>

        <button style={styles.disabledCard} disabled>
          <span style={styles.roleTitle}>ダメージ</span>
          <span style={styles.roleText}>準備中</span>
        </button>

        <button style={styles.primaryCard} onClick={() => onStart("support")}>
          <span style={styles.roleTitle}>サポート</span>
          <span style={styles.roleText}>20問で診断する</span>
        </button>
      </div>
    </>
  );
}