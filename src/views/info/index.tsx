import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';

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
      skills?: string[];
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
        <h2 className={`${styles.heading} ${styles.float}`}>
          Hello
        </h2>
        <p className={styles.paragraph}>
          I'm Kyle: a self-taught Software Engineer and millennial creator focused on building web and mobile applications from scratch with over 14 years of experience. My approach to development is rooted in a genuine thrill for writing code, whether I'm working on complex apps or sharing my thoughts and reflections on the process.
        </p>
        <p className={styles.paragraph}>
          Beyond the screen, I am an avid long-distance backpacker and traveler. Since discovering my passion for the trail in South America and completing a 600-mile thru-hike of the Camino de Santiago in Europe, I've continuously seeked out new adventures and new trails, both near and far, from my homebase in Chicago.
        </p>
      </section>
      <Images />
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.sticky}`}>
          History
          <span className={styles.subheading}>
            Moments that shaped my life
          </span>
        </h2>
        <ul className={styles.timeline}>
          {TIMELINE.map(({ paragraph, title, year }) => (
            <li className={styles.entry} key={year}>
              <span className={styles.year}>[{year}]</span>
              <div>
                {title}
                {!!paragraph && (
                  <span className={styles.small}>{paragraph}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.sticky}`}>
          Career
          <span className={styles.subheading}>
            Path I've taken
          </span>
        </h2>
        <ul className={styles.grid}>
          {data.resume.map((item) => (
            <li className={styles.item} key={item.place}>
              <span className={styles.eyebrow}>
                [ {item.place} ]
              </span>
              {item.title}
              <span className={styles.lid}>{item.when}</span>
              {item.skills && (
                <ul>
                  {item.skills?.map((skill) => (
                    <li className={styles.skill} key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={`${styles.heading} ${styles.sticky}`}>
          Expertise
          <span className={styles.subheading}>
            Areas where I excel
          </span>
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
    </Content>
  );
}
