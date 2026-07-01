import tw from '@/styles';

export const styles = tw({
  container: `
    flex justify-center

    sm:fixed
    sm:inset-0
  `,
  carousel: (shouldPush: boolean) => tw(`
    flex
    w-svw h-auto
    overflow-y-scroll overflow-x-hidden

    duration-700
    ease-in-out
    ${shouldPush ? 'opacity-10 sm:-translate-y-1/2' : ''}

    sm:overflow-y-hidden
    sm:overflow-x-scroll
  `),
  items: `
    flex flex-col shrink-0 items-end gap-0
    w-full

    sm:flex-row
    sm:items-center
    sm:w-auto
  `,
  figure: (isInView: boolean) => tw(`
    relative
    duration-700
    ease-in-out

    ${isInView ? 'opacity-100 right-0' : 'opacity-0 -right-20'}
  `),
  toggle: `
    w-full h-full
    pointer-events-none

    sm:pointer-events-auto
  `,
  caption: `
    absolute bottom-4 right-4
    flex flex-col gap-0
    w-full
    text-right
    leading-[0.85]
    text-xs
    uppercase
  `,
  index: `
    absolute bottom-0 left-7
    mb-0.5
    font-mono
    text-xtiny
  `,
  location: `
    font-medium
  `,
  country: `
    mb-0.75
    font-serif
    italic
    text-xtiny
  `,
  elevation: `
    mt-1
    font-mono font-light
    text-tiny
  `,
  info: (canReveal: boolean) => tw(`
    fixed bottom-0 left-0 z-100
    flex flex-col justify-end
    p-4
    ease-in-out
    overflow-hidden
    ${canReveal ? 'h-[100svh] duration-700' : 'h-26 duration-500'}
  `),
  heading: `
    flex flex-col
    text-base

    sm:text-xs
  `,
  title: `
    uppercase
    font-black
  `,
  category: `
    font-serif
    italic
  `,
  inner: `
    w-full
    overflow-hidden
  `,
  paragraph: `
    w-full max-w-80
    my-4
    text-base

    last:mb-0

    sm:text-xs
  `,
  more: `
    flex items-center gap-2
    p-4 pl-0 pb-0
    text-xs
    uppercase

    sm:text-tiny
  `,
  arrow: `
    w-3 h-3
  `,
});
