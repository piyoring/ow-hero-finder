import { styles } from "../styles/appStyles";
import type { HeroDescription } from "../types";

type Result = {
  hero: string;
  score: number;
};

type Props = {
  results: Result[];
  heroDescriptions: Partial<Record<string, HeroDescription>>;
  onReset: () => void;
};

export function ResultPage({ results, heroDescriptions, onReset }: Props) {
  return (
    <>
      <p style={styles.badge}>Result</p>
      <h1 style={styles.title}>診断結果</h1>
      <p style={styles.pageDescription}>
        回答傾向から相性の高いヒーローを上位順に表示しています。
      </p>

      <div style={styles.resultList}>
        {results.slice(0, 3).map((result, index) => {
          const info = heroDescriptions[result.hero];
          const isTop = index === 0;

          return (
            <section
              key={result.hero}
              style={{
                ...styles.resultCard,
                ...(isTop ? styles.resultCardTop : {}),
              }}
            >
              <div style={{ ...styles.rank, ...(isTop ? styles.rankTop : {}) }}>
                #{index + 1}
              </div>
              <div>
                <h2 style={styles.heroName}>{result.hero}</h2>
                <p style={styles.heroTitle}>{info?.title}</p>
                <p style={styles.scoreBadge}>MATCH SCORE {result.score}</p>
                <p style={styles.description}>{info?.summary}</p>
                {info?.recommendedFor?.length ? (
                  <div style={styles.recommendedBlock}>
                    <p style={styles.recommendedTitle}>おすすめな人</p>
                    <ul style={styles.recommendedList}>
                      {info.recommendedFor.map((item) => (
                        <li key={item} style={styles.recommendedItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>

      <button style={styles.primaryButton} onClick={onReset}>
        もう一度診断する
      </button>
    </>
  );
}
