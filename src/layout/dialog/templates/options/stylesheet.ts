import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-1/2 left-1/2 z-1
    -translate-y-1/2 -translate-x-1/2
    flex flex-col gap-12
    w-auto
    cursor-auto
    pointer-events-auto

    lg:flex-row
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
  controls: `
    flex flex-col items-center gap-0
    cursor-auto
    pointer-events-auto

    lg:flex-row
    lg:items-center
  `,
  heading: `
    mb-2
    text-xs
    capitalize

    lg:mb-0
  `,
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    p-2
    text-xs
    capitalize

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
  `),
  icon: `
    w-4 h-4

    lg:w-3.5
    lg:h-3.5
  `,
});

export default styles;
