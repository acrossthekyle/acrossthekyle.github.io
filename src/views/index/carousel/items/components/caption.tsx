import tw from '@/styles';

export default function Caption({ children }: React.PropsWithChildren) {
  return (
    <figcaption className={styles.container}>{children}</figcaption>
  );
};

const styles = tw({
  container: `
    absolute top-24 left-6 z-2
    flex flex-col
    text-xs text-white

    landscape-constrained:text-tiny

    sm:text-tiny
    sm:top-6
    sm:bottom-auto
  `,
});
