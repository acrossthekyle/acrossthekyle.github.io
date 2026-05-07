import tw from '@/styles';

const styles = tw({
  container: (isDialogOpen: boolean) => tw(`
    fixed top-1 left-1/2 z-99
    -translate-x-1/2

    flex items-center gap-2
    h-9

    rounded-full
    bg-(--background)

    pointer-events-auto

    duration-300
    ${isDialogOpen ? 'brightness-10' : 'brightness-100'}

    min-[498px]:gap-0
    md:rounded-sm
    lg:top-2
  `),
  button: (isActive: boolean) => tw(`
    flex items-center justify-start gap-2
    font-normal
    text-sm
    capitalize
    p-2
    whitespace-nowrap

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}

    lg:text-xs
  `),
  label: (isActive: boolean) => tw(`
    ${isActive ? 'block' : 'hidden'}

    min-[498px]:block
  `),
  first: `
    pl-3
  `,
  last: `
    pr-3
  `,
  icon: `
    w-4 h-4

    min-[498px]:w-3.5
    min-[498px]:h-3.5
  `,
  rotate: `
    -rotate-90
  `,
});

export default styles;
