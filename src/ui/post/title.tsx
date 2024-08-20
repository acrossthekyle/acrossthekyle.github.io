import { Fragment, ReactNode } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/post/title.module.scss';

import External from '../external';
import Image from '../image';
import Internal from '../internal';

type Props = {
  context?: string[];
  day?: number;
  days?: number;
  parent?: string;
  tags?: string;
  title: string;
  titleShort?: string;
  uri?: string;
};

function Title({
  context,
  day,
  days,
  parent,
  tags,
  title,
  titleShort,
  uri,
}: Props) {
  return (
    <div className={styles.container}>
      {tags !== undefined && (
        <div className={styles.tags}>
          {tags.split(',').map((tag: string) => (
            <Internal
              className={styles.tag}
              key={tag}
              text={tag}
              url={`/tags/${tag}`}
            />
          ))}
        </div>
      )}
      {day !== undefined && days !== undefined && (
        <div className={styles.tags}>
          <Internal className={styles.tag} text={titleShort} url={uri} />
          <Internal
            className={styles.tag}
            text={`Day ${day} of ${days}`}
            url={`${uri}#timeline`}
          />
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
      {context !== undefined && (
        <div className={styles.context}>
          <div className={styles.content}>
            <Link className={styles.author} href="/about">
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

                if (_.includes('lighterpack')) {
                  if (!day) {
                    return <External key={_} text="Gear List" url={_} />;
                  }

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
        </div>
      )}
    </div>
  );
}

export default Title;
