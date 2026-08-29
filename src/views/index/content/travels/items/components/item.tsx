import tw from '@/styles';

export default function Item({ children }: React.PropsWithChildren) {
  return (
    <li className={styles.container}>
      {children}
    </li>
  );
};

const styles = tw({
  container: `
    relative
    flex
    mb-4

    last:mb-0
  `,
});
