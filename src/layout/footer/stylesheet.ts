import tw from '@/styles';

const styles = tw({
  container: `
    fixed bottom-0 left-0 z-999
    flex flex-row items-center justify-between gap-0
    w-full
    pb-1 px-3

    xs:gap-2
    md:px-12
    md:pb-2
  `,
  controls: (shouldDelay: boolean) => tw(`
    flex gap-4
    p-2 px-4
    rounded-sm
    bg-(--background)

    motion-safe:opacity-0
    ${shouldDelay ? 'motion-safe:animate-fade-in-delayed' : 'motion-safe:animate-fade-in'}
  `),
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    font-sans font-medium
    text-sm
    capitalize

    md:text-xs

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
  `),
  icon: `
    w-3.5 h-3.5
  `,
});

export default styles;
