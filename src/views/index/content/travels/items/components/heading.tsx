import tw from '@/styles';

export default function Heading({ children }: React.PropsWithChildren) {
  return (
    <h3 className={styles.container}>{children}</h3>
  );
};

const styles = tw({
  container: `
    sticky top-4 z-10
    self-start
    w-17.25
    pb-12 pt-0.75
    text-base
    font-extralight

    sm:pb-10
    sm:pt-0
    sm:text-sm
  `,
});
