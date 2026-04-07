import { Content } from '@/layout';
import Divider from '@/ui/divider';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import Footer from '@/ui/views/info/footer';

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
      <Header>
        <HeaderEyebrow>[ 01 ]</HeaderEyebrow>
        <HeaderText>Info</HeaderText>
        <HeaderSubtitle>Bio, Resume, Etc.</HeaderSubtitle>
      </Header>
      <p className={styles.description}>
        A <span className={styles.highlight}>Chicago</span>-based self-taught <span className={styles.highlight}>software engineer</span> and millennial who balances my lifelong passion for <span className={styles.highlight}>creating</span> web <span className={styles.highlight}>apps</span> with a love for long-distance <span className={styles.highlight}>backpacking</span> adventures, and <span className={styles.highlight}>Star Trek</span>.
      </p>
      <section className={styles.intro}>
        <p className={styles.paragraph}>
          Hi I'm Kyle: a self-taught Software Engineer and millennial creator focused on building web and mobile applications from scratch with over 14 years of experience. My approach to development is rooted in a genuine thrill for writing code, whether I'm working on complex apps or sharing my thoughts and reflections on the process.
        </p>
        <p className={styles.paragraph}>
          Beyond the screen, I am an avid long-distance backpacker and traveler. Since discovering my passion for the trail in South America and completing a 600-mile thru-hike of the Camino de Santiago in Europe, I've continuously seeked out new adventures and new trails, both near and far, from my homebase in Chicago.
        </p>
        <Images />
      </section>
      <Divider />
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Path
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
      <Divider />
      <section className={styles.section}>
        <h2 className={styles.heading}>
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
      <Footer />
    </Content>
  );
}
