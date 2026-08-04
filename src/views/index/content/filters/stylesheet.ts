import tw from '@/styles';

export const styles = tw({
  container: `
    order-1
    mt-2

    md:order-2
    md:mt-0
  `,
  items: `
    group/filters
    relative z-10
    flex flex-row items-center justify-between gap-0
    mb-8 mt-2
    w-full

    md:max-w-104
    md:flex-row
    md:justify-center
    md:mb-0
    md:mx-auto

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  item: `
    font-mono font-black
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
