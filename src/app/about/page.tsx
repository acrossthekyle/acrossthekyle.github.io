import styles from 'scss/app/about/page.module.scss'

export default function Page() {
  return (
    <article className={styles.about}>
      <figure monochromeable="true">
        <img
          src="https://ik.imagekit.io/acrossthekyle/backpacking-1.jpeg?updatedAt=1709072809903"
          alt="Kyle Gilbert"
        />
        <figcaption>Me &mdash; Grande Randonnée 20 / June 2023</figcaption>
      </figure>

      <section>
        <div>
          <h3>Backstory</h3>
          <p></p>
        </div>
        <div>
          <h3>Past-time</h3>
          <p></p>
        </div>
        <div>
          <h3>Contact</h3>
          <p></p>
        </div>
        <div>
          <h3>Resume</h3>
          <p></p>
        </div>
      </section>
    </article>
  );
}
