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
          <p>
            Hey, I'm Kyle!
          </p>
          <p>
            On a whim I booked a one-way flight to walk The Camino de Santiago: a nearly 500
            mile long backpacking trail across Northern Spain from France to the
            Atlantic ocean. Since then, I have visited numerous countries, and
            thru-hiked various trails.
          </p>
          <p>
            I currently reside in the concrete jungle of Chicago with my partner
            and our dog Dax. I am a developer by trade, and a thru-hiker by
            design with a love for carrying everything I need to survive on my back.
          </p>
        </div>
        <div>
          <h3>Developer</h3>
          <p>
            I have been doing web development (front and back) for 15+ years with
            the latter third of that time spent working in React and React Native.
            I like to refer to it as "designing code".
          </p>
          <p>
            When not doing work for my full-time job, I like to tinker with Garmin
            wearable apps, and this website.
          </p>
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
