import tw from '@/styles';

export default function Location() {
  return (
    <p className={styles.container}>CHICAGO, U.S. 41.8781 N, 87.6298 W</p>
  );
};

const styles = tw({
  container: `
    uppercase
    text-tiny
    font-mono

    sm:text-xtiny
  `,
});
