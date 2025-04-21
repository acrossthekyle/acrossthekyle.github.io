import Link from 'next/link';

import Constants from '@/constants';
import Styles from '@/styles';

import Image from '../image';
import Tags from '../tags';

const scss = Styles.Components.Post.Title;

type Props = {
  author: string;
  date: string;
  tags: string[];
  title: string;
};

function Title({ author, date, tags, title }: Props) {
  return (
    <div className={scss.container}>
      <Tags className={scss.tags} items={tags} />
      <h1 className={scss.title}>{title}</h1>
      <div className={scss.context}>
        <Link aria-label={`About ${author}`} className={scss.author} href="/me">
          <Image
            alt=""
            aria-hidden="true"
            canTransform={false}
            height={24}
            quality={20}
            sizes="10vw"
            src={Constants.ME_URL}
            width={24}
          />
        </Link>
        <div className={scss.items}>
          <h4 className={`${scss.item} ${scss.name}`}>{author}</h4>
          <span className={`${scss.item} ${scss.date}`}>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Title;
