import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-full w-full
    pt-4
    bg-white dark:bg-black
    text-current/90
    overflow-y-scroll
    overscroll-contain
    outline-0
    opacity-0
    animate-in-fade

    base:pt-0
    base:pr-12
  `,
  close: `
    absolute top-1 left-1 z-9999
    p-2

    base:right-0
    base:left-auto
    base:fixed
    deka:top-9
    deka:right-7
  `,
  icon: `
    w-7 h-7
    stroke-1
  `,
  article: `
    flex flex-col gap-6
    pt-8
  `,
  section: `
    flex flex-col
  `,
  heading: `
    font-black
    mb-2
  `,
});

export default styles;
