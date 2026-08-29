import tw from '@/styles';

export default function Prefix({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    font-normal
    text-xs text-current/50

    sm:text-tiny
  `,
});
