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

function buildShareUrl(result: Result | undefined, title: string | undefined) {
  const pageUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;
  const shareText = result
    ? `OVERWATCH HERO FINDERで診断したら、相性の良いヒーローは「${result.hero}」でした！
    ${title ? ` ${result.hero} - ${title}` : ""}`
    : "OVERWATCH HERO FINDERで自分に合うヒーローを診断しました！";
  const params = new URLSearchParams({
    text: shareText,
    url: pageUrl,
  });

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function ResultPage({ results, heroDescriptions, onReset }: Props) {
  const topResult = results[0];
  const shareUrl = buildShareUrl(
    topResult,
    topResult ? heroDescriptions[topResult.hero]?.title : undefined,
  );

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

      <div style={styles.resultActions}>
        <a
          style={{ ...styles.primaryButton, ...styles.shareButton }}
          href={shareUrl}
          target="_blank"
          rel="noreferrer"
        >
          Xで結果を共有
        </a>
        <button style={styles.primaryButton} onClick={onReset}>
          もう一度診断する
        </button>
      </div>
    </>
  );
}
