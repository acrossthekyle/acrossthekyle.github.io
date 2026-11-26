import tw from '@/styles';

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
      <Paragraph>
        A personal finance web application with month-by-month budgeting and future forecasting. Check out a read-only demo <External url="https://project-basalt.demos.acrossthekyle.com">here</External>.
      </Paragraph>
      <Paragraph>
        <Copy value="username">
          <code className={styles.code}>username</code>
        </Copy>
        {' '}
        <Copy value="password">
          <code className={styles.code}>password</code>
        </Copy>
        {' '}
        <Copy value="123456">
          <code className={styles.code}>otp</code>
        </Copy>
      </Paragraph>
    </Article>
  );
};

const styles = tw({
  code: `
    inline-block
    px-1.5 py-0.75
    bg-(--foreground)/7.5 dark:bg-(--foreground)/17.5
    rounded-md
    text-sm

    md:text-xs
  `,
});
