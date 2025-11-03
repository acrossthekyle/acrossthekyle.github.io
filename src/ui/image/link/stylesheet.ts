import tw from '@/styles';

const styles = tw({
  link: `
    group/image-link
    flex flex-col justify-end
    pl-4 pb-4 pr-4
    w-full h-full
    pointer-events-auto

    base:pl-8
    base:pb-8
  `,
  hint: `
    absolute left-4 bottom-4
    py-0.75
    w-28
    border-1
    rounded-full
    font-black
    text-xs text-center
    uppercase

    micro:right-4
    micro:left-auto
    base:hidden
  `,
});

export default styles;
