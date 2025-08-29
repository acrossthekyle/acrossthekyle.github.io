import Image from 'next/image';
import Link from 'next/link';

import { Article } from '@/ui/article';

import styles from './stylesheet';

export default function View() {
  return (
    <Article isFull>
      <header>
        <h1 className={styles.hero}>
          <span className={styles.tab} />
          I'M A THRU-HIKER AND UI DEVELOPER SEEKING NEW WAYS TO MOVE FORWARD WITH INTENTION AND CURIOSITY.
        </h1>
        <span className={styles.since}>Since 1987</span>
      </header>
      <section className={styles.introduction}>
        <p className={styles.blurb}>
          Hello, I'm Kyle, a crafty UI developer who calls Chicago home, and hiking long-distance trails a vacation.
          <span className={styles.socials}>
            Find me on the socials
            <span className={styles.at}>@acrossthekyle</span>
          </span>
        </p>
        <p className={styles.me}>
          <Image
            alt=""
            className={styles.image}
            height={1080}
            src="2023/06/21/05769f04-5b00-4fd5-a233-55c00c9871c5.jpeg"
            width={1920}
          />
        </p>
      </section>
      <section className={styles.section}>
        <div className={styles.left}>
          <p className={styles.paragraph}>
            I like to make pretty things with code. The fact that{' '}
            <Link
              className={styles.link}
              href="https://raw.githubusercontent.com/acrossthekyle/acrossthekyle.github.io/refs/heads/main/src/views/about/index.tsx"
              target="_blank"
              rel="noreferrer"
            >
              this code
            </Link> becomes the page you're on right now, thrills me to no end.
          </p>
          <p className={styles.paragraph}>
            I work full-time at Optum where I employ more than 13 years of insight, impacting millions. I have a passion for creating digital experiences with attention to detail, and an ability to adapt, producing products and features that last for years, or until the design team wants to redo it.
          </p>
          <p className={styles.paragraph}>
            Some tools of the trade include Javascript, otherwise known as the brains of the operation, a friendly fact-checker of code called Typescript, the HTML bones of all websites in the world, and the renowned CSS stylist of the world wide web.
          </p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.heading}>
            UI<br />
            Developer<br />
            <span className={styles.since}>Since 2012</span>
          </h3>
          <div className={styles.timeline}>
            <h4 className={styles.subheading}>
              Experience
            </h4>
            <ul className={styles.list}>
              <li>
                <h5 className={styles.place}>
                  Optum
                </h5>
                <p className={styles.when}>
                  From 2020
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  Rally Health
                </h5>
                <p className={styles.when}>
                  2018 - 2020
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  Earlybird
                </h5>
                <p className={styles.when}>
                  2015 - 2018
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  Red Frog
                </h5>
                <p className={styles.when}>
                  2013 - 2015
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  Silverline
                </h5>
                <p className={styles.when}>
                  2012 - 2013
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.left}>
          <p className={styles.paragraph}>
            Nature and the mountains are my church, and nothing revs me up more than leaving the crowded city behind, and walking a long-distance trail from beginning to end, carrying everything I need on my back.
          </p>
          <p className={styles.paragraph}>
            I first witnessed groups of people carrying large backpacks setting off from a refuge in the Torres del Paine national park of Patagonia in 2016 and was instantly mesmerized by the idea of backpacking, and then somehow forgot about it for two uneventful years until the spring of 2018.
          </p>
          <p className={styles.paragraph}>
            The idea and fascination returned to me and a few months later I was setting foot on a long-distance trail called the{' '}
            <Link
              className={styles.link}
              href="/travels/camino-de-santiago"
            >
              Camino de Santiago
            </Link>{' '}
            in Spain. After 32 days, and 500+ miles, I was hooked and I haven't looked back since.
          </p>
          <p className={styles.paragraph}>
            Most recently I returned to the{' '}
            <Link
              className={styles.link}
              href="/travels/tour-du-mont-blanc-repeat"
            >
              Tour du Mont Blanc
            </Link>{' '}
            in 2024, a repeat of a classic hike of mine from 2018. Some others I've done include the self-proclaimed "toughest trek in Europe" known as the{' '}
            <Link
              className={styles.link}
              href="/travels/gr-20"
            >
              GR 20
            </Link>{' '}
            in Corsica, my first love: the{' '}
            <Link
              className={styles.link}
              href="/travels/torres-del-paine-o-circuit"
            >
              O Circuit
            </Link>{' '}
            at the end of the world in Patagonia in 2020, and the
            {' '}
            <Link
              className={styles.link}
              href="/travels/annapurna-circuit-basecamp"
            >
              Annapurna Circuit
            </Link>{' '}
            in the Himalayas of Nepal, a place where I nearly bit it.
          </p>
          <p className={styles.paragraph}>
            Check out my{' '}
            <Link
              className={styles.link}
              href="/travels"
            >
              travels
            </Link>{' '}
            for a brief glimpse of (nearly) everything I've done.
          </p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.heading}>
            Thru<br />
            Hiking<br />
            <span className={styles.since}>Since 2018</span>
          </h3>
          <div className={styles.timeline}>
            <h4 className={styles.subheading}>
              Brief History
            </h4>
            <ul className={styles.list}>
              <li>
                <h5 className={styles.place}>
                  2016
                </h5>
                <p className={styles.when}>
                  Discovered backpacking while on vacation in Patagonia
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  2018
                </h5>
                <p className={styles.when}>
                  Embarked on first long-distance thru-hike
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  2018 - 2024
                </h5>
                <p className={styles.when}>
                  Completed several thru-hikes all around the world
                </p>
              </li>
              <li>
                <h5 className={styles.place}>
                  {new Date().getFullYear()}
                </h5>
                <p className={styles.when}>
                  Seeking out and planning the next big adventure
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Article>
  );
}
