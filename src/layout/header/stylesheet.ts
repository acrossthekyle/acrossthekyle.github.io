import tw from '@/styles';

export const styles = tw({
  anchor: `
    fixed top-0 left-0
    flex flex-col items-center gap-1
    p-4
    text-tiny
    uppercase

    motion-safe:opacity-0
    motion-safe:animate-fade-in-right-slightly-delayed
  `,
  socials: `
    fixed -top-11 -right-1
    p-4
    uppercase
    text-xtiny
    font-mono
    tracking-widest
    origin-bottom-right -rotate-90

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
});


