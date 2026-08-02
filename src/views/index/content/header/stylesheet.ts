import tw from '@/styles';

export const styles = tw({
  heading: `
    relative z-10
    flex items-center justify-center gap-2
    w-full

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
});
