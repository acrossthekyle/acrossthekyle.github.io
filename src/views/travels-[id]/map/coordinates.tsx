import tw from '@/styles';

type Props = {
  value: string;
};

export default function Coordinates({ value }: Props) {
  return (
    <>
      <span className={styles.coordinates}>{value}</span>
      <span className={`${styles.marker} ${styles.circle} ${styles.ring}`} />
      <span className={`${styles.marker} ${styles.circle} ${styles.inner}`} />
      <span className={`${styles.marker} ${styles.circle} ${styles.outer}`} />
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

    dark:text-(--foreground)
    light:text-(--background)

    sm:text-xtiny
    sm:top-6
    sm:left-6
    sm:bottom-auto
  `,
  marker: `
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
  `,
  circle: `
    rounded-full
  `,
  ring: `
    z-10
    size-6
    border
    bg-(--background)
    opacity-50
  `,
  outer: `
    z-5
    size-9.5
    bg-current/32.5
  `,
  inner: `
    z-15
    size-2.25
    bg-current/80
  `,
});
