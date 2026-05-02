import tw from '@/styles';

const styles = tw({
  container: `
    fixed bottom-0 left-0 z-999
    flex flex-row items-end justify-between gap-0
    w-full
    pb-1 px-3

    sm:items-center
    md:px-12
    md:pb-2
  `,
  controls: `
    flex
    rounded-sm
    bg-(--background)

    motion-safe:opacity-0
    motion-safe:animate-fade-in-delayed
  `,
  button: (isActive: boolean) => tw(`
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
  filters: `
    flex
    rounded-sm
    bg-(--background)

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  first: `
    min-[336px]:pl-4
  `,
  last: `
    min-[336px]:pr-4
  `,
});

export default styles;
