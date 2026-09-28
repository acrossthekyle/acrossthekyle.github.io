import { Gallery } from '@/components';
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
      <Paragraph>
        A personal finance web application with month-by-month budgeting and future forecasting. Check out a read-only demo <External url="https://project-basalt.demos.acrossthekyle.com">here</External>.
      </Paragraph>
      <Gallery
        images={[
          {
            src: image('7c49ae6d-4a96-45ab-9581-e1611040f167', 'projects/basalt', 'png'),
            title: 'Accounts & Assets Overview',
          },
          {
            src: image('09c9b53b-e6ae-42d0-be56-5749e1edf319', 'projects/basalt', 'png'),
            title: 'Account/Asset Calendar',
          },
          {
            src: image('6bc326ad-6da8-46a0-8486-4488de634add', 'projects/basalt', 'png'),
            title: 'Budgets',
          },
          {
            src: image('8f662365-75a7-4b49-8f8a-816671f81e42', 'projects/basalt', 'png'),
            title: 'Multi-year Forecast',
          },
          {
            src: image('6503d681-0c79-4696-a0a9-77499a940c0b', 'projects/basalt', 'png'),
            title: 'Menu',
          },
        ]}
      />
    </Article>
  );
};
