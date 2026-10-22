import tw from '@/styles';

export default function Text({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    text-4xl
    uppercase
    font-black
    tracking-tighter

    motion-safe:duration-300

    group-hover:font-semibold
  `,
})
