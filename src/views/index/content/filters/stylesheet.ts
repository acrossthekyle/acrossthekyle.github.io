import tw from '@/styles';

export const styles = tw({
  container: `
    group/filters
    flex flex-col items-start justify-between gap-0
    mb-8 mt-2
    w-full max-w-104

    md:mx-auto
    md:flex-row
    md:items-center
    md:justify-center
    md:mb-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  item: `
    p-2
    font-mono font-normal
    text-tiny
    uppercase
    tracking-widest

    data-[active=true]:font-black
    data-[active=true]:!text-current/100

    md:text-xtiny

    motion-safe:duration-300
    motion-safe:group-hover/filters:text-current/50
    motion-safe:hover:text-current/100
    motion-safe:hover:font-black
  `,
});
