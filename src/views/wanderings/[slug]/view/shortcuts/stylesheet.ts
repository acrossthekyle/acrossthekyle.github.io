import tw from '@/styles';

const styles = tw({
  anchor: `
    relative -top-9999 right-0
  `,
  shortcut: `
    hidden
    absolute bottom-2 right-2 z-5
    items-center gap-2
    bg-black/20
    p-1 pl-1.5
    rounded-md
    opacity-0
    animate-elastic-in-from-right

    base:flex
    deka:bottom-12
    deka:right-22
  `,
  keyboard: `
    flex items-center gap-1
    font-mono
    text-xs
  `,
  arrow: `
    w-3.5 h-3.5
    stroke-0 fill-current/90
  `,
});

export default styles;
