import Fixed from './fixed';
import Meta from './meta';
import Socials from './socials';
import styles from './stylesheet';

type Props = {
  theme: string;
  trail: {
    id: string;
    title: string;
  };
};

export default function Footer({ theme, trail }: Props) {
  return (
    <footer className={styles.container} role="contentinfo">
      <div className={styles.inner}>
        <Socials />
        <Meta />
      </div>
      <Fixed theme={theme} trail={trail} />
    </footer>
  );
}
