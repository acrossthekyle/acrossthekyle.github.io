import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center gap-3
    mb-1
    cursor-pointer
  `,
  radio: `
    hidden
    peer
  `,
  dot: `
    relative
    flex items-center justify-center
    w-3.5 h-3.5
    rounded-full
    border

    dark:border-white light:border-black

    peer-checked:after:content-['']
    peer-checked:after:w-1.5
    peer-checked:after:h-1.5
    peer-checked:after:rounded-full
    peer-checked:after:absolute

    peer-checked:dark:after:bg-white
    peer-checked:light:after:bg-black
    peer-checked:dark:border-white
    peer-checked:light:border-black
  `,
  text: `
    relative
    flex flex-row justify-end items-center
    capitalize
    text-base
    font-normal
    select-none

    dark:text-white light:text-black

    tera:text-xl
    peta:text-2xl
  `,
  count: `
    ml-1
    text-xs
    font-mono
  `,
});

export default styles;
