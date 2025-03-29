import { Fragment, ReactNode } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/post/title.module.scss';
import { Breadcrumb } from '@/types/breadcrumb';

import Breadcrumbs from '../breadcrumbs';
import Image from '../image';
import Internal from '../internal';
import Tags from '../tags';

type Props = {
  context?: string[];
  crumbs?: Breadcrumb[];
  tags?: string;
  title: string;
  uri?: string;
};

function Title({ context, crumbs, tags, title, uri }: Props) {
  return (
    <div className={styles.container}>
      {tags !== undefined && (
        <Tags className={styles.tags} items={tags.split(',')} />
      )}
      {crumbs?.length > 0 && (
        <Breadcrumbs className={styles.breadcrumbs} items={crumbs} />
      )}
      <h1 className={styles.title}>{title}</h1>
      {context !== undefined && (
        <div className={styles.context}>
          <Link aria-label="About Kyle" className={styles.author} href="/about">
            <Image
              alt=""
              aria-hidden="true"
              height={24}
              quality={20}
              sizes="10vw"
              src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
              width={24}
            />
          </Link>
          <div className={styles.items}>
            <Internal
              className={styles.item}
              text="Kyle Gilbert"
              url="/about"
            />

            {context.map((_) => {
              if (_ === undefined) {
                return null;
              }

              if (_.includes('/packs')) {
                return <Internal key={_} text="Pack" url={_} />;

                return null;
              }

              if (Array.isArray(_)) {
                return (
                  <Internal
                    className={styles.item}
                    key={_[0]}
                    text={_[0]}
                    url={_[1]}
                  />
                );
              }

              return (
                <span className={styles.item} key={_}>
                  {_}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Title;
