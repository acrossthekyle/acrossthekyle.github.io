import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 z-9999
    flex flex-col items-center gap-0
    w-full
    px-12
    mt-2

    lg:grid
    lg:grid-cols-3
    lg:gap-0
  `,
  anchor: `
    order-0
    flex items-center justify-start
    mb-2

    motion-safe:opacity-0
    motion-safe:animate-fade-in-delayed

    lg:mb-0
  `,
  controls: `
    order-1
    flex items-center justify-center
    mb-2

    motion-safe:opacity-0
    motion-safe:animate-fade-in-delayed

    lg:order-2
    lg:justify-end
    lg:mb-0
  `,
  group: `
    flex items-center justify-end gap-0
    rounded-sm
    bg-(--background)
  `,
  filter: (canRender: boolean) => tw(`
    order-2
    flex items-center
    duration-300

    ${canRender ? 'opacity-100' : 'opacity-0'}

    lg:order-1
    lg:justify-center
  `),
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    font-sans font-medium
    text-xs
    capitalize
    rounded-sm
    bg-(--background)
    p-2

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
  `),
  first: `pl-4`,
  last: `pr-4`,
  only: `px-4`,
  icon: `
    w-3.5 h-3.5
  `,
  rotate: `
    -rotate-90
  `,
});

export default styles;
