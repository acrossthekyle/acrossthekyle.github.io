import tw from '@/styles';

const styles = tw({
  container: (canTranslate: boolean) => tw(`
    w-screen h-full
    flex items-center justify-center
    p-10
    overflow-hidden
    pointer-events-none

    sm:p-12
    lg:p-22

    duration-500

    ${canTranslate ? `
      -translate-x-full
      min-[692px]:-translate-x-80
    ` : `
      translate-x-0
    `}

    motion-safe:lg:animate-fade-in
  `),
  image: (size: string, canFade: boolean) => tw(`
    relative z-1
    transition-all ease-in-out
    max-w-full max-h-full
    !w-auto !h-auto
    rounded-lg

    ${canFade ? `
      brightness-25
    ` : `
      brightness-100
    `}

    ${size === 'preview' ? `
      aspect-3/4 !w-6/10 duration-600
    ` : `
      aspect-video duration-700
    `}
  `),
  toggle: `
    group
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2
    -translate-y-1/2
    flex items-center justify-center
    pointer-events-auto
    h-10 w-10
    text-sm
    capitalize

    before:absolute
    before:inset-0
    before:z-0
    before:rounded-xl
    before:bg-(--background)
    before:opacity-25
    before:duration-300

    motion-safe:duration-300
    motion-safe:animate-pulse
    motion-safe:hover:animate-none
    motion-safe:hover:before:bg-(--background)
    motion-safe:hover:before:opacity-50
  `,
  resize: `
    relative z-2
    w-3.5 h-3.5
    duration-300

    group-hover:scale-125
  `,
  caption: (canRender: boolean, canTranslate: boolean) => tw(`
    absolute left-0 top-0 bottom-0 right-0 z-3
    flex items-center
    pt-0 pl-4 pr-4
    cursor-auto
    pointer-events-auto
    overflow-y-scroll

    constrained:w-full
    constrained:items-start
    constrained:pb-12

    min-[692px]:pl-0
    min-[692px]:items-end
    min-[692px]:bottom-12

    duration-500

    ${canTranslate ? `translate-x-0` : `translate-x-full`}

    ${canRender ? `
      motion-safe:lg:opacity-100
      motion-safe:lg:delay-300
      motion-safe:lg:duration-300
    ` : `
      motion-safe:lg:opacity-0
      motion-safe:lg:delay-0
      motion-safe:lg:duration-300
    `}

    lg:top-auto
    lg:left-auto
    lg:bottom-18.5
    lg:right-0
    lg:translate-y-0
    lg:translate-x-0
    lg:w-70
    lg:pb-0
  `),
  backdrop: `
    absolute inset-0 z-3

    lg:hidden
  `,
  details: (canRender: boolean) => tw(`
    absolute left-1/2 bottom-3 z-4
    -translate-x-1/2
    flex items-center justify-center gap-1.25
    py-1 px-2
    text-xs
    bg-transparent
    rounded-md
    select-none

    ${canRender ? `
      motion-safe:opacity-100
      motion-safe:delay-300
      motion-safe:duration-300
    ` : `
      motion-safe:opacity-0
      motion-safe:delay-0
      motion-safe:duration-300
    `}

    lg:hidden
  `),
  plus: (shouldRotate: boolean) => tw(`
    w-3.5 h-3.5
    duration-700

    ${shouldRotate && '-rotate-45'}
  `),
});

export default styles;
