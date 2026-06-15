import tw from '@/styles';

export const styles = tw({
  container: `
    absolute top-1 left-1 z-1000
    flex items-start

    lg:fixed

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  anchor: `
    relative
    grid justify-items-center gap-2
    w-16 h-10
    p-4
  `,
  top: `
    h-px w-8
    bg-(--foreground)
  `,
  bottom: `
    h-px w-8
    bg-(--foreground)
  `,
  header: `
    hidden
    relative
    ml-2 mr-20
    text-sm
    font-black font-mono
    uppercase
    tracking-widest
    italic

    top-3
  `,
  dash: `
    relative -top-1
    inline-block
    w-10 h-px
    mx-2
    bg-(--foreground)
  `,
});


