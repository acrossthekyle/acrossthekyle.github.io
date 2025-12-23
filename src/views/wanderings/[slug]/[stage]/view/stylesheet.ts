import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-full w-full
    pt-2
    overflow-y-scroll
    overscroll-contain
    opacity-0
    animate-in-fade-up

    base:pt-0
  `,
  close: `
    absolute top-1 right-0.5 z-4
    p-2

    deka:top-9
    deka:right-9
  `,
  icon: `
    w-7 h-7
    stroke-2 stroke-current/90

    base:stroke-1
  `,
  article: `
    flex flex-col gap-6
  `,
  lock: `
    h-full
  `,
});

export default styles;
