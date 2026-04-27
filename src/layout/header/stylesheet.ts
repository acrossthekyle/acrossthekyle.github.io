import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 z-9990
    flex flex-col items-center gap-0
    w-[calc(100%-1.5rem)]
    h-9
    mt-1 mx-3
    rounded-sm
    bg-(--background)

    xs:grid
    xs:grid-cols-2
    xs:gap-0
    md:w-full
    md:mt-2
    md:mx-0
    md:px-12
    md:bg-transparent
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

    xs:justify-end
    md:mr-0
    lg:mb-0
  `),
  group: `
    flex items-center justify-between gap-0
    w-full
    rounded-sm
    bg-(--background)

    xs:w-auto
    xs:justify-center
  `,
  button: (isActive: boolean) => tw(`
    flex items-center justify-center gap-2
    w-full
    font-sans font-medium
    text-sm
    capitalize
    rounded-sm
    bg-(--background)
    p-2

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}

    xs:w-auto
    lg:text-xs
  `),
  filter: (canRender: boolean) => tw(`
    fixed left-3 bottom-10 right-3 z-1

    flex items-center justify-between gap-1

    font-sans font-medium
    text-xs
    capitalize
    rounded-sm
    bg-(--background)
    p-2

    motion-safe:duration-300
    ${canRender ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'}

    md:bottom-2
    md:right-auto
    md:left-1/2
    md:-translate-x-1/2
    md:w-auto
  `),
  prefix: `
    flex items-center gap-1
  `,
  first: `pl-4`,
  last: `pr-4`,
  icon: `
    w-3.5 h-3.5
  `,
  rotate: `
    -rotate-90
  `,
});

export default styles;
