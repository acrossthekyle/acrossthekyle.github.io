import tw from '@/styles';

type Props = {
  country: string;
  region: string;
};

export default function Location({ country, region }: Props) {
  return (
    <span className={styles.container}>
      <span>{region}</span>
      <span className={styles.dash} aria-hidden="true">&mdash;</span>
      <span className={styles.emphasis}>{country}</span>
    </span>
  );
};

const styles = tw({
  container: `
    pr-6
  `,
  dash: `
    mx-1
  `,
  emphasis: `
    font-serif italic
  `,
});
