import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 z-9990
    flex flex-col items-center gap-0
    w-[calc(100%-1.5rem)]
    h-9
    mt-1 mx-3

    min-[336px]:grid
    min-[336px]:grid-cols-2
    min-[336px]:gap-0
    md:w-full
    md:mt-2
    md:mx-0
    md:px-12
  `,
  anchor: (shouldDelay: boolean) => tw(`
    flex items-center justify-start
    w-full
    mb-1.25

    motion-safe:opacity-0
    ${shouldDelay ? 'motion-safe:animate-fade-in-delayed' : 'motion-safe:animate-fade-in'}

    lg:mb-0
  `),
  controls: (shouldDelay: boolean) => tw(`
    flex items-center w-full
    mb-1 -mt-0.25

    motion-safe:opacity-0
    ${shouldDelay ? 'motion-safe:animate-fade-in-delayed' : 'motion-safe:animate-fade-in'}

    min-[336px]:justify-end
    md:mr-0
    lg:mb-0
  `),
  group: `
    flex flex-col items-start justify-between gap-0
    w-full
    rounded-sm
    bg-(--background)

    min-[336px]:flex-row
    min-[336px]:items-center
    min-[336px]:w-auto
  `,
  button: (isActive: boolean) => tw(`
    flex items-center justify-start gap-2
    w-full
    font-sans font-medium
    text-xs
    capitalize
    rounded-sm
    bg-(--background)
    p-2

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}

    min-[336px]:justify-center
    min-[336px]:w-auto
  `),
  filter: (canRender: boolean) => tw(`
    fixed left-1/2 bottom-1 z-1
    -translate-x-1/2

    flex items-center justify-between gap-2

    font-sans font-medium
    text-xs
    rounded-sm
    bg-(--background)
    p-2

    motion-safe:duration-300
    ${canRender ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'}

    md:bottom-2
  `),
  prefix: `
    flex items-center gap-1
  `,
  first: `
    min-[336px]:pl-4
  `,
  last: `
    min-[336px]:pr-4
  `,
  icon: `
    w-3.5 h-3.5
  `,
  rotate: `
    -rotate-90
  `,
});

export default styles;
