import tw from '@/styles';

const styles = tw({
  container: `
    absolute left-1/2 top-1/2 z-1
    -translate-x-1/2 -translate-y-1/2
    flex flex-row gap-12
    cursor-auto
    pointer-events-auto
  `,
  header: `
    text-base
    font-medium
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
    flex items-center gap-0
    cursor-auto
    pointer-events-auto
  `,
  heading: `
    mr-2
    font-sans font-medium
    text-sm
    capitalize

    md:text-xs
  `,
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    p-2
    font-sans font-medium
    text-sm
    capitalize

    md:text-xs

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
