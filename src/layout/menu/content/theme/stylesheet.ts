import tw from '@/styles';

export const styles = tw({
  container: (isOpen: boolean) => tw(`
    absolute top-0 left-0 z-2
    p-4

    sm:right-0
    sm:left-auto

    motion-safe:duration-450
    motion-safe:ease-in-out
    ${isOpen ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'}
  `),
  circle: `
    block
    rounded-full
    border border-current/30
    w-7 h-7
    overflow-hidden
    bg-(--foreground)
  `,
});


