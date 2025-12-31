import tw from '@/styles';

const styles = tw({
  list: `
    absolute bottom-4 right-4
    flex flex-col gap-4 items-end
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    uppercase
    font-extrablack
    text-right text-tiny text-current/90
  `,
  value: `
    font-light
    text-right text-xs
    uppercase
  `,
});

export default styles;
