import tw from '@/styles';

export const styles = tw({
  carousel: `
    fixed left-0 bottom-20 z-100
    w-screen h-[54svw]
    bg-transparent

    sm:h-[26svw]
    sm:w-[46svw]
    sm:left-auto
    sm:right-0
    sm:bottom-22
    md:w-[50svw]

    motion-safe:opacity-0
    motion-safe:animate-disolve-scale-in
  `,
  navigation: `
    absolute left-2 right-2 top-1/2 z-120
    -translate-y-1/2
    flex justify-between gap-4
    select-none

    sm:left-auto
    sm:-top-12
    sm:translate-y-0
    sm:justify-end
  `,
  navigate: (canInteract: boolean) => tw(`
    p-2
    duration-300

    ${!canInteract && `
      opacity-50
      pointer-events-none touch-none
    `}
  `),
  icon: `
    stroke-1 w-6 h-6
  `,
  items: `
    relative
    overflow-y-scroll
    flex gap-6
    h-full
    snap-x snap-mandatory
    touch-pan-x

    sm:rounded-s-2xl
  `,
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
