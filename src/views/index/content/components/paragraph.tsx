import tw from '@/styles';

export default function Paragraph({ children }: React.PropsWithChildren) {
  return (
    <p className={styles.container}>
      {children}
    </p>
  );
};

const styles = tw({
  container: `
    w-full
    text-base
    mb-4

    last:mb-0

    sm:text-sm
    md:max-w-2/3
  `,
});
