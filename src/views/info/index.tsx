import Divider from '@/ui/divider';
import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';

import Footer from './footer';
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
    <>
      <Header>
        <HeaderEyebrow>[ 01 ]</HeaderEyebrow>
        <HeaderPrefix>/</HeaderPrefix>Info
        <HeaderSubtitle>Backstory, resume, expertise, misc.</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>Kyle</Highlight> is a <Highlight>Chicago</Highlight>-based self-taught <Highlight>software engineer</Highlight> and millennial who balances his lifelong passion for <Highlight>creating</Highlight> web <Highlight>apps</Highlight> with a love for long-distance <Highlight>backpacking</Highlight> adventures, and <Highlight>Star Trek</Highlight>.
      </Introduction>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.index}>[ 01-01 ]</span>
          About
        </h2>
        <p className={styles.paragraph}>
          I'm Kyle: a self-taught Software Engineer and millennial creator focused on building web and mobile applications from scratch with over 14 years of experience. My approach to development is rooted in a genuine thrill for writing code, whether I'm working on complex apps or sharing my thoughts and reflections on the process.
        </p>
        <p className={styles.paragraph}>
          Beyond the screen, I am an avid long-distance backpacker and traveler. Since discovering my passion for the trail in South America and completing a 600-mile thru-hike of the Camino de Santiago in Europe, I've continuously seeked out new adventures and new trails, both near and far, from my homebase in Chicago.
        </p>
        <Images />
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.index}>[ 01-02 ]</span>
          Resume
        </h2>
        <ul className={styles.items}>
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
        <h2 className={styles.heading}>
          <span className={styles.index}>[ 01-03 ]</span>
          Expertise
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
      <Divider />
      <Footer />
    </>
  );
}
