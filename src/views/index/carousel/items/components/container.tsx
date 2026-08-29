import tw from '@/styles';

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <ul className={styles.container}>{children}</ul>
  );
};

const styles = tw({
  container: `
    relative
    h-[80svh] w-full

    sm:h-full
  `,
});
