import tw from '@/styles';

const styles = tw({
  container: (size: string) => tw(`
    relative

    motion-safe:transform-all
    motion-safe:duration-300

    ${size === 'preview' ? `
      max-w-52

      landscape:h-full

      mobile-landscape:max-w-52
      md:max-w-133

      portrait:w-full
      portrait:h-auto

      2xl:landscape:max-w-[66vh]
    ` : `
      w-full
      h-auto
    `}
  `),
  image: (size: string) => tw(`
    rounded-lg

    ${size === 'preview' ? 'aspect-3/4' : 'aspect-16/9'}
  `),
  controls: `
    absolute top-1/2 left-1/2
    -translate-x-1/2
    -translate-y-1/2
    flex items-center justify-center
    w-36 h-36
  `,
  button: `
    group
    relative z-1
    flex items-center justify-center
    pointer-events-auto
    h-10 w-10
    font-sans font-medium
    text-sm
    capitalize

    before:absolute
    before:inset-0
    before:z-0
    before:rounded-lg
    before:bg-(--background)/25
    before:duration-300

    motion-safe:duration-300
    motion-safe:animate-pulse
    motion-safe:hover:before:bg-(--background)/50
    motion-safe:hover:animate-none

    md:text-xs
  `,
  icon: `
    relative z-2
    w-3.5 h-3.5
  `,
});

export default styles;
