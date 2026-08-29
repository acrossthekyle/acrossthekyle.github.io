import tw from '@/styles';

type Props = {
  value: string;
};

export default function Coordinates({ value }: Props) {
  return (
    <>
      <span className={styles.coordinates}>{value}</span>
      <span className={`${styles.marker} ${styles.circle}`} />
      <span className={`${styles.marker} ${styles.line} ${styles.vertical}`} />
      <span className={`${styles.marker} ${styles.line} ${styles.horizontal}`} />
    </>
  );
}

const styles = tw({
  coordinates: `
    absolute bottom-6 right-6 z-2
    flex flex-col gap-0.5 items-start
    uppercase
    leading-[1]
    text-tiny
    font-mono

    dark:text-(--background)
    light:text-(--foreground)

    sm:text-xtiny
    sm:top-6
    sm:left-6
    sm:bottom-auto
  `,
  marker: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
  `,
  line: `
    dark:bg-(--background)
    light:bg-(--foreground)
  `,
  circle: `
    w-6 h-6
    rounded-full
    border

    dark:border-(--background)
    light:border-(--foreground)
  `,
  vertical: `
    w-px
    h-12
  `,
  horizontal: `
    w-12
    h-px
  `,
});
