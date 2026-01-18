import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center gap-2.5
    mb-0.5
    cursor-pointer
  `,
  radio: `
    hidden
    peer
  `,
  dot: (isChecked: boolean) => tw(`
    relative
    flex items-center justify-center
    w-3 h-3
    rounded-full
    border border-(--foreground)

    ${isChecked && `
      after:content-['']
      after:w-1
      after:h-1
      after:rounded-full
      after:absolute
      after:bg-(--foreground)
    `}
  `),
  text: `
    relative
    flex flex-row justify-end items-center
    capitalize
    select-none
  `,
});

export default styles;
