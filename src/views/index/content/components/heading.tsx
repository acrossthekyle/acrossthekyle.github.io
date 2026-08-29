import tw from '@/styles';

export default function Heading({ children }: React.PropsWithChildren) {
  return (
    <h2 className={styles.container}>
      {children}
    </h2>
  );
};

const styles = tw({
  container: `
    flex flex-row-reverse items-start justify-between
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
  `,
});
