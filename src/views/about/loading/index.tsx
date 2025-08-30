import about from '../stylesheet';
import styles from './stylesheet';

export default function Loading() {
  return (
    <>
      <header>
        <h1 className={`${about.hero} ${styles.skeleton}`}>
          <span className={about.tab} />
          <span className={`${styles.hero} ${styles.small}`} />
          <span className={`${styles.hero} ${styles.medium}`} />
          <span className={`${styles.hero} ${styles.large}`} />
          <span className={`${styles.hero} ${styles.medium}`} />
          <span className={`${styles.hero} ${styles.medium}`} />
          <span className={`${styles.hero} ${styles.small}`} />
          <span className={`${styles.hero} ${styles.small}`} />
          <span className={`${styles.hero} ${styles.small}`} />
          <span className={`${styles.hero} ${styles.large}`} />
          <span className={`${styles.hero} ${styles.medium}`} />
          <span className={`${styles.hero} ${styles.medium}`} />
          <span className={`${styles.hero} ${styles.small}`} />
          <span className={`${styles.hero} ${styles.medium}`} />
        </h1>
      </header>
      <section className={about.introduction}>
        <p className={`${about.blurb} ${styles.skeleton}`}>
          <span className={`${styles.word} ${styles.tiny}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.tiny}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={`${styles.word} ${styles.tiny}`} />
          <span className={`${styles.word} ${styles.small}`} />
          <span className={about.socials}>
            <span className={`${styles.word} ${styles.large}`} />
            <span className={`${styles.word} ${styles.small}`} />
          </span>
        </p>
        <p className={`${about.me} ${styles.skeleton}`}>
          <span className={styles.image} />
        </p>
      </section>
      {Array.from({ length: 2 }).map((_, index) => (
        <section className={`${about.section} ${styles.skeleton}`} key={index}>
          <div className={about.left}>
            <p className={about.paragraph}>
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.medium}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.medium}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.large}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.large}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.small}`} />
              <span className={`${styles.word} ${styles.tiny}`} />
              <span className={`${styles.word} ${styles.small}`} />
            </p>
          </div>
          <div className={about.right}>
            <h3 className={about.heading}>
              <span className={`${styles.heading} ${styles.tiny}`} />
              <span className={`${styles.heading} ${styles.medium}`} />
            </h3>
            <div className={about.timeline}>
              <h4 className={about.subheading}>
                <span className={`${styles.heading} ${styles.small}`} />
              </h4>
              <ul className={about.list}>
                <li>
                  <span className={`${styles.heading} ${styles.small}`} />
                  <span className={`${styles.word} ${styles.tiny}`} />
                </li>
                <li>
                  <span className={`${styles.heading} ${styles.small}`} />
                  <span className={`${styles.word} ${styles.tiny}`} />
                </li>
                <li>
                  <span className={`${styles.heading} ${styles.small}`} />
                  <span className={`${styles.word} ${styles.tiny}`} />
                </li>
                <li>
                  <span className={`${styles.heading} ${styles.small}`} />
                  <span className={`${styles.word} ${styles.tiny}`} />
                </li>
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
