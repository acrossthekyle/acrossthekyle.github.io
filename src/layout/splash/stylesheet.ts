import tw from '@/styles';

const message = `
  fixed left-0 right-0 bottom-10 z-9999
  w-full
  text-center

  motion-safe:opacity-0
  motion-safe:translate-y-5
`;

const styles = tw({
  container: (isVisible: boolean) => tw(`
    hidden
    fixed inset-0 z-9998
    flex items-center justify-center
    bg-(--background)
    transition-opacity duration-1000

    ${isVisible ? 'opacity-100' : 'opacity-0'}
  `),
  content: `
    relative
    flex flex-col justify-center gap-1
    text-xs text-center
  `,
  icon: `
    flex justify-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  paragraph: `
    ${message}

    motion-safe:animate-greeting
  `,
  moment: `
    ${message}

    motion-safe:animate-one-moment
  `,
  working: `
    ${message}

    motion-safe:animate-working-on-it
  `,
  sorry: `
    ${message}

    motion-safe:animate-really-sorry
  `,
  ok: `
    ${message}

    motion-safe:animate-any-second-now
  `,
});

export default styles;
