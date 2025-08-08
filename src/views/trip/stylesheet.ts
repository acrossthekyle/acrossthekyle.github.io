import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-0 top-0 bottom-0 z-1
    opacity-0
    animate-slide-down
    scroll-smooth
    w-[calc(100%-38rem)]
    py-14 px-20 ps-36
    overflow-y-scroll
  `,
  header: `
    relative
    flex justify-between items-start
    mb-16
    text-sm
    font-mono
    uppercase
  `,
  block: `
    block
  `,
  gear: `
    uppercase
    underline-offset-4

    hover:underline
  `,
});

export default styles;
