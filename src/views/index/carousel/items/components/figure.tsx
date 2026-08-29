import tw from '@/styles';

type Props = {
  isActive: boolean;
};

export default function Figure({
  children,
  isActive,
}: React.PropsWithChildren<Props>) {
  return (
    <figure className={styles.figure(isActive)}>{children}</figure>
  );
};

const styles = tw({
  figure: (isActive: boolean) => tw(`
    absolute inset-0

    motion-safe:duration-300

    ${isActive ? 'opacity-100 z-1' : 'opacity-0 z-0'}
  `),
});
