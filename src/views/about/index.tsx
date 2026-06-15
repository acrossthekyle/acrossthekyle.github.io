import { Layout } from '@/layout';
import type { Collection } from '@/types';

import Components from './components';
import Content from './content';
import Figure from './figure';
import Header from './header';

type Props = {
  data: {
    recent: Collection;
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Layout.Header />
      <Layout.Main>
        <Components.Wrapper>
          <Components.Header>
            <Header />
          </Components.Header>
          <Components.Content>
            <Content recent={data.recent} />
          </Components.Content>
          <Components.Figure>
            <Figure />
          </Components.Figure>
        </Components.Wrapper>
      </Layout.Main>
    </>
  );
}
