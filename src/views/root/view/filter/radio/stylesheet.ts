import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center gap-3
    mb-2
    cursor-pointer
  `,
  radio: `
    hidden
    peer
  `,
  dot: (isChecked: boolean) => tw(`
    relative
    flex items-center justify-center
    w-3.5 h-3.5
    rounded-full
    border

    dark:border-white light:border-black

    ${isChecked && `
      after:content-['']
      after:w-1.5
      after:h-1.5
      after:rounded-full
      after:absolute

      dark:after:bg-white light:after:bg-black
      dark:border-white light:border-black
    `}
  `),
  text: `
    relative
    flex flex-row justify-end items-center
    capitalize
    text-base
    font-normal
    select-none

    tera:text-xl
    peta:text-2xl
  `,
  count: `
    ml-2
    italic
    font-serif
  `,
});

export default styles;
