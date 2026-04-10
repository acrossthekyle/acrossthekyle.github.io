import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';
import { padIndex } from '@/utils';

import { TIMELINE } from './constants';
import Images from './images';
import styles from './stylesheet';

type Props = {
  data: {
    expertise: Array<{
      area: string;
      skills: string[];
    }>;
    resume: Array<{
      place: string;
      title: string;
      when: string;
    }>;
  };
};

export default function View({ data }: Props) {
  return (
    <Content>
      <div className={styles.definition} role="presentation">
        <span>Across</span>
        <span>The</span>
        <span>Kyle</span>
      </div>
      <Header>
        <HeaderEyebrow>[ 01 ]</HeaderEyebrow>
        <HeaderText>Info</HeaderText>
        <HeaderSubtitle>Bio, Resume, Etc.</HeaderSubtitle>
      </Header>
      <section aria-label="introduction" className={styles.intro}>
        <p className={styles.paragraph}>
          I'm Kyle: a self-taught Software Engineer and millennial creator focused on building web and mobile applications from scratch with over 14 years of experience. My approach to development is rooted in a genuine thrill for writing code, whether I'm working on complex apps or sharing my thoughts and reflections on the process.
        </p>
        <p className={styles.paragraph}>
          Beyond the screen, I am an avid long-distance backpacker and traveler. Since discovering my passion for the trail in South America and completing a 600-mile thru-hike of the Camino de Santiago in Europe, I've continuously seeked out new adventures and new trails, both near and far, from my homebase.
        </p>
      </section>
      <Images />
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.sticky}`}>
          [History]
        </h2>
        <ul className={styles.list}>
          {TIMELINE.map(({ paragraph, title, year }, index: number) => (
            <li className={styles.timeline} key={year}>
              <span className={styles.year}>
                [ {padIndex(index + 1)} {year} ]
              </span>
              <div>
                {title}
                {!!paragraph && (
                  <span className={styles.details}>[{paragraph}]</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.sticky}`}>
          [Career]
        </h2>
        <ul className={styles.list}>
          {data.resume.map((item) => (
            <li className={styles.item} key={item.place}>
              <span className={styles.eyebrow}>
                [ {item.place} ]
              </span>
              {item.title}
              <span className={styles.lid}>{item.when}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.sticky}`}>
          [Offerings]
        </h2>
        <ul className={styles.grid}>
          {data.expertise.map((item) => (
            <li className={styles.item} key={item.area}>
              {item.area}
              <ul>
                {item.skills?.map((skill) => (
                  <li className={styles.skill} key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.small}`}>
          [Location]
        </h2>
        <p className={styles.list}>
          Chicago
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.small}`}>
          [Alma mater]
        </h2>
        <p className={styles.list}>
          Northern Illinois University
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.small}`}>
          [Next Avail.]
        </h2>
        <p className={styles.list}>
          {padIndex(new Date().getMonth() + 1)} {new Date().getFullYear()}
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.small}`}>
          [Fav. Channels]
        </h2>
        <ul className={styles.grid}>
          <li>
            <ul className={styles.list}>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@reverseangle/videos"
                  target="_blank"
                >
                  <ExternalIcon>Reverse Angle</ExternalIcon>
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@Unlimited_Lives/videos"
                  target="_blank"
                >
                  <ExternalIcon>Unlimited Lives</ExternalIcon>
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@TrekCulture/videos"
                  target="_blank"
                >
                  <ExternalIcon>Trek Culture</ExternalIcon>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className={styles.list}>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@NewRockstars/videos"
                  target="_blank"
                >
                  <ExternalIcon>New Rockstars</ExternalIcon>
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@PetePeppers1/videos"
                  target="_blank"
                >
                  <ExternalIcon>Pete Peppers</ExternalIcon>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className={styles.list}>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@JustinOutdoors/videos"
                  target="_blank"
                >
                  <ExternalIcon>Justin Outdoors</ExternalIcon>
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="https://www.youtube.com/@DarwinOnthetrail/videos"
                  target="_blank"
                >
                  <ExternalIcon>Darwin on the Trail</ExternalIcon>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.small}`}>
          [Go-to Games]
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.eyebrow}>
              [ FPS ]
            </span>
            Halo
            <ul>
              <li className={styles.skill}>Master Chief Coll.</li>
              <li className={styles.skill}>Guardians</li>
              <li className={styles.skill}>Infinite</li>
            </ul>
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>
              [ RPG ]
            </span>
            Mass Effect
            <ul>
              <li className={styles.skill}>I</li>
              <li className={styles.skill}>II</li>
              <li className={styles.skill}>III</li>
            </ul>
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>
              [ RTS ]
            </span>
            Age of Empires
            <ul>
              <li className={styles.skill}>II</li>
              <li className={styles.skill}>Def. Edition</li>
            </ul>
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>
              [ TBS ]
            </span>
            Civilization
            <ul>
              <li className={styles.skill}>IIII</li>
            </ul>
          </li>
        </ul>
      </section>
    </Content>
  );
}
