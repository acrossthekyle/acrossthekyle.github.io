import { Layout } from '@/layout';
import type { Collection } from '@/types';

import Archives from './archives';
import Components from './components';
import Header from './header';
import Image from './image';
import Information from './information';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <Layout.Main>
      <Components.Container>
        <Components.Wrapper>
          <Components.About>
            <Header />
            <Information />
          </Components.About>
          <Components.Content>
            <Archives collections={data.collections} />
          </Components.Content>
        </Components.Wrapper>
        <Components.Figure>
          <Image />
        </Components.Figure>
      </Components.Container>
    </Layout.Main>
  );
}
