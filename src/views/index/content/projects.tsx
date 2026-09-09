import tw from '@/styles';
import Ui from '@/ui';
import { image } from '@/utils';

import {
  Article,
  Copy,
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
        src={image('8bb8c466-87d8-4e65-9469-8a04b5f5bd9e', 'projects', 'png')}
      />
      <Paragraph>
        A personal budgeting application. Check out a demo <External url="https://project-basalt.demos.acrossthekyle.com">here</External>.
      </Paragraph>
      <Paragraph>
        <Copy value="username">
          <code className={styles.code}>username</code>
        </Copy>
        {' '}
        <Copy value="password">
          <code className={styles.code}>password</code>
        </Copy>
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
    bg-(--foreground)/22.5
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
