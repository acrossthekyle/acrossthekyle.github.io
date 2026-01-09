import tw from '@/styles';

const styles = tw({
  list: `
    grid grid-cols-2 gap-4
    mt-4

    base:mt-6
  `,
  item: `
    flex flex-col gap-1
  `,
  heading: `
    uppercase
    font-extrablack
    text-tiny

    peta:text-base
  `,
  value: `
    font-medium
    text-xs
    uppercase

    peta:text-xl
  `,
});

export default styles;
