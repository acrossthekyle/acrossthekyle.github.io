import tw from '@/styles';
import Ui from '@/ui';
import { image } from '@/utils';

import {
  Article,
  External,
  Header,
  Heading,
  Paragraph,
  Prefix,
} from './components';

export default function Projects() {
  return (
    <Article id="projects">
      <Header>
        <Prefix>The Sandbox</Prefix>
        Projects
      </Header>
      <Heading>
        Basalt
      </Heading>
      <Ui.Image
        className={styles.image}
        src={image('92d518ef-fb31-4cbf-8907-368668d278db', 'projects', 'png')}
      />
      <Paragraph>
        A personal budgeting application. Check out a read-only demo <External url="https://project-basalt.demos.acrossthekyle.com">here</External>.
      </Paragraph>
    </Article>
  );
};

const styles = tw({
  image: `
    mb-4
    w-full
    grayscale
    border border-white/12.5
    rounded-sm

    md:max-w-2/3
  `,
  code: `
    inline-block
    px-1.5 py-0.75
    bg-(--foreground)/7.5 dark:bg-(--foreground)/17.5
    rounded-md
    text-sm

    md:text-xs
  `,
  icon: `
    inline-block
    w-3 h-3
    stroke-1
  `,
});
