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
    py-0.5
    w-16
    border-1
    rounded-full
    font-black
    text-tiny text-center
    uppercase

    pico:right-4
    pico:left-auto
    base:hidden
  `,
});

export default styles;
