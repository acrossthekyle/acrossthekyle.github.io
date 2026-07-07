import tw from '@/styles';

export const styles = tw({
  heading: `
    relative
    flex items-center justify-center gap-2
    w-full
    mb-4
    pt-6
    leading-[0.8]
    uppercase
    text-2xl
    font-serif font-black

    md:pt-0
    md:text-3xl

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  years: `
    flex items-center justify-center gap-4
    text-tiny
    font-mono font-light
    uppercase
    tracking-widest
  `,
  bar: `
    h-px w-10
    bg-(--foreground)/50
  `,
});
