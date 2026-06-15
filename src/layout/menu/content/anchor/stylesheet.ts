import tw from '@/styles';

export const styles = tw({
  container: `
    group/link
    relative
    flex flex-col items-start gap-1
    w-full
    leading-[0.85]
    font-black
    text-[min(11vw,50px)] text-(--foreground)
    uppercase
    tracking-tight
    whitespace-nowrap
    overflow-hidden

    sm:text-[min(6vw,44px)]
    lg:text-[min(4vw,50px)]

    landscape-constrained:text-[min(11vw,32px)]

    motion-safe:duration-300
    motion-safe:hover:font-thin
    motion-safe:hover:tracking-wider
  `,
  dash: `
    text-sm text-current/50
  `,
});


