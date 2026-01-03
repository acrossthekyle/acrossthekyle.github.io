import tw from '@/styles';

const styles = tw({
  list: `
    absolute top-2 right-2
    flex flex-col gap-4 items-end

    base:top-4
    base:right-4
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    uppercase
    font-extrablack
    text-right text-tiny text-current/90 text-shadow-sm
  `,
  value: `
    font-medium
    text-right text-xs text-shadow-sm
    uppercase
  `,
});

export default styles;
