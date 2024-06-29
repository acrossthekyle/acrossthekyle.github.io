import styles from '@/styles/ui/link.module.scss';

import ArrowIcon from './icons/arrow';

type Props = {
  text: string;
  url: string;
};

function External({ text, url }) {
  return (
    <a className={styles.link} href={url} target="_blank" rel="noreferrer">
      {text}
      <ArrowIcon right />
    </a>
  );
}

export default External;
