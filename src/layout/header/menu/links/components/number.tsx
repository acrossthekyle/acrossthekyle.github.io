import tw from '@/styles';

export default function Number({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    inline-block
    mr-3
    text-sm
    font-semibold
    tracking-tighter
  `,
})
