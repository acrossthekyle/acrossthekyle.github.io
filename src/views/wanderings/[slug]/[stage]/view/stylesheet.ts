import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-full w-full
    pt-2
    overflow-y-scroll
    overscroll-contain
    opacity-0
    animate-in-fade

    base:pt-0
    base:pr-12
  `,
  close: `
    absolute top-2 right-1 z-9999
    p-2

    base:fixed
    deka:top-9
    deka:right-7
  `,
  icon: `
    w-7 h-7
    stroke-2 stroke-current/90

    base:stroke-1
  `,
  article: `
    flex flex-col gap-6
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
