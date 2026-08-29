import tw from '@/styles';

export default function Stats({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    mt-0.25
    font-mono
    text-xs
    opacity-75

    sm:text-tiny
  `,
});
