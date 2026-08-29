import tw from '@/styles';

export default function List({ children }: React.PropsWithChildren) {
  return (
    <ul className={styles.container}>
      {children}
    </ul>
  );
};

const styles = tw({
  container: `
    xs:grid
    xs:grid-cols-[max-content_1fr]
    xs:gap-y-4
  `,
});
