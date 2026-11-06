import tw, { cs } from '@/styles';

type Props = {
  isActive: boolean;
};

export default function Container({
  children,
  isActive,
}: React.PropsWithChildren<Props>) {
  return (
    <span
      className={
        cs(
          styles.container,
          isActive ? styles.active : styles.inactive,
        )
      }
    >
      {children}
    </span>
  );
};

const styles = tw({
  container: `
    relative
  `,
  active: `
    size-7
  `,
  inactive: `
    size-8
  `,
});
