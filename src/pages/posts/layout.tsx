import { ReactNode } from 'react';

import Components from '@/components';

import Hero from './layout.component.hero';
import Navigation from './layout.component.navigation';
import Post from './layout.component.post';
import Route from './layout.component.route';
import Stats from './layout.component.stats';
import Title from './layout.component.title';
import { useViewModel } from './layout.viewModel';

type Props = {
  children: ReactNode | ReactNode[];
};

function Layout({ children }: Props) {
  const {
    breadcrumbs,
    date,
    hasStage,
    isReady,
    image,
    metadata,
    newer,
    older,
    pack,
    route,
    stats,
    tags,
    title,
    uri,
  } = useViewModel();

  if (!isReady) {
    return null;
  }

  return (
    <Components.View title={`Travels | ${metadata}`}>
      <Title
        breadcrumbs={breadcrumbs}
        date={date}
        pack={pack}
        tags={tags}
        title={title}
        uri={uri}
      />
      <Hero image={image} />
      <Post>
        {stats && <Stats {...stats} />}
        {/*{route && <Route {...route} />}*/}
        {children}
        {(newer || older) && (
          <Navigation
            newer={newer}
            newerLabel={!hasStage ? undefined : 'Next Day'}
            older={older}
            olderLabel={!hasStage ? undefined : 'Previous Day'}
          />
        )}
      </Post>
    </Components.View>
  );
}

export default Layout;
