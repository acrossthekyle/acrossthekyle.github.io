import tw from '@/styles';

const styles = tw({
  container: (hasFilter: boolean) => tw(`
    fixed top-0 left-0 z-9999
    ${hasFilter ? 'grid grid-cols-3' : 'flex items-center justify-between'}
    w-full
    px-12
    mt-2
  `),
  anchor: `
    flex items-center justify-start

    motion-safe:opacity-0
    motion-safe:animate-fade-in-delayed
  `,
  controls: `
    flex items-center justify-end

    motion-safe:opacity-0
    motion-safe:animate-fade-in-delayed
  `,
  group: `
    flex items-center justify-end gap-0
    rounded-sm
    bg-(--background)
  `,
  filter: (canRender: boolean) => tw(`
    flex items-center justify-center
    duration-300

    ${canRender ? 'opacity-100' : 'opacity-0'}
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
