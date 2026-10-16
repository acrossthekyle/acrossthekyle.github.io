import { Gallery } from '@/components';

import {
  Article,
  Header,
  Heading,
  Paragraph,
  Prefix,
} from './components';
import { BASALT_IMAGES } from './constants';

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
        A personal finance web application with month-by-month budgeting and future forecasting.
      </Paragraph>
      <Gallery images={BASALT_IMAGES} />
    </Article>
  );
};
