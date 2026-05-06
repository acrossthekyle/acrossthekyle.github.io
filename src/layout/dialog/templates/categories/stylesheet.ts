import tw from '@/styles';

const styles = tw({
  container: `
    absolute left-1/2 top-1/2 z-1
    -translate-x-1/2 -translate-y-1/2
    flex flex-col items-center gap-1
    cursor-auto
    pointer-events-auto
  `,
  close: (isOpen: boolean) => tw(`
    absolute top-4 right-4 z-1
    p-2

    ${isOpen ? 'motion-safe:opacity-0 motion-safe:animate-fade-in-down-slightly-delayed' : 'motion-safe:animate-fade-out-up'}
  `),
  x: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  category: (isActive: boolean) => tw(`
    flex items-center gap-1
    p-1
    text-sm text-left

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
  `),
  tag: `
    w-3.5 h-3.5

    lg:w-3
    lg:h-3
  `,
});

export default styles;
