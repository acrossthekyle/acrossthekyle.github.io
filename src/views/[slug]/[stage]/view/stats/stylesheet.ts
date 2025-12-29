import tw from '@/styles';

const styles = tw({
  list: `
    absolute top-4 right-4
    flex flex-col gap-4 items-end
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    uppercase
    font-bold
    text-right text-tiny text-current/90
  `,
  value: `
    font-black
    text-right text-sm
  `,
});

export default styles;
