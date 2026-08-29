import tw from '@/styles';

export default function Version() {
  return (
    <span className={styles.container}>
      v0.1701.D
    </span>
  );
};

const styles = tw({
  container: `
    inline-block
    ml-2
    text-tiny
    font-mono
    leading-[0.8]

    sm:text-xtiny
  `,
});
