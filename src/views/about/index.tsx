import styles from './stylesheet';

export default function View() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.block}>The</span>
          <span className={styles.block}>section</span>
          <span className={styles.block}>about me</span>
        </h1>
      </header>
      <section>
        <p className={styles.body}>
          I'm a thru-hiker and web developer with {new Date().getFullYear() - 2012}+ years of software development experience, who loves to spend hours experimenting with code, or planning the next big hike. Based in Chicago, former engineer at Rally Health and now working for Optum Digital. Over the past several years I have been to 13 countries, hiked 1,385 miles of trail abroad, and worked for a variety of companies developing their web-based products.
        </p>
      </section>
    </article>
  );
}
