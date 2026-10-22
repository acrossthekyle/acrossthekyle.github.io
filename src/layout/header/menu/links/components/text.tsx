import tw from '@/styles';

export default function Text({ children }: React.PropsWithChildren) {
  return (
    <span className={styles.container}>{children}</span>
  );
};

const styles = tw({
  container: `
    text-[min(8vw,1.8rem)]
    leading-[0.8]
    font-black font-geist
    uppercase

    sm:text-[min(4vw,1.9rem)]
    lg:text-[min(3vw,2rem)]
  `,
})
