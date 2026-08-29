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
    flex flex-col
    text-base
    mb-4

    last:mb-0

    xs:grid
    xs:grid-cols-subgrid
    xs:col-span-2
    xs:items-start
    xs:gap-x-4
    xs:mb-0
    sm:text-sm
  `,
});
