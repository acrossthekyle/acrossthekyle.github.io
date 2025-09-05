'use client';

import { Article } from '@/ui/article';
import {
  Image,
  ImageMaximize,
  ImageOptions,
  ImagePlaceholder,
  ImageSkeleton,
} from '@/ui/image';

import Breakdown from './breakdown';
import Loading from './loading';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnScrollEnd, shown, data } = useModel(slug);

  if (!data) {
    return <Loading />;
  }

  return (
    <Article onScrollEnd={handleOnScrollEnd}>
      <h1 className={styles.header}>
        {data.title.map((word: string) => (
          <span className="block" key={word}>
            {word}
          </span>
        ))}
      </h1>
      {data.description.map((paragraph) => (
        <p className={styles.description} key={paragraph}>
          {paragraph}
        </p>
      ))}
      <Breakdown data={data} />
      <ul className={styles.stages}>
        {[...data.stages].splice(0, shown).map((stage, index) => (
          <li
            className={styles.stage}
            key={index}
            style={{ animationDelay: `${0.1 + ((index % 6) * 0.125)}s` }}
          >
            <figure className={styles.figure}>
              <Image src={stage.image}>
                <ImagePlaceholder>
                  <ImageMaximize>
                    <ImageOptions
                      alt={
                        !stage.termini.isSame
                          ? `${stage.termini.start.join(' ')} To ${stage.termini.end.join(' ')}`
                          : stage.location
                      }
                      height={1080}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      width={1920}
                    />
                  </ImageMaximize>
                  <figcaption className={styles.caption}>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, '0')}.{' '}
                      {!stage.termini.isSame ? `${stage.termini.start.join(' ')} To` : stage.location}
                    </span>
                    {stage.termini.end.map((word) => (
                      <span className="block" key={word}>{word}</span>
                    ))}
                  </figcaption>
                  <ImageSkeleton />
                </ImagePlaceholder>
              </Image>
            </figure>
          </li>
        ))}
      </ul>
    </Article>
  );
}
