import tw from '@/styles';

export const styles = tw({
  container: `
    group/filters
    flex flex-row items-center justify-center gap-0
    mb-8 mt-2 mx-auto
    w-full max-w-104

    md:flex-row
    md:mb-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  item: `
    p-1
    font-mono font-normal
    text-xtiny
    uppercase
    tracking-widest

    data-[active=true]:font-black
    data-[active=true]:!text-current/100

    md:p-2

    motion-safe:duration-300
    motion-safe:group-hover/filters:text-current/50
    motion-safe:hover:text-current/100
    motion-safe:hover:font-black
  `,
});
