import styles from './stylesheet';

export default function View() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>The section about me</h1>
        <p className={styles.status}>
          Based out of Chicago, currently employed as a Senior Software Engineer.
        </p>
      </header>
      <section>
        <p className={styles.body}>
          Hey, my name's Kyle. I've thru-hiked, or backpacked, several trails across the globe from the rugged paths of Corsica to the towering peaks of Nepal. In total I've been to 13 countries, hiked 1,385 miles of trail, and have spent the past {new Date().getFullYear() - 2010}+ years as a software engineer.
        </p>
        <p className={styles.body}>
          As you've probably already noticed, my biggest passions are thru-hiking, and coding websites/mobile apps. I can spend hours experimenting with code, or planning the next big adventure abroad.
        </p>
      </section>
    </article>
  );
}
