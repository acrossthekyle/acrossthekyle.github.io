import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 z-999
    flex flex-col items-center gap-0
    w-full
    px-3
    mt-1

    xs:grid
    xs:grid-cols-2
    xs:gap-0
    md:mt-2
    md:px-12
  `,
  anchor: (shouldDelay: boolean) => tw(`
    flex items-center justify-start
    mb-1.25

    motion-safe:opacity-0
    ${shouldDelay ? 'motion-safe:animate-fade-in-delayed' : 'motion-safe:animate-fade-in'}

    lg:mb-0
  `),
  controls: (shouldDelay: boolean) => tw(`
    flex items-center justify-center
    mb-1 -mt-0.25

    motion-safe:opacity-0
    ${shouldDelay ? 'motion-safe:animate-fade-in-delayed' : 'motion-safe:animate-fade-in'}

    xs:justify-end
    md:mr-0
    lg:mb-0
  `),
  group: `
    flex items-center justify-end gap-0
    rounded-sm
    bg-(--background)
  `,
  filter: (canRender: boolean) => tw(`
    fixed top-19 left-0 right-0 z-9999
    flex justify-center items-center

    motion-safe:duration-300
    ${canRender ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'}

    xs:top-10
    xs:justify-end
    xs:right-3
    md:right-12
    md:top-12
    lg:left-80
    lg:right-80
    lg:top-2
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
