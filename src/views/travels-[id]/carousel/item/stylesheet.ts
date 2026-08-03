import tw from '@/styles';

export const styles = tw({
  item: `
    relative
    w-[74svw] h-full
    shrink-0
    snap-center snap-always
    duration-500

    sm:snap-start
    sm:w-[40svw]
  `,
  figure: `
    group
    w-full h-full

    after:absolute
    after:inset-0
    after:z-1
    after:bg-linear-to-t
    after:from-transparent
    after:from-50%
    after:to-black/40
    after:to-120%
    after:pointer-events-none
    after:rounded-t-lg
    after:duration-700

    md:after:rounded-xl
  `,
  thumbnail: (isInView: boolean) => tw(`
    duration-700
    rounded-lg

    md:rounded-xl

    ${isInView ? `
      grayscale-0 sepia-0 brightness-90
    ` : `
      grayscale-100 sepia-20 brightness-80 dark:brightness-70
    `}
  `),
  caption: `
    absolute bottom-3 left-4 right-3
    flex flex-col gap-0.5
    uppercase
    text-(--background) dark:text-(--foreground)
    pointer-events-none

    md:bottom-4
    md:left-5
    md:right-4
  `,
  eyebrow: `
    text-xtiny
    tracking-widest
  `,
  label: `
    font-black
    text-xs
    leading-[0.8]
  `,
  lid: `
    font-mono
    tracking-widest
    text-xtiny
  `,
});
