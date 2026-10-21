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
      <Paragraph>
        A personal finance web application with month-by-month budgeting and future forecasting. Check out a read-only demo <External url="https://project-basalt.demos.acrossthekyle.com">here</External>.
      </Paragraph>
    </Article>
  );
};
