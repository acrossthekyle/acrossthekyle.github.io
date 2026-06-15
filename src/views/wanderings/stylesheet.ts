import tw from '@/styles';

export const styles = tw({
  title: `
    w-full
    pt-4
    leading-[1]
    font-normal
    uppercase
    text-xs text-center
    tracking-wide

    lg:fixed
    lg:bottom-4
    lg:left-4
    lg:max-w-1

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed

    sm:motion-safe:animate-fade-in-right-slightly-delayed
  `,
  paragraph: `
    fixed top-4 right-4 z-100
    flex items-center gap-4

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed

    sm:motion-safe:animate-fade-in-right-slightly-delayed
  `,
  link: `
    uppercase
    first:underline first:underline-offset-4 first:decoration-dashed
    text-tiny
    font-normal font-serif
    italic
    leading-[0.85]
    tracking-widest
  `,
  emphasis: `
    font-serif
    italic
  `,
  count: `
    absolute top-4 right-4
    leading-[0.85]
    text-tiny
    font-mono
    italic
    tracking-widest
  `,
  grid: `
    group/grid
    flex flex-col gap-0 items-center
    pt-20 pr-1
    overflow-x-hidden

    lg:pt-1
    lg:pb-1

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
});
