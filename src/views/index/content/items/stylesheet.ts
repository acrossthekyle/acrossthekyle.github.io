import tw from '@/styles';

export const styles = tw({
  items: `
    group/items
    relative z-2
    flex flex-col items-center gap-8
    w-full max-w-none
    mx-auto
    text-center

    md:block
    md:p-6
    md:pb-2
    2xl:max-w-none

    motion-safe:opacity-0
    motion-safe:animate-fade-in-scale-up
  `,
  item: (isHovering: boolean, isFiltered: boolean, isHovered: boolean) => tw(`
    inline-block
    w-auto

    ${isFiltered ? 'pointer-events-auto' : 'pointer-events-none'}

    ${!isHovering && (isFiltered ? 'opacity-100' : 'opacity-20')}
    ${isHovering && (isHovered ? 'opacity-100' : isFiltered ? 'opacity-20' : 'opacity-5')}
  `),
  link: (index: number) => tw(`
    group/link
    relative
    flex flex-col items-center gap-2
    leading-[1]
    ${index % 2 === 0 ? 'font-serif font-normal top-0.25' : 'font-bold'}
    text-[min(6.5vw,1.5rem)]
    tracking-tighter
    uppercase

    md:flex-row
    md:pb-2
    md:px-4
    lg:text-[min(4vw,2rem)]
    2xl:text-[min(4vw,2.25rem)]
  `),
  count: `
    relative
    block
    text-xs
    font-sans font-light
    italic
    tracking-tight
    whitespace-nowrap
  `,
  info: `
    relative left-1/2 top-full
    -translate-x-1/2
    flex flex-col gap-1
    w-full
    font-sans font-light
    text-xs
    tracking-normal
    leading-[1]
    whitespace-nowrap

    md:hidden
    md:absolute
    md:font-medium
    md:group-hover/link:flex
  `,
  when: `
    text-xtiny
    tracking-widest
    font-light font-mono
  `,
});
