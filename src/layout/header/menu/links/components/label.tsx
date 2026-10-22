import tw from '@/styles';

export default function Label({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    text-tiny
    font-geist
    uppercase
    tracking-widest

    sm:text-xtiny
  `,
})
