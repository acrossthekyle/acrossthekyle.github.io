import Styles from '@/styles';
import type { Posts } from '@/types';

import Button from '../button';
import Image from '../image';

import Stats from './stats';

const scss = Styles.Components.Post.Stages;

type Props = {
  stages: Posts.Stage[];
};

function Stages({ stages }: Props) {
  return (
    <>
      <div className={scss.anchor} id="stages" />
      <h2>Stages</h2>
      <p>
        Every thru-hike is different, and while some may necesitate the need to
        follow the guidebook stages, others require the need to be flexible. For
        this thru-hike some of the stages are by-the-book, while others are a
        combination of two or more:
      </p>
      <ul className={scss.container}>
        {stages.map(
          (
            { date, gain, image, loss, miles, snippet, time, title, uri },
            index,
          ) => (
            <li key={date}>
              <span>Day {String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              {snippet && <p>{snippet}</p>}
              {image && (
                <Image
                  alt={title}
                  canTransform={false}
                  height={432}
                  quality={50}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={image}
                  width={768}
                />
              )}
              <Stats gain={gain} loss={loss} miles={miles} time={time} />
              {uri && (
                <Button href={uri} text="View Route and read Trip Report" />
              )}
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default Stages;
