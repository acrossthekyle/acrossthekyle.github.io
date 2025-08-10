import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    opacity-0
    animate-slide-down
    scroll-smooth
    w-full
    py-6 pr-6 pl-6 pt-6

    ml:absolute
    ml:right-0
    ml:top-0
    ml:bottom-0
    ml:pl-0
    ml:w-[calc(100%-20rem)]
    ml:overflow-y-scroll
    ml:w-[calc(100%-32.5rem)]
    sl:pr-20
    sl:py-12
    sl:w-[calc(100%-38rem)]
    sx:pl-36
  `,
  header: `
    relative
    flex flex-col items-start
    mb-6
    text-sm
    font-mono
    uppercase

    sm:flex-row
    sm:justify-between
    sl:mb-12
    sx:mb-16
  `,
  heading: `
    me-8
  `,
  block: `
    block
  `,
  gear: `
    absolute -top-11.25 right-0
    uppercase
    underline-offset-4
    text-right
    w-24

    hover:underline

    sm:relative
    sm:top-auto
    sm:right-auto
  `,
});

export default styles;
