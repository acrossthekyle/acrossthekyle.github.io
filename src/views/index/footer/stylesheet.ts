import tw from '@/styles';

export const styles = tw({
  container: `
    xl:absolute
    xl:bottom-6
    xl:left-6
  `,
  links: `
    flex items-center gap-6
    font-mono
    text-xtiny

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  link: `
    uppercase
    font-black
    tracking-widest
    whitespace-nowrap
  `,
});
