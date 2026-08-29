import tw from '@/styles';

export default function Category({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    capitalize
    opacity-60 font-light
  `,
});
