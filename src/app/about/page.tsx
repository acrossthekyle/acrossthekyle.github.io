import styles from 'scss/app/about/page.module.scss'

export default function Page() {
  return (
    <article className={styles.about}>
      <figure imagelessable="true">
        <img
          src="https://ik.imagekit.io/acrossthekyle/backpacking-1.jpeg?updatedAt=1709072809903"
          alt="Kyle Gilbert"
        />
        <figcaption>Grande Randonnée 20 &mdash;  June 2023</figcaption>
      </figure>

      <section>
        <div>
          <h3>About</h3>
          <p>
            I currently reside in the concrete jungle of Chicago with my partner
            and our dog Dax. I am a thru-hiker by
            design, and a developer by trade, with a love for carrying everything
            I need to survive on my back.
          </p>
        </div>
        <div>
          <h3>Thru-hiker</h3>
          <p>
            On a whim I booked a one-way flight to walk The Camino de Santiago: a nearly 500
            mile long backpacking trail across Northern Spain from France to the
            Atlantic ocean. Since then, I have visited numerous countries, and
            thru-hiked various trails.
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
          <h3>Links</h3>
          <p>
            <a
              href="mailto:hello@acrossthekyle.com?subject=Hello!"
              title="Send email to hello@acrossthekyle.com"
              aria-label="send email to hello@acrossthekyle.com"
            >
              hello@acrossthekyle.com
            </a>
          </p>
          <p>
            <a
              title="Go to my garmin apps"
              href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
              target="_blank"
              rel="noreferrer"
              aria-label="go to my garmin apps"
            >
              Garmin apps
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </a>
          </p>
          <p>
            <a
              title="View resume"
              href="resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="view resume"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
