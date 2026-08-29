import tw from '@/styles';

export default function Label({ children }: React.PropsWithChildren) {
  return (
    <h3 className={styles.container}>{children}</h3>
  );
};

const styles = tw({
  container: `
    pt-1 pr-1
    uppercase
    whitespace-nowrap
    text-xs text-current/75

    sm:text-tiny
  `,
});
