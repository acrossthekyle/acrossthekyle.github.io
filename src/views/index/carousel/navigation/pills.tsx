'use client';

import tw from '@/styles';

type Props = {
  current: number;
  onClick: (value: number) => void;
  total: number;
};

export default function Pills({ current, onClick, total }: Props) {
  return (
    <ul className={styles.container}>
      {Array.from({ length: total }, (_, index) => (
        <li key={index}>
          <button
            aria-label={`jump to image ${index + 1}`}
            className={styles.cta}
            onClick={() => onClick(index)}
            type="button"
          >
            <span
              aria-hidden="true"
              className={styles.inner(current === index)}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

const styles = tw({
  container: `
    absolute bottom-4 left-0 right-0 z-2
    flex justify-center
  `,
  cta: `
    p-2
  `,
  inner: (isActive: boolean) => tw(`
    block
    h-0.75 w-4
    rounded-full
    border border-white/22.5

    ${isActive ? 'bg-white' : 'bg-black'}
  `),
});
