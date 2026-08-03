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
    px-6

    sm:pl-0
    sm:rounded-s-2xl
  `,
});
