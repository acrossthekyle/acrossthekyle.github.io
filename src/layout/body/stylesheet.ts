import tw from '@/styles';

const styles = tw({
  body: `
    antialiased
    flex flex-col
    overflow-x-hidden
  `,
  skip: `
    absolute top-0 left-0 z-999
    w-[1px] h-[1px]
    p-0
    overflow-hidden
    uppercase
    text-xs
    font-bold

    dark:bg-black light:bg-white
    dark:text-white light:text-black

    focus:w-auto
    focus:h-auto
    focus:overflow-auto
    focus:p-2
  `,
});

export default styles;
