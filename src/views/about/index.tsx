import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Article } from '@/ui/article';

import Image from './image';
import styles from './stylesheet';

export default function View() {
  return (
    <Article isFull>
      <header className={styles.header}>
        <h1 className={styles.hero}>
          I'm a thru-hiker and UI developer seeking new ways to move forward with wanderful intent
        </h1>
        <span className={styles.highlight}>
          Making tracks since 1987
        </span>
      </header>
      <section className={styles.introduction}>
        <p className={styles.blurb}>
          I'm a developer with zero awards or recognitions who lives on the lands belonging to the <span className="font-serif italic">Potawatomi, Ojibwe,</span> and <span className="font-serif italic">Odawa</span> (otherwise known as the city of <span className="font-serif italic">Chicago</span>). I also like to call hiking a long-distance trail from beginning to end a vacation.
        </p>
        <Image />
      </section>
      <section className={styles.section}>
        <div className={styles.right}>
          <h3 className={styles.heading}>
            Code<br />
            Tinkerer<br />
            <span className={`${styles.external} lowercase`}>
              View the code<br />
              <Link
                href="https://github.com/acrossthekyle/acrossthekyle.github.io"
                target="_blank"
                rel="noreferrer"
              >
                @github<ArrowUpRight className={styles.arrow} />
              </Link>
            </span>
          </h3>
          <ul className={styles.timeline}>
            <li>
              <h5 className={styles.place}>
                Optum
              </h5>
              <p className={styles.when}>
                Senior Software Engineer II<br />
                2020 - {new Date().getFullYear()}
              </p>
            </li>
            <li>
              <h5 className={styles.place}>
                Rally Health
              </h5>
              <p className={styles.when}>
                Senior Frontend Engineer<br />
                2018 - 2020
              </p>
            </li>
            <li>
              <h5 className={styles.place}>
                Earlybird
              </h5>
              <p className={styles.when}>
                Fullstack Web Developer<br />
                2015 - 2018
              </p>
            </li>
            <li>
              <h5 className={styles.place}>
                Red Frog
              </h5>
              <p className={styles.when}>
                Web Developer<br />
                2013 - 2015
              </p>
            </li>
            <li>
              <h5 className={styles.place}>
                Silverline
              </h5>
              <p className={styles.when}>
                Junior Web Developer<br />
                2012 - 2013
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.left}>
          <p className={styles.paragraph}>
            I like to make crafty things with code, and the fact that{' '}
            <Link
              className={styles.link}
              href="https://raw.githubusercontent.com/acrossthekyle/acrossthekyle.github.io/refs/heads/main/src/views/about/index.tsx"
              target="_blank"
              rel="noreferrer"
            >
              this code<ArrowUpRight className={styles.arrow} />
            </Link>{' '}
            becomes the page you're on thrills me to no end.
          </p>
          <p className={styles.paragraph}>
            I work full-time at Optum where I employ more than {new Date().getFullYear() - 2012} years of insight, impacting millions. I have a passion for creating digital experiences with attention to detail, and an ability to adapt, producing products and features that last for years, or until the design team wants to redo it.
          </p>
          <p className={styles.paragraph}>
            Some tools of the trade include <span className="font-mono">Javascript</span>, otherwise known as the brains of the operation, a friendly fact-checker of code called <span className="font-mono">Typescript</span>, the <span className="font-mono">HTML</span> bones of all websites in the world, and the renowned <span className="font-mono">CSS</span> stylist of the world wide web. Occasionally I'll throw in some <span className="font-mono">Python</span>, and <span className="font-mono">MySQL</span>, if I need to do cloud-based things.
          </p>
          <p className={styles.paragraph}>
            Working as a software engineer also affords me the ability to travel around the world...
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.right}>
          <h3 className={styles.heading}>
            Trail<br />
            Walker<br />
            <span className={`${styles.external} lowercase`}>
              follow me<br />
              <Link
                href="https://instagram.com/acrossthekyle"
                rel="noreferrer"
                target="_blank"
              >
                @acrossthekyle<ArrowUpRight className={styles.arrow} />
              </Link>
            </span>
          </h3>
          <ul className={styles.timeline}>
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
        <div className={styles.left}>
          <p className={styles.paragraph}>
            Nature and the mountains are my church, and nothing revs me up more than leaving the crowded city behind, and walking a long-distance trail from beginning to end, carrying everything I need on my back.
          </p>
          <p className={styles.paragraph}>
            In 2016 I had my first encounter with the idea of backpacking when I saw a group of backpackers setting off from a refuge in Patagonia and was instantly mesmerized, and then somehow forgot about it for two uneventful years.
          </p>
          <p className={styles.paragraph}>
            The idea and fascination returned to me in the spring of 2018, and a few months later I was setting foot on a long-distance trail called the{' '}
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
            in 2024, a{' '}
            <Link
              className={styles.link}
              href="/travels/tour-du-mont-blanc"
            >
              repeat of a classic hike
            </Link>{' '}
            of mine from 2018. Some others I've done include the self-proclaimed "toughest trek in Europe" known as the{' '}
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
      </section>
    </Article>
  );
}
