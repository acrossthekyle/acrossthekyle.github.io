import tw from '@/styles';

export const styles = tw({
  container: `
    md:z-100
    md:fixed
    md:bottom-3
    md:left-4
  `,
  links: `
    flex items-center gap-2
    font-mono
    text-xtiny

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  link: `
    block
    p-2
    uppercase
    font-black
    tracking-widest
    whitespace-nowrap
  `,
});
