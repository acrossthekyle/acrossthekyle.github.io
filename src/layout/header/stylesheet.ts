import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col items-center justify-center
    mt-4
    pointer-events-none

    min-[336px]:flex-row
    lg:fixed
    lg:top-2
    lg:left-0
    lg:w-screen
    lg:z-99
    lg:mt-0
  `,
  navigation: (shouldDelay: boolean) => tw(`
    flex items-center gap-0
    h-8
    rounded-sm
    bg-(--background)
    pointer-events-auto

    motion-safe:opacity-0
    ${shouldDelay ? 'motion-safe:animate-fade-in-delayed' : 'motion-safe:animate-fade-in'}
  `),
  button: (isActive: boolean) => tw(`
    flex items-center justify-start gap-2
    font-sans font-normal
    text-sm
    capitalize
    p-2

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}

    min-[336px]:justify-center
    min-[336px]:w-auto
    lg:text-xs
  `),
  first: `
    min-[336px]:pl-3
  `,
  last: `
    min-[336px]:pr-3
  `,
  icon: `
    w-3.5 h-3.5
  `,
  rotate: `
    -rotate-90
  `,
});

export default styles;
