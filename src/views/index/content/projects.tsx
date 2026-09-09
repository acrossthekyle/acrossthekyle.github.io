import {
  Article,
  External,
  Heading,
  Paragraph,
  Prefix,
} from './components';

export default function Projects() {
  return (
    <Article id="projects">
      <Heading>
        <Prefix>The Sandbox</Prefix>
        Projects
      </Heading>
      <Paragraph>
        <i>Project Basalt</i><br /><br />
        A personal budgeting application. Check out a demo <External url="https://project-basalt.demos.acrossthekyle.com">here</External>.
      </Paragraph>
    </Article>
  );
};
